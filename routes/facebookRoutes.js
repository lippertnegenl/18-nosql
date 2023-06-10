const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    postNewUser,
    putUserById,
    deleteById,
    addNewFriend,
    deleteFriend,
} = require("../controllers/facebookcontroller");


router.route('/').get(getAllUsers).post(postNewUser);

router.route('/:userID')
    .get(getSingleUser)
    .put(putUserById)
    .delete(deleteById)
    .post(addNewFriend)
    .delete(deleteFriend);

router.route('userID/friends')
    .post(addNewFriend)
    .delete(deleteFriend);
    
    
module.exports = router;   
    
    

