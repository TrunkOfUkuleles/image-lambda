'use strict';

exports.handler = (event, context, callback) => {
    console.log('event details', JSON.stringify(event, undefined, 2))
    let obj = {
        name: event.records[0].s3.object.key,
        size: event.records[0].s3.object.size,
        type: event.records[0].s3.object.key.splice(-4, 4),
        time: event.records[0].s3.object,
    }
    return 's3 bucket trigger this';
  }