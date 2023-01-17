const commentModel = require('../models/comment')

const commentController = {
  add: (req, res) => {
    const {username} = req.session
    const {content} = req.body
    if (!username || !content) {
      console.log('err')
      return res.redirect('/')
    }
    commentModel.add(username, content, (err) =>{
      console.log('err1', err)
      return res.redirect('/')
    })
  },
  index: (req, res) => {
    commentModel.getAll((err, results) => {
      if (err) {
        console.log(err)
      }
      res.render('index', {
        comments: results
      })
    })
  }
}

module.exports = commentController