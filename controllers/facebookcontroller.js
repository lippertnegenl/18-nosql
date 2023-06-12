const fs = require('fs');
const path = require('path');
const User =require("../models/user");
const modelsFolderPath = './models';


function getAllUsers(req, res) {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
}

function postNewUser(req, res) {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
}

function getSingleUser(req, res) {
  User.findOne({ _id: req.params.userId })
    .select('-__v')
    .then((user) => user
      ? res.json(user)
      : res.status(404).json({ message: 'No user with that name' })

    )
    .catch((err) => res.status(500).json(err));
}

function updateUserByID(req, res) {
  const { userId } = req.params;
  const updatedUser = req.body;

  User.findByIdAndUpdate(userId, updatedUser, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404), json({ message: "No user" });
      }
      res.json(user);
    })
    .catch((err) => res.status(500).json(err));

}

function deleteUserByID(req, res) {
  User.findOneAndDelete({ _id: req.params.userId })
    .then((user) => !user
      ? res.status(404).json({ message: 'No user with that ID' })
      : res.json({ message: 'user deleted!' }))

    .catch((err) => res.status(500).json(err));
}

function addNewFriend(req, res) {
  Friend.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
}

function deleteFriendByID(req, res) {
  Friend.findOneAndDelete({ _id: req.params.friendId })
    .then((friend) => !friend
      ? res.status(404).json({ message: 'No friend with that name' })
      : res.json({ message: 'friend deleted!' })
    )
    .catch((err) => res.status(500).json(err));
}

module.exports = {
  getAllUsers,
  postNewUser,
  getSingleUser,
  updateUserByID,
  deleteUserByID,
  addNewFriend,
  deleteFriendByID
};
