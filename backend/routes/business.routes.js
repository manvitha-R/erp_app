const express = require('express');
const app = express();
const businessExpressRoute = express.Router();
let BusinessSchema = require('../model/business.model');

businessExpressRoute.route('/get-business').get(async (req, res, next) =>{
    try {
        const data = await BusinessSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

businessExpressRoute.route('/business/:id').get(async (req, res, next) =>{
    try {
        const data = await BusinessSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

businessExpressRoute.route('/add-business').post(async (req, res, next) =>{
    try {
        const data = await BusinessSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

businessExpressRoute.route('/update-business/:id').put(async (req, res, next) =>{
    try {
        const data = await BusinessSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

businessExpressRoute.route('/soft-business/:id').delete(async (req, res, next) =>{
    try {
        const data = await BusinessSchema.updateOne({
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













module.exports = businessExpressRoute;