const express = require('express');
const app = express();
const pur_orderExpressRoute = express.Router();
let purchase_orderSchema = require('../model/pur_order.model');

pur_orderExpressRoute.route('/get-order').get(async (req, res, next) =>{
    try {
        const data = await purchase_orderSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

pur_orderExpressRoute.route('/order/:id').get(async (req, res, next) =>{
    try {
        const data = await purchase_orderSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});


pur_orderExpressRoute.route('/add-order').post(async (req, res, next) =>{
    try {
        const data = await purchase_orderSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

pur_orderExpressRoute.route('/update-order/:id').put(async (req, res, next) =>{
    try {
        const data = await purchase_orderSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});


pur_orderExpressRoute.route('/soft-order/:id').delete(async (req, res, next) =>{
    try {
        const data = await purchase_orderSchema.updateOne({
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




module.exports = pur_orderExpressRoute;