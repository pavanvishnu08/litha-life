import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

function isConfiguredValue(value: string | undefined) {
  return Boolean(value && !value.includes('YOUR_'));
}

export const hasSupabaseConfig = isConfiguredValue(supabaseUrl) && isConfiguredValue(supabaseAnonKey);

export const supabaseConfigMessage = hasSupabaseConfig
  ? null
  : 'Supabase is not configured. Create a .env.local file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY, then restart the dev server.';

export const supabase = hasSupabaseConfig
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
