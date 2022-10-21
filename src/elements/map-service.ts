import MapView from '@arcgis/core/views/MapView';
import { MapOptions, MappingService, MapSpecfication } from '../interfaces';

export class MapService {
  private _mapView?: MapView;

  constructor() {
    window.console.log("MapService constructor");
  }

  buildMapView = async (mapSpec: MapSpecfication, options: MapOptions) => {
    // this._mapView = new MapView({ ...mapSpec, ...options });
    this._mapView = new MapView({ 
      map: mapSpec.map,
      container: mapSpec.container
    });

    await this._mapView.when();

    window.console.log("view initialized", this._mapView)

    return this._mapView;
  }

  heartbeat = () => {
    window.console.log('thump theump');
  }
}