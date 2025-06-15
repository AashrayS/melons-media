-- Updated SQL script with corrected RLS policies
-- Run this in your Supabase SQL Editor

-- First, drop existing policies if they exist
DROP POLICY IF EXISTS "Allow INSERT for contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow SELECT for authenticated users" ON contact_submissions;

-- Create table (if it doesn't exist)
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

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create correct policy for INSERT (allow anonymous users to insert)
CREATE POLICY "contact_submissions_insert_policy" ON contact_submissions
  FOR INSERT 
  TO anon, authenticated 
  WITH CHECK (true);

-- Create policy for SELECT (only authenticated users can read)
CREATE POLICY "contact_submissions_select_policy" ON contact_submissions
  FOR SELECT 
  TO authenticated 
  USING (true);

-- Test the setup by trying to insert a test record
-- (This should work with the anon key)
INSERT INTO contact_submissions (first_name, last_name, email, subject, message) 
VALUES ('Test', 'User', 'test@example.com', 'Test Subject', 'This is a test message to verify the policy works');

-- Verify the insert worked
SELECT COUNT(*) FROM contact_submissions;
