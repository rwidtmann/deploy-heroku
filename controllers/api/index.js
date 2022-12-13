const router = require('express').Router();

const userRoutes = require('./user-routes');
const commentRoute = require('./comment');

router.use('/users', userRoutes);
router.use('/comment', commentRoute)

module.exports = router;
