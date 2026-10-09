import { createFileRoute } from '@tanstack/react-router';
import { AdminLogin } from '@/components/cargovera/admin';
import { pageMeta } from '@/lib/page-meta';
export const Route=createFileRoute('/admin/login')({head:()=>({...pageMeta('Admin Login','CARGOVERA browser-based demo administration.'),meta:[...pageMeta('Admin Login','CARGOVERA browser-based demo administration.').meta,{name:'robots',content:'noindex,nofollow'}]}),component:AdminLogin});
