$(document).ready(function() {
  lineChart();

  $(window).resize(function() {
    window.lineChart.redraw();
  });
});
console.log('entrou aqui 1');

pais = '';
mapa = {};
list = JSON.parse(localStorage.getItem('lista'));

function lineChart() {
  console.log('list', list);
  console.log('entrou aqui 3');
  window.lineChart = Morris.Line({
    element: 'line-chart',
    data: list.Afghanistan,  //pais fixo (não foi possivel passar o pais selecionado)
    xkey: 'date',
    ykeys: ['confirmed', 'deaths', 'recovered'],
    labels: ['Infectados', 'Mortos', 'recuperados'],
    lineColors: ['#ffff00','#ff3321', '#1e88e5'],
    lineWidth: '3px',
    resize: true,
    redraw: true
  });
}

function selecao() {

  let pSelect = document.getElementById('cselect');
  //console.log('pSelect', pSelect);
 // console.log(cselect.selectedIndex);
  this.pais = cselect.options[cselect.selectedIndex].value;
  var nome = cselect.options[cselect.selectedIndex].value;
  mapa = {};
  mapa[nome] = [];
  console.log('teste mapa', mapa);
  console.log(this.pais);
}