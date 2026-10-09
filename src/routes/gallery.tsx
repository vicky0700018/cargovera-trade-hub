import { createFileRoute } from '@tanstack/react-router';
import { GalleryPage } from '@/components/cargovera/public';
import { pageMeta } from '@/lib/page-meta';
export const Route=createFileRoute('/gallery')({head:()=>pageMeta('Trade Gallery','A visual perspective on shipping, warehousing, sourcing and global commerce.'),component:GalleryPage});
