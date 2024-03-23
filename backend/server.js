// let express = require('express');
// const createError = require('http-errors');
// path = require('path');
// mongoose = require('mongoose');
// cors = require('cors');
// bodyParser = require('body-parser');
// dbConfig = require('./db/database');


// mongoose.Promise = global.Promise;
// mongoose.connect(dbConfig.db, {
//   // Remove useNewUrlParser and useUnifiedTopology
// }).then(
//   () => {
//     console.log('Database connected');
//   },
//   error => {
//     console.log('Database not connected:', error.message);
//   }
// );




// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// app.use(cors());

// const userRoute = require('./routes/student.routes')

// app.use('/endpoint', userRoute);

// const port = process.env.PORT || 8080;

// const server = app.listen(port, () => {
//     console.log('port connected to: ' + port)
// })

// app.use((req, res, next) => {
//     next(createError(404));
// });

// app.get('/', (req, res) => {
//     res.send('invaild endpoint');
// });

// app.use(function (err, req, res, next) {
//    if (!err.statusCode) err.statusCode = 500;
//    res.status(err.statusCode).send(err.message);
// })


let express = require('express');
const createError = require('http-errors');
path = require('path');
mongoose = require('mongoose');
cors = require('cors');
bodyParser = require('body-parser');
dbConfig = require('./db/database');


mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    // useNewUrlParser: true,
}).then(() => {
    console.log('Database connected');
}).catch(error => {
    console.log('Database could not be connected: ' + error);
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


const rolesRoute = require('./routes/roles.routes');
const designationRoute = require('./routes/designation.routes');
const subcategoryRoute = require('./routes/subcategory.routes');
const categoryRoute = require('./routes/category.routes');
const statusRoute = require('./routes/status.routes');
const enquirymodeRoute = require('./routes/enq_mode.routes');
const typeRoute = require('./routes/enq_type.routes');
const businessRoute = require('./routes/business.routes');
const userRoute = require('./routes/user.routes');
const masterRoute = require('./routes/emp_master.routes');
const customerRoute = require('./routes/customer.routes');
const supplierRoute = require('./routes/supplier.routes');
const salesexecutiveRoute = require('./routes/sales_executive.routes');
const inventoryRoute = require('./routes/inventory.routes');
const requisitionRoute = require('./routes/pur_requisition.routes');
const grnRoute = require('./routes/pur_grn.routes');
const orderRoute = require('./routes/pur_order.routes');
const invoiceRoute = require('./routes/invoice.routes');
const enquiryRoute = require('./routes/enquiry.routes');
const estimateRoute = require('./routes/estimate.routes');
const sales_orderRoute = require('./routes/sales_order.routes');
const dispatchRoute = require('./routes/dispatch.routes');
const dataRoute = require('./routes/data.routes');
const followupRoute = require('./routes/followup.routes');
const historyRoute = require('./routes/history.routes');
const departmentRoute = require('./routes/department.routes');
// app.use('/endpoint', userRoute, rolesRoute);
app.use('/endpoint', [rolesRoute, designationRoute, subcategoryRoute, categoryRoute, statusRoute, enquirymodeRoute, typeRoute,
    businessRoute, userRoute, masterRoute, customerRoute, supplierRoute, salesexecutiveRoute, inventoryRoute, requisitionRoute, grnRoute, orderRoute, invoiceRoute, enquiryRoute,
      estimateRoute, sales_orderRoute, dispatchRoute, dataRoute, followupRoute, historyRoute, departmentRoute ]);

const port = process.env.PORT || 9090;

const server = app.listen(port, () => {
    console.log('Port connected to: ' + port);
});

app.use((req, res, next) => {
    next(createError(404));
});

app.get('/', (req, res) => {
    res.send('invalid endpoint');
});

app.use(function (err, req, res, next) {
    console.error(err);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).json({ error: err.message });
});
