const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    postNewUser,
    updateUserByID,
    deleteById,
    addNewFriend,
    deleteFriend,
} = require("../controllers/facebookcontroller");


router.route('/')
    .get(getAllUsers)
    .post(postNewUser);

router.route('/:userID')
    .get(getSingleUser)
    .put(updateUserByID)
    .delete(deleteById);

router.route('/:userID/friends')
    .post(addNewFriend)
    .delete(deleteFriend);
    
    
module.exports = router;   
    
    

