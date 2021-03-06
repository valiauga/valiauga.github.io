var styleArray = [
  {
    featureType: "all",
    stylers: [
      { saturation: -180 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#00ffee" },
      { saturation: 50 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];



//function initMap() {
//        var StyledMapType = new google.maps.StyledMapType(styleArray);
//        // Styles a map in night mode.
//        var map = new google.maps.Map(document.getElementById('map'), {
//          center: {lat: 45.490611, lng: -9.210608399999956},
//          zoom: 12,
//        
//        });
////        map.StyledMapType(styles[, styleArray[]);
//        map.mapTypes.set('styled_map', styledMapType);
//        map.setMapTypeId('styled_map');
// 
//      }

function initMap() {

        // Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
        var styledMapType = new google.maps.StyledMapType(styleArray);

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 45.490611, lng: 9.210608399999956},
          zoom: 17,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
      }