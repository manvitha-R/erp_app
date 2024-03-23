// const express = require('express');
// const app = express();
// const itemExpressRoute = express.Router();
// let ItemSchema = require('../model/item.model');

// itemExpressRoute.route('/get-item').get(async (req, res, next) =>{
//     try {
//         const data = await ItemSchema.find({
//           isdeleted: false
//         });
//         res.json(data);
//       } catch (error) {
//         return next(error);
//       }
// });

// itemExpressRoute.route('/item/:id').get(async (req, res, next) =>{
//     try {
//         const data = await ItemSchema.findById(req.params.id);
//         res.json(data);
//       } catch (error) {
//         return next(error);
//       }
// });


// itemExpressRoute.route('/add-item').post(async (req, res, next) =>{
//     try {
//         const data = await ItemSchema.create(req.body);
//         res.json(data);
//       } catch (error) {
//         return next(error);
//       }
// });

// itemExpressRoute.route('/update-item/:id').put(async (req, res, next) =>{
//     try {
//         const data = await ItemSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
//         res.json(data);
//         console.log('Updated Successfully!');
//       } catch (error) {
//         return next(error);
//       }
// });



// itemExpressRoute.route('/soft-item/:id').delete(async (req, res, next) =>{
//     try {
//         const data = await ItemSchema.updateOne({
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





// module.exports = itemExpressRoute;