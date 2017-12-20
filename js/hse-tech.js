var overcomeHseDB = document.getElementById("overcome-hse-db")
var overcomeTechAverangeDB = document.getElementById("overcome-tech-general-db");

//-------Promedio TECH
var aqp2016_2_GenerationData = data.AQP["2016-2"].students;
var aqp2016_2_GenerationDataLength = data.AQP["2016-2"].students.length;


var aqp2016_2_sprint1 = [];
var aqp2016_2_sprint2 = [];
var aqp2016_2_sprint3 = [];
var aqp2016_2_sprint4 = [];

var aqp2016_2_sprint1_hse = [];
var aqp2016_2_sprint2_hse = [];
var aqp2016_2_sprint3_hse = [];
var aqp2016_2_sprint4_hse = [];



    for(var i = 0; i < aqp2016_2_GenerationDataLength; i++){
      for (var j = 0; j < aqp2016_2_GenerationData[i].sprints.length; j++){
        var studentsSprints = aqp2016_2_GenerationData[i].sprints[j];
        var scoreTech = studentsSprints.score.tech;
        var scoreHse = studentsSprints.score.hse;
          if(studentsSprints === aqp2016_2_GenerationData[i].sprints[0]){
            if(scoreTech >= 1260 ){
              aqp2016_2_sprint1.push(scoreTech);
            } else if (scoreHse >= 840){
              aqp2016_2_sprint1_hse.push(scoreHse);
            }


          } else if(studentsSprints === aqp2016_2_GenerationData[i].sprints[1]){
            if(scoreTech >= 1260 ){
              aqp2016_2_sprint2.push(scoreTech);
            } else if (scoreHse >= 840){
              aqp2016_2_sprint2_hse.push(scoreHse);
            }

          } else if (studentsSprints === aqp2016_2_GenerationData[i].sprints[2]) {
            if(scoreTech >= 1260 ){
              aqp2016_2_sprint3.push(scoreTech);
            } else if (scoreHse >= 840){
              aqp2016_2_sprint3_hse.push(scoreHse);
            }

          } else if (studentsSprints === aqp2016_2_GenerationData[i].sprints[3]){
            if(scoreTech >= 1260 ){
              aqp2016_2_sprint4.push(scoreTech);
            } else if (scoreHse >= 840){
              aqp2016_2_sprint4_hse.push(scoreHse);
            }
          }
      }
    }


//----CANTIDAD
// número de chicas por sprint que Superan
var aqp2016_2_numberStudentsSprint1Tech = (aqp2016_2_sprint1.length);
var aqp2016_2_numberStudentsSprint2Tech = (aqp2016_2_sprint2.length);
var aqp2016_2_numberStudentsSprint3Tech = (aqp2016_2_sprint3.length);
var aqp2016_2_numberStudentsSprint4Tech = (aqp2016_2_sprint4.length);

var aqp2016_2_numberStudentsSprint1Hse = (aqp2016_2_sprint1_hse.length);
var aqp2016_2_numberStudentsSprint2Hse = (aqp2016_2_sprint2_hse.length);
var aqp2016_2_numberStudentsSprint3Hse = (aqp2016_2_sprint3_hse.length);
var aqp2016_2_numberStudentsSprint4Hse = (aqp2016_2_sprint4_hse.length);

//---PORCENTAJE
//saca el porcentaje por sprint de chicas que superan
var aqp2016_2_percentageSprint1Tech = Math.round((aqp2016_2_numberStudentsSprint1Tech * 100) / aqp2016_2_GenerationDataLength);
var aqp2016_2_percentageSprint2Tech = Math.round((aqp2016_2_numberStudentsSprint2Tech * 100) / aqp2016_2_GenerationDataLength);
var aqp2016_2_percentageSprint3Tech = Math.round((aqp2016_2_numberStudentsSprint3Tech * 100) / aqp2016_2_GenerationDataLength);
var aqp2016_2_percentageSprint4Tech = Math.round((aqp2016_2_numberStudentsSprint1Tech * 100) / aqp2016_2_GenerationDataLength);

//saca el porcentaje por sprint de chicas que superan
var aqp2016_2_percentageSprint1Hse = Math.round((aqp2016_2_numberStudentsSprint1Hse * 100) / aqp2016_2_GenerationDataLength);
var aqp2016_2_percentageSprint2Hse = Math.round((aqp2016_2_numberStudentsSprint2Hse * 100) / aqp2016_2_GenerationDataLength);
var aqp2016_2_percentageSprint3Hse = Math.round((aqp2016_2_numberStudentsSprint3Hse * 100) / aqp2016_2_GenerationDataLength);
var aqp2016_2_percentageSprint4Hse = Math.round((aqp2016_2_numberStudentsSprint1Hse * 100) / aqp2016_2_GenerationDataLength);


var aqp2016_2_totalpercentageSprintsTech = ((aqp2016_2_percentageSprint1Tech + aqp2016_2_percentageSprint2Tech + aqp2016_2_percentageSprint3Tech + aqp2016_2_percentageSprint4Tech) / 4).toFixed(2);
var aqp2016_2_totalpercentageSprintsHse = ((aqp2016_2_percentageSprint1Hse + aqp2016_2_percentageSprint2Hse + aqp2016_2_percentageSprint3Hse + aqp2016_2_percentageSprint4Hse) / 4).toFixed(2);







//-----AREQUIPA 2017_2

var aqp2017_1_GenerationData = data.AQP["2017-1"].students;
var aqp2017_1_GenerationDataLength = data.AQP["2017-1"].students.length;

var aqp2017_1_sprint1 = [];
var aqp2017_1_sprint2 = [];
var aqp2017_1_sprint3 = [];


var aqp2017_1_sprint1_hse = [];
var aqp2017_1_sprint2_hse = [];
var aqp2017_1_sprint3_hse = [];



var overcomeTechAverangeDB = document.getElementById("overcome-tech-general-db");

    for(var i = 0; i < aqp2017_1_GenerationDataLength; i++){
      for (var j = 0; j < aqp2017_1_GenerationData[i].sprints.length; j++){
        var studentsSprints = aqp2017_1_GenerationData[i].sprints[j];
        var scoreTech = studentsSprints.score.tech;
        var scoreHse = studentsSprints.score.hse;
          if(studentsSprints === aqp2017_1_GenerationData[i].sprints[0]){
            if(scoreTech >= 1260 ){
              aqp2017_1_sprint1.push(scoreTech);
            } else if (scoreHse >= 840){
              aqp2017_1_sprint1_hse.push(scoreHse);
            }


          } else if(studentsSprints === aqp2017_1_GenerationData[i].sprints[1]){
            if(scoreTech >= 1260 ){
              aqp2017_1_sprint2.push(scoreTech);
            } else if (scoreHse >= 840){
              aqp2017_1_sprint2_hse.push(scoreHse);
            }

          } else if (studentsSprints === aqp2017_1_GenerationData[i].sprints[2]) {
            if(scoreTech >= 1260 ){
              aqp2017_1_sprint3.push(scoreTech);
            } else if (scoreHse >= 840){
              aqp2017_1_sprint3_hse.push(scoreHse);
            }

          }
      }
    }

    //----CANTIDAD
    // número de chicas por sprint que Superan
    var aqp2017_1_numberStudentsSprint1Tech = (aqp2017_1_sprint1.length);
    var aqp2017_1_numberStudentsSprint2Tech = (aqp2017_1_sprint2.length);
    var aqp2017_1_numberStudentsSprint3Tech = (aqp2017_1_sprint3.length);


    var aqp2017_1_numberStudentsSprint1Hse = (aqp2017_1_sprint1_hse.length);
    var aqp2017_1_numberStudentsSprint2Hse = (aqp2017_1_sprint2_hse.length);
    var aqp2017_1_numberStudentsSprint3Hse = (aqp2017_1_sprint3_hse.length);


    //---PORCENTAJE
    //saca el porcentaje por sprint de chicas que superan
    var aqp2017_1_percentageSprint1Tech = Math.round((aqp2017_1_numberStudentsSprint1Tech * 100) / aqp2017_1_GenerationDataLength);
    var aqp2017_1_percentageSprint2Tech = Math.round((aqp2017_1_numberStudentsSprint2Tech * 100) / aqp2017_1_GenerationDataLength);
    var aqp2017_1_percentageSprint3Tech = Math.round((aqp2017_1_numberStudentsSprint3Tech * 100) / aqp2017_1_GenerationDataLength);


    //saca el porcentaje por sprint de chicas que superan
    var aqp2017_1_percentageSprint1Hse = Math.round((aqp2017_1_numberStudentsSprint1Hse * 100) / aqp2017_1_GenerationDataLength);
    var aqp2017_1_percentageSprint2Hse = Math.round((aqp2017_1_numberStudentsSprint2Hse * 100) / aqp2017_1_GenerationDataLength);
    var aqp2017_1_percentageSprint3Hse = Math.round((aqp2017_1_numberStudentsSprint3Hse * 100) / aqp2017_1_GenerationDataLength);



    var aqp2017_1_totalpercentageSprintsTech = ((aqp2017_1_percentageSprint1Tech + aqp2017_1_percentageSprint2Tech + aqp2017_1_percentageSprint3Tech ) / 3).toFixed(2);
    var aqp2017_1_totalpercentageSprintsHse = ((aqp2017_1_percentageSprint1Hse + aqp2017_1_percentageSprint2Hse + aqp2017_1_percentageSprint3Hse ) / 3).toFixed(2);






