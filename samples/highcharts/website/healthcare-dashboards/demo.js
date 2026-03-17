// const demoCard = document.getElementById('demoCard');
// const chartDescription = document.getElementById('chartDescription');
// const announce = document.getElementById('announce');

// function basic() {
//     Highcharts.setOptions({
//         chart: {
//             styledMode: true
//         }
//     });
//     Dashboards.board('container', {
//         dataPool: {
//             connectors: [{
//                 id: 'micro-element',
//                 type: 'JSON',
//                 firstRowAsNames: false,
//                 columnIds: ['Food', 'Vitamin A',  'Iron'],
//                 data: [
//                     ['Beef Liver', 6421, 6.5],
//                     ['Lamb Liver', 2122, 6.5],
//                     ['Cod Liver Oil', 1350, 0.9],
//                     ['Mackerel', 388, 1],
//                     ['Tuna', 214, 0.6]
//                 ]
//             }]
//         },
//         editMode: {
//             enabled: true,
//             contextMenu: {
//                 enabled: true,
//                 items: ['editMode', 'viewFullscreen']
//             }
//         },
//         gui: {
//             layouts: [{
//                 rows: [{
//                     cells: [{
//                         id: 'kpi-wrapper',
//                         layout: {
//                             rows: [{
//                                 cells: [{
//                                     id: 'kpi-vitamin-a'
//                                 }, {
//                                     id: 'kpi-iron'
//                                 }]
//                             }]
//                         }
//                     }, {
//                         id: 'dashboard-col-0'
//                     }, {
//                         id: 'dashboard-col-1'
//                     }]
//                 }, {
//                     cells: [{
//                         id: 'dashboard-col-2'
//                     }]
//                 }]
//             }]
//         },
//         components: [{
//             type: 'KPI',
//             renderTo: 'kpi-vitamin-a',
//             value: 900,
//             valueFormat: '{value}',
//             title: 'Vitamin A',
//             subtitle: 'daily recommended dose'
//         }, {
//             type: 'KPI',
//             renderTo: 'kpi-iron',
//             value: 8,
//             title: 'Iron',
//             valueFormat: '{value}',
//             subtitle: 'daily recommended dose'
//         }, {
//             sync: {
//                 visibility: true,
//                 highlight: true,
//                 extremes: true
//             },
//             connector: {
//                 id: 'micro-element',
//                 columnAssignment: [{
//                     seriesId: 'Vitamin A',
//                     data: ['Food', 'Vitamin A']
//                 }]
//             },
//             renderTo: 'dashboard-col-0',
//             type: 'Highcharts',
//             chartOptions: {
//                 xAxis: {
//                     type: 'category',
//                     accessibility: {
//                         description: 'Groceries'
//                     }
//                 },
//                 yAxis: {
//                     title: {
//                         text: 'mcg'
//                     },
//                     plotLines: [{
//                         value: 900,
//                         zIndex: 7,
//                         dashStyle: 'shortDash',
//                         label: {
//                             text: 'RDA',
//                             align: 'right',
//                             style: {
//                                 color: '#B73C28'
//                             }
//                         }
//                     }]
//                 },
//                 credits: {
//                     enabled: false
//                 },
//                 plotOptions: {
//                     series: {
//                         marker: {
//                             radius: 6
//                         }
//                     }
//                 },
//                 legend: {
//                     enabled: true,
//                     verticalAlign: 'top'
//                 },
//                 chart: {
//                     animation: false,
//                     type: 'column',
//                     spacing: [30, 30, 30, 20]
//                 },
//                 title: {
//                     text: ''
//                 },
//                 tooltip: {
//                     valueSuffix: ' mcg',
//                     stickOnContact: true
//                 },
//                 lang: {
//                     accessibility: {
// eslint-disable-next-line max-len
//                         chartContainerLabel: 'Vitamin A in food. Highcharts ' +
//                         'Interactive Chart.'
//                     }
//                 },
//                 accessibility: {
// eslint-disable-next-line max-len
//                     description: `The chart is displaying the Vitamin A amount in
// eslint-disable-next-line max-len
//                 micrograms for some groceries. There is a plotLine demonstrating
//                 the daily Recommended Dietary Allowance (RDA) of 900
//                 micrograms.`,
//                     point: {
//                         valueSuffix: ' mcg'
//                     }
//                 }
//             }
//         }, {
//             renderTo: 'dashboard-col-1',
//             sync: {
//                 visibility: true,
//                 highlight: true,
//                 extremes: true
//             },
//             connector: {
//                 id: 'micro-element',
//                 columnAssignment: [{
//                     seriesId: 'Iron',
//                     data: ['Food', 'Iron']
//                 }]
//             },
//             type: 'Highcharts',
//             chartOptions: {
//                 xAxis: {
//                     type: 'category',
//                     accessibility: {
//                         description: 'Groceries'
//                     }
//                 },
//                 yAxis: {
//                     title: {
//                         text: 'mcg'
//                     },
//                     max: 8,
//                     plotLines: [{
//                         value: 8,
//                         dashStyle: 'shortDash',
//                         label: {
//                             text: 'RDA',
//                             align: 'right',
//                             style: {
//                                 color: '#B73C28'
//                             }
//                         }
//                     }]
//                 },
//                 credits: {
//                     enabled: false
//                 },
//                 plotOptions: {
//                     series: {
//                         marker: {
//                             radius: 6
//                         }
//                     }
//                 },
//                 title: {
//                     text: ''
//                 },
//                 legend: {
//                     enabled: true,
//                     verticalAlign: 'top'
//                 },
//                 chart: {
//                     animation: false,
//                     type: 'column',
//                     spacing: [30, 30, 30, 20]
//                 },
//                 tooltip: {
//                     valueSuffix: ' mcg',
//                     stickOnContact: true
//                 },
//                 lang: {
//                     accessibility: {
//                         chartContainerLabel: 'Iron in food. Highcharts ' +
//                         'Interactive Chart.'
//                     }
//                 },
//                 accessibility: {
//                     description: `The chart is displaying the Iron amount in
// eslint-disable-next-line max-len
//                 micrograms for some groceries. There is a plotLine demonstrating
//                 the daily Recommended Dietary Allowance (RDA) of 8
//                 micrograms.`,
//                     point: {
//                         valueSuffix: ' mcg'
//                     }
//                 }
//             }
//         }, {
//             renderTo: 'dashboard-col-2',
//             connector: {
//                 id: 'micro-element'
//             },
//             type: 'Grid',
//             sync: {
//                 highlight: true,
//                 visibility: true
//             },
//             gridOptions: {
//                 credits: {
//                     enabled: false
//                 }
//             }
//         }]
//     }, true);

