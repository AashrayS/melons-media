# Supabase Setup for Melons Media Contact Form

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/sign in
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `melons-media-backend` (or any name you prefer)
   - Database Password: Create a strong password
   - Region: Choose the closest region to your users
5. Click "Create new project"

## 2. Set up the Database

1. In your Supabase dashboard, go to the "SQL Editor"
2. Create a new query
3. Copy and paste the contents of `supabase-setup.sql` file
4. Click "Run" to execute the SQL script

This will create:
- `contact_submissions` table to store form data
- Proper indexes for performance
- Row Level Security (RLS) policies
- Auto-updating timestamp triggers

## 3. Get Your Project Credentials

1. In your Supabase dashboard, go to "Settings" → "API"
2. Copy the following values:
   - Project URL
   - Project API Key (anon/public key)

## 4. Configure Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 5. Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your Supabase dashboard → "Table Editor" → "contact_submissions" to see the submitted data

## 6. Viewing Submissions (Admin Access)

To view contact form submissions, you can:

1. **Via Supabase Dashboard**: Go to Table Editor → contact_submissions
2. **Via API**: Create an admin interface in your app (requires authentication)
3. **Via SQL**: Use the SQL Editor to query the data

## Security Notes

- The current setup allows anyone to INSERT data (for form submissions)
- Only authenticated users can SELECT data (for admin access)
- Consider implementing additional validation and rate limiting for production use
- The anon key is safe to use in client-side code as it respects RLS policies

## Database Schema

```sql
contact_submissions:
- id (UUID, Primary Key)
- first_name (VARCHAR(100))
- last_name (VARCHAR(100))  
- email (VARCHAR(255))
- subject (VARCHAR(255))
- message (TEXT)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

## Troubleshooting

1. **Form not submitting**: Check browser console for errors and verify environment variables
2. **Data not appearing**: Verify RLS policies and check Supabase logs
3. **CORS issues**: Ensure your domain is added to Supabase auth settings if needed