//------CDMX 2017_1



var cdmx2017_1_GenerationData = data.CDMX["2017-1"].students;
var cdmx2017_1_GenerationDataLength = data.CDMX["2017-1"].students.length;

var cdmx2017_1_sprint1 = [];
var cdmx2017_1_sprint2 = [];
var cdmx2017_1_sprint3 = [];


var cdmx2017_1_sprint1_hse = [];
var cdmx2017_1_sprint2_hse = [];
var cdmx2017_1_sprint3_hse = [];



var overcomeTechAverangeDB = document.getElementById("overcome-tech-general-db");

    for(var i = 0; i < cdmx2017_1_GenerationDataLength; i++){
      for (var j = 0; j < cdmx2017_1_GenerationData[i].sprints.length; j++){
        var studentsSprints = cdmx2017_1_GenerationData[i].sprints[j];
        var scoreTech = studentsSprints.score.tech;
        var scoreHse = studentsSprints.score.hse;
          if(studentsSprints === cdmx2017_1_GenerationData[i].sprints[0]){
            if(scoreTech >= 1260 ){
              cdmx2017_1_sprint1.push(scoreTech);
            } else if (scoreHse >= 840){
              cdmx2017_1_sprint1_hse.push(scoreHse);
            }

          } else if(studentsSprints === cdmx2017_1_GenerationData[i].sprints[1]){
            if(scoreTech >= 1260 ){
              cdmx2017_1_sprint2.push(scoreTech);
            } else if (scoreHse >= 840){
              cdmx2017_1_sprint2_hse.push(scoreHse);
            }

          } else if (studentsSprints === cdmx2017_1_GenerationData[i].sprints[2]) {
            if(scoreTech >= 1260 ){
              cdmx2017_1_sprint3.push(scoreTech);
            } else if (scoreHse >= 840){
              cdmx2017_1_sprint3_hse.push(scoreHse);
            }

          }
      }
    }

    //----CANTIDAD
    // número de chicas por sprint que Superan
    var cdmx2017_1_numberStudentsSprint1Tech = (cdmx2017_1_sprint1.length);
    var cdmx2017_1_numberStudentsSprint2Tech = (cdmx2017_1_sprint2.length);
    var cdmx2017_1_numberStudentsSprint3Tech = (cdmx2017_1_sprint3.length);


    var cdmx2017_1_numberStudentsSprint1Hse = (cdmx2017_1_sprint1_hse.length);
    var cdmx2017_1_numberStudentsSprint2Hse = (cdmx2017_1_sprint2_hse.length);
    var cdmx2017_1_numberStudentsSprint3Hse = (cdmx2017_1_sprint3_hse.length);


    //---PORCENTAJE
    //saca el porcentaje por sprint de chicas que superan
    var cdmx2017_1_percentageSprint1Tech = Math.round((cdmx2017_1_numberStudentsSprint1Tech * 100) / cdmx2017_1_GenerationDataLength);
    var cdmx2017_1_percentageSprint2Tech = Math.round((cdmx2017_1_numberStudentsSprint2Tech * 100) / cdmx2017_1_GenerationDataLength);
    var cdmx2017_1_percentageSprint3Tech = Math.round((cdmx2017_1_numberStudentsSprint3Tech * 100) / cdmx2017_1_GenerationDataLength);


    //saca el porcentaje por sprint de chicas que superan
    var cdmx2017_1_percentageSprint1Hse = Math.round((cdmx2017_1_numberStudentsSprint1Hse * 100) / cdmx2017_1_GenerationDataLength);
    var cdmx2017_1_percentageSprint2Hse = Math.round((cdmx2017_1_numberStudentsSprint2Hse * 100) / cdmx2017_1_GenerationDataLength);
    var cdmx2017_1_percentageSprint3Hse = Math.round((cdmx2017_1_numberStudentsSprint3Hse * 100) / cdmx2017_1_GenerationDataLength);



    var cdmx2017_1_totalpercentageSprintsTech = ((cdmx2017_1_percentageSprint1Tech + cdmx2017_1_percentageSprint2Tech + cdmx2017_1_percentageSprint3Tech ) / 3).toFixed(2);
    var cdmx2017_1_totalpercentageSprintsHse = ((cdmx2017_1_percentageSprint1Hse + cdmx2017_1_percentageSprint2Hse + cdmx2017_1_percentageSprint3Hse ) / 3).toFixed(2);






//--------cdmx 2017_2
var cdmx2017_2_GenerationData = data.CDMX["2017-2"].students;
var cdmx2017_2_GenerationDataLength = data.CDMX["2017-2"].students.length;

var cdmx2017_2_sprint1 = [];
var cdmx2017_2_sprint2 = [];



