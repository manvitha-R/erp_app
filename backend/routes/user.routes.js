const express = require('express');
const app = express();
const userExpressRoute = express.Router();
let UserSchema = require('../model/user.model');

userExpressRoute.route('/get-user').get(async (req, res, next) =>{
    try {
        const data = await UserSchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

userExpressRoute.route('/user/:id').get(async (req, res, next) =>{
    try {
        const data = await UserSchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

userExpressRoute.route('/add-user').post(async (req, res, next) =>{
    try {
        const data = await UserSchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

userExpressRoute.route('/update-user/:id').put(async (req, res, next) =>{
    try {
        const data = await UserSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

userExpressRoute.route('/soft-user/:id').delete(async (req, res, next) =>{
    try {
        const data = await UserSchema.updateOne({
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




module.exports = userExpressRoute;