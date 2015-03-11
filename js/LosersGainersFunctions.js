'use strict';
   
//adds a row
function addRowFunction() {

    var table = document.getElementById("table1");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0), cell2 = row.insertCell(1), cell3 = row.insertCell(2), cell4 = row.insertCell(3);
    var loserName = "AAPL", loserChange = "-2%", gainerName = "TSLA", gainerChange = "6%";

    cell1.innerHTML = loserName;
    cell2.innerHTML = loserChange;
    cell3.innerHTML = gainerName;
    cell4.innerHTML = gainerChange;
}

//deletes a row
function deleteRow(rowNum) {
    var i = rowNum.parentNode.parentNode.rowIndex;
    i -= 1;
    if(i > 0){
    document.getElementById("table1").deleteRow(i);
    }
}