var cdmx2017_2_sprint1_hse = [];
var cdmx2017_2_sprint2_hse = [];




    for(var i = 0; i < cdmx2017_2_GenerationDataLength; i++){
      for (var j = 0; j < cdmx2017_2_GenerationData[i].sprints.length; j++){
        var studentsSprints = cdmx2017_2_GenerationData[i].sprints[j];
        var scoreTech = studentsSprints.score.tech;
        var scoreHse = studentsSprints.score.hse;
          if(studentsSprints === cdmx2017_2_GenerationData[i].sprints[0]){
            if(scoreTech >= 1260 ){
              cdmx2017_2_sprint1.push(scoreTech);
            } else if (scoreHse >= 840){
              cdmx2017_2_sprint1_hse.push(scoreHse);
            }

          } else if(studentsSprints === cdmx2017_2_GenerationData[i].sprints[1]){
            if(scoreTech >= 1260 ){
              cdmx2017_2_sprint2.push(scoreTech);
            } else if (scoreHse >= 840){
              cdmx2017_2_sprint2_hse.push(scoreHse);
            }


          }
      }
    }

    //----CANTIDAD
    // número de chicas por sprint que Superan
    var cdmx2017_2_numberStudentsSprint1Tech = (cdmx2017_2_sprint1.length);
    var cdmx2017_2_numberStudentsSprint2Tech = (cdmx2017_2_sprint2.length);


    var cdmx2017_2_numberStudentsSprint1Hse = (cdmx2017_2_sprint1_hse.length);
    var cdmx2017_2_numberStudentsSprint2Hse = (cdmx2017_2_sprint2_hse.length);


    //---PORCENTAJE
    //saca el porcentaje por sprint de chicas que superan
    var cdmx2017_2_percentageSprint1Tech = Math.round((cdmx2017_2_numberStudentsSprint1Tech * 100) / cdmx2017_2_GenerationDataLength);
    var cdmx2017_2_percentageSprint2Tech = Math.round((cdmx2017_2_numberStudentsSprint2Tech * 100) / cdmx2017_2_GenerationDataLength);


    //saca el porcentaje por sprint de chicas que superan
    var cdmx2017_2_percentageSprint1Hse = Math.round((cdmx2017_2_numberStudentsSprint1Hse * 100) / cdmx2017_2_GenerationDataLength);
    var cdmx2017_2_percentageSprint2Hse = Math.round((cdmx2017_2_numberStudentsSprint2Hse * 100) / cdmx2017_2_GenerationDataLength);



    var cdmx2017_2_totalpercentageSprintsTech = ((cdmx2017_2_percentageSprint1Tech + cdmx2017_2_percentageSprint2Tech) / 2).toFixed(2);
    var cdmx2017_2_totalpercentageSprintsHse = ((cdmx2017_2_percentageSprint1Hse + cdmx2017_2_percentageSprint2Hse  ) / 2).toFixed(2);





//------LIMA 2016-2


var lima2016_2_GenerationData = data.LIM["2016-2"].students;
var lima2016_2_GenerationDataLength = data.LIM["2016-2"].students.length;

var lima2016_2_sprint1 = [];
var lima2016_2_sprint2 = [];



var lima2016_2_sprint1_hse = [];
var lima2016_2_sprint2_hse = [];



    for(var i = 0; i < lima2016_2_GenerationDataLength; i++){
      for (var j = 0; j < lima2016_2_GenerationData[i].sprints.length; j++){
        var studentsSprints = lima2016_2_GenerationData[i].sprints[j];
        var scoreTech = studentsSprints.score.tech;
        var scoreHse = studentsSprints.score.hse;
          if(studentsSprints === lima2016_2_GenerationData[i].sprints[0]){
            if(scoreTech >= 1260 ){
              lima2016_2_sprint1.push(scoreTech);
            } else if (scoreHse >= 840){
              lima2016_2_sprint1_hse.push(scoreHse);
            }

          } else if(studentsSprints === lima2016_2_GenerationData[i].sprints[1]){
            if(scoreTech >= 1260 ){
              lima2016_2_sprint2.push(scoreTech);
            } else if (scoreHse >= 840){
              lima2016_2_sprint2_hse.push(scoreHse);
            }


          }
      }
    }

    //----CANTIDAD
    // número de chicas por sprint que Superan
    var lima2016_2_numberStudentsSprint1Tech = (lima2016_2_sprint1.length);
    var lima2016_2_numberStudentsSprint2Tech = (lima2016_2_sprint2.length);


    var lima2016_2_numberStudentsSprint1Hse = (lima2016_2_sprint1_hse.length);
    var lima2016_2_numberStudentsSprint2Hse = (lima2016_2_sprint2_hse.length);


    //---PORCENTAJE
    //saca el porcentaje por sprint de chicas que superan
    var lima2016_2_percentageSprint1Tech = Math.round((lima2016_2_numberStudentsSprint1Tech * 100) / lima2016_2_GenerationDataLength);
    var lima2016_2_percentageSprint2Tech = Math.round((lima2016_2_numberStudentsSprint2Tech * 100) / lima2016_2_GenerationDataLength);


    //saca el porcentaje por sprint de chicas que superan
    var lima2016_2_percentageSprint1Hse = Math.round((lima2016_2_numberStudentsSprint1Hse * 100) / lima2016_2_GenerationDataLength);
    var lima2016_2_percentageSprint2Hse = Math.round((lima2016_2_numberStudentsSprint2Hse * 100) / lima2016_2_GenerationDataLength);



    var lima2016_2_totalpercentageSprintsTech = ((lima2016_2_percentageSprint1Tech + lima2016_2_percentageSprint2Tech) / 2).toFixed(2);
    var lima2016_2_totalpercentageSprintsHse = ((lima2016_2_percentageSprint1Hse + lima2016_2_percentageSprint2Hse  ) / 2).toFixed(2);






//------LIMA 2017-1

var lima2017_1_GenerationData = data.LIM["2017-1"].students;
var lima2017_1_GenerationDataLength = data.LIM["2017-1"].students.length;

var lima2017_1_sprint1 = [];
var lima2017_1_sprint2 = [];
var lima2017_1_sprint3 = [];
var lima2017_1_sprint4 = [];

var lima2017_1_sprint1_hse = [];
var lima2017_1_sprint2_hse = [];
var lima2017_1_sprint3_hse = [];
var lima2017_1_sprint4_hse = [];



    for(var i = 0; i < lima2017_1_GenerationDataLength; i++){
      for (var j = 0; j < lima2017_1_GenerationData[i].sprints.length; j++){
        var studentsSprints = lima2017_1_GenerationData[i].sprints[j];
        var scoreTech = studentsSprints.score.tech;
        var scoreHse = studentsSprints.score.hse;
          if(studentsSprints === lima2017_1_GenerationData[i].sprints[0]){
            if(scoreTech >= 1260 ){
              lima2017_1_sprint1.push(scoreTech);
            } else if (scoreHse >= 840){
              lima2017_1_sprint1_hse.push(scoreHse);
            }


          } else if(studentsSprints === lima2017_1_GenerationData[i].sprints[1]){
            if(scoreTech >= 1260 ){
              lima2017_1_sprint2.push(scoreTech);
            } else if (scoreHse >= 840){
              lima2017_1_sprint1_hse.push(scoreHse);
            }

          } else if (studentsSprints === lima2017_1_GenerationData[i].sprints[2]) {
            if(scoreTech >= 1260 ){
              lima2017_1_sprint3.push(scoreTech);
            } else if (scoreHse >= 840){
              lima2017_1_sprint3_hse.push(scoreHse);
            }

          } else if (studentsSprints === lima2017_1_GenerationData[i].sprints[3]){
            if(scoreTech >= 1260 ){
              lima2017_1_sprint4.push(scoreTech);
            } else if (scoreHse >= 840){
              lima2017_1_sprint4_hse.push(scoreHse);
            }
          }
      }
    }


//----CANTIDAD
// número de chicas por sprint que Superan
var lima2017_1_numberStudentsSprint1Tech = (lima2017_1_sprint1.length);
var lima2017_1_numberStudentsSprint2Tech = (lima2017_1_sprint2.length);
var lima2017_1_numberStudentsSprint3Tech = (lima2017_1_sprint3.length);
var lima2017_1_numberStudentsSprint4Tech = (lima2017_1_sprint4.length);

var lima2017_1_numberStudentsSprint1Hse = (lima2017_1_sprint1_hse.length);
var lima2017_1_numberStudentsSprint2Hse = (lima2017_1_sprint2_hse.length);
var lima2017_1_numberStudentsSprint3Hse = (lima2017_1_sprint3_hse.length);
var lima2017_1_numberStudentsSprint4Hse = (lima2017_1_sprint4_hse.length);

