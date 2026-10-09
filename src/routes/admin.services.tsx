import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/components/cargovera/admin';
import { pageMeta } from '@/lib/page-meta';
export const Route=createFileRoute('/admin/services')({head:()=>({...pageMeta('Admin Services','CARGOVERA browser-based demo administration.'),meta:[...pageMeta('Admin Services','CARGOVERA browser-based demo administration.').meta,{name:'robots',content:'noindex,nofollow'}]}),component:()=> <AdminPage page="services"/>});
