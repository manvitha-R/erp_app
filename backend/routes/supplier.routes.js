const express = require('express');
const app = express();
const suppliermasterExpressRoute = express.Router();
let SupplierMasterSchema = require('../model/supplier.model');

suppliermasterExpressRoute.route('/get-supplier').get(async (req, res, next) =>{
    try {
        const data = await SupplierMasterSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

suppliermasterExpressRoute.route('/supplier/:id').get(async (req, res, next) =>{
    try {
        const data = await SupplierMasterSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

suppliermasterExpressRoute.route('/add-supplier').post(async (req, res, next) =>{
    try {
        const data = await SupplierMasterSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

suppliermasterExpressRoute.route('/update-supplier/:id').put(async (req, res, next) =>{
    try {
        const data = await SupplierMasterSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

suppliermasterExpressRoute.route('/soft-supplier/:id').delete(async (req, res, next) =>{
    try {
        const data = await SupplierMasterSchema.updateOne({
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

module.exports = suppliermasterExpressRoute;