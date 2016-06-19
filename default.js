
	var cow_answers=['73440e4f37520934597d85b48fc84a22','5014eda1da1c5d1890d09b9aaea93685','fb5201df3a8220b2236236973491d861','45a2ee3523d4d3f6ac33585dc79fafb5','24554ee4cc893d9739986a88901aeb5b','c6482abd0dc88d4f7b9da967f106455a'
						,'59308e87dcdf37a5522bbb69a2de58d1'];
	var cow_questions=["When is the Cybercow's birthday ?",
						"Dog goes woof, cat goes meow. Bird goes tweet, and mouse goes squeak. What does the cow say ?",
						"Moooooo! AMUL DOODH PEETA HEIN INDIA!",
						"The Cybercow is not pretty but it is pretty to me.",
						"What is the final wish of the cow ?",
						"What is the cybercow's favorite item... and the holes in it only make it better ?",
						"The need to push,the desire to please the cow and the will power to be a legend. #GAMINGFORTHEWIN "];
	var cow_hints=['Fool','Ring-ding-ding-ding-dingeringeding!',
					'Spurred the white revolution.',
					'Quote','#WORLDDOMINATION #CYBERDOMINATION',
					'Viva La france ! Sheep ! BLUE !',
					'You mess with the bull you get the horns!']

	var counter=0;
	  
		  $(document).ready(function(){
				setTimeout(function(){
					alignBoxes();
				},500);
				
				
				  printStats();
				  getStats();
				  
				    
			  var x = readCookie('sessionID');
				if (x) {
					cookieLogin(x);
				}

		  });
		  
				
		function createCookie(name,value,days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
		}

		function readCookie(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		}

		function eraseCookie(name) {
			createCookie(name,"",-1);
		}
	  
	
	
	
// VIEWPORT MOVING
$(document).ready(function(){
	alignBoxes();
});

$(window).resize(function() {
	alignBoxes();
});

function alignBoxes(){

	var contentSpacer;
	var loginSpacer;
	var registerSpacer;
	
	var viewportWidth = $(window).width();
	var viewportHeight = $(window).height();
	
	var contentHeight = $(".contentContainer").height();
	var loginHeight = $(".loginContainer").height();
	var registerHeight = $(".registerContainer").height();
	
	contentSpacer = (viewportHeight-contentHeight)/2;
	loginSpacer = (viewportHeight-loginHeight)/2;
	registerSpacer = (viewportHeight-registerHeight)/2;
	
	$(".contentContainer").css('margin-top',contentSpacer);
	$(".loginContainer").css('margin-top',loginSpacer);
	$(".registerContainer").css('margin-top',registerSpacer);
	
}



// ADD CIRCLE 

$(document).ready(function(){
	
	$("#madcow").click(function(){
		$('#cow_animation').toggleClass('hidden');
		$('#cow_animation').animate({left: "+=90vw"},800, function() {
		$('#cow_animation').animate({left: "-=90vw"},800,function(){
		$('#cow_animation').toggleClass('hidden');
		
		});
		});
		
	});

	// FLIP THROUGH INTERNAL PAGES
	$('.rules').click(function(){		
		$('#hawkLogoBox').fadeOut(500);
		$('#rulesBox').fadeIn(500);
	});

	$('#rulesBox').mouseleave(function() {
		setTimeout(function(){
			$('#hawkLogoBox').fadeIn(500);
			$('#rulesBox').fadeOut(500);
		},2000);
	});

	$('.hints').click(function(){		
		$('#hintsPositionBox').fadeOut(500);
		$('#hintRecentBox').fadeIn(500);
	});

	$('#hintRecentBox').mouseleave(function() {
		setTimeout(function(){
			$('#hintsPositionBox').fadeIn(500);
			$('#hintRecentBox').fadeOut(500);
		},2000);
	});

});

function checkSession(){
	if(loginStatus)
	{	
		sessionID = undefined;
		eraseCookie('sessionID');
		clearInterval(myChecker);
		clearInterval(myUpdater);
		document.title = "CyberHawk | Techtatva 15";
		loginStatus = true;
		hideGamePlay();
	}
}

