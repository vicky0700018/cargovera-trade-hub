import { createFileRoute } from '@tanstack/react-router';
import { ProductsPage } from '@/components/cargovera/public';
import { pageMeta } from '@/lib/page-meta';
export const Route=createFileRoute('/products')({head:()=>pageMeta('Products & Trading Categories','Explore industrial, consumer, packaging and commercial wholesale sourcing categories.'),component:ProductsPage});
