const express = require('express');
const app = express();
const pur_requisitionExpressRoute = express.Router();
let purchase_requisitionSchema = require('../model/pur_requisition.model');

pur_requisitionExpressRoute.route('/get-requisition').get(async (req, res, next) =>{
    try {
        const data = await purchase_requisitionSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

pur_requisitionExpressRoute.route('/requisition/:id').get(async (req, res, next) =>{
    try {
        const data = await purchase_requisitionSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});


pur_requisitionExpressRoute.route('/add-requisition').post(async (req, res, next) =>{
    try {
        const data = await purchase_requisitionSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

pur_requisitionExpressRoute.route('/update-requisition/:id').put(async (req, res, next) =>{
    try {
        const data = await purchase_requisitionSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});


pur_requisitionExpressRoute.route('/soft-requisition/:id').delete(async (req, res, next) =>{
    try {
        const data = await purchase_requisitionSchema.updateOne({
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




module.exports = pur_requisitionExpressRoute;