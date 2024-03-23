const express = require('express');
const app = express();
const enquirymodeExpressRoute = express.Router();
let EnquirymodeSchema = require('../model/enq_mode.model');

enquirymodeExpressRoute.route('/get-enq_mode').get(async (req, res, next) =>{
    try {
        const data = await EnquirymodeSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

enquirymodeExpressRoute.route('/enq_mode/:id').get(async (req, res, next) =>{
    try {
        const data = await EnquirymodeSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

enquirymodeExpressRoute.route('/add-enq_mode').post(async (req, res, next) =>{
    try {
        const data = await EnquirymodeSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});


enquirymodeExpressRoute.route('/update-enq_mode/:id').put(async (req, res, next) =>{
    try {
        const data = await EnquirymodeSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

enquirymodeExpressRoute.route('/soft-enq_mode/:id').delete(async (req, res, next) =>{
    try {
        const data = await EnquirymodeSchema.updateOne({
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

module.exports = enquirymodeExpressRoute;