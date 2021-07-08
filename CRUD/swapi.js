'use strict';
const querystring = require("querystring");
const swapi = require('swapi-node');

//metodo get character swapi
module.exports.getSwapi = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    swapi.JSON('https://swapi.dev/api/people/', error => {
    if (error) {
        callback({
            statusCode: 500,
            body: JSON.stringify(error)
          })
    }else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            input: event,
            people
          })
        })
      }
    })
}