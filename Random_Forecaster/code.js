// Build the Random Forecaster app
onEvent("forecastButton", "click", function( ) {
  

//variables
var citys=getColumn("Daily Weather","City");
var LowT=getColumn("Daily Weather","Low Temperature");
var HighT=getColumn("Daily Weather","High Temperature");
var mainC=getColumn("Daily Weather", "Main Condition");
var cityI=getColumn("Daily Weather", "Icon");

//function
updateScreen();

function updateScreen(){
//setting all 
var randN=randomNumber(1,610);

setText("highTempOutput",HighT[randN]);
setText("lowTempOutput",LowT[randN]);
setText("cityOutput",citys[randN]);
setText("conditionOutput",mainC[randN]);
setImageURL("iconOutput",cityI[randN]);
setText("highTempOutput",HighT[randN]);
}
});