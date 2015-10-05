function makePrompt() {
			var request = $.ajax({
				url: "../content.html",
				type: "GET",			
				dataType: "html"
			});

			request.done(function(msg) {
				$("#question").html(msg);
			});

			request.fail(function(jqXHR, textStatus) {
				alert( "RUH ROH: " + textStatus );
			});
		}
