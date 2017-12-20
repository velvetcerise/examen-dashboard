//El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.

var region = data;
var selectGeneration;

var cumpleAqp_2016_2_calification = [];
var cumpleAqp_2017_1_calification = [];
var cumpleCdmx_2017_1_calification = [];
var cumpleCdmx_2017_2_calification = [];
var cumpleLima_2016_2_calification = [];
var cumpleLima_2017_1_calification = [];
var cumpleLima_2017_2_calification = [];
var cumpleScl_2016_2_calification = [];
var cumpleScl_2017_1_calification = [];
var cumpleScl_2017_2_calification = [];


var cumpleAqp_2016_2_calificationTotal = 0;
var cumpleAqp_2017_1_calificationTotal = 0;
var cumpleCdmx_2017_1_calificationTotal = 0;
var cumpleCdmx_2017_2_calificationTotal = 0;
var cumpleLima_2016_2_calificationTotal = 0;
var cumpleLima_2017_1_calificationTotal = 0;
var cumpleLima_2017_2_calificationTotal = 0;
var cumpleScl_2016_2_calificationTotal = 0;
var cumpleScl_2017_1_calificationTotal = 0;
var cumpleScl_2017_2_calificationTotal = 0;



var superaAqp_2016_2_calification = [];
var superaAqp_2017_1_calification = [];
var superaCdmx_2017_1_calification = [];
var superaCdmx_2017_2_calification = [];
var superaLima_2016_2_calification = [];
var superaLima_2017_1_calification = [];
var superaLima_2017_2_calification = [];
var superaScl_2016_2_calification = [];
var superaScl_2017_1_calification = [];
var superaScl_2017_2_calification = [];


var superaAqp_2016_2_calificationTotal = 0;
var superaAqp_2017_1_calificationTotal = 0;
var superaCdmx_2017_1_calificationTotal = 0;
var superaCdmx_2017_2_calificationTotal = 0;
var superaLima_2016_2_calificationTotal = 0;
var superaLima_2017_1_calificationTotal = 0;
var superaLima_2017_2_calificationTotal = 0;
var superaScl_2016_2_calificationTotal = 0;
var superaScl_2017_1_calificationTotal = 0;
var superaScl_2017_2_calificationTotal = 0;


