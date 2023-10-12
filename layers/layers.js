var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_cla1trees_1 = new ol.format.GeoJSON();
var features_cla1trees_1 = format_cla1trees_1.readFeatures(json_cla1trees_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cla1trees_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cla1trees_1.addFeatures(features_cla1trees_1);
var lyr_cla1trees_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cla1trees_1, 
                style: style_cla1trees_1,
                interactive: true,
                title: '<img src="styles/legend/cla1trees_1.png" /> cla-1 — trees'
            });
var format_srmap_2 = new ol.format.GeoJSON();
var features_srmap_2 = format_srmap_2.readFeatures(json_srmap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srmap_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srmap_2.addFeatures(features_srmap_2);
var lyr_srmap_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_srmap_2, 
                style: style_srmap_2,
                interactive: true,
                title: '<img src="styles/legend/srmap_2.png" /> srmap'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_cla1trees_1.setVisible(true);lyr_srmap_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_cla1trees_1,lyr_srmap_2];
lyr_cla1trees_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_srmap_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_cla1trees_1.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_srmap_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_cla1trees_1.set('fieldLabels', {'fid': 'header label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'header label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_srmap_2.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_srmap_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});