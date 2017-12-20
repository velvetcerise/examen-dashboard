var region = data;
var selectGeneration;

var aqp_2016_2_NumStudents = [];
var aqp_2017_1_NumStudents = [];
var cdmx_2017_1_NumStudents = [];
var cdmx_2017_2_NumStudents = [];
var lima_2016_2_NumStudents = [];
var lima_2017_1_NumStudents = [];
var lima_2017_2_NumStudents = [];
var scl_2016_2_NumStudents = [];
var scl_2017_1_NumStudents = [];
var scl_2017_2_NumStudents = [];


for (area in region){
  var generation = region[area];
    for(selectGeneration in generation){
      for(var i = 0; i < generation[selectGeneration].students.length; i++){
        var studentsNumber = generation[selectGeneration].students[i];
        if(generation[selectGeneration] === region.AQP['2016-2']){
          aqp_2016_2_NumStudents.push(studentsNumber);
        } else if(generation[selectGeneration] === region.AQP['2017-1']){
          aqp_2017_1_NumStudents.push(studentsNumber);
        } else if(generation[selectGeneration] === region.CDMX['2017-1']){
          cdmx_2017_1_NumStudents.push(studentsNumber);
        } else if(generation[selectGeneration] === region.CDMX['2017-2']){
          cdmx_2017_2_NumStudents.push(studentsNumber);
        } else if(generation[selectGeneration] === region.LIM['2016-2']){
          lima_2016_2_NumStudents.push(studentsNumber);
        } else if(generation[selectGeneration] === region.LIM['2017-1']){
          lima_2017_1_NumStudents.push(studentsNumber);
        } else if(generation[selectGeneration] === region.LIM['2017-2']){
          lima_2017_2_NumStudents.push(studentsNumber);
        } else if(generation[selectGeneration] === region.SCL['2016-2']){
          scl_2016_2_NumStudents.push(studentsNumber);
        } else if(generation[selectGeneration] === region.SCL['2017-1']){
          scl_2017_1_NumStudents.push(studentsNumber);
        } else if(generation[selectGeneration] === region.SCL['2017-2']){
          scl_2017_2_NumStudents.push(studentsNumber);
        }
      }
    }

}

var aqp_2016_2_TotalStudents = aqp_2016_2_NumStudents.length;
var aqp_2017_1_TotalStudents = aqp_2016_2_NumStudents.length;
var cdmx_2017_1_TotalStudents = cdmx_2017_1_NumStudents.length;
var cdmx_2017_2_TotalStudents = cdmx_2017_2_NumStudents.length;
var lima_2016_2_TotalStudents = lima_2016_2_NumStudents.length;
var lima_2017_1_TotalStudents = lima_2017_1_NumStudents.length;
var lima_2017_2_TotalStudents = lima_2017_2_NumStudents.length;
var scl_2016_2_TotalStudents = scl_2016_2_NumStudents.length;
var scl_2017_1_TotalStudents = scl_2017_1_NumStudents.length;
var scl_2017_2_TotalStudents = scl_2017_2_NumStudents.length;



var showAqp_2016_2_TotalStudents = document.createElement("span");
showAqp_2016_2_TotalStudents.innerText = aqp_2016_2_TotalStudents ;

var showAqp_2017_1_TotalStudents = document.createElement("span");
showAqp_2016_2_TotalStudents.innerText = aqp_2017_1_TotalStudents;


var showCdmx_2017_1_TotalStudents = document.createElement("span");
showCdmx_2017_1_TotalStudents.innerText = cdmx_2017_1_TotalStudents;

var showCdmx_2017_2_TotalStudents = document.createElement("span");
showCdmx_2017_2_TotalStudents.innerText = cdmx_2017_2_TotalStudents;


var showLima_2016_2_TotalStudents = document.createElement("span");
showLima_2016_2_TotalStudents.innerText = lima_2016_2_TotalStudents;

var showLima_2017_1_TotalStudents = document.createElement("span");
showLima_2017_1_TotalStudents.innerText = lima_2017_1_TotalStudents;

var showLima_2017_2_TotalStudents = document.createElement("span");
showLima_2017_2_TotalStudents.innerText = lima_2017_2_TotalStudents;


var showScl_2016_2_TotalStudents = document.createElement("span");
showScl_2016_2_TotalStudents.innerText = scl_2016_2_TotalStudents;

var showScl_2017_1_TotalStudents = document.createElement("span");
showScl_2017_1_TotalStudents.innerText = scl_2017_1_TotalStudents;

var showScl_2017_2_TotalStudents = document.createElement("span");
showScl_2017_2_TotalStudents.innerText = scl_2017_2_TotalStudents;
