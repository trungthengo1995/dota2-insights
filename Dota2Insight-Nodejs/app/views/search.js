//NOTE: using a script use AJAX with $.POST inside the submit() callback
var $ = require("jquery")(window);

///*
$('#heroSearchBar').submit(function() {
  $.post("../controllers/", {
			heroSearchKey: "heroSearchValue"
			})
		.done(function(data) {
      alert("Data Loaded: " + data); // change for whatever callback you want
    });
  return false;
});

$('heroSearchKey').bind("enterKey", function(e) {
			console.log("Done entering the search key");

			$.post("../controllers/", {
				heroSearchKey: "heroSearchValue"
			}).done(function(data) {
				alert("Data Loaded: " + data); // change for whatever callback you want
			});
			return false;
		});
//*/
/*
$.fn.pressEnter = function (fn) {
		return this.each(function () {
			$(this).bind('enterPress', fn);
			$(this).keyup(function (e) {
				if (e.keyCode == 13) {
					$(this).trigger("enterPress");
				}
			})
		});

		$('heroSearchKey').pressEnter(function () {
			alert('here')
		})
*/