import AWS from 'aws-sdk';

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

interface VideoPayload {
  src: string;
  id: string;
  title: string;
  filename: string;
}

export const getVideo = async (id: string) => {
  const params = {
    TableName: 'basicVideoTable',
    Key: { id }
  };

  let data = await documentClient.get(params).promise();    
  const { Item } = data;
  
  return Item;
}

interface VideoPayload {
  src: string;
  id: string;
  title: string;
  filename: string;
}


export const addVideo = async ({ src, title, id, filename}: VideoPayload) => {
  let item = { id, src, title, filename };
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