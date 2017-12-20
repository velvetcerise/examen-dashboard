var region = data;
var selectGeneration;

var aqp_2016_2_TeachersScore = [];
var aqp_2017_1_TeachersScore = [];
var cdmx_2017_1_TeachersScore = [];
var cdmx_2017_2_TeachersScore = [];
var lima_2016_2_TeachersScore = [];
var lima_2017_1_TeachersScore = [];
var lima_2017_2_TeachersScore = [];
var scl_2016_2_TeachersScore = [];
var scl_2017_1_TeachersScore = [];
var scl_2017_2_TeachersScore = [];


var aqp_2016_2_TeachersScoreTotal = 0;
var aqp_2017_1_TeachersScoreTotal = 0;
var cdmx_2017_1_TeachersScoreTotal = 0;
var cdmx_2017_2_TeachersScoreTotal = 0;
var lima_2016_2_TeachersScoreTotal = 0;
var lima_2017_1_TeachersScoreTotal = 0;
var lima_2017_2_TeachersScoreTotal = 0;
var scl_2016_2_TeachersScoreTotal = 0;
var scl_2017_1_TeachersScoreTotal = 0;
var scl_2017_2_TeachersScoreTotal = 0;


for (area in region){
  var generation = region[area];
    for(selectGeneration in generation){
      for(var i = 0; i < generation[selectGeneration].ratings.length; i++){
        var scoreTeachersSprint = generation[selectGeneration].ratings[i].teacher;
        if(generation[selectGeneration] === region.AQP['2016-2']){
          aqp_2016_2_TeachersScore.push(scoreTeachersSprint);
          aqp_2016_2_TeachersScoreTotal += scoreTeachersSprint;
        } else if(generation[selectGeneration] === region.AQP['2017-1']){
          aqp_2017_1_TeachersScore.push(scoreTeachersSprint);
          aqp_2017_1_TeachersScoreTotal += scoreTeachersSprint;
        } else if(generation[selectGeneration] === region.CDMX['2017-1']){
          cdmx_2017_1_TeachersScore.push(scoreTeachersSprint);
          cdmx_2017_1_TeachersScoreTotal += scoreTeachersSprint;
        } else if(generation[selectGeneration] === region.CDMX['2017-2']){
          cdmx_2017_2_TeachersScore.push(scoreTeachersSprint);
          cdmx_2017_2_TeachersScoreTotal += scoreTeachersSprint;
        } else if(generation[selectGeneration] === region.LIM['2016-2']){
          lima_2016_2_TeachersScore.push(scoreTeachersSprint);
          lima_2016_2_TeachersScoreTotal += scoreTeachersSprint;
        } else if(generation[selectGeneration] === region.LIM['2017-1']){
          lima_2017_1_TeachersScore.push(scoreTeachersSprint);
          lima_2017_1_TeachersScoreTotal += scoreTeachersSprint;
        } else if(generation[selectGeneration] === region.LIM['2017-2']){
          lima_2017_2_TeachersScore.push(scoreTeachersSprint);
          lima_2017_2_TeachersScoreTotal += scoreTeachersSprint;
        } else if(generation[selectGeneration] === region.SCL['2016-2']){
          scl_2016_2_TeachersScore.push(scoreTeachersSprint);
          scl_2016_2_TeachersScoreTotal += scoreTeachersSprint;
        } else if(generation[selectGeneration] === region.SCL['2017-1']){
          scl_2017_1_TeachersScore.push(scoreTeachersSprint);
          scl_2017_1_TeachersScoreTotal += scoreTeachersSprint;
        } else if(generation[selectGeneration] === region.SCL['2017-2']){
          scl_2017_2_TeachersScore.push(scoreTeachersSprint);
          scl_2017_2_TeachersScoreTotal += scoreTeachersSprint;
        }
      }
    }

}
var showTeachersScoreAverage = document.createElement("span");
teachersDBData.appendChild(showTeachersScoreAverage)


