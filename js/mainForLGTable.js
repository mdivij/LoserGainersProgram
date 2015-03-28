'use strict';

var theArray = []; 

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

			for (var i = 0; i < data.response.length; i++ ){

				var input;
				input = data.response[i].Ticker;
				//console.log(input);
				Runner.loadData(AppData,input);

				theArray.push([change, input]);
				
			}

			theArray.sort(
	        function (a, b){
	            return a[0] - b[0];  
        	} 
        	);
			
		});
			
   
	}
});
