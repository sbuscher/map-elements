import 'reflect-metadata';
import { injectable } from 'tsyringe';
import MapView from '@arcgis/core/views/MapView';

import { MapOptions, MappingService, MapSpecfication } from '../interfaces';

// @injectable()
export class MapService implements MappingService {
  constructor() {
    window.console.log("MapService constructor");
  }

  private _mapView?: MapView;

  buildMapView = async (mapSpec: MapSpecfication, options: MapOptions) => {
    window.console.log("buildMapView()");
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