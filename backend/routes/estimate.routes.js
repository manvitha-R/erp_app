const express = require('express');
const app = express();
const estimateExpressRoute = express.Router();
let EstimateSchema = require('../model/estimate.model');

estimateExpressRoute.route('/get-estimate').get(async (req, res, next) =>{
    try {
        const data = await EstimateSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

estimateExpressRoute.route('/estimate/:id').get(async (req, res, next) =>{
    try {
        const data = await EstimateSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

estimateExpressRoute.route('/add-estimate').post(async (req, res, next) =>{
    try {
        const data = await EstimateSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

estimateExpressRoute.route('/update-estimate/:id').put(async (req, res, next) =>{
    try {
        const data = await EstimateSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

estimateExpressRoute.route('/soft-estimate/:id').delete(async (req, res, next) =>{
    try {
        const data = await EstimateSchema.updateOne({
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

module.exports = estimateExpressRoute;