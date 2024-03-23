const express = require('express');
const app = express();
const categoryExpressRoute = express.Router();
let CategorySchema = require('../model/category.model');


categoryExpressRoute.route('/get-category').get(async (req, res, next) => {
    try {
        const data = await CategorySchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

categoryExpressRoute.route('/category/:id').get(async (req, res, next) =>{
    try {
        const data = await CategorySchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

categoryExpressRoute.route('/add-category').post(async (req, res, next) =>{
    try {
        const data = await CategorySchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

categoryExpressRoute.route('/update-category/:id').put(async (req, res, next) =>{
    try {
        const data = await CategorySchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

categoryExpressRoute.route('/soft-category/:id').delete(async (req, res, next) =>{
    try {
        const data = await CategorySchema.updateOne({
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

module.exports = categoryExpressRoute;