function hideGamePlay(){
	$("#gamePlay").fadeOut(1000);
	$("#login").delay(1000).fadeIn(1000);
	$(".logout").fadeOut(1000);
	$(".myName").fadeOut(1000);
	
}


$(document).ready(function(){
	
	getQuestion(0);
	getLevel(0);
	getHints(0);
	$(".answerSubmit").click(function(){
			var answer = $('#playerAnswer').val();
			var hashed_answer = md5(answer);

				if(hashed_answer==cow_answers[counter])
					{
						$(".answerStatus").empty().append("THE COW APPROVES.");
							$(".answerStatus").css('background','#007733');
							$("#playerAnswer").val("");
							counter++;
							if (counter<7){
							getQuestion(counter);
							getLevel(counter);
							getHints(counter);
							}
							else{
								$('#playerQuestion').text("The Cow bids you farewell. Stay tuned for the hawk's arrival at 2am!");
								$("#hints").text("Moooooooooooooo!");
								$('#playerLevel').text("Cow");
								disabled=true;		
								$('.answerStatus').toggleClass('hidden');
								$('.answerContainer').toggleClass('hidden');
							}
					}

					else
						{
							$(".answerStatus").empty().append("THE COW IS DISAPPOINTED.");
							$(".answerStatus").css('background','#7F2424');
						}

						setTimeout(function(){
							$(".answerStatus").empty().append("THE COW IS READY.");
							$(".answerStatus").css('background','#111111');
						},2000);
	});
		
	$(".cyberHawkTeam").click(function(){
		window.open('https://hawkeye.iecse.xyz/', '_blank');
	});

			
});


	var myChecker;
		var myUpdater;
		var myPinter;
		
		$(document).ready(function () {
				
				$('.loginButton').click(function(){
					$('.loginContainer').fadeOut(500);
					$('.contentContainer').delay(1000).fadeIn(1000);
				});
				
				
			
		});
		
		
function serverRequest(request_name, data, callback) {
    
	var REQUEST_URL = "https://librorum.in/cyberhawk/api";
    var API_KEY = "fUJxtW62tresIB7m";
   
	data["API_KEY"] = API_KEY;
    data["REQUEST"] = request_name;
    data["SECURITY"] = "OFF";

	
    //console.log("sending request (" + request_name + ")", data);
    //console.log("stringified: ", jQuery.param(data));

    var requestFn = function() {
        $.ajax({
            type: "GET",
            url: REQUEST_URL,
            data: data,
            timeout: 20000 // sets timeout
        }).done(function(response) {
            response = JSON.parse(response);
            response.success = true;
           // console.log("response for (" + request_name + "): ", response);
			
			var val = $(".answerStatus").text();
			if(val === "THE HAWK IS UNABLE TO REACH IT'S NEST.")
			{
					$(".answerStatus").empty().append("THE HAWK IS READY.");
					$(".answerStatus").css('background','');
					$(".loginMessage").hide();
			}
			
            callback && callback(response);
			
        }).fail(function(){
			//showNoInternet();
		});;
    };
    setTimeout(requestFn, 1000);
}