for (area in region){
  var generation = region[area];
    for(selectGeneration in generation){
      for(var i = 0; i < generation[selectGeneration].ratings.length; i++){
        var calificationStudents = generation[selectGeneration].ratings[i].student.cumple;
        var superaCalificationStudents = generation[selectGeneration].ratings[i].student.supera;
        if(generation[selectGeneration] === region.AQP['2016-2']){
          cumpleAqp_2016_2_calification.push(calificationStudents);
          cumpleAqp_2016_2_calificationTotal += calificationStudents;
          superaAqp_2016_2_calification.push(superaCalificationStudents);
          superaAqp_2016_2_calificationTotal += superaCalificationStudents;

        } else if(generation[selectGeneration] === region.AQP['2017-1']){
          cumpleAqp_2017_1_calification.push(calificationStudents);
          cumpleAqp_2017_1_calificationTotal += calificationStudents;
          superaAqp_2017_1_calification.push(superaCalificationStudents);
          superaAqp_2017_1_calificationTotal += superaCalificationStudents;

        } else if(generation[selectGeneration] === region.CDMX['2017-1']){
          cumpleCdmx_2017_1_calification.push(calificationStudents);
          cumpleCdmx_2017_1_calificationTotal += calificationStudents;
          superaCdmx_2017_1_calification.push(superaCalificationStudents);
          superaCdmx_2017_1_calificationTotal += superaCalificationStudents;

        } else if(generation[selectGeneration] === region.CDMX['2017-2']){
          cumpleCdmx_2017_2_calification.push(calificationStudents);
          cumpleCdmx_2017_2_calificationTotal += calificationStudents;
          superaCdmx_2017_2_calification.push(superaCalificationStudents);
          superaCdmx_2017_2_calificationTotal += superaCalificationStudents;

        } else if(generation[selectGeneration] === region.LIM['2016-2']){
          cumpleLima_2016_2_calification.push(calificationStudents);
          cumpleLima_2016_2_calificationTotal += calificationStudents;
          superaLima_2016_2_calification.push(superaCalificationStudents);
          superaLima_2016_2_calificationTotal += superaCalificationStudents;

        } else if(generation[selectGeneration] === region.LIM['2017-1']){
          cumpleLima_2017_1_calification.push(calificationStudents);
          cumpleLima_2017_1_calificationTotal += calificationStudents;
          superaLima_2017_1_calification.push(superaCalificationStudents);
          superaLima_2017_1_calificationTotal += superaCalificationStudents;

        } else if(generation[selectGeneration] === region.LIM['2017-2']){
          cumpleLima_2017_2_calification.push(calificationStudents);
          cumpleLima_2017_2_calificationTotal += calificationStudents;
          superaLima_2017_2_calification.push(superaCalificationStudents);
          superaLima_2017_2_calificationTotal += superaCalificationStudents;

        } else if(generation[selectGeneration] === region.SCL['2016-2']){
          cumpleScl_2016_2_calification.push(calificationStudents);
          cumpleScl_2016_2_calificationTotal += calificationStudents;
          superaScl_2016_2_calification.push(superaCalificationStudents);
          superaScl_2016_2_calificationTotal += superaCalificationStudents;

        } else if(generation[selectGeneration] === region.SCL['2017-1']){
          cumpleScl_2017_1_calification.push(calificationStudents);
          cumpleScl_2017_1_calificationTotal += calificationStudents;
          superaScl_2017_1_calification.push(superaCalificationStudents);
          superaScl_2017_1_calificationTotal += superaCalificationStudents;

        } else if(generation[selectGeneration] === region.SCL['2017-2']){
          cumpleScl_2017_2_calification.push(calificationStudents);
          cumpleScl_2017_2_calificationTotal += calificationStudents;
          superaScl_2017_2_calification.push(superaCalificationStudents);
          superaScl_2017_2_calificationTotal += superaCalificationStudents;
        }
      }
    }

}


var studentSatisfactionSprint1_Aqp_2016_2 = cumpleAqp_2016_2_calification[0]+superaAqp_2016_2_calification[0];
var studentSatisfactionSprint2_Aqp_2016_2 = cumpleAqp_2016_2_calification[1]+superaAqp_2016_2_calification[1];
var studentSatisfactionSprint3_Aqp_2016_2 = cumpleAqp_2016_2_calification[2]+superaAqp_2016_2_calification[2];
var studentSatisfactionSprint4_Aqp_2016_2 = cumpleAqp_2016_2_calification[3]+superaAqp_2016_2_calification[3];
var studentSatisfactionGeneral_Aqp_2016_2 = (cumpleAqp_2016_2_calificationTotal + superaAqp_2016_2_calificationTotal)/cumpleAqp_2016_2_calification.length;


var studentSatisfactionSprint1_Aqp_2017_1 = cumpleAqp_2017_1_calification[0]+superaAqp_2017_1_calification[0];
var studentSatisfactionSprint2_Aqp_2017_1 = cumpleAqp_2017_1_calification[1]+superaAqp_2017_1_calification[1];
var studentSatisfactionSprint3_Aqp_2017_1 = cumpleAqp_2017_1_calification[2]+superaAqp_2017_1_calification[2];
var studentSatisfactionSprint4_Aqp_2017_1 = cumpleAqp_2017_1_calification[3]+superaAqp_2017_1_calification[3];
var studentSatisfactionGeneral_Aqp_2017_1 = (cumpleAqp_2017_1_calificationTotal + superaAqp_2017_1_calificationTotal)/cumpleAqp_2017_1_calification.length;


