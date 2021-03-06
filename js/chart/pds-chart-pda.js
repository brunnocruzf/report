google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['semana', '', { role: 'style' }, {role:'annotation'}],
        ['Semana 1', 70.80, '#76933C','70.80%'],
        ['Semana 2', 100, '#76933C','100%'],
        ['Semana 3', 50, '#76933C','50%'],
        ['Semana 4', 80, '#76933C','80%'],
        ['Semana 5', 90, '#76933C','90%']
      ]);

      var options = {
      	chartArea: {width: '100%',height:'37%', top: '0'},
        annotations: {alwaysOutside: true,
        							textStyle:{
                           fontSize: 15,
                           top:16,
                      }},
        bar: {groupWidth: '45%'},
        legend: { position: 'none' },
        backgroundColor: 'transparent',
        fontSize:'13',
         backgroundColor: 'transparent',
        vAxis: {
            textPosition: 'none',
            minValue: 134,
            gridlines: { count: 0 }
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('pds-chart-pda'));

      chart.draw(data, options);
    }
