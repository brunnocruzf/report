google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
    
        var barra1 = 15
        var barra2 = 12
        var barra3 = 30

    var data = google.visualization.arrayToDataTable([
        ['', '',{role: 'style'},{role:'annotation'}],
        ['', barra1, '#F43131', barra1],
        ['', barra2, '#F2C538', barra2],
        ['', barra3, '#4F6228', barra3]
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
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('gdc-chart-mc'));

    chart.draw(data, options);
}