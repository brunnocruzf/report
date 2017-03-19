$('#bnt-pdf').click(function() {
  var doc = new jsPDF('portrait', 'pt', 'a4');
  doc.addHTML($('.conteiner'), function() {
    doc.save("Report.pdf");
  });
});
