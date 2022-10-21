import ArcGISMap from "@arcgis/core/Map";
import MapView from '@arcgis/core/views/MapView';


const template = document.createElement('template');

template.innerHTML = `
  <link rel='stylesheet' href='https://js.arcgis.com/next/esri/themes/light/main.css'></link>
  <style>
  .map-container {
    width: 100%;
    height: 100%;
  }
  </style>
  <div class='map-container'></div>
`
export class Map extends HTMLElement {
  private _container?: HTMLDivElement;

  constructor() {
    super();  

    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this._container = this.shadowRoot?.querySelector<HTMLDivElement>('.map-container')!;
    this._init();
  }

  private async _init() {
    const map = new ArcGISMap({
      basemap: 'osm'
    });

    const mapView = new MapView({
      map: map,
      container: this._container!,
      zoom: 2
    });
  }
}

window.customElements.define('ex-map', Map);