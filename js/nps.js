//[NPS] = [Promoters] - [Detractors]

var region = data;
var selectGeneration;


var promotesAqp_2016_2_calification = [];
var promotesAqp_2017_1_calification = [];
var promotesCdmx_2017_1_calification = [];
var promotesCdmx_2017_2_calification = [];
var promotesLima_2016_2_calification = [];
var promotesLima_2017_1_calification = [];
var promotesLima_2017_2_calification = [];
var promotesScl_2016_2_calification = [];
var promotesScl_2017_1_calification = [];
var promotesScl_2017_2_calification = [];


var detractorsAqp_2016_2_calification = [];
var detractorsAqp_2017_1_calification = [];
var detractorsCdmx_2017_1_calification = [];
var detractorsCdmx_2017_2_calification = [];
var detractorsLima_2016_2_calification = [];
var detractorsLima_2017_1_calification = [];
var detractorsLima_2017_2_calification = [];
var detractorsScl_2016_2_calification = [];
var detractorsScl_2017_1_calification = [];
var detractorsScl_2017_2_calification = [];


var npsAqp_2016_2 = [];
var npsAqp_2017_1 = [];
var npsCdmx_2017_1 = [];
var npsCdmx_2017_2 = [];
var npsLima_2016_2 = [];
var npsLima_2017_1 = [];
var npsLima_2017_2 = [];
var npsScl_2016_2 = [];
var npsScl_2017_1 = [];
var npsScl_2017_2 = [];

for (area in region){
  var generation = region[area];
    for(selectGeneration in generation){
      for(var i = 0; i < generation[selectGeneration].ratings.length; i++){
        var promotersStudents = generation[selectGeneration].ratings[i].nps.promoters;
        var detractorsStudents = generation[selectGeneration].ratings[i].nps.detractors;
        var npsAverange = promotersStudents - detractorsStudents;

        if(generation[selectGeneration] === region.AQP['2016-2']){
          promotesAqp_2016_2_calification.push(promotersStudents);
          detractorsAqp_2016_2_calification.push(detractorsStudents);
          npsAqp_2016_2.push(npsAverange);

        } else if(generation[selectGeneration] === region.AQP['2017-1']){
          promotesAqp_2017_1_calification.push(promotersStudents);
          detractorsAqp_2017_1_calification.push(detractorsStudents);
          npsAqp_2017_1.push(npsAverange);

        } else if(generation[selectGeneration] === region.CDMX['2017-1']){
          promotesCdmx_2017_1_calification.push(promotersStudents);
          detractorsCdmx_2017_1_calification.push(detractorsStudents);
          npsCdmx_2017_1.push(npsAverange);

        } else if(generation[selectGeneration] === region.CDMX['2017-2']){
          promotesCdmx_2017_2_calification.push(promotersStudents);
          detractorsCdmx_2017_2_calification.push(detractorsStudents);
          npsCdmx_2017_2.push(npsAverange);

        } else if(generation[selectGeneration] === region.LIM['2016-2']){
          promotesLima_2016_2_calification.push(promotersStudents);
          detractorsLima_2016_2_calification.push(detractorsStudents);
          npsLima_2016_2.push(npsAverange);

        } else if(generation[selectGeneration] === region.LIM['2017-1']){
          promotesLima_2017_1_calification.push(promotersStudents);
          detractorsLima_2017_1_calification.push(detractorsStudents);
          npsLima_2017_1.push(npsAverange);

        } else if(generation[selectGeneration] === region.LIM['2017-2']){
          promotesLima_2017_2_calification.push(promotersStudents);
          detractorsLima_2017_2_calification.push(detractorsStudents);
          npsLima_2017_2.push(npsAverange);

        } else if(generation[selectGeneration] === region.SCL['2016-2']){
          promotesScl_2016_2_calification.push(promotersStudents);
          detractorsScl_2016_2_calification.push(detractorsStudents);
          npsScl_2016_2.push(npsAverange);

        } else if(generation[selectGeneration] === region.SCL['2017-1']){
          promotesScl_2017_1_calification.push(promotersStudents);
          detractorsScl_2017_1_calification.push(detractorsStudents);
          npsScl_2017_1.push(npsAverange);

        } else if(generation[selectGeneration] === region.SCL['2017-2']){
          promotesScl_2017_2_calification.push(promotersStudents);
          detractorsScl_2017_2_calification.push(detractorsStudents);
          npsScl_2017_2.push(npsAverange);
        }
      }
    }
}