// }

// function sync() {
//     Highcharts.setOptions({
//         chart: {
//             type: 'area',
//             spacingTop: 20,
//             spacingBottom: 20,
//             styledMode: true
//         },
//         title: {
//             align: 'left',
//             margin: 0,
//             x: 30
//         },
//         credits: {
//             enabled: false
//         },
//         legend: {
//             enabled: false
//         },
//         xAxis: {
//             crosshair: true,
//             labels: {
//                 format: '{value} km'
//             },
//             accessibility: {
//                 description: 'Kilometers',
//                 rangeDescription: '0km to 6.5km'
//             }
//         },
//         yAxis: {
//             title: {
//                 text: null
//             }
//         },
//         tooltip: {
//             fixed: true,
//             position: {
//                 align: 'right',
//                 relativeTo: 'spacingBox',
//                 y: -2
//             },
//             padding: 2,
//             pointFormat: '{point.y}',
//             headerFormat: '',
//             shadow: false,
//             valueDecimals: 0
//         }
//     });

//     document.getElementById('container').innerHTML = `
//    <div class="cell" id="dashboard-cell-0"></div>
//         <div class="cell" id="dashboard-cell-1"></div>
//         <div class="cell" id="dashboard-cell-2"></div>
// `;


//     Dashboards.board('container', {
//         dataPool: {
//             connectors: [{
//                 id: 'activity-data',
//                 type: 'JSON',
//                 beforeParse: function (data) {
//                     return [
//                         data.xData,
//                         data.datasets[0].data,
//                         data.datasets[1].data,
//                         data.datasets[2].data
//                     ];
//                 },
//                 dataUrl: 'https://www.highcharts.com/samples/data/activity.json',
//                 firstRowAsNames: false,
//                 orientation: 'columns',
//                 columnIds: ['x', 'Speed', 'Elevation', 'Heart rate']
//             }]
//         },
//         components: [{
//             connector: {
//                 id: 'activity-data',
//                 columnAssignment: [{
//                     seriesId: 'Speed',
//                     data: ['x', 'Speed']
//                 }]
//             },
//             renderTo: 'dashboard-cell-0',
//             type: 'Highcharts',
//             sync: {
//                 highlight: true
//             },
//             chartOptions: {
//                 title: {
//                     text: 'Speed'
//                 },
//                 tooltip: {
//                     valueDecimals: 1,
//                     valueSuffix: ' km/h'
//                 },
//                 series: [{
//                     type: 'line',
//                     id: 'Speed'
//                 }]
//             }
//         }, {
//             connector: {
//                 id: 'activity-data',
//                 columnAssignment: [{
//                     seriesId: 'Elevation',
//                     data: ['x', 'Elevation']
//                 }]
//             },
//             renderTo: 'dashboard-cell-1',
//             type: 'Highcharts',
//             sync: {
//                 highlight: true
//             },
//             chartOptions: {
//                 title: {
//                     text: 'Elevation'
//                 },
//                 tooltip: {
//                     valueSuffix: ' m'
//                 }
//             }
//         }, {
//             sync: {
//                 highlight: true
//             },
//             connector: {
//                 id: 'activity-data',
//                 columnAssignment: [{
//                     seriesId: 'Heart rate',
//                     data: ['x', 'Heart rate']
//                 }]
//             },
//             renderTo: 'dashboard-cell-2',
//             type: 'Highcharts',
//             chartOptions: {
//                 title: {
//                     text: 'Heart rate'
//                 },
//                 tooltip: {
//                     valueSuffix: ' bpm'
//                 }
//             }
//         }]
//     }, true);

