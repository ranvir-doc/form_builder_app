const express = require('express');
const mongoose = require('mongoose');
const cors = require('core');
require('dotenv').config();
const app = express();
app.use(core());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Connected to MongoDB'))
.catch((err)=> consolw.log(err));
const formRoutes = require('./routes/formRoutes');
app.use('/api/forms',formRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
