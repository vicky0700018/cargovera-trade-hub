import hero from '@/assets/trade-hero.jpg';
import port from '@/assets/port.jpg.asset.json';
import warehouse from '@/assets/warehouse.jpg.asset.json';
import cargo from '@/assets/cargo.jpg.asset.json';
import distribution from '@/assets/photo-0.jpg.asset.json';
import aisles from '@/assets/photo-1.jpg.asset.json';
import electronics from '@/assets/photo-2.jpg.asset.json';
import circuits from '@/assets/photo-4.jpg.asset.json';
import wholesale from '@/assets/photo-5.jpg.asset.json';
import dubai from '@/assets/photo-9.jpg.asset.json';
import containers from '@/assets/photo-10.jpg.asset.json';
import meeting from '@/assets/photo-11.jpg.asset.json';
import vessel from '@/assets/cargo-vessel.jpg.asset.json';
import partnership from '@/assets/trade-partnership.jpg.asset.json';
import team from '@/assets/procurement-team.jpg.asset.json';
import discussion from '@/assets/supplier-discussion.jpg.asset.json';
import coordination from '@/assets/contract-coordination.jpg.asset.json';
import production from '@/assets/industrial-production.jpg.asset.json';
import manufacturing from '@/assets/precision-manufacturing.jpg.asset.json';
import equipment from '@/assets/industrial-equipment.jpg.asset.json';
import consumer from '@/assets/consumer-electronics.jpg.asset.json';
import packaging from '@/assets/packaging-supplies.jpg.asset.json';
import commercial from '@/assets/commercial-supplies.jpg.asset.json';
import air from '@/assets/air-freight.jpg.asset.json';
import road from '@/assets/international-port.jpg.asset.json';
import airport from '@/assets/global-logistics.jpg.asset.json';
import exportTruck from '@/assets/export-operations.jpg.asset.json';

const photo = (url: string, alt: string) => ({ url, alt });
export const tradeImages = {
  hero: photo(hero, 'Container ship beside cranes at an international cargo terminal'),
  port: photo(port.url, 'Shipping containers and port cranes beside the sea'),
  warehouse: photo(warehouse.url, 'Stocked warehouse aisles ready for wholesale distribution'),
  cargo: photo(cargo.url, 'Cargo aircraft on the airport apron at sunset'),
  distribution: photo(distribution.url, 'Large distribution facility with organized inventory'),
  aisles: photo(aisles.url, 'Palletized cartons on tall warehouse storage racks'),
  electronics: photo(electronics.url, 'Technician working on electronic product assemblies'),
  circuits: photo(circuits.url, 'Electronic circuit boards and industrial components'),
  wholesale: photo(wholesale.url, 'Consumer goods stocked on wholesale retail shelves'),
  dubai: photo(dubai.url, 'Dubai skyline representing Middle Eastern business markets'),
  containers: photo(containers.url, 'Aerial view of container lanes at a busy freight terminal'),
  meeting: photo(meeting.url, 'Business team discussing requirements around a meeting table'),
  vessel: photo(vessel.url, 'Cargo vessel loaded with containers underneath dockside cranes'),
  partnership: photo(partnership.url, 'Business partners greeting each other during a professional meeting'),
  team: photo(team.url, 'Procurement team collaborating in a modern office'),
  discussion: photo(discussion.url, 'Supplier coordination with documents, charts and laptops'),
  coordination: photo(coordination.url, 'Business professional preparing for a trade meeting'),
  production: photo(production.url, 'Industrial premises with freight handling infrastructure'),
  manufacturing: photo(manufacturing.url, 'Precision metalworking with machinery and welding sparks'),
  equipment: photo(equipment.url, 'Industrial engineer reviewing product specifications and equipment'),
  consumer: photo(consumer.url, 'Headphones and consumer electronics arranged on a work surface'),
  packaging: photo(packaging.url, 'Paper packaging bags and handles for commercial supplies'),
  commercial: photo(commercial.url, 'Modern commercial workspace and business equipment'),
  air: photo(air.url, 'Aircraft wing above the clouds on an international flight'),
  road: photo(road.url, 'Freight truck transporting goods along an international road corridor'),
  airport: photo(airport.url, 'Passenger and cargo aircraft at an international airport terminal'),
  exportTruck: photo(exportTruck.url, 'Freight trailer transporting export goods at sunset'),
};

export const galleryImages = [
  tradeImages.containers, tradeImages.aisles, tradeImages.cargo, tradeImages.electronics,
  tradeImages.circuits, tradeImages.wholesale, tradeImages.meeting, tradeImages.vessel,
  tradeImages.manufacturing, tradeImages.equipment, tradeImages.packaging, tradeImages.production,
  tradeImages.air, tradeImages.road, tradeImages.airport, tradeImages.exportTruck,
];
export const galleryCategories = ['Shipping', 'Warehousing', 'Logistics', 'Products', 'Products', 'Products', 'Business', 'Shipping', 'Products', 'Products', 'Products', 'Warehousing', 'Logistics', 'Logistics', 'Logistics', 'Logistics'];