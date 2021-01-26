const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I98HZC464Xu6X2cwxFgCw8BXeRpt7VWfeHNbfyln1w0E7oCIBYAQ3t7HgnOOVdWTnz8PmzZbp0MDOYhTk9zRugH00rZ8CIrfc');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).json('hello world'));

exports.api = functions.https.onRequest(app);

// http://localhost:5001/devzero-831f4/us-central1/api