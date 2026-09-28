import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Get public URL for a video stored in a Supabase Storage bucket.
 * @param {string} fileName - E.g. 'vid_sim.mp4'
 * @param {string} bucket - Bucket name (default 'traffic-videos')
 */
export const getSupabaseVideoUrl = (fileName = 'vid_sim.mp4', bucket = 'traffic-videos') => {
  if (import.meta.env.VITE_SUPABASE_VIDEO_URL) {
    return import.meta.env.VITE_SUPABASE_VIDEO_URL;
  }
  if (!supabase) return null;
  const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
  return data?.publicUrl || null;
};
