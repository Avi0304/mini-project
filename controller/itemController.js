const itemModel = require("../models/itemModel");

// get items
const getItemController = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
  }
};

// add items 

const addItemController = async(req, res) =>{
    try {
        const newItem = await itemModel(req.body)
        await newItem.save()
        res.status(201).send("Item add successfully")
    } catch (error) {
        console.log(error);
        res.status(400).send("error",error)
    }
};

const editItemController = async(req,res) =>{
    try {
          const {itemId} = req.body;
          console.log(itemId);
          await itemModel.findOneAndUpdate({id: itemId}, req.body, {
            new:true,
          });
          res.status(201).json("item updated");
    } catch (error) {
          console.log(error);
          res.status(400).send("error", error) 
    }
}

const deleteItemController = async(req,res) => {
  try {
    const {itemId} = req.body;
    console.log(itemId);
    await itemModel.findOneAndDelete({id: itemId});
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).send("error", error)
  }
}

module.exports = {getItemController,addItemController, editItemController,deleteItemController}