google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['', '',{role: 'style'},{role:'annotation'}],
        ['', 30, '#595959', 30],
        ['', 50, '#808080','50'],
        ['', 90, '#595959','90']
    ]);

    var options = {
        chartArea: {width: '110%', height:'60%'},
        bar: {groupWidth: '55%'},
        legend: { position: 'none' },
        backgroundColor: 'transparent',
        fontSize:'12',
        hAxis: {
            textPosition: 'none',
            gridlines: { count: 0 }
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('gsi-chart-anti'));

    chart.draw(data, options);
}