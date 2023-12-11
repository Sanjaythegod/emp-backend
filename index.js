const connectToDatabase = require("./db");
const sequelize = require('sequelize');
const { QueryTypes } = require("sequelize");



module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.testQuery = async(event) => {
  try{


    const {
      Users,
      Products,
      Orders,
    } = await connectToDatabase();
    
    const insertUser = `INSERT INTO Users (id, email, password_hash, line_1, line_2, city, state, country) VALUES ('1', 'email@gmail.com', '1', 'Address', 'Address2', 'San diego', 'Ca', 'usa');`;
    
    if (!(await Users.findOne({}))) {
      await sequelize.query(insertUser, {
        type: QueryTypes.INSERT,
      });
    }
    return{
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify("Data inserted"),

    }

  }catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        error: err.message || "Could not insert the data.",
      }),
    };
  }
}

module.exports.healthCheck = async () => {
  try {
    await connectToDatabase();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Connection successful." }),
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        error: err.message || "Connection is not successful.",
      }),
    };
  }
};


