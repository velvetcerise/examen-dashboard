var showData_Aqp_2016_2 = function () {



  titleOption.innerText = "AREQUIPA 2016-2";
  showTeachersScoreAverage.innerText = aqp_2016_2_TeachersScoreAverage;
  showJediScoreAverage.innerText = aqp_2016_2_JediScoreAverage;
  generationCodersGenerationDB.appendChild(showAqp_2016_2_TotalStudents);
  totalStudentsAQP();
  abandonmentCodersDBData.appendChild(dropoutAverageAqp_2016_2DB);

  overcomeTechDBData.appendChild(aqp2016_2_showPercentageTech);
  overcomeTechDBData.appendChild(aqp2016_2_showTotalPercentageSprintTech);
  overcomeHseDBData.appendChild(aqp2016_2_showPercentageHse);
  overcomeHseDBData.appendChild(aqp2016_2_showTotalPercentageSprintHse);



  google.charts.setOnLoadCallback(drawVisualization_aqp_2016_2_nps);
  google.charts.setOnLoadCallback(drawChart_aqp2016_2_Tech);
  google.charts.setOnLoadCallback(drawChart_aqp2016_2_Hse);
  google.charts.setOnLoadCallback(drawVisualization_aqp_2016_2_satisfaction);
  google.charts.setOnLoadCallback(drawVisualization_aqp_2016_2);
  google.charts.setOnLoadCallback(drawVisualization_aqp_2016_2_jedi);


}

var showData_Aqp_2017_1 = function () {

  

  titleOption.innerText = "AREQUIPA 2017-1";
  showTeachersScoreAverage.innerText = aqp_2017_1_TeachersScoreAverage;
  showJediScoreAverage.innerText = aqp_2017_1_JediScoreAverage;
  generationCodersGenerationDB.appendChild(showAqp_2017_1_TotalStudents);
  totalStudentsAQP();
  abandonmentCodersDBData.appendChild(dropoutAverageAqp_2017_1DB);

  overcomeTechDBData.appendChild(aqp2017_1_showPercentageTech);
  overcomeTechDBData.appendChild(aqp2017_1_showTotalPercentageSprintTech);
  overcomeHseDBData.appendChild(aqp2017_1_showPercentageHse);
  overcomeHseDBData.appendChild(aqp2017_1_showTotalPercentageSprintHse);

  //aqp2017_1_AverageHse();

  google.charts.setOnLoadCallback(drawVisualization_aqp_2017_1_nps);
  google.charts.setOnLoadCallback(drawChart_aqp2017_1_Tech);
  google.charts.setOnLoadCallback(drawChart_aqp2016_2_Hse);
  google.charts.setOnLoadCallback(drawVisualization_aqp_2017_1_satisfaction);
  google.charts.setOnLoadCallback(drawVisualization_aqp_2017_1);
  google.charts.setOnLoadCallback(drawVisualization_aqp_2017_1_jedi);
}


var totalStudentsAQP = function () {
  var generation = data.AQP;
  var selectGeneration;
  for(selectGeneration in generation){
    var numberStudents = generation[selectGeneration].students.length;
    addStudents += numberStudents;
  }
  resultGenerationCodersDB.innerText = addStudents;
  generationCodersDB.appendChild(resultGenerationCodersDB);
  addStudents = 0;
}
