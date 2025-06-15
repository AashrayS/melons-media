-- Simple SQL setup that will work for contact form
-- Run this in your Supabase SQL Editor

-- First, let's completely reset the table and policies
DROP TABLE IF EXISTS contact_submissions CASCADE;

-- Create table without RLS first
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

-- Create indexes
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a very permissive policy for INSERT that should work
CREATE POLICY "allow_all_inserts" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Grant permissions explicitly
GRANT INSERT ON contact_submissions TO anon;
GRANT INSERT ON contact_submissions TO authenticated;

-- Test insert to make sure it works
INSERT INTO contact_submissions (first_name, last_name, email, subject, message) 
VALUES ('Test', 'User', 'test@example.com', 'Test Subject', 'This should work now');

-- Verify
SELECT * FROM contact_submissions;
