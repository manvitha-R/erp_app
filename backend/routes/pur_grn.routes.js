const express = require('express');
const app = express();
const pur_grnExpressRoute = express.Router();
let purchase_grnSchema = require('../model/pur_grn.model');

pur_grnExpressRoute.route('/get-grn').get(async (req, res, next) =>{
    try {
        const data = await purchase_grnSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

pur_grnExpressRoute.route('/grn/:id').get(async (req, res, next) =>{
    try {
        const data = await purchase_grnSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});


pur_grnExpressRoute.route('/add-grn').post(async (req, res, next) =>{
    try {
        const data = await purchase_grnSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

pur_grnExpressRoute.route('/update-grn/:id').put(async (req, res, next) =>{
    try {
        const data = await purchase_grnSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});


pur_grnExpressRoute.route('/soft-grn/:id').delete(async (req, res, next) =>{
    try {
        const data = await purchase_grnSchema.updateOne({
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




module.exports = pur_grnExpressRoute;