// }
async function diet() {
    const FAT_THRESHOLD   = 65;
    const SUGAR_THRESHOLD = 50;

    const RAW = [
        {
            country: 'Belgium',
            code: 'BE',
            fat: 95,
            sugar: 95,
            obesity: 13.8
        },
        {
            country: 'Germany',
            code: 'DE',
            fat: 86.5,
            sugar: 102.9,
            obesity: 14.7
        },
        {
            country: 'Finland',
            code: 'FI',
            fat: 80.8,
            sugar: 91.5,
            obesity: 15.8
        },
        {
            country: 'Netherlands',
            code: 'NL',
            fat: 80.4,
            sugar: 102.5,
            obesity: 12
        },
        {
            country: 'Sweden',
            code: 'SE',
            fat: 80.3,
            sugar: 86.1,
            obesity: 11.8
        },
        {
            country: 'Spain',
            code: 'ES',
            fat: 78.4,
            sugar: 70.1,
            obesity: 16.6
        },
        {
            country: 'France',
            code: 'FR',
            fat: 74.2,
            sugar: 68.5,
            obesity: 14.5
        },
        {
            country: 'Norway',
            code: 'NO',
            fat: 73.5,
            sugar: 83.1,
            obesity: 10
        },
        {
            country: 'United Kingdom',
            code: 'UK',
            fat: 71,
            sugar: 93.2,
            obesity: 24.7
        },
        {
            country: 'Italy',
            code: 'IT',
            fat: 69.2,
            sugar: 57.6,
            obesity: 10.4
        },
        {
            country: 'Russia',
            code: 'RU',
            fat: 68.6,
            sugar: 20,
            obesity: 16
        },
        {
            country: 'United States',
            code: 'US',
            fat: 65.5,
            sugar: 126.4,
            obesity: 35.3
        },
        {
            country: 'Hungary',
            code: 'HU',
            fat: 65.4,
            sugar: 50.8,
            obesity: 28.5
        },
        {
            country: 'Portugal',
            code: 'PT',
            fat: 63.4,
            sugar: 51.8,
            obesity: 15.4
        },
        {
            country: 'New Zealand',
            code: 'NZ',
            fat: 64,
            sugar: 82.9,
            obesity: 31.3
        }
    ];

    function statusText(r) {
        if (r.fat > FAT_THRESHOLD && r.sugar > SUGAR_THRESHOLD) {
            return 'Both exceeded';
        }
        if (r.fat   > FAT_THRESHOLD) {
            return 'Fat only';
        }
        if (r.sugar > SUGAR_THRESHOLD) {
            return 'Sugar only';
        }
        return 'Within limits';
    }

    function sparklineConfig(max, threshold, color, format) {
        return {
            type: 'sparkline',
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 30,
                    backgroundColor: 'transparent'
                },
                xAxis: { visible: false },
                yAxis: {
                    visible: false,
                    min: 0,
                    max,
                    plotLines: threshold ? [{
                        value: threshold,
                        color,
                        width: 2,
                        dashStyle: 'Dash'
                    }] : []
                },
                tooltip: { enabled: false },
                plotOptions: {
                    bar: {
                        borderWidth: 0,
                        borderRadius: 2,
                        color,
                        dataLabels: {
                            enabled: true,
                            format: format,
                            style: {
                                fontSize: '10px',
                                fontWeight: '500',
                                color: '#1c1a17',
                                textOutline: 'none'
                            }
                        }
                    }
                }
            }
        };
    }

    // ── Aggregate stats ──────────────────────────────────────
    const n = RAW.length;
    const AGG = {
        fat: (RAW.reduce((s, r) => s + r.fat, 0) / n).toFixed(1),
        sugar: (RAW.reduce((s, r) => s + r.sugar, 0) / n).toFixed(1),
        obesity: (RAW.reduce((s, r) => s + r.obesity, 0) / n).toFixed(1),
        overBoth: RAW.filter(
            r => r.fat > FAT_THRESHOLD && r.sugar > SUGAR_THRESHOLD
        ).length
    };

    Highcharts.setOptions({
        credits: { enabled: false },
        exporting: { enabled: false },
        tooltip: { shadow: true, borderRadius: 8 }
    });

    let selected = null; // currently selected country code

    // ── Board ────────────────────────────────────────────────
    const board = await Dashboards.board('container', {
        gui: {
            layouts: [{
                rows: [
                    // Row 1 — 4 KPIs
                    {
                        cells: [
                            { id: 'kpi-fat' },
                            { id: 'kpi-sugar' },
                            { id: 'kpi-both' },
                            { id: 'kpi-obesity' }
                        ]
                    },
                    // Row 2 — bubble chart left, grid right
                    {
                        cells: [
                            { id: 'chart-bubble', width: '40%' },
                            { id: 'grid-shell',   width: '60%' }
                        ]
                    }
                ]
            }]
        },

        components: [

            {
                type: 'KPI',
                renderTo: 'kpi-fat',
                id: 'kpi-fat',
                title: 'Avg. Daily Fat Intake',
                value: Number(AGG.fat),
                valueFormat: '{value}g',
                subtitle: 'avg across all countries'
            },
            {
                type: 'KPI',
                renderTo: 'kpi-sugar',
                id: 'kpi-sugar',
                title: 'Avg. Daily Sugar Intake',
                value: Number(AGG.sugar),
                valueFormat: '{value}g',
                subtitle: 'avg across all countries'
            },
            {
                type: 'KPI',
                renderTo: 'kpi-both',
                id: 'kpi-both',
                title: 'Thresholds',
                value: AGG.overBoth,
                valueFormat: '{value} / 15',
                subtitle:
                    `fat >${FAT_THRESHOLD}g` +
                    ` and sugar >${SUGAR_THRESHOLD}g`
            },
            {
                type: 'KPI',
                renderTo: 'kpi-obesity',
                id: 'kpi-obesity',
                title: 'Obesity Rate',
                value: Number(AGG.obesity),
                valueFormat: '{value}%',
                subtitle: 'avg across all countries'
            },

            // Bubble chart
            {
                type: 'Highcharts',
                renderTo: 'chart-bubble',
                id: 'chart-bubble',
                chartOptions: {
                    chart: {
                        type: 'bubble',
                        height: 325,
                        animation: false,
                        backgroundColor: 'transparent'
                    },
                    title: {
                        text: 'Fat vs Sugar vs Obesity',
                        style: {
                            fontSize: '14px',
                            fontWeight: '400'
                        }
                    },
                    subtitle: {
                        text: 'Bubble size = obesity rate · click to select',
                        style: { fontSize: '11px' }
                    },
                    legend: { enabled: false },
                    colorAxis: {
                        // min: 10,
                        // max: 36,
                        minColor: '#fde8c8',
                        maxColor: '#c0392b',
                        labels: { format: '{value}%' }
                    },
                    xAxis: {
                        title: {
                            text: 'Daily fat intake (g)'
                        },
                        plotLines: [{
                            value: FAT_THRESHOLD,
                            color: '#e07b39',
                            dashStyle: 'Dash',
                            width: 1.5,
                            label: {
                                text: `${FAT_THRESHOLD}g`,
                                style: {
                                    color: '#e07b39',
                                    fontSize: '10px'
                                }
                            }
                        }]
                    },
                    yAxis: {
                        title: {
                            text: 'Daily sugar intake (g)'
                        },
                        gridLineWidth: 0,
                        plotLines: [{
                            value: SUGAR_THRESHOLD,
                            color: '#3b82c4',
                            dashStyle: 'Dash',
                            width: 1.5,
                            label: {
                                text: `${SUGAR_THRESHOLD}g`,
                                style: {
                                    color: '#3b82c4',
                                    fontSize: '10px'
                                }
                            }
                        }]
                    },
                    tooltip: {
                        useHTML: true,
                        formatter: function () {
                            const r = this.point;
                            return `<b>${r.country}</b> (${r.code})<br/>` +
            '<span style="color:#e07b39">●</span> ' +
            `Fat: <b>${r.fat}g</b><br/>` +
            '<span style="color:#3b82c4">●</span> ' +
            `Sugar: <b>${r.sugar}g</b><br/>` +
            '<span style="color:#7c3aed">●</span> ' +
            `Obesity: <b>${r.z}%</b>`;
                        }
                    },
                    plotOptions: {
                        bubble: {
                            minSize: 16,
                            maxSize: 60,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                allowOverlap: true,
                                format: '{point.code}',
                                style: {
                                    fontSize: '10px',
                                    fontWeight: '600',
                                    textOutline: 'none',
                                    color: 'var(--text-primary)'
                                }
                            },
                            point: {
                                events: {
                                    click: function () {
                                        selectCountry(this.code);
                                    }
                                }
                            }
                        }
                    },
                    series: [{
                        name: 'Countries',
                        colorKey: 'z',
                        data: RAW.map(r => ({
                            x: r.fat,
                            y: r.sugar,
                            z: r.obesity,
                            code: r.code,
                            country: r.country,
                            fat: r.fat,
                            sugar: r.sugar
                        }))
                    }]
                }
            },

            // Grid shell — Grid Pro mounts into this div
            {
                type: 'HTML',
                renderTo: 'grid-shell',
                elements: [{
                    tagName: 'div',
                    attributes: { id: 'grid-pro' }
                }]
            }
        ]

    }, true);

    // ── Grid Pro ─────────────────────────────────────────────
    Grid.grid('grid-pro', {
        credits: { enabled: false },
        dataTable: {
            columns: {
                Country: RAW.map(r => r.country),
                // Code: RAW.map(r => r.code),
                'Fat (g/day)': RAW.map(r => [r.fat]),
                'Sugar (g/day)': RAW.map(r => [r.sugar]),
                'Obesity (%)': RAW.map(r => r.obesity)
                // Status: RAW.map(r => statusText(r))
            }
        },
        columns: [
            {
                id: 'Country',
                header: { format: 'Country' },
                filtering: { enabled: true, condition: 'contains' }
            },
            // {
            //     id: 'Code',
            //     header: { format: 'Code' },
            //     width: 60,
            //     filtering: { enabled: false }
            // },
            {
                id: 'Fat (g/day)',
                header: { format: 'Fat (g/day)' },
                dataType: 'number',
                filtering: { enabled: true, condition: 'greaterThan' },
                cells: {
                    renderer: sparklineConfig(
                        110, FAT_THRESHOLD, '#e07b39'
                    )
                }
            },
            {
                id: 'Sugar (g/day)',
                header: { format: 'Sugar (g/day)' },
                dataType: 'number',
                filtering: { enabled: true, condition: 'greaterThan' },
                cells: {
                    renderer: sparklineConfig(
                        140, SUGAR_THRESHOLD, '#3b82c4'
                    )
                }
            },
            {
                id: 'Obesity (%)',
                header: { format: 'Obesity (%)' },
                dataType: 'number',
                filtering: { enabled: true, condition: 'greaterThan' },
                cells: {
                    renderer: sparklineConfig(40, null, '#7c3aed', '{y}%')

                }
            }
            // {
            //     id: 'Status',
            //     header: { format: 'Status' },
            //     cells: {
            //         style: function (cell) {
            //             if (cell.value === 'Both exceeded') {
            //                 return {
            //                     color: '#c0392b',
            //                     fontWeight: '400',
            //                     fontSize: '12px'
            //                 };
            //             }
            //             if (cell.value === 'Within limits') {
            //                 return {
            //                     color: '#22c55e',
            //                     fontWeight: '400',
            //                     fontSize: '12px'
            //                 };
            //             }
            //             return { color: '#e07b39', fontWeight: '400' };
            //         }
            //     }
            // }
        ]
    });

    document.querySelector('#grid-pro').addEventListener('click', e => {
        const clickedRow = e.target.closest('tbody tr');
        if (!clickedRow) {
            if (selected) {
                selectCountry(selected);
            }
            return;
        }
        const countryName = clickedRow
            .querySelectorAll('td')[0]
            ?.textContent?.trim();
        const match = RAW.find(r => r.country === countryName);
        if (match) {
            selectCountry(match.code);
        }
    });

    // ── Interaction ──────────────────────────────────────────
    function getComp(id) {
        return board.mountedComponents.find(
            mc => mc.component?.options?.id === id
        )?.component;
    }

    function updateTooltip() {
        const comp = getComp('chart-bubble');
        if (!comp?.chart) {
            return;
        }
        const chart = comp.chart;

        if (!selected) {
            chart.tooltip.options.stickOnContact = false;
            chart.tooltip.hide();
            return;
        }

        const point = chart.series[0].points
            .find(p => p.code === selected);
        if (point) {
            chart.tooltip.options.stickOnContact = true;
            chart.tooltip.refresh(point);
        }
    }

    function selectCountry(code) {
        // Toggle off if clicking the same country again
        selected = selected === code ? null : code;
        updateBubble();
        updateGrid();
        updateKPIs();
        updateTooltip();
    }

    function updateBubble() {
        const comp = getComp('chart-bubble');
        if (!comp?.chart) {
            return;
        }
        comp.chart.series[0].points.forEach(p => {
            const isSelected = !selected || p.code === selected;
            const opacity = isSelected ? 1 : 0.15;
            if (p.graphic) {
                p.graphic.attr({ opacity });
            }
        });
    }
    function updateGrid() {
        let selectedRow = null;

        document.querySelectorAll('#grid-pro tbody tr')
            .forEach(row => {
                row.classList.remove('row-dimmed', 'row-selected');
                if (!selected) {
                    return;
                }
                const name = row.querySelectorAll('td')[0]
                    ?.textContent?.trim();
                const r = RAW.find(d => d.country === name);
                if (r?.code === selected) {
                    row.classList.add('row-selected');
                    selectedRow = row;
                } else {
                    row.classList.add('row-dimmed');
                }
            });

        if (selectedRow) {
            selectedRow.scrollIntoView({
                block: 'nearest',
                behavior: 'smooth'
            });
        }
    }

    function updateKPIs() {
        const r = selected ?
            RAW.find(d => d.code === selected) :
            null;

        if (r) {
            getComp('kpi-fat')?.update({
                value: r.fat,
                valueFormat: '{value}g',
                subtitle: r.fat > FAT_THRESHOLD ?
                    '↑ above threshold' :
                    '✓ within threshold'
            });
            getComp('kpi-sugar')?.update({
                value: r.sugar,
                valueFormat: '{value}g',
                subtitle: r.sugar > SUGAR_THRESHOLD ?
                    '↑ above threshold' :
                    '✓ within threshold'
            });
            getComp('kpi-both')?.update({
                value: r.country,
                valueFormat: '{value}',
                subtitle: statusText(r)
            });
            getComp('kpi-obesity')?.update({
                value: r.obesity,
                valueFormat: '{value}%',
                subtitle: r.country
            });
        } else {
            getComp('kpi-fat')?.update({
                value: Number(AGG.fat),
                valueFormat: '{value}g',
                subtitle: 'avg across all countries'
            });
            getComp('kpi-sugar')?.update({
                value: Number(AGG.sugar),
                valueFormat: '{value}g',
                subtitle: 'avg across all countries'
            });
            getComp('kpi-both')?.update({
                value: AGG.overBoth,
                valueFormat: '{value} / 15',
                subtitle:
                    `fat >${FAT_THRESHOLD}g and sugar >${SUGAR_THRESHOLD}g`
            });
            getComp('kpi-obesity')?.update({
                value: Number(AGG.obesity),
                valueFormat: '{value}%',
                subtitle: 'avg across all countries'
            });
        }

        // Highlight KPI cell borders when a country is selected
        ['kpi-fat', 'kpi-sugar', 'kpi-both', 'kpi-obesity'].forEach(id => {
            document.getElementById(id)
                ?.classList.toggle('cell-selected', !!selected);
        });
    }
}

