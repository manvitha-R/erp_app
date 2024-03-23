const express = require('express');
const app = express();
const employeemasterExpressRoute = express.Router();
let EmployeeMasterSchema = require('../model/emp_master.model');

employeemasterExpressRoute.route('/get-master').get(async (req, res, next) =>{
    try {
        const data = await EmployeeMasterSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

employeemasterExpressRoute.route('/master/:id').get(async (req, res, next) =>{
    try {
        const data = await EmployeeMasterSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

employeemasterExpressRoute.route('/add-master').post(async (req, res, next) =>{
    try {
        const data = await EmployeeMasterSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

employeemasterExpressRoute.route('/update-master/:id').put(async (req, res, next) =>{
    try {
        const data = await EmployeeMasterSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

employeemasterExpressRoute.route('/soft-master/:id').delete(async (req, res, next) =>{
    try {
        const data = await EmployeeMasterSchema.updateOne({
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

module.exports = employeemasterExpressRoute;