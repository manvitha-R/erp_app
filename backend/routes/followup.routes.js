const express = require('express');
const app = express();
const followupExpressRoute = express.Router();
let FollowupSchema = require('../model/followup.model');

followupExpressRoute.route('/get-followup').get(async (req, res, next) =>{
    try {
        const data = await FollowupSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

followupExpressRoute.route('/followup/:id').get(async (req, res, next) =>{
    try {
        const data = await FollowupSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

followupExpressRoute.route('/add-followup').post(async (req, res, next) =>{
    try {
        const data = await FollowupSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

followupExpressRoute.route('/update-followup/:id').put(async (req, res, next) =>{
    try {
      const currentDate = new Date();
        const data = await FollowupSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

followupExpressRoute.route('/soft-followup/:id').delete(async (req, res, next) =>{
    try {
        const data = await FollowupSchema.updateOne({
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


module.exports = followupExpressRoute;