'use strict';

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

		//find info and calculate change

		stockName = input;

		todayPrice = data.response.data.slice(0,1)[0][1];
		yesterdayPrice = data.response.data.slice(1,2)[0][1];

		change = ((todayPrice - yesterdayPrice) / todayPrice ) * 100;
		change = Math.round(change * 100) / 100;

		//check data

		//console.log("Today: " + todayPrice);
		//console.log("Yesterday: " + yesterdayPrice);
		console.log(change + "%");
		console.log(input);

	}, function(jqXHR){
			throw new Error('Failed to load data!',jqXHR);
	}).then(function(){
			checks ++;
		if(checks === 2){
			Runner.toggleOverhead();
		}
	});

	return AppData;
	return change;
	return stockName;

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

