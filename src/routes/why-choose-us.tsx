import { createFileRoute } from '@tanstack/react-router';
import { WhyPage } from '@/components/cargovera/public';
import { pageMeta } from '@/lib/page-meta';
export const Route=createFileRoute('/why-choose-us')({head:()=>pageMeta('Why Choose Us','Reliable coordination, flexible sourcing and lasting wholesale business partnerships.'),component:WhyPage});
