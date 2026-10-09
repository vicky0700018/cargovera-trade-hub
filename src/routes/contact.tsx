import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/cargovera/public';
import { pageMeta } from '@/lib/page-meta';
export const Route=createFileRoute('/contact')({head:()=>pageMeta('Contact Us','Contact CARGOVERA TRADING LLP in Pune and submit a demo business enquiry.'),component:ContactPage});
