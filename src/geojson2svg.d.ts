declare module 'geojson-to-svg' {
  
    function geojson2svg(geojson: object, styles: (a: {
        properties: {
            color: string;
        }
    }) => {
        weight: number,
      color: string
    }, extent: null, projection: (coords: number[]) => void): {
        render: () => string
    }

    export = geojson2svg;
  }