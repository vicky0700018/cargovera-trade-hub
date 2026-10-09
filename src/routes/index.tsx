import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/cargovera/public';
import { pageMeta } from '@/lib/page-meta';
export const Route=createFileRoute('/')({head:()=>pageMeta('Global Wholesale Trading','Connecting global markets through reliable wholesale trade, sourcing and business partnerships from Pune, India.'),component:HomePage});