// buttons


// function selectDashboard(selectedId) {

//     const selectedDashboard = dashboards[selectedId];

//     Object.entries(dashboards).forEach(([id, dashboard]) => {
//         const el = document.getElementById(id);
//         const isSelected = id === selectedId;

//         // document.getElementById('container').innerHTML = '';


//         document.getElementById('container').classList.remove(
//             'basic',
//             'sync',
//             'components'
//         );

//         // eslint-disable-next-line max-len
//         document.getElementById('container').
// classList.add(selectedDashboard.className);

//         // toggle active class
//         el.classList.toggle('active', isSelected);

//         // update aria-label
//         el.setAttribute(
//             'aria-label',
//             isSelected ?
//                 `${dashboard.name} dashboard selected` :
//                 `${dashboard.name} dashboard`
//         );

//         // optional but ideal accessibility state
//         el.setAttribute('aria-selected', isSelected);
//     });

//     // update demo card accessibility
//     demoCard.setAttribute('aria-label', selectedDashboard.demoCardLabel);

//     // update description
//     chartDescription.textContent = selectedDashboard.chartDescription;

//     // announce change (screen reader live region)
//     announce.textContent = '';
//     announce.textContent =
//         `Dashboard switched to ${selectedDashboard.name.toLowerCase()}`;

//     // run dashboard logic
//     selectedDashboard.run();

// }

// Object.keys(dashboards).forEach(id => {
//     document.getElementById(id).addEventListener('click', () => {
//         selectDashboard(id);
//     });
// });


// selectDashboard('diet');

diet();