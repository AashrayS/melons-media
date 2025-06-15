import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if environment variables are properly set
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not set. Contact form will not work.')
}

// Only create client if we have valid environment variables
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Types for our contact form
export interface ContactFormData {
  id?: string
  first_name: string
  last_name: string
  email: string
  subject: string
  message: string
  created_at?: string
}

// Function to submit contact form data
export const submitContactForm = async (formData: Omit<ContactFormData, 'id' | 'created_at'>) => {
  // Check if Supabase is properly configured
  if (!supabase) {
    console.error('Supabase is not configured. Please check your environment variables.')
    return { 
      data: null, 
      error: { message: 'Database connection not configured. Please contact support.' } 
    }
  }

  console.log('Submitting form data:', formData);
  console.log('Supabase URL:', supabaseUrl);
  console.log('Supabase client initialized:', !!supabase);

  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([formData])
      .select()

    console.log('Supabase response:', { data, error });

    if (error) {
      console.error('Error submitting contact form:', error)
      throw error
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error:', error)
    return { data: null, error }
  }
}
