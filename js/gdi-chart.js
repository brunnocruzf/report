google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['', '',{role: 'style'}],
        ['Backlog', 42,'#4F81BD'],
        ['Incidentes Abertos', 35, '#4F81BD'],
      ]);
      
      var options = {
        chartArea: {width: '75%', right:'0'},
        legend:'none',
        fontSize:'10',
        hAxis: {
          minValue: 0
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('gdi-chart'));

      chart.draw(data, options);
    }