//---PORCENTAJE
//saca el porcentaje por sprint de chicas que superan
var lima2017_1_percentageSprint1Tech = Math.round((lima2017_1_numberStudentsSprint1Tech * 100) / lima2017_1_GenerationDataLength);
var lima2017_1_percentageSprint2Tech = Math.round((lima2017_1_numberStudentsSprint2Tech * 100) / lima2017_1_GenerationDataLength);
var lima2017_1_percentageSprint3Tech = Math.round((lima2017_1_numberStudentsSprint3Tech * 100) / lima2017_1_GenerationDataLength);
var lima2017_1_percentageSprint4Tech = Math.round((lima2017_1_numberStudentsSprint1Tech * 100) / lima2017_1_GenerationDataLength);

//saca el porcentaje por sprint de chicas que superan
var lima2017_1_percentageSprint1Hse = Math.round((lima2017_1_numberStudentsSprint1Hse * 100) / lima2017_1_GenerationDataLength);
var lima2017_1_percentageSprint2Hse = Math.round((lima2017_1_numberStudentsSprint2Hse * 100) / lima2017_1_GenerationDataLength);
var lima2017_1_percentageSprint3Hse = Math.round((lima2017_1_numberStudentsSprint3Hse * 100) / lima2017_1_GenerationDataLength);
var lima2017_1_percentageSprint4Hse = Math.round((lima2017_1_numberStudentsSprint1Hse * 100) / lima2017_1_GenerationDataLength);


var lima2017_1_totalpercentageSprintsTech = ((lima2017_1_percentageSprint1Tech + lima2017_1_percentageSprint2Tech + lima2017_1_percentageSprint3Tech + lima2017_1_percentageSprint4Tech) / 4).toFixed(2);
var lima2017_1_totalpercentageSprintsHse = ((lima2017_1_percentageSprint1Hse + lima2017_1_percentageSprint2Hse + lima2017_1_percentageSprint3Hse + lima2017_1_percentageSprint4Hse) / 4).toFixed(2);






//-----LIMA 2017-2

var lima2017_2_GenerationData = data.LIM["2017-2"].students;
var lima2017_2_GenerationDataLength = data.LIM["2017-2"].students.length;

var lima2017_2_sprint1 = [];
var lima2017_2_sprint2 = [];



var lima2017_2_sprint1_hse = [];
var lima2017_2_sprint2_hse = [];



    for(var i = 0; i < lima2017_2_GenerationDataLength; i++){
      for (var j = 0; j < lima2017_2_GenerationData[i].sprints.length; j++){
        var studentsSprints = lima2017_2_GenerationData[i].sprints[j];
        var scoreTech = studentsSprints.score.tech;
        var scoreHse = studentsSprints.score.hse;
          if(studentsSprints === lima2017_2_GenerationData[i].sprints[0]){
            if(scoreTech >= 1260 ){
              lima2017_2_sprint1.push(scoreTech);
            } else if (scoreHse >= 840){
              lima2017_2_sprint1_hse.push(scoreHse);
            }

          } else if(studentsSprints === lima2017_2_GenerationData[i].sprints[1]){
            if(scoreTech >= 1260 ){
              lima2017_2_sprint2.push(scoreTech);
            } else if (scoreHse >= 840){
              lima2017_2_sprint2_hse.push(scoreHse);
            }


          }
      }
    }

    //----CANTIDAD
    // número de chicas por sprint que Superan
    var lima2017_2_numberStudentsSprint1Tech = (lima2017_2_sprint1.length);
    var lima2017_2_numberStudentsSprint2Tech = (lima2017_2_sprint2.length);


    var lima2017_2_numberStudentsSprint1Hse = (lima2017_2_sprint1_hse.length);
    var lima2017_2_numberStudentsSprint2Hse = (lima2017_2_sprint2_hse.length);


    //---PORCENTAJE
    //saca el porcentaje por sprint de chicas que superan
    var lima2017_2_percentageSprint1Tech = Math.round((lima2017_2_numberStudentsSprint1Tech * 100) / lima2017_2_GenerationDataLength);
    var lima2017_2_percentageSprint2Tech = Math.round((lima2017_2_numberStudentsSprint2Tech * 100) / lima2017_2_GenerationDataLength);


    //saca el porcentaje por sprint de chicas que superan
    var lima2017_2_percentageSprint1Hse = Math.round((lima2017_2_numberStudentsSprint1Hse * 100) / lima2017_2_GenerationDataLength);
    var lima2017_2_percentageSprint2Hse = Math.round((lima2017_2_numberStudentsSprint2Hse * 100) / lima2017_2_GenerationDataLength);



    var lima2017_2_totalpercentageSprintsTech = ((lima2017_2_percentageSprint1Tech + lima2017_2_percentageSprint2Tech) / 2).toFixed(2);
    var lima2017_2_totalpercentageSprintsHse = ((lima2017_2_percentageSprint1Hse + lima2017_2_percentageSprint2Hse  ) / 2).toFixed(2);






//-----SCL 2016-2


var scl_2016_2_GenerationData = data.SCL["2016-2"].students;
var scl_2016_2_GenerationDataLength = data.SCL["2016-2"].students.length;

var scl_2016_2_sprint1 = [];
var scl_2016_2_sprint2 = [];
var scl_2016_2_sprint3 = [];
var scl_2016_2_sprint4 = [];

var scl_2016_2_sprint1_hse = [];
var scl_2016_2_sprint2_hse = [];
var scl_2016_2_sprint3_hse = [];
var scl_2016_2_sprint4_hse = [];



    for(var i = 0; i < scl_2016_2_GenerationDataLength; i++){
      for (var j = 0; j < scl_2016_2_GenerationData[i].sprints.length; j++){
        var studentsSprints = scl_2016_2_GenerationData[i].sprints[j];
        var scoreTech = studentsSprints.score.tech;
        var scoreHse = studentsSprints.score.hse;
          if(studentsSprints === scl_2016_2_GenerationData[i].sprints[0]){
            if(scoreTech >= 1260 ){
              scl_2016_2_sprint1.push(scoreTech);
            } else if (scoreHse >= 840){
              scl_2016_2_sprint1_hse.push(scoreHse);
            }


          } else if(studentsSprints === scl_2016_2_GenerationData[i].sprints[1]){
            if(scoreTech >= 1260 ){
              scl_2016_2_sprint2.push(scoreTech);
            } else if (scoreHse >= 840){
              scl_2016_2_sprint2_hse.push(scoreHse);
            }

          } else if (studentsSprints === scl_2016_2_GenerationData[i].sprints[2]) {
            if(scoreTech >= 1260 ){
              scl_2016_2_sprint3.push(scoreTech);
            } else if (scoreHse >= 840){
              scl_2016_2_sprint3_hse.push(scoreHse);
            }

          } else if (studentsSprints === scl_2016_2_GenerationData[i].sprints[3]){
            if(scoreTech >= 1260 ){
              scl_2016_2_sprint4.push(scoreTech);
            } else if (scoreHse >= 840){
              scl_2016_2_sprint4_hse.push(scoreHse);
            }
          }
      }
    }


//----CANTIDAD
// número de chicas por sprint que Superan
var scl_2016_2_numberStudentsSprint1Tech = (scl_2016_2_sprint1.length);
var scl_2016_2_numberStudentsSprint2Tech = (scl_2016_2_sprint2.length);
var scl_2016_2_numberStudentsSprint3Tech = (scl_2016_2_sprint3.length);
var scl_2016_2_numberStudentsSprint4Tech = (scl_2016_2_sprint4.length);

var scl_2016_2_numberStudentsSprint1Hse = (scl_2016_2_sprint1_hse.length);
var scl_2016_2_numberStudentsSprint2Hse = (scl_2016_2_sprint2_hse.length);
var scl_2016_2_numberStudentsSprint3Hse = (scl_2016_2_sprint3_hse.length);
var scl_2016_2_numberStudentsSprint4Hse = (scl_2016_2_sprint4_hse.length);

