const express = require('express');
const app = express();
const salesexecutiveExpressRoute = express.Router();
let SalesExecutiveSchema = require('../model/sales_executive.model');


salesexecutiveExpressRoute.route('/get-exec').get(async (req, res, next) =>{
    try {
        const data = await SalesExecutiveSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }

});

salesexecutiveExpressRoute.route('/sale_exec/:id').get(async (req, res, next) =>{
    try {
        const data = await SalesExecutiveSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

salesexecutiveExpressRoute.route('/add-exec').post(async (req, res, next) =>{
    try {
        const data = await SalesExecutiveSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

salesexecutiveExpressRoute.route('/update-exec/:id').put(async (req, res, next) => {
    try {
        const data = await SalesExecutiveSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

salesexecutiveExpressRoute.route('/soft-exec/:id').delete(async (req, res, next) => {
    try {
        const data = await SalesExecutiveSchema.updateOne({
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


module.exports = salesexecutiveExpressRoute;