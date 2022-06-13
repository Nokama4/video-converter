import AWS from "aws-sdk"
import type { UploadHandler } from "@remix-run/node"
import { writeAsyncIterableToWritable } from "@remix-run/node"
import { PassThrough } from "stream"

const { ACCESS_KEY_ID, SECRET_ACCESS_KEY } = process.env

if (!(ACCESS_KEY_ID && SECRET_ACCESS_KEY)) {
  throw new Error(`Storage is missing required configuration.`)
}

const uploadStream = ({ Key }: Pick<AWS.S3.Types.PutObjectRequest, 'Key'>) => {
  const s3 = new AWS.S3({
    credentials: {
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY,
    },
    region: 'eu-west-3',
  })
  const pass = new PassThrough()
  return {
    writeStream: pass,
    promise: s3.upload({ Bucket: 'cdn-carine', Key, Body: pass }).promise(),
  }
}

export async function uploadStreamToS3(data: any, filename: string) {
  const stream = uploadStream({
    Key: `nft/${filename}`,
  })
  await writeAsyncIterableToWritable(data, stream.writeStream)
  const file = await stream.promise
  return file.Location
}

export const s3UploadHandler: UploadHandler = async ({
  name,
  filename,
  data,
}) => {
  if (name !== "files") {
    return undefined;
  }
  
  const uploadedFileLocation = await uploadStreamToS3(data, filename!)
  return uploadedFileLocation
}