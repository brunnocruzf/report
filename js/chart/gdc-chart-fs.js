google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['', '',{role: 'style'},{role:'annotation'}],
        ['', 200, '#F43131', '200'],
        ['', 190, '#F2C538','190'],
        ['', 156.77, '#4F6228','156,77']
    ]);

    var options = {
        chartArea: {width: '110%', height:'60%'},
        bar: {groupWidth: '52%'},
        legend: { position: 'none' },
        backgroundColor: 'transparent',
        fontSize:'12',
        hAxis: {
            textPosition: 'none',
            gridlines: { count: 0 },
            minValue: 201,
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('gdc-chart-fs'));

    chart.draw(data, options);
}
    setInterval(drawBasic, 999);