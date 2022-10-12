import ArcGISMap from "@arcgis/core/Map";
import MapView from '@arcgis/core/views/MapView';

import { MapOptions, MapSpecfication } from "../interfaces";
import { MapService } from './map-service';

const template = document.createElement('template');
template.innerHTML = `
  <link rel='stylesheet' href='https://js.arcgis.com/next/esri/themes/light/main.css'></link>
  <style>
  .map-container {
    width: 100%;
    height: 400px;
  }
  </style>
  <div class='map-container'></div>
`

export class Map extends HTMLElement {
  private _mapView?: MapView;
  private _container?: HTMLDivElement;

  get mapView() {
    return this._mapView;
  }

  constructor(/*private mapService: MapService*/) {
    super();

    window.console.log("map constructor");

    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this._container = this.shadowRoot?.querySelector<HTMLDivElement>('.map-container')!;
    this._init();
  }

  private async _init() {
    if (this._mapView) {
      this._mapView.container = this._container!;
      return;
    }

    const map = new ArcGISMap({
      basemap: 'osm'
    });

    const mapSpec: MapSpecfication = {
      map: map,
      container: this._container!
    }

    const mapService = new MapService();
    mapService.heartbeat();
    mapService.buildMapView(mapSpec, {});
  }
}

window.customElements.define('ex-map', Map);