// Libraries requires
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Custom requires
const dbConfig = require('./app/config/database.config.js');
const registrarRoutes = require('./app/routes/registrar.route');
const customerRoutes = require('./app/routes/customer.route');
const supervisorRoutes = require('./app/routes/supervisor.route');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

const app = express();

// Set up mongoose connection
mongoose.Promise = global.Promise;
mongoose
	.connect(dbConfig.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Successfully connected to the database");    
	})
	.catch(err => {
		console.log('Could not connect to the database.', err);
		process.exit();
	});

// JSON Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Route modules
app.use('/registrar', registrarRoutes);
app.use('/customer', customerRoutes);
app.use('/supervisor', supervisorRoutes);

// Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

var port = 9999;
app.listen(port, () => {
	console.log('Server is up and running on port number ' + port);
});
