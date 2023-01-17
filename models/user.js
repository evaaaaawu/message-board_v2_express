const db = require('../db')

const userModel = {
  add: (user, cb) => {
    db.query(
      'INSERT INTO users(username, password, nickname) values(?, ?, ?)', 
      [user.username, user.password, user.nickname], 
      (err, results) => {
        if (err) return cb(err);
        cb(null)
      });
  },
  get: (username, cb) => {
    db.query(
      'SELECT * FROM users WHERE username = ?', [username],
      (err, results) => {
        if (err) return cb(err);
        cb(null, results[0])
      });
  }
}

module.exports = userModel