QUnit.test('Test Awesome calculations on data updates.', function (assert) {
    var chart = Highcharts.stockChart('container', {
        yAxis: [
            {
                height: '60%'
            },
            {
                top: '65%',
                height: '35%',
                offset: 0
            }
        ],
        series: [
            {
                id: 'main',
                type: 'candlestick',
                data: [
                    [1536327000000, 221.85, 225.37, 220.71, 221.3, 37619800],
                    [1536586200000, 220.95, 221.85, 216.47, 218.33, 39516500],
                    [1536672600000, 218.01, 224.3, 216.56, 223.85, 35749000],
                    [1536759000000, 224.94, 225, 219.84, 221.07, 49278700],
                    [1536845400000, 223.52, 228.35, 222.57, 226.41, 41706400],
                    [1536931800000, 225.75, 226.84, 222.52, 223.84, 31999300],
                    [1537191000000, 222.15, 222.95, 217.27, 217.88, 37195100],
                    [1537277400000, 217.79, 221.85, 217.12, 218.24, 31571700],
                    [1537363800000, 218.5, 219.62, 215.3, 218.37, 27123800],
                    [1537450200000, 220.24, 222.28, 219.15, 220.03, 26608800],
                    [1537536600000, 220.78, 221.36, 217.29, 217.66, 96246700],
                    [1537795800000, 216.82, 221.26, 216.63, 220.79, 27693400],
                    [1537882200000, 219.75, 222.82, 219.7, 222.19, 24554400],
                    [1537968600000, 221, 223.75, 219.76, 220.42, 23984700],
                    [1538055000000, 223.82, 226.44, 223.54, 224.95, 30181200],
                    [1538141400000, 224.79, 225.84, 224.02, 225.74, 22929400],
                    [1538400600000, 227.95, 229.42, 226.35, 227.26, 23600800],
                    [1538487000000, 227.25, 230, 226.63, 229.28, 24788200],
                    [1538573400000, 230.05, 233.47, 229.78, 232.07, 28654800],
                    [1538659800000, 230.78, 232.35, 226.73, 227.99, 32042000],
                    [1538746200000, 227.96, 228.41, 220.58, 224.29, 33580500],
                    [1539005400000, 222.21, 224.8, 220.2, 223.77, 29663900],
                    [1539091800000, 223.64, 227.27, 222.25, 226.87, 26891000],
                    [1539178200000, 225.46, 226.35, 216.05, 216.36, 41990600],
                    [1539264600000, 214.52, 219.5, 212.32, 214.45, 53124400],
                    [1539351000000, 220.42, 222.88, 216.84, 222.11, 40337900],
                    [1539610200000, 221.16, 221.83, 217.27, 217.36, 30791000],
                    [1539696600000, 218.93, 222.99, 216.76, 222.15, 29184000],
                    [1539783000000, 222.3, 222.64, 219.34, 221.19, 22885400],
                    [1539869400000, 217.86, 219.74, 213, 216.02, 32581300],
                    [1539955800000, 218.06, 221.26, 217.43, 219.31, 33078700],
                    [1540215000000, 219.79, 223.36, 218.94, 220.65, 28792100],
                    [1540301400000, 215.83, 223.25, 214.7, 222.73, 38767800],
                    [1540387800000, 222.6, 224.23, 214.54, 215.09, 40925500],
                    [1540474200000, 217.71, 221.38, 216.75, 219.8, 29855800],
                    [1540560600000, 215.9, 220.19, 212.67, 216.3, 47258400],
                    [1540819800000, 219.19, 219.69, 206.09, 212.24, 45935500],
                    [1540906200000, 211.15, 215.18, 209.27, 213.3, 36660000],
                    [1540992600000, 216.88, 220.45, 216.62, 218.86, 38358900]
                ]
            },
            {
                yAxis: 1,
                type: 'ao',
                linkedTo: 'main',
                lineWidth: 1
            }
        ]
    });

    var mainSeries = chart.series[0],
        awesomeSeries = chart.series[1],
        longerPeriod = 34,
        updatedPointsColor = [];

    function toFastAOWithRound(arr) {
        return arr.map(point => parseFloat(point.toFixed(4)));
    }

    assert.strictEqual(
        mainSeries.getColumn('x').length,
        awesomeSeries.dataTable.rowCount + longerPeriod - 1,
        'Initial number of Awesome points is correct'
    );

    mainSeries.addPoint([
        1542378600000,
        190.5,
        194.97,
        189.46,
        193.53,
        36928300
    ]);

    assert.strictEqual(
        mainSeries.getColumn('x').length,
        awesomeSeries.dataTable.rowCount + longerPeriod - 1,
        'After addPoint number of Awesome points is correct'
    );

    mainSeries.setData([
        [1456441200000, 7099, 7150, 7060, 7104],
        [1456700400000, 7089.3, 7169, 6884.85, 7058.4],
        [1456786800000, 7097.55, 7278.2, 7092.25, 7269.1],
        [1456873200000, 7365, 7410, 7344.15, 7398.3],
        [1456959600000, 7429, 7500, 7407, 7489.45],
        [1457046000000, 7486.05, 7520, 7443, 7505.45],
        [1457391600000, 7490.15, 7535, 7457.3, 7496.25],
        [1457478000000, 7463.8, 7588, 7451.75, 7579.55],
        [1457564400000, 7583.3, 7584.6, 7491.6, 7540.1],
        [1457650800000, 7551, 7598, 7508, 7569.45],
        [1457910000000, 7611.35, 7647, 7584.65, 7598.35],
        [1457996400000, 7590.65, 7592, 7532.15, 7545.8],
        [1458082800000, 7541.75, 7598, 7492, 7587.35],
        [1458169200000, 7650, 7660.5, 7545.1, 7576.8],
        [1458255600000, 7600.15, 7668.4, 7587.8, 7658.95],
        [1458514800000, 7677.45, 7773.4, 7672.15, 7763.7],
        [1458601200000, 7748, 7791.55, 7714, 7782.8],
        [1458687600000, 7770, 7809.95, 7738.8, 7801.2],
        [1459116000000, 7777.95, 7796.7, 7686.4, 7718.65],
        [1459202400000, 7710, 7751.95, 7676.65, 7699.45],
        [1459288800000, 7742.1, 7822, 7726.8, 7814.9],
        [1459375200000, 7808.85, 7848.95, 7783.3, 7811.55],
        [1459461600000, 7780.05, 7800, 7733.7, 7776.2],
        [1459720800000, 7788.55, 7839.9, 7767.15, 7820.7],
        [1459807200000, 7769.2, 7790.15, 7645, 7657.7],
        [1459893600000, 7677, 7687.3, 7639, 7667.75],
        [1459980000000, 7664.75, 7670.7, 7590.1, 7599.3],
        [1460066400000, 7599.95, 7629.9, 7584.8, 7611.85],
        [1460325600000, 7628.95, 7743.5, 7566, 7735.3],
        [1460412000000, 7740.5, 7769, 7717.15, 7764.6],
        [1460498400000, 7824.5, 7926.8, 7818.7, 7902.55],
        [1460930400000, 7945.5, 7962, 7885.3, 7955.8],
        [1461103200000, 7985, 7996.5, 7930.15, 7969.9],
        [1461189600000, 8007.5, 8021.9, 7924, 7951.75],
        [1461276000000, 7936.4, 7980, 7922, 7952.1],
        [1461535200000, 7952, 7952, 7867.6, 7901.5],
        [1461621600000, 7878, 8029, 7871.1, 8017.2],
        [1461708000000, 7993.5, 8035.15, 7991, 8029.95],
        [1461794400000, 8024, 8037, 7884, 7895.3],
        [1461880800000, 7887, 7950, 7831.1, 7894.8],
        [1462140000000, 7858.2, 7874.45, 7805.1, 7840.1],
        [1462226400000, 7848.75, 7949.95, 7770.1, 7783.8],
        [1462312800000, 7755, 7789, 7725, 7732.75],
        [1462399200000, 7741, 7817.5, 7733, 7773.1],
        [1462485600000, 7733.7, 7770.6, 7700.95, 7760.25]
    ]);

    assert.deepEqual(
        toFastAOWithRound(awesomeSeries.getColumn('y')),
        [
            268.5088,
            285.2115,
            266.6546,
            249.4397,
            240.6838,
            223.2821,
            199.1612,
            175.0496,
            147.0401,
            89.3869,
            45.8001,
            11.3172
        ],
        'Correct values'
    );

    assert.strictEqual(
        mainSeries.getColumn('x').length,
        awesomeSeries.dataTable.rowCount + longerPeriod - 1,
        'After setData number of Awesome points is correct'
    );

    awesomeSeries.update({
        greaterBarColor: '#ffdddd',
        lowerBarColor: '#ddffff',
        color: '#555'
    });

    awesomeSeries.points.forEach(function (point, i) {
        updatedPointsColor[i] = point.color;
    });

    assert.deepEqual(
        updatedPointsColor,
        [
            '#555',
            '#555',
            '#555',
            '#555',
            '#555',
            '#555',
            '#555',
            '#555',
            '#555',
            '#555',
            '#555',
            '#555'
        ],
        'Awesome series bars color changed'
    );

    awesomeSeries.update({
        greaterBarColor: '#ffdd55',
        lowerBarColor: '#00ddf0',
        color: null
    });

    awesomeSeries.points.forEach(function (point, i) {
        updatedPointsColor[i] = point.color;
    });

    assert.deepEqual(
        updatedPointsColor,
        [
            '#ffdd55',
            '#ffdd55',
            '#00ddf0',
            '#00ddf0',
            '#00ddf0',
            '#00ddf0',
            '#00ddf0',
            '#00ddf0',
            '#00ddf0',
            '#00ddf0',
            '#00ddf0',
            '#00ddf0'
        ],
        'Awesome series bars color changed'
    );

    mainSeries.points[mainSeries.points.length - 1].remove();

    assert.deepEqual(
        toFastAOWithRound(awesomeSeries.getColumn('y')),
        [
            268.5088,
            285.2115,
            266.6546,
            249.4397,
            240.6838,
            223.2821,
            199.1612,
            175.0496,
            147.0401,
            89.3869,
            45.8001
        ],
        'Correct values after point.remove()'
    );
});
