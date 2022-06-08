import AWS from 'aws-sdk';
import { v1 as uuidv1 } from 'uuid';

export const getVideos = async () => {
  console.log(process.env);
  
  AWS.config.update({
    region: 'eu-west-3',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  })

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: 'videos',
  };

  dynamoDb.scan(params, (err, data) => {
    if (err) {
      console.log(err)
      return null;
    } else {
        const { Items } = data;
         return {
          videos: Items
        };
    }
});
}

export const addVideo = async (req, res) => {
  AWS.config.update({
    region: 'eu-west-3',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  })
  const docClient = new AWS.DynamoDB.DocumentClient();
  const Item = { ...req.body };
  Item.id = uuidv1();
  var params = {
      TableName: 'videos',
      Item: Item
  };

  // Call DynamoDB to add the item to the table
  docClient.put(params, function (err, data) {
      if (err) {
          res.send({
              success: false,
              message: err
          });
      } else {
          res.send({
              success: true,
              message: 'Added movie',
              video: data
          });
      }
  });
}