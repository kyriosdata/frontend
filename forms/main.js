function aposCarregar() {
  var data = [4, 8, 15, 32];
  var x = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, 420]);
  d3.select("#barras").selectAll("div")
      .data(data).enter().append("div")
      .style("width", function(d) { return x(d) + "px"; })
      .text(function(d) { return d; });
}

window.onload = aposCarregar;