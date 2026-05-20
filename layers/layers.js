var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AksebilitasBerjalanDariTiapPTN_1 = new ol.format.GeoJSON();
var features_AksebilitasBerjalanDariTiapPTN_1 = format_AksebilitasBerjalanDariTiapPTN_1.readFeatures(json_AksebilitasBerjalanDariTiapPTN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AksebilitasBerjalanDariTiapPTN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AksebilitasBerjalanDariTiapPTN_1.addFeatures(features_AksebilitasBerjalanDariTiapPTN_1);
var lyr_AksebilitasBerjalanDariTiapPTN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AksebilitasBerjalanDariTiapPTN_1, 
                style: style_AksebilitasBerjalanDariTiapPTN_1,
                popuplayertitle: 'Aksebilitas Berjalan Dari Tiap PTN',
                interactive: true,
                title: '<img src="styles/legend/AksebilitasBerjalanDariTiapPTN_1.png" /> Aksebilitas Berjalan Dari Tiap PTN'
            });
var format_PTNdiSurabaya_2 = new ol.format.GeoJSON();
var features_PTNdiSurabaya_2 = format_PTNdiSurabaya_2.readFeatures(json_PTNdiSurabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTNdiSurabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNdiSurabaya_2.addFeatures(features_PTNdiSurabaya_2);
var lyr_PTNdiSurabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNdiSurabaya_2, 
                style: style_PTNdiSurabaya_2,
                popuplayertitle: 'PTN di Surabaya',
                interactive: true,
    title: 'PTN di Surabaya<br />\
    <img src="styles/legend/PTNdiSurabaya_2_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNdiSurabaya_2_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNdiSurabaya_2_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNdiSurabaya_2_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNdiSurabaya_2_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNdiSurabaya_2_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNdiSurabaya_2_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNdiSurabaya_2_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNdiSurabaya_2_8.png" /> UPNV Jatim<br />' });

lyr_ESRITopo_0.setVisible(true);lyr_AksebilitasBerjalanDariTiapPTN_1.setVisible(true);lyr_PTNdiSurabaya_2.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_AksebilitasBerjalanDariTiapPTN_1,lyr_PTNdiSurabaya_2];
lyr_AksebilitasBerjalanDariTiapPTN_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNdiSurabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Foto': 'Foto', 'Deskripsi Univ_QS WUR': 'Deskripsi Univ_QS WUR', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', });
lyr_AksebilitasBerjalanDariTiapPTN_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNdiSurabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Foto': 'ExternalResource', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'TextEdit', 'Deskripsi Univ_Fakultas': 'TextEdit', });
lyr_AksebilitasBerjalanDariTiapPTN_1.set('fieldLabels', {'fid': 'header label - visible with data', 'Access': 'no label', });
lyr_PTNdiSurabaya_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'inline label - always visible', 'Kampus': 'inline label - always visible', 'Foto': 'no label', 'Deskripsi Univ_QS WUR': 'no label', 'Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ_Fakultas': 'no label', });
lyr_PTNdiSurabaya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});