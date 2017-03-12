google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['', '',{role: 'style'},{role:'annotation'}],
        ['', 30, '#4F81BD', '30'],
        ['', 50, '#4F81BD','50'],
        ['', 90, '#4F81BD','90']
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

    var chart = new google.visualization.BarChart(document.getElementById('gdc-chart-fs'));

    chart.draw(data, options);
}