//---PORCENTAJE
//saca el porcentaje por sprint de chicas que superan
var scl_2016_2_percentageSprint1Tech = Math.round((scl_2016_2_numberStudentsSprint1Tech * 100) / scl_2016_2_GenerationDataLength);
var scl_2016_2_percentageSprint2Tech = Math.round((scl_2016_2_numberStudentsSprint2Tech * 100) / scl_2016_2_GenerationDataLength);
var scl_2016_2_percentageSprint3Tech = Math.round((scl_2016_2_numberStudentsSprint3Tech * 100) / scl_2016_2_GenerationDataLength);
var scl_2016_2_percentageSprint4Tech = Math.round((scl_2016_2_numberStudentsSprint1Tech * 100) / scl_2016_2_GenerationDataLength);

//saca el porcentaje por sprint de chicas que superan
var scl_2016_2_percentageSprint1Hse = Math.round((scl_2016_2_numberStudentsSprint1Hse * 100) / scl_2016_2_GenerationDataLength);
var scl_2016_2_percentageSprint2Hse = Math.round((scl_2016_2_numberStudentsSprint2Hse * 100) / scl_2016_2_GenerationDataLength);
var scl_2016_2_percentageSprint3Hse = Math.round((scl_2016_2_numberStudentsSprint3Hse * 100) / scl_2016_2_GenerationDataLength);
var scl_2016_2_percentageSprint4Hse = Math.round((scl_2016_2_numberStudentsSprint1Hse * 100) / scl_2016_2_GenerationDataLength);


var scl_2016_2_totalpercentageSprintsTech = ((scl_2016_2_percentageSprint1Tech + scl_2016_2_percentageSprint2Tech + scl_2016_2_percentageSprint3Tech + scl_2016_2_percentageSprint4Tech) / 4).toFixed(2);
var scl_2016_2_totalpercentageSprintsHse = ((scl_2016_2_percentageSprint1Hse + scl_2016_2_percentageSprint2Hse + scl_2016_2_percentageSprint3Hse + scl_2016_2_percentageSprint4Hse) / 4).toFixed(2);






//------SCL 2017-1


var scl_2017_1_GenerationData = data.SCL["2017-1"].students;
var scl_2017_1_GenerationDataLength = data.SCL["2017-1"].students.length;

var scl_2017_1_sprint1 = [];
var scl_2017_1_sprint2 = [];
var scl_2017_1_sprint3 = [];

var scl_2017_1_sprint1_hse = [];
var scl_2017_1_sprint2_hse = [];
var scl_2017_1_sprint3_hse = [];



    for(var i = 0; i < scl_2017_1_GenerationDataLength; i++){
      for (var j = 0; j < scl_2017_1_GenerationData[i].sprints.length; j++){
        var studentsSprints = scl_2017_1_GenerationData[i].sprints[j];
        var scoreTech = studentsSprints.score.tech;
        var scoreHse = studentsSprints.score.hse;
          if(studentsSprints === scl_2017_1_GenerationData[i].sprints[0]){
            if(scoreTech >= 1260 ){
              scl_2017_1_sprint1.push(scoreTech);
            } else if (scoreHse >= 840){
              scl_2017_1_sprint1_hse.push(scoreHse);
            }


          } else if(studentsSprints === scl_2017_1_GenerationData[i].sprints[1]){
            if(scoreTech >= 1260 ){
              scl_2017_1_sprint2.push(scoreTech);
            } else if (scoreHse >= 840){
              scl_2017_1_sprint2_hse.push(scoreHse);
            }

          } else if (studentsSprints === scl_2017_1_GenerationData[i].sprints[2]) {
            if(scoreTech >= 1260 ){
              scl_2017_1_sprint3.push(scoreTech);
            } else if (scoreHse >= 840){
              scl_2017_1_sprint3_hse.push(scoreHse);
            }
          }
      }
    }


//----CANTIDAD
// número de chicas por sprint que Superan
var scl_2017_1_numberStudentsSprint1Tech = (scl_2017_1_sprint1.length);
var scl_2017_1_numberStudentsSprint2Tech = (scl_2017_1_sprint2.length);
var scl_2017_1_numberStudentsSprint3Tech = (scl_2017_1_sprint3.length);


var scl_2017_1_numberStudentsSprint1Hse = (scl_2017_1_sprint1_hse.length);
var scl_2017_1_numberStudentsSprint2Hse = (scl_2017_1_sprint2_hse.length);
var scl_2017_1_numberStudentsSprint3Hse = (scl_2017_1_sprint3_hse.length);


//---PORCENTAJE
//saca el porcentaje por sprint de chicas que superan
var scl_2017_1_percentageSprint1Tech = Math.round((scl_2017_1_numberStudentsSprint1Tech * 100) / scl_2017_1_GenerationDataLength);
var scl_2017_1_percentageSprint2Tech = Math.round((scl_2017_1_numberStudentsSprint2Tech * 100) / scl_2017_1_GenerationDataLength);
var scl_2017_1_percentageSprint3Tech = Math.round((scl_2017_1_numberStudentsSprint3Tech * 100) / scl_2017_1_GenerationDataLength);


//saca el porcentaje por sprint de chicas que superan
var scl_2017_1_percentageSprint1Hse = Math.round((scl_2017_1_numberStudentsSprint1Hse * 100) / scl_2017_1_GenerationDataLength);
var scl_2017_1_percentageSprint2Hse = Math.round((scl_2017_1_numberStudentsSprint2Hse * 100) / scl_2017_1_GenerationDataLength);
var scl_2017_1_percentageSprint3Hse = Math.round((scl_2017_1_numberStudentsSprint3Hse * 100) / scl_2017_1_GenerationDataLength);



var scl_2017_1_totalpercentageSprintsTech = ((scl_2017_1_percentageSprint1Tech + scl_2017_1_percentageSprint2Tech + scl_2017_1_percentageSprint3Tech ) / 3).toFixed(2);
var scl_2017_1_totalpercentageSprintsHse = ((scl_2017_1_percentageSprint1Hse + scl_2017_1_percentageSprint2Hse + scl_2017_1_percentageSprint3Hse ) / 3).toFixed(2);







var aqp2016_2_showPercentageTech = document.createElement("h5");
var aqp2016_2_showTotalPercentageSprintTech = document.createElement("span");
aqp2016_2_showPercentageTech.innerText = "S1 " + aqp2016_2_percentageSprint1Tech + "%" + " S2 " + aqp2016_2_percentageSprint2Tech + "%" + "S3 " + aqp2016_2_percentageSprint3Tech + "%" + "S4 " + aqp2016_2_percentageSprint4Tech + "%";
aqp2016_2_showTotalPercentageSprintTech.innerText = "El promedio general es: " + aqp2017_1_totalpercentageSprintsTech + "%";



var aqp2016_2_showPercentageHse = document.createElement("h5");
var aqp2016_2_showTotalPercentageSprintHse = document.createElement("span");
aqp2016_2_showPercentageTech.innerText = "S1 " + aqp2016_2_percentageSprint1Hse + "%" + " S2 " + aqp2016_2_percentageSprint2Hse + "%" + "S3 " + aqp2016_2_percentageSprint3Hse + "%" + "S4 " + aqp2016_2_percentageSprint4Hse + "%";
aqp2016_2_showTotalPercentageSprintHse.innerText = "El promedio general es: " + aqp2017_1_totalpercentageSprintsHse + "%";

//-----



var aqp2017_1_showPercentageTech = document.createElement("h5");
var aqp2017_1_showTotalPercentageSprintTech = document.createElement("span");
aqp2016_2_showPercentageTech.innerText = "S1 " + aqp2017_1_percentageSprint1Tech + "%" + " S2 " + aqp2017_1_percentageSprint2Tech + "%" + "S3 " + aqp2017_1_percentageSprint3Tech + "%";
aqp2017_1_showTotalPercentageSprintTech.innerText = "El promedio general es: " + aqp2017_1_totalpercentageSprintsTech + "%";