function drawVisualization_aqp_2016_2_nps() {
// Some raw data (not necessarily accurate)
var data = google.visualization.arrayToDataTable([
 ['Sprint', 'Porcentaje', 'Average'],
 ['Sprint 1',  npsAqp_2016_2[0], npsAqp_2016_2[0]],
 ['Sprint 2',  npsAqp_2016_2[1], npsAqp_2016_2[1]],
 ['Sprint 3',  npsAqp_2016_2[2], npsAqp_2016_2[2]],
 ['Sprint 4',  npsAqp_2016_2[3], npsAqp_2016_2[3]],
]);

var options = {
title : 'aqp_2016_2_nps',
width: 420,
height: 200,
vAxis: {title: 'Score'},
hAxis: {title: 'Sprints'},
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_aqp_2016_2_nps'));
chart.draw(data, options);
}


function drawVisualization_aqp_2017_1_nps() {
// Some raw data (not necessarily accurate)
var data = google.visualization.arrayToDataTable([
 ['Sprint', 'Porcentaje', 'Average'],
 ['Sprint 1',  npsAqp_2017_1[0], npsAqp_2017_1[0]],
 ['Sprint 2',  npsAqp_2017_1[1], npsAqp_2017_1[1]],
 ['Sprint 3',  npsAqp_2017_1[2], npsAqp_2017_1[2]],
]);

var options = {
title : 'aqp_2017_1_nps',
width: 420,
height: 200,
vAxis: {title: 'Score'},
hAxis: {title: 'Sprints'},
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_aqp_2017_1_nps'));
chart.draw(data, options);
}


function drawVisualization_cdmx_2017_1_nps() {
// Some raw data (not necessarily accurate)
var data = google.visualization.arrayToDataTable([
 ['Sprint', 'Porcentaje', 'Average'],
 ['Sprint 1',  npsCdmx_2017_1[0], npsCdmx_2017_1[0]],
 ['Sprint 2',  npsCdmx_2017_1[1], npsCdmx_2017_1[1]],
 ['Sprint 3',  npsCdmx_2017_1[2], npsCdmx_2017_1[2]],
]);

var options = {
title : 'cdmx_2017_1_nps',
width: 420,
height: 200,
vAxis: {title: 'Score'},
hAxis: {title: 'Sprints'},
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_cdmx_2017_1_nps'));
chart.draw(data, options);
}


function drawVisualization_cdmx_2017_2_nps() {
// Some raw data (not necessarily accurate)
var data = google.visualization.arrayToDataTable([
 ['Sprint', 'Porcentaje', 'Average'],
 ['Sprint 1',  npsCdmx_2017_2[0], npsCdmx_2017_2[0]],
 ['Sprint 2',  npsCdmx_2017_2[1], npsCdmx_2017_2[1]],
]);

var options = {
title : 'cdmx_2017_2_nps',
width: 420,
height: 200,
vAxis: {title: 'Score'},
hAxis: {title: 'Sprints'},
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_cdmx_2017_2_nps'));
chart.draw(data, options);
}


function drawVisualization_lima_2016_2_nps() {
// Some raw data (not necessarily accurate)
var data = google.visualization.arrayToDataTable([
 ['Sprint', 'Porcentaje', 'Average'],
 ['Sprint 1',  npsLima_2016_2[0], npsLima_2016_2[0]],
 ['Sprint 2',  npsLima_2016_2[1], npsLima_2016_2[1]],
]);

var options = {
title : 'lima_2016_2_nps',
width: 420,
height: 200,
vAxis: {title: 'Score'},
hAxis: {title: 'Sprints'},
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_lima_2016_2_nps'));
chart.draw(data, options);
}


function drawVisualization_lima_2017_1_nps() {
// Some raw data (not necessarily accurate)
var data = google.visualization.arrayToDataTable([
 ['Sprint', 'Porcentaje', 'Average'],
 ['Sprint 1',  npsLima_2017_1[0], npsLima_2017_1[0]],
 ['Sprint 2',  npsLima_2017_1[1], npsLima_2017_1[1]],
 ['Sprint 3',  npsLima_2017_1[2], npsLima_2017_1[2]],
 ['Sprint 4',  npsLima_2017_1[3], npsLima_2017_1[3]],
]);

var options = {
title : 'lima_2017_1_nps',
width: 420,
height: 200,
vAxis: {title: 'Score'},
hAxis: {title: 'Sprints'},
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_lima_2017_1_nps'));
chart.draw(data, options);
}


function drawVisualization_lima_2017_2_nps() {
// Some raw data (not necessarily accurate)
var data = google.visualization.arrayToDataTable([
 ['Sprint', 'Porcentaje', 'Average'],
 ['Sprint 1',  npsLima_2017_2[0], npsLima_2017_2[0]],
 ['Sprint 2',  npsLima_2017_2[1], npsLima_2017_2[1]],
]);

var options = {
title : 'lima_2017_2_nps',
width: 420,
height: 200,
vAxis: {title: 'Score'},
hAxis: {title: 'Sprints'},
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_lima_2017_2_nps'));
chart.draw(data, options);
}


function drawVisualization_scl_2016_2_nps() {
// Some raw data (not necessarily accurate)
var data = google.visualization.arrayToDataTable([
 ['Sprint', 'Porcentaje', 'Average'],
 ['Sprint 1',  npsScl_2016_2[0], npsLima_2016_2[0]],
 ['Sprint 2',  npsLima_2016_2[1], npsLima_2016_2[1]],
]);

var options = {
title : 'scl_2016_2_nps',
width: 420,
height: 200,
vAxis: {title: 'Score'},
hAxis: {title: 'Sprints'},
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_scl_2016_2_nps'));
chart.draw(data, options);
}


function drawVisualization_scl_2017_1_nps() {
// Some raw data (not necessarily accurate)
var data = google.visualization.arrayToDataTable([
 ['Sprint', 'Porcentaje', 'Average'],
 ['Sprint 1',  npsScl_2017_1[0], npsScl_2017_1[0]],
 ['Sprint 2',  npsScl_2017_1[1], npsScl_2017_1[1]],
 ['Sprint 3',  npsScl_2017_1[2], npsScl_2017_1[2]],
]);

var options = {
title : 'scl_2017_1_nps',
width: 420,
height: 200,
vAxis: {title: 'Score'},
hAxis: {title: 'Sprints'},
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_scl_2017_1_nps'));
chart.draw(data, options);
}


function drawVisualization_scl_2017_2_nps() {
// Some raw data (not necessarily accurate)
var data = google.visualization.arrayToDataTable([
 ['Sprint', 'Porcentaje', 'Average'],
 ['Sprint 1',  npsScl_2017_2[0], npsScl_2017_2[0]],
 ['Sprint 2',  npsScl_2017_2[1], npsScl_2017_2[1]],
]);

var options = {
title : 'scl_2017_2_nps',
width: 420,
height: 200,
vAxis: {title: 'Score'},
hAxis: {title: 'Sprints'},
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_scl_2017_2_nps'));
chart.draw(data, options);
}
