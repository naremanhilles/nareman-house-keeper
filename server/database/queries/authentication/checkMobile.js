const dbconnection = require('../../config/db_connection');

exports.checkMobile = (mobile) => {
  const sql = {
    text: 'SELECT * FROM member WHERE mobile = $1',
    values: [mobile],
  };
  return dbconnection.query(sql);
};
