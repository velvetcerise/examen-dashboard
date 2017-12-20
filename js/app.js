var dashboardContent = function() {

  //Elementos que van dentro del div "personal-tm-info"
  //Creamos un contenedor la foto, el logo y el mail
  var tmProfile = document.getElementById("personal-tm-info");

  var tmProfilePhoto = document.createElement("img");
  var tmProfileLogo = document.createElement("img");
  var tmProfileMail = document.createElement("h6");

  tmProfilePhoto.src = "assets/images/profile.jpeg";
  tmProfilePhoto.classList.add("tm-profile-photo");
  tmProfileLogo.src = "assets/images/logo_laboratoria.svg";
  tmProfileLogo.classList.add("tm-profile-logo");
  tmProfileMail.innerText = "example.gmail.com"
  tmProfileMail.classList.add("tm-profile-mail");

  tmProfile.appendChild(tmProfilePhoto);
  tmProfile.appendChild(tmProfileLogo);
  tmProfile.appendChild(tmProfileMail);
  //----fin del div "personal-tm-info"


/*
  //---- Main id= "dashboard" - Texto de bienvenida
  var mainDashboard = document.getElementById("dashboard");

  var mainDashboardLogo = document.createElement("img");
  var mainDashboardTitle = document.createElement("h1");
  var mainDashboardDescription = document.createElement("p");
  var mainDashboardArrow = document.createElement("img");

  mainDashboardLogo.src = "assets/images/laboratoria.png";
  mainDashboardLogo.classList.add("logo-laboratoria");
  mainDashboardTitle.innerText = "BIENVENID@";
  mainDashboardTitle.classList.add("welcomeText");
  mainDashboardDescription.innerText = "Elige la sede y la generación que quieras visualizar.";
  mainDashboardArrow.src = "assets/images/flecha.png";
  mainDashboardArrow.classList.add("arrow");

  mainDashboard.appendChild(mainDashboardLogo);
  mainDashboard.appendChild(mainDashboardTitle);
  mainDashboard.appendChild(mainDashboardDescription);
  mainDashboard.appendChild(mainDashboardArrow);
  //---- Fin Texto de bienvenida
*/


/*
//elementos - graficas dashboard
  var mainDashboard = document.getElementById("dashboard");
  var generationCodersNumberDB = document.createElement("div");
  var generationCodersNumberDBTitle = document.createElement("h5");
  var abandonmentCodersDB = document.createElement("div");
  var abandonmentCodersDBTitle = document.createElement("h5");
  var netPromoteScoreDB = document.createElement("div");
  var netPromoteScoreDBTitle = document.createElement("h5");
  var overcomeGeneralDB = document.createElement("div");
  var overcomeGeneralDBTitle = document.createElement("h5");
  var satisfactionLabDB = document.createElement("div");
  var satisfactionLabDBTitle = document.createElement("h5");
  var overcomeTechDB = document.createElement("div");
  var overcomeTechDBTitle = document.createElement("h5");
  var overcomeHSEDB = document.createElement("div");
  var overcomeHSEDBTitle = document.createElement("h5");
  var teachersDB = document.createElement("div");
  var teachersDBTitle = document.createElement("h5");
  var jediMasterDB = document.createElement("div");
  var jediMasterDBTitle = document.createElement("h5");

  generationCodersNumberDB.classList.add("content-data");
  generationCodersNumberDB.classList.add("three-Columns");
  generationCodersNumberDBTitle.innerText = "Alumnas por generación";

  abandonmentCodersDB.classList.add("content-data");
  abandonmentCodersDB.classList.add("three-Columns");
  abandonmentCodersDBTitle.innerText = "Deserción por sprint";

  netPromoteScoreDB.classList.add("content-data");
  netPromoteScoreDB.classList.add("three-Columns");
  netPromoteScoreDBTitle.innerText = "Net Promote Score";

  overcomeGeneralDB.classList.add("content-data");
  overcomeGeneralDB.classList.add("two-Columns");
  overcomeGeneralDBTitle.innerText = "Alumnas que superan la meta";

  satisfactionLabDB.classList.add("content-data");
  satisfactionLabDB.classList.add("two-Columns");
  satisfactionLabDBTitle.innerText = "Alumnas satisfechas con Laboratoria";

  overcomeTechDB.classList.add("content-data");
  overcomeTechDB.classList.add("two-Columns");
  overcomeTechDBTitle.innerText = "Superan meta Tech";

  overcomeHSEDB.classList.add("content-data");
  overcomeHSEDB.classList.add("two-Columns");
  overcomeHSEDBTitle.innerText = "Superan meta HSE";

  teachersDB.classList.add("content-data");
  teachersDB.classList.add("two-Columns");
  teachersDBTitle.innerText = "Promedio teachers";

  jediMasterDB.classList.add("content-data");
  jediMasterDB.classList.add("two-Columns");
  jediMasterDBTitle.innerText = "Promedio Jedis Masters";

  mainDashboard.appendChild(generationCodersNumberDB);
  generationCodersNumberDB.appendChild(generationCodersNumberDBTitle);
  mainDashboard.appendChild(abandonmentCodersDB);
  abandonmentCodersDB.appendChild(abandonmentCodersDBTitle);
  mainDashboard.appendChild(netPromoteScoreDB);
  netPromoteScoreDB.appendChild(netPromoteScoreDBTitle);
  mainDashboard.appendChild(overcomeGeneralDB);
  overcomeGeneralDB.appendChild(overcomeGeneralDBTitle);
  mainDashboard.appendChild(satisfactionLabDB);
  satisfactionLabDB.appendChild(satisfactionLabDBTitle);
  mainDashboard.appendChild(overcomeTechDB);
  overcomeTechDB.appendChild(overcomeTechDBTitle);
  mainDashboard.appendChild(overcomeHSEDB);
  overcomeHSEDB.appendChild(overcomeHSEDBTitle);
  mainDashboard.appendChild(teachersDB);
  teachersDB.appendChild(teachersDBTitle);
  mainDashboard.appendChild(jediMasterDB);
  jediMasterDB.appendChild(jediMasterDBTitle);
//----- fin elementos - graficas dashboard

*/
}

