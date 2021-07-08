const connection = require('../connections');
const querystring = require('querystring');

//metodo get perfil en la base de datos mysql
module.exports.findAll = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const sql = 'SELECT * FROM testmysql.character';
    connection.query(sql, (error, rows) => {
      if (error) {
        callback({
          statusCode: 500,
          body: JSON.stringify(error)
        })
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            usuarios: rows
          })
        })
      }
    })
};

//metodo get perfil por id de la base de datos mysql
module.exports.findOne = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const sql = 'SELECT * FROM testmysql.character WHERE id = ?';
    connection.query(sql, [event.pathParameters.usuario], (error, row) => {
      if (error) {
        callback({
          statusCode: 500,
          body: JSON.stringify(error)
        })
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            usuario: row
          })
        })
      }
    })
  };

  //metodo post perfil en la base de datos mysql
  module.exports.create = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    
    const body = JSON.parse(event['body'])
    const sql = 'INSERT INTO testmysql.character SET name = ?, height = ?, mass = ?, hair_color = ? , skin_color = ? , eye_color = ?, eye_color = ? , birth_year = ?';
    
    connection.query(sql, [body.name, body.height,body.mass,body.hair_color,body.skin_color,body.eye_color,body.birth_year,], (error, result) => {
      if (error) {
        callback({
          statusCode: 500,
          body: JSON.stringify(error)
        }) 
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            res: `Todo insertado correctamente con id ${result.insertId}`
          })
        })
      }
    })
  };