var aqp2017_1_showPercentageHse = document.createElement("h5");
var aqp2017_1_showTotalPercentageSprintHse = document.createElement("span");
aqp2017_1_showPercentageTech.innerText = "S1 " + aqp2017_1_percentageSprint1Hse + "%" + " S2 " + aqp2017_1_percentageSprint2Hse + "%" + "S3 " + aqp2017_1_percentageSprint3Hse + "%";
aqp2017_1_showTotalPercentageSprintHse.innerText = "El promedio general es: " + aqp2017_1_totalpercentageSprintsHse + "%";




//-----



var cdmx2017_1_showPercentageTech = document.createElement("h5");
var cdmx2017_1_showTotalPercentageSprintTech = document.createElement("span");
cdmx2017_1_showPercentageTech.innerText = "S1 " + cdmx2017_1_percentageSprint1Tech + "%" + " S2 " + cdmx2017_1_percentageSprint2Tech + "%" + "S3 " + cdmx2017_1_percentageSprint3Tech + "%";
cdmx2017_1_showTotalPercentageSprintTech.innerText = "El promedio general es: " + cdmx2017_1_totalpercentageSprintsTech;



var cdmx2017_1_showPercentageHse = document.createElement("h5");
var cdmx2017_1_showTotalPercentageSprintHse = document.createElement("span");
cdmx2017_1_showPercentageTech.innerText = "S1 " + cdmx2017_1_percentageSprint1Hse + "%" + " S2 " + cdmx2017_1_percentageSprint2Hse + "%" + "S3 " + cdmx2017_1_percentageSprint3Hse + "%";
cdmx2017_1_showTotalPercentageSprintHse.innerText = "El promedio general es: " + cdmx2017_1_totalpercentageSprintsHse;




//-----



var cdmx2017_2_showPercentageTech = document.createElement("h5");
var cdmx2017_2_showTotalPercentageSprintTech = document.createElement("span");
cdmx2017_2_showPercentageTech.innerText = "S1 " + cdmx2017_2_percentageSprint1Tech + "%" + " S2 " + cdmx2017_2_percentageSprint2Tech + "%";
cdmx2017_2_showTotalPercentageSprintTech.innerText = "El promedio general es: " + cdmx2017_2_totalpercentageSprintsTech;



var cdmx2017_2_showPercentageHse = document.createElement("h5");
var cdmx2017_2_showTotalPercentageSprintHse = document.createElement("span");
cdmx2017_2_showPercentageTech.innerText = "S1 " + cdmx2017_2_percentageSprint1Hse + "%" + " S2 " + cdmx2017_2_percentageSprint2Hse + "%";
cdmx2017_2_showTotalPercentageSprintHse.innerText = "El promedio general es: " + cdmx2017_2_totalpercentageSprintsHse;



//-----



var lima2016_2_showPercentageTech = document.createElement("h5");
var lima2016_2_showTotalPercentageSprintTech = document.createElement("span");
lima2016_2_showPercentageTech.innerText = "S1 " + lima2016_2_percentageSprint1Tech + "%" + " S2 " + lima2016_2_percentageSprint2Tech + "%";
lima2016_2_showTotalPercentageSprintTech.innerText = "El promedio general es: " + lima2016_2_totalpercentageSprintsTech;


var lima2016_2_showPercentageHse = document.createElement("h5");
var lima2016_2_showTotalPercentageSprintHse = document.createElement("span");
lima2016_2_showPercentageTech.innerText = "S1 " + lima2016_2_percentageSprint1Hse + "%" + " S2 " + lima2016_2_percentageSprint2Hse + "%";
lima2016_2_showTotalPercentageSprintHse.innerText = "El promedio general es: " + lima2016_2_totalpercentageSprintsHse;



//-----



var lima2017_1_showPercentageTech = document.createElement("h5");
var lima2017_1_showTotalPercentageSprintTech = document.createElement("span");
lima2017_1_showPercentageTech.innerText = "S1 " + lima2017_1_percentageSprint1Tech + "%" + " S2 " + lima2017_1_percentageSprint2Tech + "%" + "S3 " + lima2017_1_percentageSprint3Tech + "%" + "S4 " + lima2017_1_percentageSprint4Hse + "%";
lima2017_1_showTotalPercentageSprintTech.innerText = "El promedio general es: " + lima2017_1_totalpercentageSprintsTech;



var lima2017_1_showPercentageHse = document.createElement("h5");
var lima2017_1_showTotalPercentageSprintHse = document.createElement("span");
lima2017_1_showPercentageTech.innerText = "S1 " + lima2017_1_percentageSprint1Hse + "%" + " S2 " + lima2017_1_percentageSprint2Hse + "%" + "S3 " + lima2017_1_percentageSprint3Hse + "%" + "S4 " + lima2017_1_percentageSprint4Hse + "%";
lima2017_1_showTotalPercentageSprintHse.innerText = "El promedio general es: " + lima2017_1_totalpercentageSprintsHse;



//-----



var lima2017_2_showPercentageTech = document.createElement("h5");
var lima2017_2_showTotalPercentageSprintTech = document.createElement("span");
lima2017_2_showPercentageTech.innerText = "S1 " + lima2017_2_percentageSprint1Tech + "%" + " S2 " + lima2017_2_percentageSprint2Tech + "%";
lima2017_2_showTotalPercentageSprintTech.innerText = "El promedio general es: " + lima2017_2_totalpercentageSprintsTech;


var lima2017_2_showPercentageHse = document.createElement("h5");
var lima2017_2_showTotalPercentageSprintHse = document.createElement("span");
lima2017_2_showPercentageTech.innerText = "S1 " + lima2017_2_percentageSprint1Hse + "%" + " S2 " + lima2017_2_percentageSprint2Hse + "%";
lima2017_2_showTotalPercentageSprintHse.innerText = "El promedio general es: " + lima2017_2_totalpercentageSprintsHse;



//-----



var scl_2016_2_showPercentageTech = document.createElement("h5");
var scl_2016_2_showTotalPercentageSprintTech = document.createElement("span");
scl_2016_2_showPercentageTech.innerText = "S1 " + scl_2016_2_percentageSprint1Tech + "%" + " S2 " + scl_2016_2_percentageSprint2Tech + "%" + "S3 " + scl_2016_2_percentageSprint3Tech + "%" + "S4 " + scl_2016_2_percentageSprint4Tech + "%";
scl_2016_2_showTotalPercentageSprintTech.innerText = "El promedio general es: " + scl_2016_2_totalpercentageSprintsTech;



var scl_2016_2_showPercentageHse = document.createElement("h5");
var scl_2016_2_showTotalPercentageSprintHse = document.createElement("span");
scl_2016_2_showPercentageTech.innerText = "S1 " + scl_2016_2_percentageSprint1Hse + "%" + " S2 " + scl_2016_2_percentageSprint2Hse + "%" + "S3 " + scl_2016_2_percentageSprint3Hse + "%" + "S4 " + scl_2016_2_percentageSprint4Hse + "%";
scl_2016_2_showTotalPercentageSprintHse.innerText = "El promedio general es: " + scl_2016_2_totalpercentageSprintsHse;



//-----



var scl_2017_1_showPercentageTech = document.createElement("h5");
var scl_2017_1_showTotalPercentageSprintTech = document.createElement("span");
scl_2017_1_showPercentageTech.innerText = "S1 " + scl_2017_1_percentageSprint1Tech + "%" + " S2 " + scl_2017_1_percentageSprint2Tech + "%" + "S3 " + scl_2017_1_percentageSprint3Tech + "%";
scl_2017_1_showTotalPercentageSprintTech.innerText = "El promedio general es: " + scl_2017_1_totalpercentageSprintsTech;



