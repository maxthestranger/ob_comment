require('dotenv').config();

const vars = {
  port: process.env.PORT || 3000,
  sql: {
    database: process.env.DB,
    username: process.env.U_NAME,
    password: process.env.P_WORD,
  },
  jwtToken: {
    accessTokenSec: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSec: process.env.REFRESH_TOKEN_SECRET
  },
};

module.exports = vars;
