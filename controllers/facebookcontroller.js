const { Course, Student, User,Friend } = require("../models");

module.exports = {
  // Get all users
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that name' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
  // put a new user
  postNewUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // delete user by id
  deleteByID(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
        : res.json({ message: 'user deleted!' }))
     
      .catch((err) => res.status(500).json(err));
  },
//add a new friend
addNewFriend(req, res) {
  Friend.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },
      // delete a friend
  deleteFriend(req, res) {
    Friend.findOneAndDelete({ _id: req.params.friendId })
      .then((friend) =>
        !friend
          ? res.status(404).json({ message: 'No friend with that name' })
          :res.json({ message: 'friend deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
};
