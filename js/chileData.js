var showData_Chile_2016_2 = function () {


  titleOption.innerText = "CHILE 2016-2";
  showTeachersScoreAverage.innerText = scl_2016_2_TeachersScoreAverage;
  showJediScoreAverage.innerText = scl_2016_2_JediScoreAverage;
  generationCodersGenerationDB.appendChild(showScl_2016_2_TotalStudents);
  totalStudentsChile();
  abandonmentCodersDBData.appendChild(dropoutAverageScl_2016_2DB);

  overcomeTechDBData.appendChild(scl_2016_2_showPercentageTech);
  overcomeTechDBData.appendChild(scl_2016_2_showTotalPercentageSprintTech);
  overcomeHseDBData.appendChild(scl_2016_2_showPercentageHse);
  overcomeHseDBData.appendChild(scl_2016_2_showTotalPercentageSprintHse);


  google.charts.setOnLoadCallback(drawVisualization_scl_2016_2_nps);
  google.charts.setOnLoadCallback(drawVisualization_scl_2016_2_satisfaction);
  google.charts.setOnLoadCallback(drawChart_scl2016_2_Tech);
  google.charts.setOnLoadCallback(drawChart_scl2016_2_Hse);
  google.charts.setOnLoadCallback(drawVisualization_scl_2016_2);
  google.charts.setOnLoadCallback(drawVisualization_scl_2016_2_jedi);
}

var showData_Chile_2017_1 = function () {


  titleOption.innerText = "CHILE 2017-1";
  showTeachersScoreAverage.innerText = scl_2017_1_TeachersScoreAverage;
  showJediScoreAverage.innerText = scl_2017_1_JediScoreAverage;
  generationCodersGenerationDB.appendChild(showScl_2017_1_TotalStudents);
  totalStudentsChile();
  abandonmentCodersDBData.appendChild(dropoutAverageScl_2017_1DB);

  overcomeTechDBData.appendChild(scl_2017_1_showPercentageTech);
  overcomeTechDBData.appendChild(scl_2017_1_showTotalPercentageSprintTech);
  overcomeHseDBData.appendChild(scl_2017_1_showPercentageHse);
  overcomeHseDBData.appendChild(scl_2017_1_showTotalPercentageSprintHse);

  google.charts.setOnLoadCallback(drawVisualization_scl_2017_1_nps);
  google.charts.setOnLoadCallback(drawVisualization_scl_2017_1_satisfaction);
  google.charts.setOnLoadCallback(drawChart_scl2016_2_Tech);
  google.charts.setOnLoadCallback(drawChart_scl2016_2_Hse);
  google.charts.setOnLoadCallback(drawVisualization_scl_2017_1);
  google.charts.setOnLoadCallback(drawVisualization_scl_2017_1_jedi);
}

var showData_Chile_2017_2 = function () {

  active();

  titleOption.innerText = "CHILE 2017-2";
  showTeachersScoreAverage.innerText = scl_2017_2_TeachersScoreAverage;
  showJediScoreAverage.innerText = scl_2017_2_JediScoreAverage;
  generationCodersGenerationDB.appendChild(showScl_2017_2_TotalStudents);
  totalStudentsChile();
  abandonmentCodersDBData.appendChild(dropoutAverageScl_2017_2DB);

  overcomeTechDBData.appendChild(scl_2017_1_showPercentageTech);
  overcomeTechDBData.appendChild(scl_2017_1_showTotalPercentageSprintTech);
  overcomeHseDBData.appendChild(scl_2017_1_showPercentageHse);
  overcomeHseDBData.appendChild(scl_2017_1_showTotalPercentageSprintHse);

  google.charts.setOnLoadCallback(drawVisualization_scl_2017_2_nps);
  google.charts.setOnLoadCallback(drawVisualization_scl_2017_2_satisfaction);
  google.charts.setOnLoadCallback(drawChart_scl2017_2_Tech);
  google.charts.setOnLoadCallback(drawChart_scl2017_2_Hse);
  google.charts.setOnLoadCallback(drawVisualization_scl_2017_2);
  google.charts.setOnLoadCallback(drawVisualization_scl_2017_2_jedi);
}


var totalStudentsChile = function () {
  var generation = data.SCL;
  var selectGeneration;
  for(selectGeneration in generation){
    var numberStudents = generation[selectGeneration].students.length;
      addStudents += numberStudents;
  }
  resultGenerationCodersDB.innerText = addStudents;
  generationCodersDB.appendChild(resultGenerationCodersDB);
  addStudents = 0;
}
