import HomeClient from './HomeClient';
import { getTestimonials, getBlogs } from '@/lib/data';

export default function HomePage() {
  const testimonials = getTestimonials();
  const blogs = getBlogs();

  return <HomeClient testimonials={testimonials} blogs={blogs} />;
}
