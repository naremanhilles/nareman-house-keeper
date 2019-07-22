const dbconnection = require('../../config/db_connection');

const addMmeber = ({ username, mobile }) => {
  const sql = {
    text: 'INSERT INTO member(username, mobile) VALUES ( $1, $2 ) RETURNING *',
    values: [username, mobile],
  };
  return dbconnection.query(sql);
};

module.exports = { addMmeber };
