var showData_Lima_2016_2 = function () {


  titleOption.innerText = "LIMA 2016-2";
  showTeachersScoreAverage.innerText = lima_2016_2_TeachersScoreAverage;
  showJediScoreAverage.innerText = lima_2016_2_JediScoreAverage;
  generationCodersGenerationDB.appendChild(showLima_2016_2_TotalStudents);
  totalStudentsLima();
  abandonmentCodersDBData.appendChild(dropoutAverageLima_2016_2DB);

  overcomeTechDBData.appendChild(lima2016_2_showPercentageTech);
  overcomeTechDBData.appendChild(lima2016_2_showTotalPercentageSprintTech);
  overcomeHseDBData.appendChild(lima2016_2_showPercentageHse);
  overcomeHseDBData.appendChild(lima2016_2_showTotalPercentageSprintHse);

  google.charts.setOnLoadCallback(drawVisualization_lima_2016_2_nps);
  google.charts.setOnLoadCallback(drawVisualization_lima_2016_2_satisfaction);
  google.charts.setOnLoadCallback(drawChart_lima2016_2_Tech);
  google.charts.setOnLoadCallback(drawChart_lima2016_2_Hse);
  google.charts.setOnLoadCallback(drawVisualization_lima_2016_2);
  google.charts.setOnLoadCallback(drawVisualization_lima_2016_2_jedi);
}

var showData_Lima_2017_1 = function () {

  active();

  titleOption.innerText = "LIMA 2017-1";
  showTeachersScoreAverage.innerText = lima_2017_1_TeachersScoreAverage;
  showJediScoreAverage.innerText = lima_2017_1_JediScoreAverage;
  generationCodersGenerationDB.appendChild(showLima_2017_1_TotalStudents);
  totalStudentsLima();
  abandonmentCodersDBData.appendChild(dropoutAverageLima_2017_1DB);

  overcomeTechDBData.appendChild(lima2017_1_showPercentageTech);
  overcomeTechDBData.appendChild(lima2017_1_showTotalPercentageSprintTech);
  overcomeHseDBData.appendChild(lima2017_1_showPercentageHse);
  overcomeHseDBData.appendChild(lima2017_1_showTotalPercentageSprintHse);

  google.charts.setOnLoadCallback(drawVisualization_lima_2017_1_nps);
  google.charts.setOnLoadCallback(drawVisualization_lima_2017_1_satisfaction);
  google.charts.setOnLoadCallback(drawChart_lima2017_1_Tech);
  google.charts.setOnLoadCallback(drawChart_lima2017_1_Hse);
  google.charts.setOnLoadCallback(drawVisualization_lima_2017_1);
  google.charts.setOnLoadCallback(drawVisualization_lima_2017_1_jedi);
}

var showData_Lima_2017_2 = function () {


  titleOption.innerText = "LIMA 2017-2";
  showTeachersScoreAverage.innerText = lima_2017_2_TeachersScoreAverage;
  showJediScoreAverage.innerText = lima_2017_2_JediScoreAverage;
  generationCodersGenerationDB.appendChild(showLima_2017_2_TotalStudents);
  totalStudentsLima();
  abandonmentCodersDBData.appendChild(dropoutAverageLima_2017_2DB);

  overcomeTechDBData.appendChild(lima2017_2_showPercentageTech);
  overcomeTechDBData.appendChild(lima2017_2_showTotalPercentageSprintTech);
  overcomeHseDBData.appendChild(lima2017_2_showPercentageHse);
  overcomeHseDBData.appendChild(lima2017_2_showTotalPercentageSprintHse);

  google.charts.setOnLoadCallback(drawVisualization_lima_2017_2_nps);
  google.charts.setOnLoadCallback(drawVisualization_lima_2017_2_satisfaction);
  google.charts.setOnLoadCallback(drawChart_lima2017_2_Tech);
  google.charts.setOnLoadCallback(drawChart_lima2017_2_Hse);
  google.charts.setOnLoadCallback(drawVisualization_lima_2017_2);
  google.charts.setOnLoadCallback(drawVisualization_lima_2017_2_jedi);
}


var totalStudentsLima = function () {
  var generation = data.LIM;
  var selectGeneration;
  for(selectGeneration in generation){
    var numberStudents = generation[selectGeneration].students.length;
      addStudents += numberStudents;
  }
  resultGenerationCodersDB.innerText = addStudents;
  generationCodersDB.appendChild(resultGenerationCodersDB);
  addStudents = 0;
}
