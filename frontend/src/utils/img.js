const API_URL  = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
const BASE_URL = API_URL.replace(/\/api\/?$/, '');

/** Görsel URL'i normalleştir: absolute ise olduğu gibi döndür, relative ise backend'in /storage'a prefix ekle. */
export function imgUrl(url) {
  if (!url) return '';
  if (/^(https?:|data:|blob:)/i.test(url)) return url;
  return `${BASE_URL}/storage/${url.replace(/^\/+/, '')}`;
}

export default imgUrl;