var studentSatisfactionSprint1_Cdmx_2017_1 = cumpleCdmx_2017_1_calification[0]+superaCdmx_2017_1_calification[0];
var studentSatisfactionSprint2_Cdmx_2017_1 = cumpleCdmx_2017_1_calification[1]+superaCdmx_2017_1_calification[1];
var studentSatisfactionSprint3_Cdmx_2017_1 = cumpleCdmx_2017_1_calification[2]+superaCdmx_2017_1_calification[2];
var studentSatisfactionSprint4_Cdmx_2017_1 = cumpleCdmx_2017_1_calification[3]+superaCdmx_2017_1_calification[3];
var studentSatisfactionGeneral_Cdmx_2017_1 = (cumpleCdmx_2017_1_calificationTotal + superaCdmx_2017_1_calificationTotal)/cumpleCdmx_2017_1_calification.length;


var studentSatisfactionSprint1_Cdmx_2017_2 = cumpleCdmx_2017_2_calification[0]+superaCdmx_2017_2_calification[0];
var studentSatisfactionSprint2_Cdmx_2017_2 = cumpleCdmx_2017_2_calification[1]+superaCdmx_2017_2_calification[1];
var studentSatisfactionSprint3_Cdmx_2017_2 = cumpleCdmx_2017_2_calification[2]+superaCdmx_2017_2_calification[2];
var studentSatisfactionSprint4_Cdmx_2017_2 = cumpleCdmx_2017_2_calification[3]+superaCdmx_2017_2_calification[3];
var studentSatisfactionGeneral_Cdmx_2017_2 = (cumpleCdmx_2017_2_calificationTotal + superaCdmx_2017_2_calificationTotal)/cumpleCdmx_2017_2_calification.length;


var studentSatisfactionSprint1_Lima_2016_2 = cumpleLima_2016_2_calification[0]+superaLima_2016_2_calification[0];
var studentSatisfactionSprint2_Lima_2016_2 = cumpleLima_2016_2_calification[1]+superaLima_2016_2_calification[1];
var studentSatisfactionSprint3_Lima_2016_2 = cumpleLima_2016_2_calification[2]+superaLima_2016_2_calification[2];
var studentSatisfactionSprint4_Lima_2016_2 = cumpleLima_2016_2_calification[3]+superaLima_2016_2_calification[3];
var studentSatisfactionGeneral_Lima_2016_2 = (cumpleLima_2016_2_calificationTotal + superaLima_2016_2_calificationTotal)/cumpleLima_2016_2_calification.length;


var studentSatisfactionSprint1_Lima_2017_1 = cumpleLima_2017_1_calification[0]+superaLima_2017_1_calification[0];
var studentSatisfactionSprint2_Lima_2017_1 = cumpleLima_2017_1_calification[1]+superaLima_2017_1_calification[1];
var studentSatisfactionSprint3_Lima_2017_1 = cumpleLima_2017_1_calification[2]+superaLima_2017_1_calification[2];
var studentSatisfactionSprint4_Lima_2017_1 = cumpleLima_2017_1_calification[3]+superaLima_2017_1_calification[3];
var studentSatisfactionGeneral_Lima_2017_1 = (cumpleLima_2017_1_calificationTotal + superaLima_2017_1_calificationTotal)/cumpleLima_2017_1_calification.length;


var studentSatisfactionSprint1_Lima_2017_2 = cumpleLima_2017_2_calification[0]+superaLima_2017_2_calification[0];
var studentSatisfactionSprint2_Lima_2017_2 = cumpleLima_2017_2_calification[1]+superaLima_2017_2_calification[1];
var studentSatisfactionSprint3_Lima_2017_2 = cumpleLima_2017_2_calification[2]+superaLima_2017_2_calification[2];
var studentSatisfactionSprint4_Lima_2017_2 = cumpleLima_2017_2_calification[3]+superaLima_2017_2_calification[3];
var studentSatisfactionGeneral_Lima_2017_2 = (cumpleLima_2017_2_calificationTotal + superaLima_2017_2_calificationTotal)/cumpleLima_2017_2_calification.length;


