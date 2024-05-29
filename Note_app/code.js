var reminders=[];
var remindIndex=0;
var remindText="";
setText("reminderOutput","Add a Reminder");
onEvent("rightButton", "click", function( ) {
    if (remindIndex<reminders.length-1){
    remindIndex+=1;
    }
    setText("countOutput",remindIndex+1);
    updateScreen();
});
onEvent("leftButton", "click", function( ) {
  if (remindIndex>0){
    remindIndex-=1;
  }
  setText("countOutput",remindIndex+1);
  updateScreen();
});
onEvent("addButton", "click", function( ) {
    if (remindText!==""){
        appendItem(reminders,remindText);
    }
  
    setText("reminderInput","");
    updateScreen();
    remindText=getText("reminderInput");
    setText("countOutput",remindIndex+1);
});
onEvent("reminderInput", "change", function( ) {
    remindText=getText("reminderInput");
});
function updateScreen(){
  if (reminders.length>0){
   setText("reminderOutput",reminders[remindIndex]);
  //console.log("dsadas");
  }
  
}
