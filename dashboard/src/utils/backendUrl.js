/** Backend origin — set VITE_BACKEND_URL in dashboard/.env when PORT differs (avoid 6000: browsers block it). */
export const BACKEND_ORIGIN =
  import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, '') || 'http://localhost:8080';

export const HAS_CUSTOM_BACKEND = Boolean(import.meta.env.VITE_BACKEND_URL);

export const IS_STATIC_HOSTING =
  typeof window !== 'undefined' &&
  window.location.hostname !== 'localhost' &&
  window.location.hostname !== '127.0.0.1' &&
  !HAS_CUSTOM_BACKEND;
