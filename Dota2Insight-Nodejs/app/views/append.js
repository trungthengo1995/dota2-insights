/*
append all hero images to $('#dragDropHeroImages') 
*/

const dir = "../../static/public/assets/images/hero-images/";
const fs = require('fs');

/*
require jquery to be used in nodejs
*/
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);
});


fs.readdir(dir, (err, files) => {
	var panel = document.getElementById("dragDropHeroImages");

  	files.forEach(file => {
    	console.log(file);
    	
    	var imgDom = document.createElement("img");
    	imgDom.src = dir + file;
    	panel.appendChild(imgDom);
  	});
})