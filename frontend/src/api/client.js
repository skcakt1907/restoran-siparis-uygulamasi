import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 12000,
  headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
});

export const fetchHomepage    = ()        => client.get('/homepage').then(r => r.data);
export const fetchMenu        = (params)  => client.get('/menu', { params }).then(r => r.data);
export const fetchCategories  = ()        => client.get('/categories').then(r => r.data);
export const fetchCategory    = (slug)    => client.get(`/categories/${slug}`).then(r => r.data);
export const fetchServices    = ()        => client.get('/services').then(r => r.data);
export const fetchService     = (slug)    => client.get(`/services/${slug}`).then(r => r.data);
export const fetchTeam        = ()        => client.get('/team').then(r => r.data);
export const fetchPackages    = ()        => client.get('/packages').then(r => r.data);
export const fetchTestimonials = ()       => client.get('/testimonials').then(r => r.data);
export const fetchBlog        = ()        => client.get('/blog').then(r => r.data);
export const fetchBlogPost    = (slug)    => client.get(`/blog/${slug}`).then(r => r.data);
export const sendContact      = (data)    => client.post('/contact', data).then(r => r.data);
export const sendReservation  = (data)    => client.post('/reservation', data).then(r => r.data);

export default client;