var selectAqp = document.getElementById("select-arequipa");
var selectCdmx = document.getElementById("select-cdmx");
var selectLima = document.getElementById("select-lima");
var selectChile = document.getElementById("select-chile");

var generationCodersNumberDB = document.getElementById("generation-coders-number-db");

var selectOptionAqp = function() {
  if(selectAqp.value === "aqp-2016-2"){
    showData_Aqp_2016_2();
  } else if(selectAqp.value === "aqp-2017-1"){
    showData_Aqp_2017_1();
  }
}
selectAqp.addEventListener("change", selectOptionAqp);


var selectOptionCdmx = function() {
  if(selectCdmx.value === "cdmx-2017-1"){
    showData_CDMX_2017_1();
  } else if(selectCdmx.value === "cdmx-2017-2"){
    showData_CDMX_2017_2();
  }
}
selectCdmx.addEventListener("change", selectOptionCdmx);


var selectOptionLima = function() {
  if(selectLima.value === "lima-2016-2"){
    showData_Lima_2016_2();
  } else if(selectLima.value === "lima-2017-1"){
    showData_Lima_2017_1();
  } else if(selectLima.value === "lima-2017-2"){
    showData_Lima_2017_2();
  }
}
selectLima.addEventListener("change", selectOptionLima);


var selectOptionChile = function() {
  if(selectChile.value === "chile-2016-2"){
    showData_Chile_2016_2();
  } else if(selectChile.value === "chile-2017-1"){
    showData_Chile_2017_1();
  } else if(selectChile.value === "chile-2017-2"){
    showData_Chile_2017_2();
  }
}
selectChile.addEventListener("change", selectOptionChile);

//-----------

var titleSection = document.getElementById("title-region");
var titleOption = document.createElement("h2");
var titleLine = document.createElement("hr");
titleOption.classList.add("title-Option");
titleLine.classList.add("title-hr");
titleSection.appendChild(titleOption);
titleSection.appendChild(titleLine);


var generationCodersDB = document.getElementById("generation-coders-db");
var generationCodersNumberDB = document.getElementById("generation-coders-number-db");
var generationCodersGenerationDB = document.getElementById("generation-coders-generation-db");
var abandonmentCodersDBData = document.getElementById("abandonment-coders-db-data");
var overcomeTechDB = document.getElementById("overcome-tech-db");
var overcomeTechAverangeDB = document.getElementById("overcome-tech-general-db");
var overcomeHseAverangeDB = document.getElementById("overcome-hse-db");
var overcomeTechDBData = document.getElementById("overcome-tech-db-data");
var overcomeHseDBData = document.getElementById("overcome-hse-db-data");
var teachersDBData = document.getElementById("teachers-db-data");
var jediMasterDBData = document.getElementById("jedi-master-db-data");


var resultGenerationCodersDB = document.createElement("span");
var resultOvercomeTechDB = document.createElement("span");

var addStudents = 0;


var active = function() {
  if (selectAqp.value.length >= 1){
       selectCdmx.value="AÑO";
       selectLima.value="AÑO";
       selectChile.value="AÑO";
  } else if(selectCdmx.value.length >= 1){
    selectLima.value="AÑO";
    selectAqp.value="AÑO";
    selectChile.value="AÑO";
  } else if(selectLima.value.length >= 1){
    selectLima.value="AÑO";
    selectCdmx.value="AÑO";
    selectAqp.value="AÑO";
    selectChile.value="AÑO";
  }else if(selectChile.value.length >= 1){
    selectLima.value="AÑO";
    selectCdmx.value="AÑO";
    selectAqp.value="AÑO";
  }
}
