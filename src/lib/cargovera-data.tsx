import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import heroImage from '@/assets/trade-hero.jpg';
import port from '@/assets/port.jpg.asset.json';
import warehouse from '@/assets/warehouse.jpg.asset.json';
import cargo from '@/assets/cargo.jpg.asset.json';
import p0 from '@/assets/photo-0.jpg.asset.json';
import p1 from '@/assets/photo-1.jpg.asset.json';
import p2 from '@/assets/photo-2.jpg.asset.json';
import p3 from '@/assets/photo-3.jpg.asset.json';
import p4 from '@/assets/photo-4.jpg.asset.json';
import p5 from '@/assets/photo-5.jpg.asset.json';
import p6 from '@/assets/photo-6.jpg.asset.json';
import p7 from '@/assets/photo-7.jpg.asset.json';
import p9 from '@/assets/photo-9.jpg.asset.json';
import p10 from '@/assets/photo-10.jpg.asset.json';
import p11 from '@/assets/photo-11.jpg.asset.json';
export const photos = [port.url,warehouse.url,cargo.url,p0.url,p1.url,p2.url,p3.url,p4.url,p5.url,p6.url,p7.url,p9.url,p10.url,p11.url,heroImage];
export type Entry = { id:string; title:string; description:string; image:string; category:string; status:string; [key:string]:string };
export type Collection = 'products'|'services'|'markets'|'gallery'|'testimonials'|'enquiries'|'stats';
export type SiteData = {company:Record<string,string>; hero:Record<string,string>; settings:Record<string,string>} & Record<Collection,Entry[]>;
const item=(title:string,description:string,image:string,category='General',extra:Record<string,string>={}):Entry=>({id:title.toLowerCase().replaceAll(' ','-'),title,description,image,category,status:'Active',...extra});
export const initialData:SiteData={
 company:{name:'CARGOVERA TRADING LLP',partners:'AAYUSH RAI, PARAM RAJESH PARDESHI',address:'A7-401 Park Infinia, Fursungii Bheakrai Nagar, Phursungi, Haveli, Pune, Maharashtra, India, 412308',phone:'3215435213',email:'',about:'CARGOVERA TRADING LLP is a modern wholesale trading company connecting businesses with the products, suppliers and opportunities they need. From sourcing to distribution, we bring a professional, transparent approach to every business relationship.',vision:'To build dependable and long-term business relationships across markets.',mission:'To simplify sourcing, wholesale trading and business connectivity through professional service and reliable coordination.'},
 hero:{title:'Connecting Global Markets Through Reliable Trade',subtitle:'CARGOVERA TRADING LLP delivers professional wholesale trading and global sourcing solutions, connecting businesses with reliable products, suppliers and markets.',image:heroImage,cta:'Explore Our Business',link:'/products',status:'Active'},
 settings:{footer:'Designed and development by SOSynch Ai Tech',facebook:'',linkedin:'',instagram:'',seoTitle:'CARGOVERA TRADING LLP',heroCTA:'Explore Our Business'},
 products:[item('Industrial Products','Dependable industrial and commercial products for growing businesses.',p2.url,'Industrial'),item('Consumer Products','Quality consumer and lifestyle products, sourced for your market.',p5.url,'Consumer'),item('Packaging & Supplies','Practical packaging and supply solutions for business operations.',p1.url,'Packaging'),item('General Merchandise','Versatile wholesale merchandise across multiple trading categories.',p3.url,'Merchandise'),item('Commercial Goods','Purposeful procurement for business and institutional requirements.',warehouse.url,'Commercial'),item('Customized Sourcing','The right products, sourced around your specific business needs.',p6.url,'Sourcing')],
 services:[item('Global Sourcing','Connecting your business with suitable suppliers and quality products across markets.',port.url),item('Wholesale Trading','Bulk product sourcing and distribution designed around business requirements.',warehouse.url),item('Supplier Coordination','Professional coordination between suppliers and buyers, from introduction to delivery.',p11.url),item('Import & Export Support','Trade-oriented coordination for your international business requirements.',cargo.url),item('Product Procurement','Focused product procurement aligned with your specifications and objectives.',p2.url),item('Business Trade Solutions','Flexible solutions that connect your business to wider trading opportunities.',p6.url)],
 markets:['India','Middle East','Asia','Europe','Global Markets'].map((t,i)=>item(t,['Our home market. Building dependable connections from Pune to businesses across India.','Connecting with emerging business and sourcing opportunities.','Exploring supplier relationships across diverse Asian markets.','Developing trade connectivity with European business networks.','A wider perspective on sourcing, partnerships and distribution.'][i],photos[i], 'Demo market')),
 gallery:photos.map((p,i)=>item(['International shipping port','Warehouse operations','Air cargo connectivity','Supply chain coordination','Packaging & handling','Industrial procurement','Commercial operations','Product technology','Wholesale goods','Business partnerships','Cargo handling','Logistics network','Container shipping','Professional coordination','Global commerce'][i],'Trading and business imagery for illustrative purposes.',p,['Shipping','Warehousing','Logistics','Products','Business'][i%5])),
 testimonials:[item('Rohan Mehta','A professional approach to sourcing, with clear communication at every step. We value the attention to our requirements.','', 'Demo testimonial',{company:'Procurement Partner',rating:'5'}),item('Priya Sharma','Reliable coordination and a genuine focus on building long-term business relationships.','', 'Demo testimonial',{company:'Distribution Partner',rating:'5'}),item('Arjun Patel','Flexible solutions and transparent conversations made the sourcing process straightforward.','', 'Demo testimonial',{company:'Wholesale Partner',rating:'5'})],
 enquiries:[],stats:[item('Trading Categories','Global Trade','', '',{value:'10+'}),item('Business Connections','Reliable Sourcing','','',{value:'25+'}),item('Markets Served','Wholesale Distribution','','',{value:'15+'}),item('Commitment to Reliability','Business Partnerships','','',{value:'100%'})]
};
const KEY='cargovera-cms-v1';
const DataContext=createContext<{data:SiteData;save:(data:SiteData)=>void;authenticated:boolean;login:(u:string,p:string)=>boolean;logout:()=>void;ready:boolean}|null>(null);
export function DataProvider({children}:{children:ReactNode}){
 const [data,setData]=useState(initialData);const [authenticated,setAuthenticated]=useState(false);const [ready,setReady]=useState(false);
 useEffect(()=>{try{const s=localStorage.getItem(KEY);if(s)setData({...initialData,...JSON.parse(s)});setAuthenticated(localStorage.getItem('cargovera-demo-auth')==='true');}catch{}setReady(true);const sync=(e:StorageEvent)=>{if(e.key===KEY&&e.newValue){try{setData(JSON.parse(e.newValue));}catch{}}if(e.key==='cargovera-demo-auth')setAuthenticated(e.newValue==='true');};window.addEventListener('storage',sync);return()=>window.removeEventListener('storage',sync);},[]);
 const save=(d:SiteData)=>{localStorage.setItem(KEY,JSON.stringify(d));setData(d);};
 const login=(u:string,p:string)=>{if(u==='admin'&&p==='admin123'){localStorage.setItem('cargovera-demo-auth','true');setAuthenticated(true);return true;}return false;};
 const logout=()=>{localStorage.removeItem('cargovera-demo-auth');setAuthenticated(false);};
 return <DataContext.Provider value={{data,save,authenticated,login,logout,ready}}>{children}</DataContext.Provider>;
}
export function useData(){const ctx=useContext(DataContext);if(!ctx)throw new Error('Content provider missing');return ctx;}
export const active=(items:Entry[])=>items.filter(x=>x.status==='Active');
