// número de estudiantes active=false
var dropoutAqp_2016_2 = 0;
var dropoutAqp_2017_1 = 0;
var dropoutCdmx_2017_1 = 0;
var dropoutCdmx_2017_2 = 0;
var dropoutLima_2016_2 = 0;
var dropoutLima_2017_1 = 0;
var dropoutLima_2017_2 = 0;
var dropoutScl_2016_2 = 0;
var dropoutScl_2017_1 = 0;
var dropoutScl_2017_2 = 0;

var region = data;
var selectGeneration;


for (students in region){
  var generation = region[students];
    for(selectGeneration in generation){
      for(var i = 0; i < generation[selectGeneration].students.length; i++){
        var scoreTeachersSprint = generation[selectGeneration].students[i].active;
        if(generation[selectGeneration] === region.AQP['2016-2'] && scoreTeachersSprint === false){
          dropoutAqp_2016_2++;
        } else if(generation[selectGeneration] === region.AQP['2017-1'] && scoreTeachersSprint === false){
          dropoutAqp_2017_1++ ;
        } else if(generation[selectGeneration] === region.CDMX['2017-1']&& scoreTeachersSprint === false){
          dropoutCdmx_2017_1++;
        } else if(generation[selectGeneration] === region.CDMX['2017-2'] && scoreTeachersSprint === false){
          dropoutCdmx_2017_2++;
        } else if(generation[selectGeneration] === region.LIM['2016-2'] && scoreTeachersSprint === false){
          dropoutLima_2016_2++;
        } else if(generation[selectGeneration] === region.LIM['2017-1'] && scoreTeachersSprint === false){
          dropoutLima_2017_1++;
        } else if(generation[selectGeneration] === region.LIM['2017-2'] && scoreTeachersSprint === false){
          dropoutLima_2017_2++;
        } else if(generation[selectGeneration] === region.SCL['2016-2'] && scoreTeachersSprint === false){
          dropoutScl_2016_2++;
        } else if(generation[selectGeneration] === region.SCL['2017-1'] && scoreTeachersSprint === false){
          dropoutScl_2017_1++;
        } else if(generation[selectGeneration] === region.SCL['2017-2'] && scoreTeachersSprint === false){
          dropoutScl_2017_2++;
        }
      }
    }

}

// porcentaje de deserción
var dropoutAverageAqp_2016_2 = ((dropoutAqp_2016_2 * 100) / aqp_2016_2_TotalStudents).toFixed(2);
var dropoutAverageAqp_2017_1 = ((dropoutAqp_2017_1 * 100) / aqp_2017_1_TotalStudents).toFixed(2);
var dropoutAverageCdmx_2017_1 = ((dropoutCdmx_2017_1 * 100) / cdmx_2017_1_TotalStudents).toFixed(2);
var dropoutAverageCdmx_2017_2 = ((dropoutCdmx_2017_2 * 100) / cdmx_2017_2_TotalStudents).toFixed(2);
var dropoutAverageLima_2016_2 = ((dropoutLima_2016_2 * 100) / lima_2016_2_TotalStudents).toFixed(2);
var dropoutAverageLima_2017_1 = ((dropoutLima_2017_1 * 100) / lima_2017_1_TotalStudents).toFixed(2);
var dropoutAverageLima_2017_2 = ((dropoutLima_2017_2 * 100) / lima_2017_2_TotalStudents).toFixed(2);
var dropoutAverageScl_2016_2 = ((dropoutScl_2016_2 * 100) / scl_2016_2_TotalStudents).toFixed(2);
var dropoutAverageScl_2017_1 = ((dropoutScl_2017_1 * 100) / scl_2017_1_TotalStudents).toFixed(2);
var dropoutAverageScl_2017_2 = ((dropoutScl_2017_2 * 100) / scl_2017_2_TotalStudents).toFixed(2);

var abandonmentCodersDB = document.getElementById("abandonment-coders-db");


var dropoutAverageAqp_2016_2DB = document.createElement("p");
dropoutAverageAqp_2016_2DB.innerText = dropoutAverageAqp_2016_2 + "%";

var dropoutAverageAqp_2017_1DB = document.createElement("p");
dropoutAverageAqp_2017_1DB.innerText = dropoutAverageAqp_2017_1 + "%";

var dropoutAverageCdmx_2017_1DB = document.createElement("p");
dropoutAverageCdmx_2017_1DB.innerText = dropoutAverageCdmx_2017_1 + "%";

var dropoutAverageCdmx_2017_2DB = document.createElement("p");
dropoutAverageCdmx_2017_2DB.innerText = dropoutAverageCdmx_2017_2 + "%";

var dropoutAverageLima_2016_2DB = document.createElement("p");
dropoutAverageLima_2016_2DB.innerText = dropoutAverageLima_2016_2 + "%";

var dropoutAverageLima_2017_1DB = document.createElement("p");
dropoutAverageLima_2017_1DB.innerText = dropoutAverageLima_2017_1 + "%";

var dropoutAverageLima_2017_2DB = document.createElement("p");
dropoutAverageLima_2017_2DB.innerText = dropoutAverageLima_2017_2 + "%";

var dropoutAverageScl_2016_2DB = document.createElement("p");
dropoutAverageScl_2016_2DB.innerText = dropoutAverageScl_2016_2 + "%";

var dropoutAverageScl_2017_1DB = document.createElement("p");
dropoutAverageScl_2017_1DB.innerText = dropoutAverageScl_2017_1 + "%";

var dropoutAverageScl_2017_2DB = document.createElement("p");
dropoutAverageScl_2017_2DB.innerText = dropoutAverageScl_2017_2 + "%";