var scl_2017_1_showPercentageHse = document.createElement("h5");
var scl_2017_1_showTotalPercentageSprintHse = document.createElement("span");
scl_2017_1_showPercentageTech.innerText = "S1 " + scl_2017_1_percentageSprint1Hse + "%" + " S2 " + scl_2017_1_percentageSprint2Hse + "%" + "S3 " + scl_2017_1_percentageSprint3Hse + "%";
scl_2017_1_showTotalPercentageSprintHse.innerText = "El promedio general es: " + scl_2017_1_totalpercentageSprintsHse;



//-----





//----CREACIÓN DE TABLAS TECH -------//

 function drawChart_aqp2016_2_Tech() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Superan' ],
    ['Sprint 1', aqp2016_2_numberStudentsSprint1Tech],
    ['Sprint 2', aqp2016_2_numberStudentsSprint2Tech],
    ['Sprint 3', aqp2016_2_numberStudentsSprint3Tech],
    ['Sprint 4', aqp2016_2_numberStudentsSprint4Tech]
  ]);

  var options = {
    title : "aqp2016_2_Tech",
   width: 420,
   height: 200,
   legend: { position: 'top', maxLines: 3 },
   bar: { groupWidth: '75%' },
   isStacked: true,
   colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

   var chart = new google.charts.Bar(document.getElementById('columnchart_aqp2016_2_Tech'));
   // Convert the Classic options to Material options.
   chart.draw(data, google.charts.Bar.convertOptions(options));
 };


 function drawChart_aqp2017_1_Tech() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Superan' ],
    ['Sprint 1', aqp2017_1_numberStudentsSprint1Tech],
    ['Sprint 2', aqp2017_1_numberStudentsSprint2Tech],
    ['Sprint 3', aqp2017_1_numberStudentsSprint3Tech]
  ]);

  var options = {
    title : "aqp2017_1_Tech",
   width: 420,
   height: 200,
   legend: { position: 'top', maxLines: 3 },
   bar: { groupWidth: '75%' },
   isStacked: true,
   colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

   var chart = new google.charts.Bar(document.getElementById('columnchart_aqp2017_1_Tech'));
   // Convert the Classic options to Material options.
   chart.draw(data, google.charts.Bar.convertOptions(options));
 };


 function drawChart_cdmx2017_1_Tech() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Superan' ],
    ['Sprint 1', cdmx2017_1_numberStudentsSprint1Tech],
    ['Sprint 2', cdmx2017_1_numberStudentsSprint2Tech],
    ['Sprint 3', cdmx2017_1_numberStudentsSprint3Tech]
  ]);

  var options = {
    title : "cdmx2017_1_Tech",
   width: 420,
   height: 200,
   legend: { position: 'top', maxLines: 3 },
   bar: { groupWidth: '75%' },
   isStacked: true,
   colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

   var chart = new google.charts.Bar(document.getElementById('columnchart_cdmx2017_1_Tech'));
   // Convert the Classic options to Material options.
   chart.draw(data, google.charts.Bar.convertOptions(options));
 };


 function drawChart_cdmx2017_2_Tech() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Superan' ],
    ['Sprint 1', cdmx2017_2_numberStudentsSprint1Tech],
    ['Sprint 2', cdmx2017_2_numberStudentsSprint2Tech]
  ]);

  var options = {
    title : "cdmx2017_2_Tech",
   width: 420,
   height: 200,
   legend: { position: 'top', maxLines: 3 },
   bar: { groupWidth: '75%' },
   isStacked: true,
   colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

   var chart = new google.charts.Bar(document.getElementById('columnchart_cdmx2017_2_Tech'));
   // Convert the Classic options to Material options.
   chart.draw(data, google.charts.Bar.convertOptions(options));
 };


 function drawChart_lima2016_2_Tech() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Superan' ],
    ['Sprint 1', lima2016_2_numberStudentsSprint1Tech],
    ['Sprint 2', lima2016_2_numberStudentsSprint2Tech]
  ]);

  var options = {
    title : "lima2016_2_Tech",
   width: 420,
   height: 200,
   legend: { position: 'top', maxLines: 3 },
   bar: { groupWidth: '75%' },
   isStacked: true,
   colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

   var chart = new google.charts.Bar(document.getElementById('columnchart_lima2016_2_Tech'));
   // Convert the Classic options to Material options.
   chart.draw(data, google.charts.Bar.convertOptions(options));
 };


 function drawChart_lima2017_1_Tech() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Superan' ],
    ['Sprint 1', lima2017_1_numberStudentsSprint1Tech],
    ['Sprint 2', lima2017_1_numberStudentsSprint2Tech],
    ['Sprint 3', lima2017_1_numberStudentsSprint3Tech],
    ['Sprint 4', lima2017_1_numberStudentsSprint4Tech]
  ]);

  var options = {
    title : "lima2017_1_Tech",
   width: 420,
   height: 200,
   legend: { position: 'top', maxLines: 3 },
   bar: { groupWidth: '75%' },
   isStacked: true,
   colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

   var chart = new google.charts.Bar(document.getElementById('columnchart_lima2017_1_Tech'));
   // Convert the Classic options to Material options.
   chart.draw(data, google.charts.Bar.convertOptions(options));
 };


 function drawChart_lima2017_2_Tech() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Superan' ],
    ['Sprint 1', lima2017_2_numberStudentsSprint1Tech],
    ['Sprint 2', lima2017_2_numberStudentsSprint2Tech]
  ]);

  var options = {
    title : "lima2017_2_Tech",
   width: 420,
   height: 200,
   legend: { position: 'top', maxLines: 3 },
   bar: { groupWidth: '75%' },
   isStacked: true,
   colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

   var chart = new google.charts.Bar(document.getElementById('columnchart_lima2017_2_Tech'));
   // Convert the Classic options to Material options.
   chart.draw(data, google.charts.Bar.convertOptions(options));
 };


 function drawChart_scl2016_2_Tech() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Superan' ],
    ['Sprint 1', scl_2016_2_numberStudentsSprint1Tech],
    ['Sprint 2', scl_2016_2_numberStudentsSprint2Tech],
    ['Sprint 3', scl_2016_2_numberStudentsSprint3Tech],
    ['Sprint 4', scl_2016_2_numberStudentsSprint4Tech]
  ]);

  var options = {
    title : "scl2016_2_Tech",
   width: 420,
   height: 200,
   legend: { position: 'top', maxLines: 3 },
   bar: { groupWidth: '75%' },
   isStacked: true,
   colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

   var chart = new google.charts.Bar(document.getElementById('columnchart_scl2016_2_Tech'));
   // Convert the Classic options to Material options.
   chart.draw(data, google.charts.Bar.convertOptions(options));
 };


 function drawChart_scl2017_1_Tech() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Superan' ],
    ['Sprint 1', scl_2017_1_numberStudentsSprint1Tech],
    ['Sprint 2', scl_2017_1_numberStudentsSprint2Tech],
    ['Sprint 3', scl_2017_1_numberStudentsSprint3Tech]
  ]);

  var options = {
    title : "scl2017_1_Tech",
   width: 420,
   height: 200,
   legend: { position: 'top', maxLines: 3 },
   bar: { groupWidth: '75%' },
   isStacked: true,
   colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

   var chart = new google.charts.Bar(document.getElementById('columnchart_scl2017_1_Tech'));
   // Convert the Classic options to Material options.
   chart.draw(data, google.charts.Bar.convertOptions(options));
 };


 function drawChart_scl2017_2_Tech() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Superan' ],
    ['Sprint 1', scl_2017_1_numberStudentsSprint1Tech],
    ['Sprint 2', scl_2017_1_numberStudentsSprint2Tech]
  ]);

  var options = {
  title : "scl2017_2_Tech",
   width: 420,
   height: 200,
   legend: { position: 'top', maxLines: 3 },
   bar: { groupWidth: '75%' },
   isStacked: true,
   colors: ['#4ECDC4', '#ABCEEA', '#4ECDC4', '#ABCEEA']
  };

   var chart = new google.charts.Bar(document.getElementById('columnchart_scl2017_2_Tech'));
   // Convert the Classic options to Material options.
   chart.draw(data, google.charts.Bar.convertOptions(options));
 };







