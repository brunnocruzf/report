google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
    var bar1 = 15
    var bar2 = 12
    var bar3 = 30
    var data = google.visualization.arrayToDataTable([
        ['', '',{role: 'style'},{role:'annotation'}],
        ['', bar1, '#4F81BD', '\bar1'],
        ['', bar2, '#4F81BD','bar2'],
        ['', bar3, '#4F81BD','bar3']
    ]);

    var options = {
        chartArea: {width: '110%', height:'50%'},
        bar: {groupWidth: '50%'},
        legend: { position: 'none' },
        backgroundColor: 'transparent',
        hAxis: {
            textPosition: 'none'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('gdc-chart-mc'));

    chart.draw(data, options);
}