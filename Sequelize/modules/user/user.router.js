const router = require('express').Router();
const { getusers } = require('./controller/allusersA');
const { deleteuser } = require('./controller/Deleteuser');
const { getalla } = require('./controller/GetAllUser_wAge');
const { getusersproduct } = require('./controller/getusersproducts');
const { sign_in, sign_up } = require('./controller/Rigistration');
const { updateuser } = require('./controller/Updateuser');
router.post('/signup', sign_up);
router.post('/signin', sign_in);
router.put('/update/:id', updateuser);
router.delete('/delete/:id', deleteuser);
router.get('/getalla', getalla);
router.get('/getuserA', getusers);
router.get('/getuserproducts', getusersproduct);


module.exports = router;