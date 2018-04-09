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



function initMap() {
        
        var coordinates = {
            input_lat: 45.490611,
            input_long: 9.210608399999956
        }

        // Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
        var styledMapType = new google.maps.StyledMapType(styleArray);

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: coordinates.input_lat, lng: coordinates.input_long},
          zoom: 15,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });
        
    var marker = new google.maps.Marker({
          position: {lat: coordinates.input_lat, lng: coordinates.input_long},
          map: map,
          title: 'Hello World!'
        });
    
        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
      }