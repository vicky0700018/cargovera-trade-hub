import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/cargovera/public';
import { pageMeta } from '@/lib/page-meta';
export const Route=createFileRoute('/about')({head:()=>pageMeta('About Us','Discover CARGOVERA, our partners, values and professional approach to wholesale trading.'),component:AboutPage});
