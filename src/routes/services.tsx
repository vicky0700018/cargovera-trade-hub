import { createFileRoute } from '@tanstack/react-router';
import { ServicesPage } from '@/components/cargovera/public';
import { pageMeta } from '@/lib/page-meta';
export const Route=createFileRoute('/services')({head:()=>pageMeta('Trading Services','Global sourcing, wholesale trading, procurement and professional supplier coordination.'),component:ServicesPage});
