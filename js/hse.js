
//ESTO DEJA TODOS LOS SELECT CON "AÑO"
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
