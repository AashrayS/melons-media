-- Simple Supabase setup without RLS for testing
-- Run this in your Supabase SQL Editor if the contact form still doesn't work

-- First, drop the table if it exists to start fresh
DROP TABLE IF EXISTS contact_submissions;

-- Create the table without RLS
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- DON'T enable RLS for now (for testing purposes)
-- This makes the table publicly accessible
-- Only use this for testing - enable RLS in production

-- Test insert
INSERT INTO contact_submissions (first_name, last_name, email, subject, message) 
VALUES ('Test', 'User', 'test@example.com', 'Test Subject', 'This is a test message');

-- Verify it works
SELECT * FROM contact_submissions;
