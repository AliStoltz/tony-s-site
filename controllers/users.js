const db = require('../models');

// GET all users
const showAllUsers = (req, res) => {
  db.User.find({}, (error, allUsers) => {
    if (error) {
      return console.log(error)
    };
    res.json({
      status: 200,
      count: allUsers.length,
      data: allUsers,
    });
  });
};


// DELETE nuke all users
const deleteAllUsers = (req, res) => {
  db.User.deleteMany({}, (error, deletedUsers) => {
    if (error) return console.log(error);
      res.json({
        status: 200,
      });
  });
};

// GET show one User
const show = (req, res) => {
  if (!req.session.currentUser) return res.status(401).json({
    status: 401,
    message: 'please log in and try again'
  });
  db.User.findById(req.session.currentUser.id)
  .populate('products')
  .exec((error, foundUser) => {
    if (error) return res.status(500).json({
      status: 500,
      message: error,
    });

    res.status(200).json({
      status: 200,
      data: foundUser,
    });
  });
};

// Update User
const updateUser = (req, res) => {
  db.User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updateUser) => {
    if (error) return console.log(error);
    res.json({
      status: 201,
      data: updateUser,
    });
  });
};

module.exports = {
  show,
  updateUser,
  showAllUsers,
  deleteAllUsers
};
