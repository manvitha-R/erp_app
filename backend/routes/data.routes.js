const express = require('express');
const app = express();
const dataExpressRoute = express.Router();
let DataSchema = require('../model/data.model');

dataExpressRoute.route('/get-data').get(async (req, res, next) =>{
    try {
        const data = await DataSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

dataExpressRoute.route('/data/:id').get(async (req, res, next) =>{
    try {
        const data = await DataSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});


// Route to save selected items
dataExpressRoute.route('/inventory-save').post (async (req, res, next) => {
    const selectedItems = req.body;
  
    // Perform your save operation here using Mongoose
    try {
      // Assuming 'selectedItems' is an array of items to be saved
      const savedItems = await DataSchema.create(selectedItems);
      res.json(savedItems);
    } catch (error) {
        return next(error);
    }
  });

// dataExpressRoute.route('/add-data').post(async (req, res, next) =>{
//     try {
//         const data = await DataSchema.create(req.body);
//         res.json(data);
//       } catch (error) {
//         return next(error);
//       }
// });

// inventoryExpressRoute.route('/update-inventory/:id').put(async (req, res, next) =>{
//     try {
//         const data = await InventorySchema.findByIdAndUpdate(req.params.id, { $set: req.body });
//         res.json(data);
//         console.log('Updated Successfully!');
//       } catch (error) {
//         return next(error);
//       }
// });



// inventoryExpressRoute.route('/soft-inventory/:id').delete(async (req, res, next) =>{
//     try {
//         const data = await InventorySchema.updateOne({
//           _id: req.params.id,
//         },{
//           $set: {
//             isdeleted:true
//           },
//         });
//         res.status(200).json({
//           error: false,
//           message: "user deleted successfully",//
//           _id: req.params.id,
//         });
    
//        }  catch (err) {
//         next(err);
//       }
// });





module.exports = dataExpressRoute;