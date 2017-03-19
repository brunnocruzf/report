google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      barra1 = document.querySelector("#gbtr").textContent;
      barra1 = parseInt(barra1); 
      
      barra2 = document.querySelector('#gbsr').textContent;
      barra2 = parseInt(barra2);


      var data = google.visualization.arrayToDataTable([
        ['', '',{role: 'style'}],
        ['Backlog', barra1,'#4F81BD'],
        ['Requisições Abertos', barra2, '#4F81BD'],
      ]);
      
      var options = {
        chartArea: {width: '74%', right:'0'},
         legend: { position: "none" },
         bar: {groupWidth: '15%'},
        fontSize:'10',
        hAxis: {
          minValue: 0
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('gdi-chart2'));

      chart.draw(data, options);
    }