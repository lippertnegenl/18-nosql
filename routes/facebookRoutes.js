const router = require('express').Router();
const facebookController=require("../controllers/facebookcontroller");
const {
  getAllUsers,
  getSingleUser,
  postNewUser,
  updateUserByID,
  addNewFriend,
  deleteFriendByID,
  deleteUserByID,
} = require('../controllers/facebookcontroller');

router.get('/', facebookController.getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', postNewUser);
router.put('/:id', updateUserByID);
router.post('/:id/friends', addNewFriend);
router.delete('/:id/friends/:friendId', deleteFriendByID);
router.delete('/:id', deleteUserByID);

module.exports = router;
