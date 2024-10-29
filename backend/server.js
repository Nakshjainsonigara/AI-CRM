const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const connectionString = 'mongodb+srv://nakshsonigara:3zdYTj1F4LQZExn2@nacluster.ubw35.mongodb.net/CRM?retryWrites=true&w=majority';

const app = express();
app.use(cors());
app.use(express.json());

// Sales schema and model
const salesSchema = new mongoose.Schema({
    name: String,
    sales: Number,
    leads: Number,
});

const Sales = mongoose.model('Sales', salesSchema);
    
// Define the lead schema in a separate file (models/Lead.js)
const leadSchema = new mongoose.Schema({
    lead_id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    status: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    leadScore: { type: Number, default: 0 }
}, { collection: 'Leads' });  // Ensure this matches your collection name


const Lead = mongoose.model('Leads', leadSchema);

const churnAnalysisSchema = new mongoose.Schema({
    churnLikelihood: { type: Number, required: true },
    // Add any other fields you need
});

const ChurnAnalysis = mongoose.model('Churn_Analysis', churnAnalysisSchema);

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Optionally check for existing leads here
        Lead.find({}).then(leads => console.log('Existing leads:', leads));
    })
    .catch(error => console.error('MongoDB connection error:', error));


// API endpoint to fetch all sales
app.get('/api/sales', async (req, res) => {
    try {
        const salesData = await Sales.find({});
        res.json(salesData);
    } catch (error) {
        console.error('Error fetching sales data:', error.message);
        res.status(500).json({ message: 'Error fetching sales data', error: error.message });
    }
});

// GET API to fetch all leads
app.get('/api/leads', async (req, res) => {
    try {
      const leads = await Lead.find();  // Fetch leads
      console.log('Leads fetched:', leads);  // Log fetched leads
      res.json(leads);  // Return leads
    } catch (error) {
      console.error('Error fetching leads:', error);
      res.status(500).json({ message: 'Error fetching leads' });
    }
  });

 app.get('/api/churn_analysis', async (req, res) => {
    try {
        const churnData = await ChurnAnalysis.find(); // Fetch churn analysis data
        console.log('Churn analysis data fetched:', churnData); // Log fetched data
        res.json(churnData); // Return churn analysis data
    } catch (error) {
        console.error('Error fetching churn analysis data:', error);
        res.status(500).json({ message: 'Error fetching churn analysis data' });
    }
});

// API endpoint to get sales and leads overview
app.get('/api/overview', async (req, res) => {
    try {
        const salesData = await Sales.find({});
        const leadsData = await Lead.find({});
        
        // Process data to create a comparison
        const overviewData = {
            sales: salesData.map(sale => ({ date: sale.date, sales: sale.sales })), // Adjust as needed
            leads: leadsData.map(lead => ({ date: lead.created_at, leads: lead.leads })) // Adjust as needed
        };
        
        res.json(overviewData);
    } catch (error) {
        console.error('Error fetching overview data:', error);
        res.status(500).json({ message: 'Error fetching overview data' });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
