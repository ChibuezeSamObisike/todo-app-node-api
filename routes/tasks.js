const router = require('express').Router();
const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask,
} = require('../controllers/tasks');

//Put replace the exisiting resource
//Patch for partial updates

router.route('/').get(getAllTasks).post(createTask);
router
    .route('/:id')
    .get(getTask)
    .patch(updateTask)
    .delete(deleteTask)
    .put(editTask);

module.exports = router;