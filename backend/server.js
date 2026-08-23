const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security and CORS middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));

// Body parser
app.use(express.json());

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('ERROR: SUPABASE_URL and SUPABASE_ANON_KEY must be defined in the .env file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is healthy' });
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Input Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields (name, email, message) are required.' 
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide a valid email address.' 
    });
  }

  try {
    // Insert into Supabase table 'contacts'
    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name, email, message }])
      .select();

    if (error) {
      console.error('Supabase DB Error:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Database error occurred while saving contact information.' 
      });
    }

    console.log('Successfully saved contact submission:', data);
    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! It has been sent successfully.' 
    });
  } catch (error) {
    console.error('Server Internal Error during contact post:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'An unexpected server error occurred.' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
