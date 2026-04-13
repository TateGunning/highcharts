QUnit.test('Reset zoon button with language options', function (assert) {
    const chart = Highcharts.chart('container', {
        chart: {
            zoomType: 'x'
        },
        lang: {
            resetZoom: 'Test zoom label',
            resetZoomTitle: 'Test zoom title'
        },
        series: [{
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }]
    });
    const controller = new TestController(chart);

    controller.pan([300, 200], [200, 200]);

    assert.strictEqual(
        chart.resetZoomButton.textStr,
        'Test zoom label',
        'Zoom button should have a correct label #23429.'
    );
    assert.strictEqual(
        chart.resetZoomButton.element.querySelector('title').textContent,
        'Test zoom title',
        'Zoom title should be correct #23429.'
    );
});