var studentSatisfactionSprint1_Scl_2016_2 = cumpleScl_2016_2_calification[0]+superaScl_2016_2_calification[0];
var studentSatisfactionSprint2_Scl_2016_2 = cumpleScl_2016_2_calification[1]+superaScl_2016_2_calification[1];
var studentSatisfactionSprint3_Scl_2016_2 = cumpleScl_2016_2_calification[2]+superaScl_2016_2_calification[2];
var studentSatisfactionSprint4_Scl_2016_2 = cumpleScl_2016_2_calification[3]+superaScl_2016_2_calification[3];
var studentSatisfactionGeneral_Scl_2016_2 = (cumpleScl_2016_2_calificationTotal + superaScl_2016_2_calificationTotal)/cumpleScl_2016_2_calification.length;


var studentSatisfactionSprint1_Scl_2017_1 = cumpleScl_2017_1_calification[0]+superaScl_2017_1_calification[0];
var studentSatisfactionSprint2_Scl_2017_1 = cumpleScl_2017_1_calification[1]+superaScl_2017_1_calification[1];
var studentSatisfactionSprint3_Scl_2017_1 = cumpleScl_2017_1_calification[2]+superaScl_2017_1_calification[2];
var studentSatisfactionSprint4_Scl_2017_1 = cumpleScl_2017_1_calification[3]+superaScl_2017_1_calification[3];
var studentSatisfactionGeneral_Scl_2017_1 = (cumpleScl_2017_1_calificationTotal + superaScl_2017_1_calificationTotal)/cumpleScl_2017_1_calification.length;


var studentSatisfactionSprint1_Scl_2017_2 = cumpleScl_2017_2_calification[0]+superaScl_2017_2_calification[0];
var studentSatisfactionSprint2_Scl_2017_2 = cumpleScl_2017_2_calification[1]+superaScl_2017_2_calification[1];
var studentSatisfactionSprint3_Scl_2017_2 = cumpleScl_2017_2_calification[2]+superaScl_2017_2_calification[2];
var studentSatisfactionSprint4_Scl_2017_2 = cumpleScl_2017_2_calification[3]+superaScl_2017_2_calification[3];
var studentSatisfactionGeneral_Scl_2017_2 = (cumpleScl_2017_2_calificationTotal + superaScl_2017_2_calificationTotal)/cumpleScl_2017_2_calification.length;



//creación de tablas

//----arequipa
function drawVisualization_aqp_2016_2_satisfaction() {
// Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score'],
   ['Sprint 1',  studentSatisfactionSprint1_Aqp_2016_2],
   ['Sprint 2',  studentSatisfactionSprint2_Aqp_2016_2],
   ['Sprint 3',  studentSatisfactionSprint3_Aqp_2016_2],
   ['Sprint 4',  studentSatisfactionSprint4_Aqp_2016_2],
  ]);

var options = {
title : 'aqp_2016_2_satisfaction',
width: 420,
height: 200,
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_aqp_2016_2_satisfaction'));
chart.draw(data, options);
}


function drawVisualization_aqp_2017_1_satisfaction() {
// Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score'],
   ['Sprint 1',  studentSatisfactionSprint1_Aqp_2017_1],
   ['Sprint 2',  studentSatisfactionSprint2_Aqp_2017_1],
   ['Sprint 3',  studentSatisfactionSprint3_Aqp_2017_1],
   ['Sprint 4',  studentSatisfactionSprint4_Aqp_2017_1],
  ]);

var options = {
title : 'aqp_2017_1_satisfaction',
width: 420,
height: 200,
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_aqp_2017_1_satisfaction'));
chart.draw(data, options);
}


