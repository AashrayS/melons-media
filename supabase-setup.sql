-- SQL script to create contact_submissions table in Supabase
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow INSERT for everyone (for contact form submissions)
CREATE POLICY "Allow INSERT for contact submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Create policy to allow SELECT only for authenticated users (for admin access)
-- You can modify this based on your needs
CREATE POLICY "Allow SELECT for authenticated users" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');

-- Optional: Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
