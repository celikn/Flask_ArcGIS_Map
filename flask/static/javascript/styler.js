// Define a unique value renderer and symbols
const trailsRenderer = {
    type: "simple",
    symbol: {
        color: "#BA55D3",
        type: "simple-line",
        style: "solid"
    },

    visualVariables: [
        {
            type: "size",
            field: "ELEV_GAIN",
            minDataValue: 0,
            maxDataValue: 2300,
            minSize: "3px",
            maxSize: "7px"
        }
    ]
};


const bikeTrailsRenderer = {
    type: "simple",
    symbol: {
      type: "simple-line",
      style: "short-dot",
      color: "#FF91FF",
      width: "1px"
    }
  };


 
  const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40],  // Orange
    outline: {
        color: [255, 255, 255], // White
        width: 1
    }
 };