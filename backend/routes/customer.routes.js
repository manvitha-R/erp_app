const express = require('express');
const app = express();
const customermasterExpressRoute = express.Router();
let CustomerMasterSchema = require('../model/customer.model');

customermasterExpressRoute.route('/get-customer').get(async (req, res, next) =>{
    try {
        const data = await CustomerMasterSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

customermasterExpressRoute.route('/customer/:id').get(async (req, res, next) =>{
    try {
        const data = await CustomerMasterSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

customermasterExpressRoute.route('/add-customer').post(async (req, res, next) =>{
    try {
        const data = await CustomerMasterSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

customermasterExpressRoute.route('/update-customer/:id').put(async (req, res, next) =>{
    try {
        const data = await CustomerMasterSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

customermasterExpressRoute.route('/soft-customer/:id').delete(async (req, res, next) =>{
    try {
        const data = await CustomerMasterSchema.updateOne({
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

module.exports = customermasterExpressRoute;