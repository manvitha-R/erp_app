const express = require('express');
const app = express();
const designationExpressRoute = express.Router();
let DesignationSchema = require('../model/designation.model');

designationExpressRoute.route('/get-designation').get(async (req, res, next) => {
    try {
        const data = await DesignationSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

designationExpressRoute.route('/designation/:id').get(async (req, res, next) => {
    try {
        const data = await DesignationSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

designationExpressRoute.route('/add-designation').post(async (req, res, next) => {
    try {
        const data = await DesignationSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});


designationExpressRoute.route('/update-designation/:id').put(async (req, res, next) => {

    try {
        const data = await DesignationSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

designationExpressRoute.route('/soft-designation/:id').delete(async (req, res, next) => {
    try {
        const data = await DesignationSchema.updateOne({
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




module.exports = designationExpressRoute;