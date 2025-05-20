/// time
const AM = `https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam`;
const NY = 'https://timeapi.io/api/time/current/zone?timeZone=America%2FNew_York';
const LA = 'https://timeapi.io/api/time/current/zone?timeZone=America%2FLos_Angeles';
const BOG = 'https://timeapi.io/api/time/current/zone?timeZone=America%2FBogota';
const MXC = 'https://timeapi.io/api/time/current/zone?timeZone=America%2FMexico_City';
const BA = 'https://timeapi.io/api/time/current/zone?timeZone=America%2FArgentina%2FBuenos_Aires';
const CCS = 'https://timeapi.io/api/time/current/zone?timeZone=America%2FCaracas';

const BER = 'https://timeapi.io/api/time/current/zone?timeZone=Europe%2FBerlin';
const MOS = 'https://timeapi.io/api/time/current/zone?timeZone=Europe%2FMoscow';
const PAR = 'https://timeapi.io/api/time/current/zone?timeZone=Europe%2FParis';
const LON = 'https://timeapi.io/api/time/current/zone?timeZone=Europe%2FLondon';
const MAD = 'https://timeapi.io/api/time/current/zone?timeZone=Europe%2FMadrid';



const JP = 'https://timeapi.io/api/time/current/zone?timeZone=Japan';
const SH = 'https://timeapi.io/api/time/current/zone?timeZone=Asia%2FShanghai';
const TA = 'https://timeapi.io/api/time/current/zone?timeZone=Asia%2FTel_Aviv';
const TE = 'https://timeapi.io/api/time/current/zone?timeZone=Asia%2FTehran';


function fetchData() {

  fetch(amsterdam,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('ams').innerHTML = data.time;
    
})

fetch(NY,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('newy').innerHTML = data.time;
    
})

fetch(LA,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('lax').innerHTML = data.time;
    
})

fetch(BOG,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('bog').innerHTML = data.time;
    
})

fetch(MXC,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('mxc').innerHTML = data.time;
    
})

fetch(BA,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('ba').innerHTML = data.time;
    
})

fetch(CCS,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('ccs').innerHTML = data.time;
    
})


fetch(NY,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('newy').innerHTML = data.time;
    
})



fetch(MOS,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('mos').innerHTML = data.time;
    
})

fetch(AM,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('am').innerHTML = data.time;
    
})
fetch(LON,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('lon').innerHTML = data.time;
    
})
fetch(MAD,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('mad').innerHTML = data.time;
    
})
fetch(BER,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('ber').innerHTML = data.time;
    
})
fetch(NY,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('newy').innerHTML = data.time;
    
})

fetch(JP,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('jp').innerHTML = data.time;
    
})

fetch(SH,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('sh').innerHTML = data.time;
    
})

fetch(TA,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('ta').innerHTML = data.time;
    
})

fetch(TE,)
.then((response) => {
   return response.json();
 })
.then((data) => {  
    document.getElementById('te').innerHTML = data.time;
    
})




}






// Call fetchData every minute (10000 milliseconds or 10sec)
setInterval(fetchData, 60000);

// Call it immediately when the page loads
//Api calll at the bottom of file. Api not in very goo shape at the time.

// script for map, remember to link


am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

  
    
    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    var chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "none",
        panY: "none",
        homeZoomLevel: 1.5,
        wheelY: "none",
        wheelx: "none",
        projection: am5map.geoMercator()
        
      })
    );
    
    var colorSet = am5.ColorSet.new(root, {});
    

    //background color setting
    var backgroundSeries = chart.series.unshift(
  am5map.MapPolygonSeries.new(root, {})
);

backgroundSeries.mapPolygons.template.setAll({
  fill: am5.color(0xEEF1DA),
  stroke: am5.color(0xEEF1DA),
});

backgroundSeries.data.push({
  geometry: am5map.getGeoRectangle(90, 180, -90, -180)
});



    // Create main polygon series for time zone areas
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var areaSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldTimeZoneAreasLow
      })
    );
    
   

    var areaPolygonTemplate = areaSeries.mapPolygons.template;
    areaPolygonTemplate.setAll({ fillOpacity: 0.6 });
    areaPolygonTemplate.adapters.add("fill", function (fill, target) {
      return am5.Color.saturate(
        colorSet.getIndex(areaSeries.mapPolygons.indexOf(target)),
        0.5
      );
    });
    
    areaPolygonTemplate.states.create("hover", { fillOpacity: 0.8 });
    
    // Create main polygon series for time zones
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var zoneSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldTimeZonesLow
      })
    );
    
    zoneSeries.mapPolygons.template.setAll({
      fill: am5.color(0x000000),
      fillOpacity: 0.08
    });
    
    var zonePolygonTemplate = zoneSeries.mapPolygons.template;
    zonePolygonTemplate.setAll({ interactive: true, tooltipText: "{id}" });
    zonePolygonTemplate.states.create("hover", { fillOpacity: 0.3 });
    


    
    // labels
    var labelSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    labelSeries.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
          text: "{id}",
          populateText: true,
          centerX: am5.p50,
          centerY: am5.p50,
          fontSize: "0.7em"
        })
      });
    });
    
    // create labels for each zone and center on a zoom level on start
    zoneSeries.events.on("datavalidated", () => {
      am5.array.each(zoneSeries.dataItems, (dataItem) => {
        var centroid = dataItem.get("mapPolygon").visualCentroid();
        
      });
      chart.goHome();
    });

    


    
    // Add zoom control
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
    //var zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
    //zoomControl.homeButton.set("visible", true);
    

   

    // Add labels and controls
    var cont = chart.children.push(
      am5.Container.new(root, {
        layout: root.horizontalLayout,
        x: 20,
        y: 40
      })
    );
    
    
    // Make stuff animate on load
    chart.appear(1000, 100);
    
    }); // end am5.ready()



    //hi there
    fetchData();