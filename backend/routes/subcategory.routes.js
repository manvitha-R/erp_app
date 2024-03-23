const express = require('express');
const app = express();
const subcategoryExpressRoute = express.Router();
let SubcategorySchema = require('../model/subcategory.model');


subcategoryExpressRoute.route('/get-subcategory').get(async (req, res, next) =>{
    try {
        const data = await SubcategorySchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

subcategoryExpressRoute.route('/subcategory/:id').get(async (req, res, next) =>{
    try {
        const data = await SubcategorySchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

subcategoryExpressRoute.route('/add-subcategory').post(async (req, res, next) =>{
    try {
        const data = await SubcategorySchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

subcategoryExpressRoute.route('/update-subcategory/:id').put(async (req, res, next) =>{
    try {
        const data = await SubcategorySchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

subcategoryExpressRoute.route('/soft-subcategory/:id').delete(async (req, res, next) =>{
    try {
        const data = await SubcategorySchema.updateOne({
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

module.exports = subcategoryExpressRoute;