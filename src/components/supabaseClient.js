
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.GATSBY_SUPABASE_URL
const supabaseKey = process.env.GATSBY_SUPABASE_ANON_KEY

let supabase

if (!supabase) {
  supabase = createClient(supabaseUrl, supabaseKey)
}

export default supabase
