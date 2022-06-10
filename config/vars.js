require('dotenv').config();

const vars = {
  port: process.env.PORT || 3000,
  sql: {
    database: process.env.DB,
    username: process.env.U_NAME,
    password: process.env.P_WORD,
  },
};

module.exports = vars;
