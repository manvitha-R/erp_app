const express = require('express');
const app = express();
const inventoryExpressRoute = express.Router();
let InventorySchema = require('../model/inventory.model');

inventoryExpressRoute.route('/get-inventory').get(async (req, res, next) =>{
    try {
        const data = await InventorySchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

inventoryExpressRoute.route('/inventory/:id').get(async (req, res, next) =>{
    try {
        const data = await InventorySchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});


inventoryExpressRoute.route('/add-inventroy').post(async (req, res, next) =>{
    try {
        const data = await InventorySchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

inventoryExpressRoute.route('/update-inventory/:id').put(async (req, res, next) =>{
    try {
        const data = await InventorySchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});



inventoryExpressRoute.route('/soft-inventory/:id').delete(async (req, res, next) =>{
    try {
        const data = await InventorySchema.updateOne({
          _id: req.params.id,
        },{
          $set: {
            isdeleted:true
          },
        });
        res.status(200).json({
          error: false,
          message: "user deleted successfully",//
          _id: req.params.id,
        });
    
       }  catch (err) {
        next(err);
      }
});





module.exports = inventoryExpressRoute;