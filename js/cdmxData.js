var showData_CDMX_2017_1 = function () {


  titleOption.innerText = "CDMX 2017-1";
  showTeachersScoreAverage.innerText = cdmx_2017_1_TeachersScoreAverage;
  showJediScoreAverage.innerText = cdmx_2017_1_JediScoreAverage;
  generationCodersGenerationDB.appendChild(showCdmx_2017_1_TotalStudents);


  totalStudentsCDMX();
  abandonmentCodersDBData.appendChild(dropoutAverageCdmx_2017_1DB);

  overcomeTechDBData.appendChild(cdmx2017_1_showPercentageTech);
  overcomeTechDBData.appendChild(cdmx2017_1_showTotalPercentageSprintTech);
  overcomeHseDBData.appendChild(cdmx2017_1_showPercentageHse);
  overcomeHseDBData.appendChild(cdmx2017_1_showTotalPercentageSprintHse);


  google.charts.setOnLoadCallback(drawVisualization_cdmx_2017_1_nps);
  google.charts.setOnLoadCallback(drawVisualization_cdmx_2017_1_satisfaction);
  google.charts.setOnLoadCallback(drawChart_cdmx2017_1_Tech);
  google.charts.setOnLoadCallback(drawChart_cdmx2017_1_Hse);
  google.charts.setOnLoadCallback(drawVisualization_cdmx_2017_1);
  google.charts.setOnLoadCallback(drawVisualization_cdmx_2017_1_jedi);
}

var showData_CDMX_2017_2 = function () {

  titleOption.innerText = "CDMX 2017-2";
  generationCodersGenerationDB.appendChild(showCdmx_2017_2_TotalStudents);
  showTeachersScoreAverage.innerText = cdmx_2017_2_TeachersScoreAverage;
  showJediScoreAverage.innerText = cdmx_2017_2_JediScoreAverage;
  totalStudentsCDMX();
  abandonmentCodersDBData.appendChild(dropoutAverageCdmx_2017_2DB);

  overcomeTechDBData.appendChild(cdmx2017_2_showPercentageTech);
  overcomeTechDBData.appendChild(cdmx2017_2_showTotalPercentageSprintTech);
  overcomeHseDBData.appendChild(cdmx2017_2_showPercentageHse);
  overcomeHseDBData.appendChild(cdmx2017_2_showTotalPercentageSprintHse);


  google.charts.setOnLoadCallback(drawVisualization_cdmx_2017_2_nps);
  google.charts.setOnLoadCallback(drawVisualization_cdmx_2017_2_satisfaction);
  google.charts.setOnLoadCallback(drawChart_cdmx2017_2_Tech);
  google.charts.setOnLoadCallback(drawChart_cdmx2017_2_Hse);
  google.charts.setOnLoadCallback(drawVisualization_cdmx_2017_2);
  google.charts.setOnLoadCallback(drawVisualization_cdmx_2017_2_jedi);
}


var totalStudentsCDMX = function () {
  var generation = data.CDMX;
  var selectGeneration;
  for(selectGeneration in generation){
    var numberStudents = generation[selectGeneration].students.length;
      addStudents += numberStudents;
  }
  resultGenerationCodersDB.innerText = addStudents;
  generationCodersDB.appendChild(resultGenerationCodersDB);
  addStudents = 0;
}