//----CREACIÓN DE TABLAS HSE -------//


function drawChart_aqp2016_2_Hse() {
 var data = google.visualization.arrayToDataTable([
   ['', 'Superan' ],
   ['Sprint 1', aqp2016_2_numberStudentsSprint1Hse],
   ['Sprint 2', aqp2016_2_numberStudentsSprint2Hse],
   ['Sprint 3', aqp2016_2_numberStudentsSprint3Hse],
   ['Sprint 4', aqp2016_2_numberStudentsSprint4Hse]
 ]);

 var options = {
   title : "aqp2016_2_Hse",
  width: 420,
  height: 200,
  legend: { position: 'top', maxLines: 3 },
  bar: { groupWidth: '75%' },
  isStacked: true,
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
 };

  var chart = new google.charts.Bar(document.getElementById('columnchart_aqp2016_2_Hse'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};


function drawChart_aqp2017_1_Hse() {
 var data = google.visualization.arrayToDataTable([
   ['', 'Superan' ],
   ['Sprint 1', aqp2017_1_numberStudentsSprint1Hse],
   ['Sprint 2', aqp2017_1_numberStudentsSprint2Hse],
   ['Sprint 3', aqp2017_1_numberStudentsSprint3Hse]
 ]);

 var options = {
   title : "aqp2017_1_Hse",
  width: 420,
  height: 200,
  legend: { position: 'top', maxLines: 3 },
  bar: { groupWidth: '75%' },
  isStacked: true,
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
 };

  var chart = new google.charts.Bar(document.getElementById('columnchart_aqp2017_1_Hse'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};


function drawChart_cdmx2017_1_Hse() {
 var data = google.visualization.arrayToDataTable([
   ['', 'Superan' ],
   ['Sprint 1', cdmx2017_1_numberStudentsSprint1Hse],
   ['Sprint 2', cdmx2017_1_numberStudentsSprint2Hse],
   ['Sprint 3', cdmx2017_1_numberStudentsSprint3Hse]
 ]);

 var options = {
   title : "cdmx2017_1_Hse",
  width: 420,
  height: 200,
  legend: { position: 'top', maxLines: 3 },
  bar: { groupWidth: '75%' },
  isStacked: true,
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
 };

  var chart = new google.charts.Bar(document.getElementById('columnchart_cdmx2017_1_Hse'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};


function drawChart_cdmx2017_2_Hse() {
 var data = google.visualization.arrayToDataTable([
   ['', 'Superan' ],
   ['Sprint 1', cdmx2017_2_numberStudentsSprint1Hse],
   ['Sprint 2', cdmx2017_2_numberStudentsSprint2Hse]
 ]);

 var options = {
   title : "cdmx2017_2_Hse",
  width: 420,
  height: 200,
  legend: { position: 'top', maxLines: 3 },
  bar: { groupWidth: '75%' },
  isStacked: true,
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
 };

  var chart = new google.charts.Bar(document.getElementById('columnchart_cdmx2017_2_Hse'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};


function drawChart_lima2016_2_Hse() {
 var data = google.visualization.arrayToDataTable([
   ['', 'Superan' ],
   ['Sprint 1', lima2016_2_numberStudentsSprint1Hse],
   ['Sprint 2', lima2016_2_numberStudentsSprint2Hse]
 ]);

 var options = {
   title : "lima2016_2_Hse",
  width: 420,
  height: 200,
  legend: { position: 'top', maxLines: 3 },
  bar: { groupWidth: '75%' },
  isStacked: true,
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
 };

  var chart = new google.charts.Bar(document.getElementById('columnchart_lima2016_2_Hse'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};


function drawChart_lima2017_1_Hse() {
 var data = google.visualization.arrayToDataTable([
   ['', 'Superan' ],
   ['Sprint 1', lima2017_1_numberStudentsSprint1Hse],
   ['Sprint 2', lima2017_1_numberStudentsSprint2Hse],
   ['Sprint 3', lima2017_1_numberStudentsSprint3Hse],
   ['Sprint 4', lima2017_1_numberStudentsSprint4Hse]
 ]);

 var options = {
   title : "lima2017_1_Hse",
  width: 420,
  height: 200,
  legend: { position: 'top', maxLines: 3 },
  bar: { groupWidth: '75%' },
  isStacked: true,
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
 };

  var chart = new google.charts.Bar(document.getElementById('columnchart_lima2017_1_Hse'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};


function drawChart_lima2017_2_Hse() {
 var data = google.visualization.arrayToDataTable([
   ['', 'Superan' ],
   ['Sprint 1', lima2017_2_numberStudentsSprint1Hse],
   ['Sprint 2', lima2017_2_numberStudentsSprint2Hse]
 ]);

 var options = {
   title : "lima2017_2_Hse",
  width: 420,
  height: 200,
  legend: { position: 'top', maxLines: 3 },
  bar: { groupWidth: '75%' },
  isStacked: true,
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
 };

  var chart = new google.charts.Bar(document.getElementById('columnchart_lima2017_2_Hse'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};


function drawChart_scl2016_2_Hse() {
 var data = google.visualization.arrayToDataTable([
   ['', 'Superan' ],
   ['Sprint 1', scl_2016_2_numberStudentsSprint1Hse],
   ['Sprint 2', scl_2016_2_numberStudentsSprint2Hse],
   ['Sprint 3', scl_2016_2_numberStudentsSprint3Hse],
   ['Sprint 4', scl_2016_2_numberStudentsSprint4Hse]
 ]);

 var options = {
   title : "scl2016_2_Hse",
  width: 420,
  height: 200,
  legend: { position: 'top', maxLines: 3 },
  bar: { groupWidth: '75%' },
  isStacked: true,
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
 };

  var chart = new google.charts.Bar(document.getElementById('columnchart_scl2016_2_Hse'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};


function drawChart_scl2017_1_Hse() {
 var data = google.visualization.arrayToDataTable([
   ['', 'Superan' ],
   ['Sprint 1', scl_2017_1_numberStudentsSprint1Hse],
   ['Sprint 2', scl_2017_1_numberStudentsSprint2Hse],
   ['Sprint 3', scl_2017_1_numberStudentsSprint3Hse]

 ]);

 var options = {
   title : "scl2017_1_Hse",
  width: 420,
  height: 200,
  legend: { position: 'top', maxLines: 3 },
  bar: { groupWidth: '75%' },
  isStacked: true,
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
 };

  var chart = new google.charts.Bar(document.getElementById('columnchart_scl2017_1_Hse'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};


function drawChart_scl2017_2_Hse() {
 var data = google.visualization.arrayToDataTable([
   ['', 'Superan' ],
   ['Sprint 1', scl_2017_1_numberStudentsSprint1Hse],
   ['Sprint 2', scl_2017_1_numberStudentsSprint2Hse]
 ]);

 var options = {
 title : "scl2017_2_Hse",
  width: 420,
  height: 200,
  legend: { position: 'top', maxLines: 3 },
  bar: { groupWidth: '75%' },
  isStacked: true,
  colors: ['#ABCEEA', '#4ECDC4', '#ABCEEA', '#4ECDC4']
 };

  var chart = new google.charts.Bar(document.getElementById('columnchart_scl2017_2_Hse'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};
