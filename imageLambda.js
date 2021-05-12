'use strict';


console.log('Loading function');
        
const aws = require('aws-sdk');

const s3 = new aws.S3();

async function reload(){
  try {
    const set = await s3.getObject({
      Bucket: "pubb-buck", 
      Key: 'images.json'
    }).promise();
     console.log("WILL IT SET?", set)
    return  {
      statusCode: 200,
      body: JSON.parse(set.Body.toString("utf-8")),
    };
  }catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

let trial =  await reload();
console.log(trial)
exports.handler = (event, context, callback) => {
  console.log(event.Records[0].s3.object)
  
  
    console.log('event details', JSON.stringify(event.Records[0].s3.object, undefined, 2))

  // return 's3 bucket trigger this';
}