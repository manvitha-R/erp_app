
const express = require('express');
const app = express();
const historyExpressRoute = express.Router();
let HistorySchema = require('../model/history.model');

historyExpressRoute.route('/get-history').get(async (req, res, next) =>{
    try {
        const data = await HistorySchema.find({
          isdeleted: false
        });
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

historyExpressRoute.route('/history/:id').get(async (req, res, next) =>{
    try {
        const data = await HistorySchema.findById(req.params.id);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

historyExpressRoute.route('/add-history').post(async (req, res, next) =>{
    try {
        const data = await HistorySchema.create(req.body);
        res.json(data);
      } catch (error) {
        return next(error);
      }
});

historyExpressRoute.route('/update-history/:id').put(async (req, res, next) =>{
    try {
      const currentDate = new Date();
        const data = await HistorySchema.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
        console.log('Updated Successfully!');
      } catch (error) {
        return next(error);
      }
});

historyExpressRoute.route('/soft-history/:id').delete(async (req, res, next) =>{
    try {
        const data = await HistorySchema.updateOne({
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


module.exports = historyExpressRoute;