var aqp_2016_2_TeachersScoreAverage = (aqp_2016_2_TeachersScoreTotal / aqp_2016_2_TeachersScore.length).toFixed(2);
var aqp_2017_1_TeachersScoreAverage = (aqp_2017_1_TeachersScoreTotal / aqp_2017_1_TeachersScore.length).toFixed(2);
var cdmx_2017_1_TeachersScoreAverage = (cdmx_2017_1_TeachersScoreTotal / cdmx_2017_1_TeachersScore.length).toFixed(2);
var cdmx_2017_2_TeachersScoreAverage = (cdmx_2017_2_TeachersScoreTotal / cdmx_2017_2_TeachersScore.length).toFixed(2);
var lima_2016_2_TeachersScoreAverage = (lima_2016_2_TeachersScoreTotal / lima_2016_2_TeachersScore.length).toFixed(2);
var lima_2017_1_TeachersScoreAverage = (lima_2017_1_TeachersScoreTotal / lima_2017_1_TeachersScore.length).toFixed(2);
var lima_2017_2_TeachersScoreAverage = (lima_2017_2_TeachersScoreTotal / lima_2017_2_TeachersScore.length).toFixed(2);
var scl_2016_2_TeachersScoreAverage = (scl_2016_2_TeachersScoreTotal / scl_2016_2_TeachersScore.length).toFixed(2);
var scl_2017_1_TeachersScoreAverage = (scl_2017_1_TeachersScoreTotal / scl_2017_1_TeachersScore.length).toFixed(2);
var scl_2017_2_TeachersScoreAverage = (scl_2017_2_TeachersScoreTotal / scl_2017_2_TeachersScore.length).toFixed(2);


  function drawVisualization_aqp_2016_2() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score', 'Average'],
   ['Sprint 1',  aqp_2016_2_TeachersScore[0], aqp_2016_2_TeachersScore[0]],
   ['Sprint 2',  aqp_2016_2_TeachersScore[1], aqp_2016_2_TeachersScore[1]],
   ['Sprint 3',  aqp_2016_2_TeachersScore[2], aqp_2016_2_TeachersScore[2]],
   ['Sprint 4',  aqp_2016_2_TeachersScore[3], aqp_2016_2_TeachersScore[3]],
  ]);

  var options = {
  title : 'aqp_2016_2_teachers',
  width: 420,
  height: 200,
  vAxis: {title: 'Score'},
  hAxis: {title: 'Sprints'},
  seriesType: 'bars',
  series: {1: {type: 'line'}},
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_aqp_2016_2'));
  chart.draw(data, options);
  }




  function drawVisualization_aqp_2017_1() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score', 'Average'],
   ['Sprint 1',  aqp_2017_1_TeachersScore[0], aqp_2017_1_TeachersScore[0]],
   ['Sprint 2',  aqp_2017_1_TeachersScore[1], aqp_2017_1_TeachersScore[1]],
   ['Sprint 3',  aqp_2017_1_TeachersScore[2], aqp_2017_1_TeachersScore[2]],
  ]);

  var options = {
  title : 'aqp_2017_1_teachers',
  width: 420,
  height: 200,
  vAxis: {title: 'Score'},
  hAxis: {title: 'Sprints'},
  seriesType: 'bars',
  series: {1: {type: 'line'}},
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_aqp_2017_1'));
  chart.draw(data, options);
  }


  //Méxco

    function drawVisualization_cdmx_2017_1() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
     ['Sprint', 'Score', 'Average'],
     ['Sprint 1',  cdmx_2017_1_TeachersScore[0], cdmx_2017_1_TeachersScore[0]],
     ['Sprint 2',  cdmx_2017_1_TeachersScore[1], cdmx_2017_1_TeachersScore[1]],
     ['Sprint 3',  cdmx_2017_1_TeachersScore[2], cdmx_2017_1_TeachersScore[2]],
    ]);

    var options = {
    title : 'cdmx_2017_1_teachers',
    width: 420,
    height: 200,
    vAxis: {title: 'Score'},
    hAxis: {title: 'Sprints'},
    seriesType: 'bars',
    series: {1: {type: 'line'}},
    colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_cdmx_2017_1'));
    chart.draw(data, options);
    }

  //

    function drawVisualization_cdmx_2017_2() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
     ['Sprint', 'Score', 'Average'],
     ['Sprint 1',  cdmx_2017_2_TeachersScore[0], cdmx_2017_2_TeachersScore[0]],
     ['Sprint 2',  cdmx_2017_2_TeachersScore[1], cdmx_2017_2_TeachersScore[1]],
    ]);

    var options = {
    title : 'cdmx_2017_2_teachers',
    width: 420,
    height: 200,
    vAxis: {title: 'Score'},
    hAxis: {title: 'Sprints'},
    seriesType: 'bars',
    series: {1: {type: 'line'}},
    colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_cdmx_2017_2'));
    chart.draw(data, options);
    }

  // LIMA
  //
  function drawVisualization_lima_2016_2() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score', 'Average'],
   ['Sprint 1', lima_2016_2_TeachersScore[0], lima_2016_2_TeachersScore[0]],
   ['Sprint 2', lima_2016_2_TeachersScore[1], lima_2016_2_TeachersScore[1]],
  ]);

  var options = {
  title : 'lim_2016_2_teachers',
  width: 420,
  height: 200,
  vAxis: {title: 'Score'},
  hAxis: {title: 'Sprints'},
  seriesType: 'bars',
  series: {1: {type: 'line'}},
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_lima_2016_2'));
  chart.draw(data, options);
  }

  //
  function drawVisualization_lima_2017_1() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score', 'Average'],
   ['Sprint 1', lima_2017_1_TeachersScore[0], lima_2017_1_TeachersScore[0]],
   ['Sprint 2', lima_2017_1_TeachersScore[1], lima_2017_1_TeachersScore[1]],
   ['Sprint 3', lima_2017_1_TeachersScore[2], lima_2017_1_TeachersScore[2]],
  ]);

  var options = {
  title : 'lim_2017_1teachers',
  width: 420,
  height: 200,
  vAxis: {title: 'Score'},
  hAxis: {title: 'Sprints'},
  seriesType: 'bars',
  series: {1: {type: 'line'}},
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_lima_2017_1'));
  chart.draw(data, options);
  }

  //
  function drawVisualization_lima_2017_2() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Sprint', 'Score', 'Average'],
   ['Sprint 1', lima_2017_2_TeachersScore[0], lima_2017_2_TeachersScore[0]],
   ['Sprint 2', lima_2017_2_TeachersScore[1], lima_2017_2_TeachersScore[1]],
  ]);

  var options = {
  title : 'lim_2017_2teachers',
  width: 420,
  height: 200,
  vAxis: {title: 'Score'},
  hAxis: {title: 'Sprints'},
  seriesType: 'bars',
  series: {1: {type: 'line'}},
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_lima_2017_2'));
  chart.draw(data, options);
  }


    //CHILE

    function drawVisualization_scl_2016_2() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
     ['Sprint', 'Score', 'Average'],
     ['Sprint 1',  scl_2016_2_TeachersScore[0], scl_2016_2_TeachersScore[0]],
     ['Sprint 2',  scl_2016_2_TeachersScore[1], scl_2016_2_TeachersScore[1]],
     ['Sprint 3',  scl_2016_2_TeachersScore[2], scl_2016_2_TeachersScore[2]],
    ]);

    var options = {
    title : 'scl_2016_2_teachers',
    width: 420,
    height: 200,
    vAxis: {title: 'Score'},
    hAxis: {title: 'Sprints'},
    seriesType: 'bars',
    series: {1: {type: 'line'}},
    colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_scl_2016_2'));
    chart.draw(data, options);
    }

    //
    function drawVisualization_scl_2017_1() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
     ['Sprint', 'Score', 'Average'],
     ['Sprint 1',  scl_2017_1_TeachersScore[0], scl_2017_1_TeachersScore[0]],
     ['Sprint 2',  scl_2017_1_TeachersScore[1], scl_2017_1_TeachersScore[1]],
     ['Sprint 3',  scl_2017_1_TeachersScore[2], scl_2017_1_TeachersScore[2]],
    ]);

    var options = {
    title : 'scl_2017_1_teachers',
    width: 420,
    height: 200,
    vAxis: {title: 'Score'},
    hAxis: {title: 'Sprints'},
    seriesType: 'bars',
    series: {1: {type: 'line'}},
    colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_scl_2017_1'));
    chart.draw(data, options);
    }

    //
    function drawVisualization_scl_2017_2() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
     ['Sprint', 'Score', 'Average'],
     ['Sprint 1',  scl_2017_2_TeachersScore[0], scl_2017_2_TeachersScore[0]],
     ['Sprint 2',  scl_2017_2_TeachersScore[1], scl_2017_2_TeachersScore[1]],
    ]);

    var options = {
    title : 'scl_2017_2_teachers',
    width: 420,
    height: 200,
    vAxis: {title: 'Score'},
    hAxis: {title: 'Sprints'},
    seriesType: 'bars',
    series: {1: {type: 'line'}},
    colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div_scl_2017_2'));
    chart.draw(data, options);
    }
