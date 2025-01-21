import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://ojeonmhobmllspwfhfdc.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qZW9ubWhvYm1sbHNwd2ZoZmRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxODMxMDAsImV4cCI6MjA1MTc1OTEwMH0.9hOyuP9AjSZkJf98K26li6FVCoOis7yGT8RgeNk5mb8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
