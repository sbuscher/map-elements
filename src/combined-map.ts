import ArcGISMap from "@arcgis/core/Map";
import MapView from '@arcgis/core/views/MapView';

import { MapOptions, MapSpecfication } from "./interfaces";

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

export class CombinedMap extends HTMLElement {
  private _mapView?: MapView;
  private _container?: HTMLDivElement;

  get mapView() {
    return this._mapView;
  }

  constructor() {
    super();

    window.console.log("constructor");

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

    this._mapView = new MapView({ 
      map: mapSpec.map,
      container: mapSpec.container
    });

    await this._mapView.when();
  }
}

window.customElements.define('ex-map', CombinedMap);