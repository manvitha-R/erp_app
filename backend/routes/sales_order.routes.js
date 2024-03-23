const express = require('express');
const app = express();
const sales_ordExpressRoute = express.Router();
let Sales_ordSchema = require('../model/sales_order.model');

sales_ordExpressRoute.route('/get-sales_ord').get(async (req, res, next) =>{
    try {
        const data = await Sales_ordSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

sales_ordExpressRoute.route('/sales_ord/:id').get(async (req, res, next) =>{
    try {
        const data = await Sales_ordSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

sales_ordExpressRoute.route('/add-sales_ord').post(async (req, res, next) =>{
    try {
        const data = await Sales_ordSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

sales_ordExpressRoute.route('/update-sales_ord/:id').put(async (req, res, next) =>{
    try {
        const data = await Sales_ordSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

sales_ordExpressRoute.route('/soft-sales_ord/:id').delete(async (req, res, next) =>{
    try {
        const data = await Sales_ordSchema.updateOne({
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

module.exports = sales_ordExpressRoute;