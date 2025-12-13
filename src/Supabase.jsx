import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jjnwhaapbdgejrvatnlq.supabase.co'
const supabaseKey = 'sb_publishable_lno6cV7KHtU45P2UfDt5EA_zXgir7AU'
export const supabase = createClient(supabaseUrl, supabaseKey)