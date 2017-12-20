var region = data;
var selectGeneration;

var aqp_2016_2_JediScore = [];
var aqp_2017_1_JediScore = [];
var cdmx_2017_1_JediScore = [];
var cdmx_2017_2_JediScore = [];
var lima_2016_2_JediScore = [];
var lima_2017_1_JediScore = [];
var lima_2017_2_JediScore = [];
var scl_2016_2_JediScore = [];
var scl_2017_1_JediScore = [];
var scl_2017_2_JediScore = [];


var aqp_2016_2_JediScoreTotal = 0;
var aqp_2017_1_JediScoreTotal = 0;
var cdmx_2017_1_JediScoreTotal = 0;
var cdmx_2017_2_JediScoreTotal = 0;
var lima_2016_2_JediScoreTotal = 0;
var lima_2017_1_JediScoreTotal = 0;
var lima_2017_2_JediScoreTotal = 0;
var scl_2016_2_JediScoreTotal = 0;
var scl_2017_1_JediScoreTotal = 0;
var scl_2017_2_JediScoreTotal = 0;


for (area in region){
  var generation = region[area];
    for(selectGeneration in generation){
      for(var i = 0; i < generation[selectGeneration].ratings.length; i++){
        var scoreJediSprint = generation[selectGeneration].ratings[i].jedi;
        if(generation[selectGeneration] === region.AQP['2016-2']){
          aqp_2016_2_JediScore.push(scoreJediSprint);
          aqp_2016_2_JediScoreTotal += scoreJediSprint;
        } else if(generation[selectGeneration] === region.AQP['2017-1']){
          aqp_2017_1_JediScore.push(scoreJediSprint);
          aqp_2017_1_JediScoreTotal += scoreJediSprint;
        } else if(generation[selectGeneration] === region.CDMX['2017-1']){
          cdmx_2017_1_JediScore.push(scoreJediSprint);
          cdmx_2017_1_JediScoreTotal += scoreJediSprint;
        } else if(generation[selectGeneration] === region.CDMX['2017-2']){
          cdmx_2017_2_JediScore.push(scoreJediSprint);
          cdmx_2017_2_JediScoreTotal += scoreJediSprint;
        } else if(generation[selectGeneration] === region.LIM['2016-2']){
          lima_2016_2_JediScore.push(scoreJediSprint);
          lima_2016_2_JediScoreTotal += scoreJediSprint;
        } else if(generation[selectGeneration] === region.LIM['2017-1']){
          lima_2017_1_JediScore.push(scoreJediSprint);
          lima_2017_1_JediScoreTotal += scoreJediSprint;
        } else if(generation[selectGeneration] === region.LIM['2017-2']){
          lima_2017_2_JediScore.push(scoreJediSprint);
          lima_2017_2_JediScoreTotal += scoreJediSprint;
        } else if(generation[selectGeneration] === region.SCL['2016-2']){
          scl_2016_2_JediScore.push(scoreJediSprint);
          scl_2016_2_JediScoreTotal += scoreJediSprint;
        } else if(generation[selectGeneration] === region.SCL['2017-1']){
          scl_2017_1_JediScore.push(scoreJediSprint);
          scl_2017_1_JediScoreTotal += scoreJediSprint;
        } else if(generation[selectGeneration] === region.SCL['2017-2']){
          scl_2017_2_JediScore.push(scoreJediSprint);
          scl_2017_2_JediScoreTotal += scoreJediSprint;
        }
      }
    }

}

var aqp_2016_2_JediScoreAverage = (aqp_2016_2_JediScoreTotal / aqp_2016_2_JediScore.length).toFixed(2);
var aqp_2017_1_JediScoreAverage = (aqp_2017_1_JediScoreTotal / aqp_2017_1_JediScore.length).toFixed(2);
var cdmx_2017_1_JediScoreAverage = (cdmx_2017_1_JediScoreTotal / cdmx_2017_1_JediScore.length).toFixed(2);
var cdmx_2017_2_JediScoreAverage = (cdmx_2017_2_JediScoreTotal / cdmx_2017_2_JediScore.length).toFixed(2);
var lima_2016_2_JediScoreAverage = (lima_2016_2_JediScoreTotal / lima_2016_2_JediScore.length).toFixed(2);
var lima_2017_1_JediScoreAverage = (lima_2017_1_JediScoreTotal / lima_2017_1_JediScore.length).toFixed(2);
var lima_2017_2_JediScoreAverage = (lima_2017_2_JediScoreTotal / lima_2017_2_JediScore.length).toFixed(2);
var scl_2016_2_JediScoreAverage = (scl_2016_2_JediScoreTotal / scl_2016_2_JediScore.length).toFixed(2);
var scl_2017_1_JediScoreAverage = (scl_2017_1_JediScoreTotal / scl_2017_1_JediScore.length).toFixed(2);
var scl_2017_2_JediScoreAverage = (scl_2017_2_JediScoreTotal / scl_2017_2_JediScore.length).toFixed(2);


