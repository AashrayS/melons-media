-- Temporary solution: Disable RLS for testing
-- Run this ONLY if the reset SQL doesn't work

-- Disable RLS temporarily
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Test insert
INSERT INTO contact_submissions (first_name, last_name, email, subject, message) 
VALUES ('No RLS', 'Test', 'norls@example.com', 'No RLS Test', 'This should definitely work');

-- Check if it worked
SELECT * FROM contact_submissions WHERE email = 'norls@example.com';
