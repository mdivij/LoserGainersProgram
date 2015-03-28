'use strict';
/*
// releases $ from jQuery
var $JQuery1_9 = $.noConflict(true); 
var $JQuery1_3_2 = $.noConflict(true);

jQuery( document ).ready(   // you must need to use jQuery here
    function( $ ) {         // you passed $ as a parameter for jQuery
    $( "div a" ).show();    // Use jQuery code with $ keyword
    }
);
*/
   var counter = 0, min = 0, max = 0;
   var maxName = (""), minName = ("");

//adds a row
function addRowFunction() {
 

    var table = document.getElementById("table1");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0), cell2 = row.insertCell(1), cell3 = row.insertCell(2), cell4 = row.insertCell(3);


        min = theArray[counter][0];
        minName = theArray[counter][1]
        max = theArray[data.response.length - counter][0];
        maxName = theArray[data.response.length - counter][1];

    var loserName = nameMin, loserChange = min + " %", gainerName = nameMax, gainerChange = max + " %";

    cell1.innerHTML = loserName;
    cell2.innerHTML = loserChange;
    cell3.innerHTML = gainerName;
    cell4.innerHTML = gainerChange;

    counter ++; 
}

//deletes a row
function deleteRow(rowNum) {
    var i = rowNum.parentNode.parentNode.rowIndex;
    i -= 1;
    if(i > 0){
    document.getElementById("table1").deleteRow(i);
    }
}

function openMenu() {
    jQuery( document ).ready(  
        function( $ ) {        
        $JQuery1_9( "div a" ).show()
        });

        $.modal("<p>Text Colour: </p><p><div id=colorSelector><div style=background-color:#ff0000 ></div></div></p>")

}
 

