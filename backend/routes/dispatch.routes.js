const express = require('express');
const app = express();
const dispatchExpressRoute = express.Router();
let DispatchSchema = require('../model/dispatch.model');

dispatchExpressRoute.route('/get-dispatch').get(async (req, res, next) =>{
    try {
        const data = await DispatchSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

dispatchExpressRoute.route('/dispatch/:id').get(async (req, res, next) =>{
    try {
        const data = await DispatchSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

dispatchExpressRoute.route('/add-dispatch').post(async (req, res, next) =>{
    try {
        const data = await DispatchSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

dispatchExpressRoute.route('/update-dispatch/:id').put(async (req, res, next) =>{
    try {
        const data = await DispatchSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

dispatchExpressRoute.route('/soft-dispatch/:id').delete(async (req, res, next) =>{
    try {
        const data = await DispatchSchema.updateOne({
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

module.exports = dispatchExpressRoute;