var REQUESTS = {
    //calls callback with true for successful login, false for unsucessful login
    login: function(email, password, callback) {
        var data = {}
        data["EMAIL"] = email;
        data["PASSWORD"] = password;
        serverRequest("playerLogin", data, callback)
    },

    register: function(data, callback) {
      
		serverRequest("register", data, callback);

    },

    get_stats: function(callback) {
        var data = {}
        serverRequest("getStats", data, callback);
    },
	
    logout: function(sessionID) {
        var data = {}
        data["sessionID"] = sessionID;
        serverRequest("playerLogout", data, function(response) {
            //console.log("logged out");
        });
    },

    answer: function(sessionID, answer, callback) {
        var data = {}
        data["sessionID"] = sessionID;
        data["ANSWER"] = answer;
        serverRequest("checkAnswer", data, callback);
    },

    get_question: function(sessionID, callback) {
        var data = {}
        data["sessionID"] = sessionID;
        serverRequest("getQuestion", data, callback);
    },

    get_hints: function(sessionID, callback) {
        var data = {
            "sessionID": sessionID
        };
        serverRequest("getHints", data, callback);
    },

    get_recents: function(sessionID, callback) {
        var data = {
            "sessionID": sessionID
        };
        serverRequest("getRecent", data, callback);
    },

    get_position: function(sessionID, callback) {
        var data = {
            "sessionID": sessionID
        };
        serverRequest("getMyPosition", data, callback);
    },

    get_player_info: function(sessionID, callback) {
        var data = {
            "sessionID": sessionID
        };
        serverRequest("getPlayer", data, callback);
    }


};


		function getStats(){
			REQUESTS.get_stats(function(response) {	
					playersOnline = response["data"]["onlineCount"];
					highestLevel = response["data"]["highestLevel"];
					wrongAnswers = response["data"]["wrongAnswers"];
					mostStuck = response["data"]["maxPlayers"];
			});
			showStats();
		}	

	var leaders;
		var same;
		var trailers;
		
	
		var sessionID; 
		var myLevel;
		var myName;
		var currentQuestion;
		var hints;
		var recents;
		
		function getQuestion(counter){
			$('#playerQuestion').text(cow_questions[counter]);
		}
		function getLevel(counter){
			$('#playerLevel').text((counter+1).toString());
		}
		
		function getHints(counter)
		{
			$("#hints").text(cow_hints[counter]);		
		}
		
			
		function getRecents(sessionID)
		{
			REQUESTS.get_recents(sessionID, function(response) {
				$("#recents").empty();
				if(response["data"]!="SESSION-INVALID")
				{
					recents = response["data"];
					if(recents.length>0)
					{
						recents.forEach(function(entry) {
							$("#recents").append(entry+"<br>");
						});
					}
					else
					{
						$("#recents").append("You haven't made any attempts for this question.");
					}
				}
				else loginStatus=false;
			});
		}
		
		
		function getMyPosition(sessionID)
		{
			REQUESTS.get_position(sessionID, function(response) {
				if(response["data"]!="SESSION-INVALID")
				{
					leaders = response["data"]["leaders"];
					trailers = response["data"]["trailers"];
					same = response["data"]["same"];
					
					var total = trailers / (leaders+trailers);
		
					$('#myPosition').css('margin-left',total*210);
					$('#onPar').text(same);
					$('#trailers').text(trailers);
					$('#leaders').text(leaders);
			
				}
				else loginStatus=false;
			});
		}
			
		function getPlayerInfo(sessionID)
		{
			REQUESTS.get_player_info(sessionID, function(response) {	
				if(response["data"]!="SESSION-INVALID")
				{
					myName  = response["data"]["NAME"];
					myLevel = response["data"]["LEVEL"];
					$("#playerName").text(myName);
					$("#playerLevel").text(myLevel);
				}
				else loginStatus=false;
			});
		}	
		
		
		function checkAnswer(sessionID, answer)
		{
			$(".answerSubmit").css('background','#AAA');
			
			$(".answerStatus").empty().append("Trying... <b>"+answer+"</b>");
			setTimeout(function(){
				REQUESTS.answer(sessionID, answer, function(response) {	
					if(response["data"]!="SESSION-INVALID")
					{
						if(response["data"] && response["data"]!="ANSWER-CLOSE")
						{
							$(".answerStatus").empty().append("THE COW APPROVES.");
							$(".answerStatus").css('background','#007733');
							$("#playerAnswer").val("");
							refreshMe(sessionID);
						}
						else
						{
							$(".answerStatus").empty().append("THE HAWK DISAPPROVES.");
							$(".answerStatus").css('background','#7F2424');
						}
						
						setTimeout(function(){
							$(".answerStatus").empty().append("THE HAWK IS READY.");
							$(".answerStatus").css('background','');
						},2000);
					}


					else loginStatus=false;

					
					
					
					$(".answerSubmit").css('background','');
					disabled = false;
				});	
			},2000);
			
		
			
		}
		
		var loginDisabled = false;
		var registerDisabled = false;
		
		
		
		function cookieLogin(x){
			sessionID = x;
			//console.log("sessionID: ", sessionID);
			
			loginStatus = true;
			
			
			$('.loginContainer').fadeOut(500);
			$('.contentContainer').delay(1000).fadeIn(1000);
		
			setTimeout(function(){
				$('.logout').css('display','inline-block');
				$('.myName').css('display','inline-block');
			},2000);
			
			refreshMe(sessionID);
			myUpdater = setInterval(function(){
				refreshMe(sessionID);
			},5000);
			
			
			myChecker = setInterval(function(){
				checkSession();
			},3000);
			
		
		}
		
		function showLoginMessage(message, remove)
		{
			$('.loginMessage').slideDown();
			$('#loginMessage').text(message);
			
			if(remove)
			{
				setTimeout(function(){
					$('.loginMessage').slideUp();
				},3000);
			}			
		}
		
		
		function register(email,password,name,phone,college){
			
			var data = {} 
			
			data['EMAIL'] = email;
			data['PASSWORD'] = password;
			data['NAME'] = name;
			data['PHONE'] = phone;
			data['COLLEGE'] = college;
		
			if(!registerDisabled)
			{
				$(".registerMeButton").css('background','#AAA');
				$(".registerMeButton").append("<i class='fa fa-circle-o-notch fa-spin' style='margin-left: 15px; color: #333;'></i>");
				
				registerDisabled = true;
				
				setTimeout(function(){
					REQUESTS.register(data, function(response){
						if(response["data"] === "PARAMS-INVALID") {
							showRegisterMessage("Some Unknown Error Occured", true);
						}
						else if(response["data"] === "USER-EXISTS"){
							showRegisterMessage("The Hawk already knows you.", true);
						}
						else if(response["data"] === "TOO-MANY-REQUESTS"){
							showRegisterMessage("Dont' Spam the hawk.", true);
						}
						else
						{
							$('.registerContainer').fadeOut(500);
							$('.loginContainer').delay(1000).fadeIn(1000);
						}
						
						$(".registerMeButton").css('background','');
						$(".registerMeButton").text('REGISTER');
					
						registerDisabled = false;
					
					});
					
				},3000);
			}
		}
		
		
		function showRegisterMessage(message, remove)
		{
			$('.registerMessage').slideDown();
			$('#registerMessage').text(message);
			
			if(remove)
			{
				setTimeout(function(){
					$('.registerMessage').slideUp();
				},3000);
			}			
		}
		
		var loginStatus = false;
		var disabled = false;
		
		var highestLevel;
		var wrongAnswers;
		var mostStuck;
		var playersOnline;
		
		
		
		function refreshMe(sessionID)
		{
			getHints(sessionID);
			getMyPosition(sessionID);
			getRecents(sessionID);
			getQuestion(sessionID);
			getPlayerInfo(sessionID);
			getStats();
		}
		
		var messages = ["Players with suspicious activity will be banned."]; 
		
		function printStats()
		{
			
			var counter = 0;
			setInterval(function(){
				$("#notifications").empty();
				$("#notifications").append(messages[counter]);
				counter++;
				if(counter >= messages.length) { counter = 0; }
				
			}, 5000);

		}
		
		function showStats()
		{
			messages = [
							"Players with suspicious activity will be banned.", 
							"Follow our Facebook Page for updates.", 
							"CyberHawk will end on <b>10/10/15 at 11:59:59PM</b>", 
							"Online players: <b>" + playersOnline +"</b>", 
							"Highest level breached: <b>" + highestLevel +"</b>", 
							"Total number of wrong answers: <b>" + wrongAnswers + "</b>",
							"Most people are stuck on <b> LEVEL " + mostStuck + "</b>"
					   ];	
		}
		