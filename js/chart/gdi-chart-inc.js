google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
    var barra1 = document.getElementById('gbsi').textContent;
     barra1 = parseInt(barra1);

     var barra2 = document.getElementById('gbti').textContent;
     barra2 = parseInt(barra2);


      var data = google.visualization.arrayToDataTable([
        ['', '',{role: 'style'}],
        ['Backlog', barra1,'#4F81BD'],
        ['Incidentes Abertos', barra2, '#4F81BD'],
      ]);
      
      var options = {
        chartArea: {width: '75%', right:'0'},
        bar: {groupWidth: '15%'},
        legend:'none',
        fontSize:'10',
        hAxis: {
          minValue: 0
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('gdi-chart'));

      chart.draw(data, options);
    };

    setInterval(drawBasic, 1000);