//----cdmx
function drawVisualization_cdmx_2017_1_satisfaction() {

  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score'],
   ['Sprint 1',  studentSatisfactionSprint1_Cdmx_2017_1],
   ['Sprint 2',  studentSatisfactionSprint2_Cdmx_2017_1],
   ['Sprint 3',  studentSatisfactionSprint3_Cdmx_2017_1],
  ]);

var options = {
title : 'cdmx_2017_1_satisfaction',
width: 420,
height: 200,
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_cdmx_2017_1_satisfaction'));
chart.draw(data, options);
}


function drawVisualization_cdmx_2017_2_satisfaction() {
// Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score'],
   ['Sprint 1',  studentSatisfactionSprint1_Cdmx_2017_2],
   ['Sprint 2',  studentSatisfactionSprint2_Cdmx_2017_2],
  ]);

var options = {
title : 'cdmx_2017_2_satisfaction',
width: 420,
height: 200,
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_cdmx_2017_2_satisfaction'));
chart.draw(data, options);
}


//-----LIMA

function drawVisualization_lima_2016_2_satisfaction() {
// Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score'],
   ['Sprint 1',  studentSatisfactionSprint1_Lima_2016_2],
   ['Sprint 2',  studentSatisfactionSprint2_Lima_2016_2],
  ]);

var options = {
title : 'Lima_2016_2_satisfaction',
width: 420,
height: 200,
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_lima_2016_2_satisfaction'));
chart.draw(data, options);
}


function drawVisualization_lima_2017_1_satisfaction() {
// Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score'],
   ['Sprint 1',  studentSatisfactionSprint1_Lima_2017_1],
   ['Sprint 2',  studentSatisfactionSprint2_Lima_2017_1],
   ['Sprint 3',  studentSatisfactionSprint3_Lima_2017_1],
   ['Sprint 4',  studentSatisfactionSprint4_Lima_2017_1],
  ]);

var options = {
title : 'Lima_2017_1_satisfaction',
width: 420,
height: 200,
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_lima_2017_1_satisfaction'));
chart.draw(data, options);
}


function drawVisualization_lima_2017_2_satisfaction() {
// Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score'],
   ['Sprint 1',  studentSatisfactionSprint1_Lima_2017_2],
   ['Sprint 2',  studentSatisfactionSprint2_Lima_2017_2],
  ]);

var options = {
title : 'Lima_2017_2_satisfaction',
width: 420,
height: 200,
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_lima_2017_2_satisfaction'));
chart.draw(data, options);
}


//-----CHILE

function drawVisualization_scl_2016_2_satisfaction() {
// Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score'],
   ['Sprint 1',  studentSatisfactionSprint1_Scl_2016_2],
   ['Sprint 2',  studentSatisfactionSprint2_Scl_2016_2],
  ]);

var options = {
title : 'Chile_2016_2_satisfaction',
width: 420,
height: 200,
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_scl_2016_2_satisfaction'));
chart.draw(data, options);
}


function drawVisualization_scl_2017_1_satisfaction() {
// Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score'],
   ['Sprint 1',  studentSatisfactionSprint1_Scl_2017_1],
   ['Sprint 2',  studentSatisfactionSprint2_Scl_2017_1],
   ['Sprint 3',  studentSatisfactionSprint3_Scl_2017_1],
  ]);

var options = {
title : 'Chile_2017_1_satisfaction',
width: 420,
height: 200,
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_scl_2017_1_satisfaction'));
chart.draw(data, options);
}


function drawVisualization_scl_2017_2_satisfaction() {
// Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score'],
   ['Sprint 1',  studentSatisfactionSprint1_Scl_2017_2],
   ['Sprint 2',  studentSatisfactionSprint2_Scl_2017_2],
  ]);

var options = {
title : 'Chile_2017_2_satisfaction',
width: 420,
height: 200,
seriesType: 'bars',
series: {1: {type: 'line'}},
colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div_scl_2017_2_satisfaction'));
chart.draw(data, options);
}
