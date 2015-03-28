'use strict';

var input;
var stockNum = 0;
var arrayPercent = []; 
var testArray = [];
var sortedArray = [];

StockRender.AppRender.register({
	id: "49e90eee6ce1942a94136fc8db19319c",
	name: "LoserGainersProgram",
	version: "1.0.0",
	defaults: {
	terminal: {
		x: 0,
		y: 0,
		w: 100,
		h: 100
		}
	},

beforeRender: function () {
console.log('running beforeRender!');
},

ready: function(AppMemory, AppData) {

		AppData.v1.Tickerlist.GET('json')
		.then(function(data){
		
		console.log(data);
		console.log(data.response.length);
		
		testArray= new Array(20);//data.response.length);
      	for (var x = 0; x < 20/*data.response.length*/; x++){
   			testArray[x]= new Array(2)
   		}
   		
		for (var i = 0; i < 20/*data.response.length*/; i++ ){
			
			input = data.response[i].Ticker;
			Runner.loadData(AppData,input);
				
			}

		console.log(testArray);
		console.log(arrayPercent);

		function CompareForSort(first, second){
		    if (first > second)
		        return 1
		    if (first < second)
		        return -1;
		    else
		        return 0;
		}

		console.log(arrayPercent.sort(CompareForSort));

		});		  
	}
});




































function Runner () {}


/**
* Loads data from AppData
*
* @param {AppData Instance} AppData
*
* @param {String} stockId
*
* @return {AppData}
*
*/
var todayPrice, yesterdayPrice;
var change;
var stockName;
var k = 0;	

Runner.loadData = function loadData(AppData, stockId){

	var checks = 0;


	//-----------------------------------------
	// /v1/pricedata
	//-----------------------------------------
	AppData.v1.pricedata.GET(stockId)
	.then(function(data){

		/*
			Below are the search statements for the correct data and the
			calculations for the % change in the stock
		*/

		todayPrice = data.response.data.slice(0,1)[0][1];
		yesterdayPrice = data.response.data.slice(1,2)[0][1];

		change = ((todayPrice - yesterdayPrice) / todayPrice ) * 100;
		change = Math.round(change * 100) / 100;

		arrayPercent.push(change);
		
		testArray[k][1] = change;
		testArray[k][2] = stockId;

		//console.log(change + "%");
		k++;

	}, function(jqXHR){
		//throw new Error('Failed to load data!',jqXHR);
	}).then(function(){
			checks ++;
		if(checks === 2){
			Runner.toggleOverhead();
		}
	});

	for (var s = 0; s < arrayPercent.length; s++ ){
	    if(arrayPercent[s] === undefined) {
	    	arrayPercent.delete(s);
	    }
	}

	return AppData;
	return change;
	return stockName;
	return arrayPercent;
	return testArray;
	return k;
};

/**
* Toggles the overhead animation
* @return {Number} old opacity settings
*/

Runner.toggleOverhead = function toggleOverhead() {
	
	var op = Math.ceil(parseFloat($('.overhead span').css('opacity')));
	
	if( op === 1){
		$('.overhead').css({height:0});
		$('.overhead div').css({opacity:0});
		$('.overhead span').css({opacity:0});
	} else if( op === 0 ) {
		$('.overhead').css({height:'100%'});
		$('.overhead div').css({opacity:1});
		$('.overhead span').css({opacity:1});
	}

	return op;
};

























































 var min = 0, max = 0, counter = 1;
 var maxName = "", minName = "";

//adds a row
function addRowFunction() {

    var table = document.getElementById("table1");
    var row = table.insertRow(counter);
    var cell1 = row.insertCell(0), cell2 = row.insertCell(1), cell3 = row.insertCell(2), cell4 = row.insertCell(3);

    min = Math.min.apply(Math, arrayPercent);
    max = Math.max.apply(Math, arrayPercent);

   	for(var m = 0; m < 20; m++){
	    if(testArray[m][1] == min){
	   		minName = testArray[m][2];
		}
    }

    for(var n = 0; n < 20; n++){
	    if(testArray[n][1] == max){
	   		maxName = testArray[n][2];
		}
    }   
    
    console.log(min);
    console.log(max);
    console.log(minName);
    console.log(maxName);

    var loserName = minName, loserChange = min + " %", gainerName = maxName, gainerChange = max + " %";

    cell1.innerHTML = loserName;
    cell2.innerHTML = loserChange;
    cell3.innerHTML = gainerName;
    cell4.innerHTML = gainerChange;

    counter++;
 
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