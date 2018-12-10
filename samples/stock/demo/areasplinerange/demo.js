
// Notice that the dataset has missing data
$.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/range.json', function (data) {

    Highcharts.stockChart('container', {

        chart: {
            type: 'areasplinerange'
        },

        rangeSelector: {
            selected: 2
        },

        title: {
            text: 'Temperature variation by day'
        },

        tooltip: {
            valueSuffix: '°C'
        },

        series: [{
            name: 'Temperatures',
            data: data
        }]

    });
});
