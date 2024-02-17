const express = require('express')
const { getItemController, addItemController, editItemController, deleteItemController } = require('../controller/itemController')

const router = express.Router()

// routes
//Method - get
router.get('/get-item',getItemController)

// Method - post
router.post('/add-item', addItemController)

// method -put
router.put('/edit-item', editItemController)

// method to delete
router.delete('/delete-item', deleteItemController)


module.exports = router