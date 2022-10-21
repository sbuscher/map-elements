import './styles.css';

// move into map.ts as properties
// const options = {
//   basemap: 'topo-vector',
//   center: [-118.244, 34.052],
//   zoom: 12
// }

// map.build(options);

// const mapService = new MapService();
// //const map = new Map(mapService);
// const map = new Map();

// Works
// import { CombinedMap } from './combined-map'; './combined-map';
// new CombinedMap();

// Works without MapService injection
// import { Map } from './elements/map';
// new Map();

import { MapService } from './elements/map-service';
import { Map } from './elements/map';

const mapService = new MapService();
new Map(mapService);