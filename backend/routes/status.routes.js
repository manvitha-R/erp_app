const express = require('express');
const app = express();
const statusExpressRoute = express.Router();
let StatusSchema = require('../model/status.model');

statusExpressRoute.route('/get-status').get(async (req, res, next) =>{
    try {
        const data = await StatusSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});


statusExpressRoute.route('/status/:id').get(async (req, res, next) =>{
    try {
        const data = await StatusSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

statusExpressRoute.route('/add-status').post(async (req, res, next) =>{
    try {
        const data = await StatusSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

statusExpressRoute.route('/update-status/:id').put(async (req, res, next) =>{
    try {
        const data = await StatusSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

statusExpressRoute.route('/soft-status/:id').delete(async (req, res, next) =>{
    try {
        const data = await StatusSchema.updateOne({
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

module.exports = statusExpressRoute;