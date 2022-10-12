import Map from '@arcgis/core/Map';
import MapView from 'esri/views/MapView';

export interface MappingService {
  buildMapView(mapSpec: MapSpecfication, options: MapOptions): Promise<MapView>; 
}

export interface MapSpecfication {
  map: Map,
  container: HTMLDivElement
}

export interface MapOptions {
  basemap?: string,
  center?: number[],
  zoom?: number
}

export interface WebMapOptions extends MapOptions {
  portalItemId: string
  portalUrl?: string,
}
