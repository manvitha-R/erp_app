const express = require('express');
const app = express();
const enquiryExpressRoute = express.Router();
let EnquirySchema = require('../model/enquiry.model');

enquiryExpressRoute.route('/get-enquiry').get(async (req, res, next) =>{
    try {
        const data = await EnquirySchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

enquiryExpressRoute.route('/enquiry/:id').get(async (req, res, next) =>{
  
    try {
        const data = await EnquirySchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

enquiryExpressRoute.route('/enquiry-add').post(async (req, res, next) =>{
    try {
        const data = await EnquirySchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

enquiryExpressRoute.route('/update-enquiry/:id').put(async (req, res, next) =>{
    try {
      const currentDate = new Date();
        const data = await EnquirySchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

enquiryExpressRoute.route('/enquiry-soft/:id').delete(async (req, res, next) =>{
    try {
        const data = await EnquirySchema.updateOne({
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


module.exports = enquiryExpressRoute;