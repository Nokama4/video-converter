import AWS from 'aws-sdk';

import type { UploadHandler } from '@remix-run/node';
import { v1 as uuidv1 } from 'uuid';
require('dotenv').config()

AWS.config.update({
  region: 'eu-west-3',
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
})

const documentClient = new AWS.DynamoDB.DocumentClient();

export const getVideos = async () => {
  const params = {
    TableName: 'basicVideoTable',
  };

  let data = await documentClient.scan(params).promise();    
  const { Items } = data;
  
  return Items;
}

export const addVideo = async ({ asset, title}) => {
  let item = { id : uuidv1(), title, src: 'COucou' };
  AWS.config.update({
    region: 'eu-west-3',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  })
  const docClient = new AWS.DynamoDB.DocumentClient();

  var params = {
      TableName: 'basicVideoTable',
      Item: item
  };

  // Call DynamoDB to add the item to the table
  docClient.put(params, function (err, data) {
      if (err) {
          console.log("Error", err);
          
      } else {
          return data
      }
  });
}