var showJediScoreAverage  = document.createElement("span");
jediMasterDBData.appendChild(showJediScoreAverage);



  function drawVisualization_aqp_2016_2_jedi() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score', 'Average'],
   ['Sprint 1',  aqp_2016_2_JediScore[0], aqp_2016_2_JediScore[0]],
   ['Sprint 2',  aqp_2016_2_JediScore[1], aqp_2016_2_JediScore[1]],
   ['Sprint 3',  aqp_2016_2_JediScore[2], aqp_2016_2_JediScore[2]],
   ['Sprint 4',  aqp_2016_2_JediScore[3], aqp_2016_2_JediScore[3]],
  ]);

  var options = {
  title : 'aqp_2016_2_jedi',
  vAxis: {title: 'Score'},
  hAxis: {title: 'Sprints'},
  seriesType: 'bars',
  series: {1: {type: 'line'}},
  colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_aqp_2016_2_jedi'));
  chart.draw(data, options);
  }




  function drawVisualization_aqp_2017_1_jedi() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score', 'Average'],
   ['Sprint 1',  aqp_2017_1_JediScore[0], aqp_2017_1_JediScore[0]],
   ['Sprint 2',  aqp_2017_1_JediScore[1], aqp_2017_1_JediScore[1]],
   ['Sprint 3',  aqp_2017_1_JediScore[2], aqp_2017_1_JediScore[2]],
  ]);

  var options = {
  title : 'aqp_2017_1_jedi',
  vAxis: {title: 'Score'},
  hAxis: {title: 'Sprints'},
  seriesType: 'bars',
  series: {1: {type: 'line'}},
  colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_aqp_2017_1_jedi'));
  chart.draw(data, options);
  }

  //México

   function drawVisualization_cdmx_2017_1_jedi() {
   // Some raw data (not necessarily accurate)
   var data = google.visualization.arrayToDataTable([
    ['Sprint', 'Score', 'Average'],
    ['Sprint 1',  cdmx_2017_1_JediScore[0], cdmx_2017_1_JediScore[0]],
    ['Sprint 2',  cdmx_2017_1_JediScore[1], cdmx_2017_1_JediScore[1]],
    ['Sprint 3',  cdmx_2017_1_JediScore[2], cdmx_2017_1_JediScore[2]],
   ]);

   var options = {
   title : 'cdmx_2017_1_jedi',
   width: 420,
   height: 200,
   vAxis: {title: 'Score'},
   hAxis: {title: 'Sprints'},
   seriesType: 'bars',
   series: {1: {type: 'line'}},
   colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
   };

   var chart = new google.visualization.ComboChart(document.getElementById('chart_div_cdmx_2017_1_jedi'));
   chart.draw(data, options);
   }

  //

  function drawVisualization_cdmx_2017_2_jedi() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
  ['Sprint', 'Score', 'Average'],
  ['Sprint 1',  cdmx_2017_2_JediScore[0], cdmx_2017_2_JediScore[0]],
  ['Sprint 2',  cdmx_2017_2_JediScore[1], cdmx_2017_2_JediScore[1]],
  ]);

  var options = {
  title : 'cdmx_2017_2_jedi',
  width: 420,
  height: 200,
  vAxis: {title: 'Score'},
  hAxis: {title: 'Sprints'},
  seriesType: 'bars',
  series: {1: {type: 'line'}},
  colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_cdmx_2017_2_jedi'));
  chart.draw(data, options);
  }

  //LIMA

  function drawVisualization_lima_2016_2_jedi() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
  ['Sprint', 'Score', 'Average'],
  ['Sprint 1',  lima_2016_2_JediScore[0], lima_2016_2_JediScore[0]],
  ['Sprint 2',  lima_2016_2_JediScore[1], lima_2016_2_JediScore[1]],
  ]);

  var options = {
  title : 'lima_2016_2_jedi',
  width: 420,
  height: 200,
  vAxis: {title: 'Score'},
  hAxis: {title: 'Sprints'},
  seriesType: 'bars',
  series: {1: {type: 'line'}},
  colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_lima_2016_2_jedi'));
  chart.draw(data, options);
  }


  //

  function drawVisualization_lima_2017_1_jedi() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
  ['Sprint', 'Score', 'Average'],
  ['Sprint 1',  lima_2017_1_JediScore[0], lima_2017_1_JediScore[0]],
  ['Sprint 2',  lima_2017_1_JediScore[1], lima_2017_1_JediScore[1]],
  ['Sprint 3',  lima_2017_1_JediScore[2], lima_2017_1_JediScore[2]],
  ]);

  var options = {
  title : 'lima_2017_1_jedi',
  width: 420,
  height: 200,
  vAxis: {title: 'Score'},
  hAxis: {title: 'Sprints'},
  seriesType: 'bars',
  series: {1: {type: 'line'}},
  colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_lima_2017_1_jedi'));
  chart.draw(data, options);
  }

  //

  function drawVisualization_lima_2017_2_jedi() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
  ['Sprint', 'Score', 'Average'],
  ['Sprint 1', lima_2017_2_JediScore[0], lima_2017_2_JediScore[0]],
  ['Sprint 2', lima_2017_2_JediScore[1], lima_2017_2_JediScore[1]],
  ]);

  var options = {
  title : 'lima_2017_2_jedi',
  width: 420,
  height: 200,
  vAxis: {title: 'Score'},
  hAxis: {title: 'Sprints'},
  seriesType: 'bars',
  series: {1: {type: 'line'}},
  colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_lima_2017_2_jedi'));
  chart.draw(data, options);
  }


  //CHILE
  function drawVisualization_scl_2016_2_jedi() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
  ['Sprint', 'Score', 'Average'],
  ['Sprint 1', scl_2016_2_JediScore[0], scl_2016_2_JediScore[0]],
  ['Sprint 2', scl_2016_2_JediScore[1], scl_2016_2_JediScore[1]],
  ['Sprint 3', scl_2016_2_JediScore[2], scl_2016_2_JediScore[2]],
  ['Sprint 4', scl_2016_2_JediScore[3], scl_2016_2_JediScore[3]],
  ]);

  var options = {
  title : 'scl_2016_2_jedi',
  width: 420,
  height: 200,
  vAxis: {title: 'Score'},
  hAxis: {title: 'Sprints'},
  seriesType: 'bars',
  series: {1: {type: 'line'}},
  colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_scl_2016_2_jedi'));
  chart.draw(data, options);
  }


  //

  function drawVisualization_scl_2017_1_jedi() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
  ['Sprint', 'Score', 'Average'],
  ['Sprint 1', scl_2017_1_JediScore[0], scl_2017_1_JediScore[0]],
  ['Sprint 2', scl_2017_1_JediScore[1], scl_2017_1_JediScore[1]],
  ['Sprint 3', scl_2017_1_JediScore[2], scl_2017_1_JediScore[2]],
  ]);

  var options = {
  title : 'scl_2017_1_jedi',
  width: 420,
  height: 200,
  vAxis: {title: 'Score'},
  hAxis: {title: 'Sprints'},
  seriesType: 'bars',
  series: {1: {type: 'line'}},
  colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_scl_2017_1_jedi'));
  chart.draw(data, options);
  }

  //

  function drawVisualization_scl_2017_2_jedi() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
  ['Sprint', 'Score', 'Average'],
  ['Sprint 1', scl_2017_2_JediScore[0], scl_2017_2_JediScore[0]],
  ['Sprint 2', scl_2017_2_JediScore[1], scl_2017_2_JediScore[1]],
  ]);

  var options = {
  title : 'scl_2017_2_jedi',
  width: 420,
  height: 200,
  vAxis: {title: 'Score'},
  hAxis: {title: 'Sprints'},
  seriesType: 'bars',
  series: {1: {type: 'line'}},
  colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_scl_2017_2_jedi'));
  chart.draw(data, options);
  }
