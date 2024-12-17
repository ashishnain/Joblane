// Import the database configuration
require('./config/database');

const express = require('express');
const app = express();

// Your other app setup code here...

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
