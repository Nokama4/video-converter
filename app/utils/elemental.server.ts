import AWS, { MediaConvert} from "aws-sdk"

const { ACCESS_KEY_ID, SECRET_ACCESS_KEY } = process.env

if (!(ACCESS_KEY_ID && SECRET_ACCESS_KEY)) {
  throw new Error(`Storage is missing required configuration.`)
}

AWS.config.update({
  region: 'eu-west-3',
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
})

const converter = new MediaConvert({ apiVersion: '2017-08-29' });

const getEnpoints =
async (): Promise<MediaConvert.__listOfEndpoint | void> => {
  // Create empty request parameters
  const params = {
    MaxResults: 0,
  };

  try {
    const { Endpoints } = await converter
      .describeEndpoints(params)
      .promise();
    console.log('Your MediaConvert endpoint is ', Endpoints);
    
    if (Endpoints && Endpoints.length > 0) {
      AWS.config.mediaconvert = {endpoint : Endpoints[0].Url};
    }
    return Endpoints;
  } catch (err) {
    console.log('MediaConvert Error', err);
  }
};

interface convertPayload {
  inputFile: string;
  id: string;
  filename: string;
}
export const convertVideo = async ({
  inputFile,
  id,
  filename,
}: convertPayload): Promise<MediaConvert.__listOfJob | void> => {
  await getEnpoints();
  // Create empty request parameters
  const params = {
    "Queue": "arn:aws:mediaconvert:eu-west-3:602259669540:queues/Default",
    "UserMetadata": {},
    "Role": "arn:aws:iam::602259669540:role/service-role/MediaConvert_Default_Role",
    "Settings": {
      "TimecodeConfig": {
        "Source": "ZEROBASED"
      },
      "OutputGroups": [
        {
          "CustomName": "Coucou",
          "Name": "Apple HLS",
          "Outputs": [
            {
              "ContainerSettings": {
                "Container": "M3U8",
                "M3u8Settings": {}
              },
              "VideoDescription": {
                "CodecSettings": {
                  "Codec": "H_264",
                  "H264Settings": {
                    "FramerateControl": "INITIALIZE_FROM_SOURCE",
                    "RateControlMode": "QVBR",
                    "SceneChangeDetect": "TRANSITION_DETECTION",
                    "QualityTuningLevel": "MULTI_PASS_HQ"
                  }
                }
              },
              "AudioDescriptions": [
                {
                  "CodecSettings": {
                    "Codec": "AAC",
                    "AacSettings": {
                      "Bitrate": 96000,
                      "CodingMode": "CODING_MODE_2_0",
                      "SampleRate": 48000
                    }
                  }
                }
              ],
              "OutputSettings": {
                "HlsSettings": {}
              }
            }
          ],
          "OutputGroupSettings": {
            "Type": "HLS_GROUP_SETTINGS",
            "HlsGroupSettings": {
              "SegmentLength": 2,
              "Destination": `s3://cdn-carine/nft/${id}/`,
              "MinSegmentLength": 0
            }
          },
          "AutomatedEncodingSettings": {
            "AbrSettings": {}
          }
        }
      ],
      "Inputs": [
        {
          "AudioSelectors": {
            "Audio Selector 1": {
              "DefaultSelection": "DEFAULT"
            }
          },
          "VideoSelector": {},
          "TimecodeSource": "ZEROBASED",
          "FileInput": inputFile
        }
      ]
    },
    "BillingTagsSource": "JOB",
    "AccelerationSettings": {
      "Mode": "DISABLED"
    },
    "StatusUpdateInterval": "SECONDS_60",
    "Priority": 0
  }

  try {
    console.log('coucou');
    
    const endpointPromise = await converter
      .createJob(params)
      .promise()
      .then(
        function(data) {
          console.log("Job created! ", data);
          return data
        },
        function(err) {
          console.log("Error", err);
          return err
        }
      );
    
      console.log({ endpointPromise });
      
    return endpointPromise;
  } catch (err) {
    console.log('MediaConvert Error', err);
  }
}
