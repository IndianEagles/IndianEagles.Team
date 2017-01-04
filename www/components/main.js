// This is a JavaScript file
var storage = "MCA";

var iet = {
		indianeagles: function(){
			app.slidingMenu.setMainPage('indianeagle.html', {closeMenu: true});
		},
		initial: function(){
			var mcaNumber = localStorage[storage+".mcaNumber"];
			var mcaName = localStorage[storage+".mcaName"];
			
			if(mcaNumber=="" || mcaNumber==null){
				$("#menuLogin").show();
				$("#menuLogout").hide();
				$("#menuMessage").hide();
				$("#menuMCA").hide();
				$("#menuMCAUp").hide();
			}else{
				$("#menuLogin").hide();
				$("#menuLogout").show();
				$("#menuMessage").show();
				$("#menuMCA").show();
				$("#menuMCAUp").show();
				$("#mcaLogin").html(mcaName);
				$("#mcaLoginUp").html(mcaName);
			}
		},
		before:function(){
			var mcaNumber = localStorage[storage+".mcaNumber"];
			if(mcaNumber=="" || mcaNumber==null){
			}else{
			//// count Messages
				var  myURL = "http://indianeagles.team/mobile/messagesCount/"+mcaNumber;
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				
				
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				
//				console.log(myURL);
					$.ajax({
					crossOrigin: true,
					url: myURL,
					success: function(data){
//						console.log(data);
						$("#messageCount").html(data['messages']['count']);
					},
					error: function(data){
						htmlnew = "Unable to connect to server. Status: "+data['status'];	
						$('#result').html(htmlnew);
					}}
				); 
			}
		},
  users: function(){
		var  myURL = "http://indianeagles.team/mobile/users";
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				
			$.ajax({
				crossOrigin: true,
				url: myURL,
				success: function(data){
//				console.log(data);
				var htmlnew = '<h2 class="btn-block"><strong>Our Team</strong></h2>';
				var i = 1;
				htmlnew = htmlnew + '<h3>Directors/Consultants/Trainers</h3>';
				htmlnew = htmlnew + '<table class="w3-table-all">';
				for (key in data['users']) {
					element = data['users'][key];
					htmlnew = htmlnew + '<tr>';
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + i + '.';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + '<span>'+element['mcaNumber']+'</span>';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '<td>';
					if(element['Mobile']===undefined){
						htmlnew = htmlnew + '<span>'+element['mcaName']+'</span>';
					}else{
					htmlnew = htmlnew + '<span>'+element['mcaName']+'<br><a href="tel:+91'+element['Mobile']+'">'+element['Mobile']+'</a> <i class="fa fa-mobile-phone fa-lg"></i></span>';
					}
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';
					i = i + 1;
				}
				htmlnew = htmlnew + '</table>';
				setTimeout(function(){
					$('#result').html(htmlnew);
				}, 0);
			},
			error: function(data){
//				console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
			}
		});
	},
	events:function(){
		
		var  myURL = "http://indianeagles.team/mobile/events";
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				

		$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
				var htmlnew = '';
				var i = 1;
				$('#TitleEvents').html('Events');
				htmlnew = htmlnew + '<table class="w3-table-all">';
//				console.log(data);
				for (key in data['events']) {
					element = data['events'][key];
					htmlnew = htmlnew + '<tr>';
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + i + '.';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '<td  class="">';
					htmlnew = htmlnew + '<span><a href="#" onclick=iet.event("'+element["_id"]+'");>'+element['Event']+'</a><br><small>'+element['DateTime']+'</small></span>';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + '<span>'+element['Place']+'<br><small>'+element['City']+'</small></span>';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';
					i = i + 1;
				}
				htmlnew = htmlnew + '</table>';
				htmlnew = htmlnew + '<div class="w3-bottom">';
				htmlnew = htmlnew + '<ul class="w3-navbar w3-red w3-large">';
    htmlnew = htmlnew + '<li><a href="#" onclick="iet.indianeagles();"><< IndianEagles</a></li>';
				htmlnew = htmlnew + '</ul>';
				htmlnew = htmlnew + '</div>';
				
				$('#result').html(htmlnew);
			},
			error: function(data){
//				console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
			}
		});
		var mcaNumber = localStorage[storage+".mcaNumber"];
		if(mcaNumber=="" || mcaNumber==null){
			$("#addEvent").hide();	
		}else{
			$("#addEvent").show();
		}
	},
	event: function(id){
		var  myURL = "http://indianeagles.team/mobile/event"+"/"+id;
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				

$.ajax({
	crossOrigin: true,
	url: myURL,
			success: function(data){
				var htmlnew = '';
				var i = 1;
				htmlnew = htmlnew + '<table class="w3-table-all">';
//				console.log(data);
				$('#TitleEvents').html('Event<br>'+data['events']['Event']);
					htmlnew = htmlnew + '<tr>';
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + '&nbsp;';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '<td  class="">';
					htmlnew = htmlnew + '<span>'+data['events']['Topic']+'<br><small>'+data['events']['DateTime']+'</small></span>';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + '<span>'+data['events']['Place']+'<br><small>'+data['events']['City']+'</small></span>';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';
					htmlnew = htmlnew + '<tr>';
					htmlnew = htmlnew + '<td colspan="3">';
					htmlnew = htmlnew + data['events']['Address']+', '+data['events']['Place']+" "+data['events']['City']+" "+data['events']['State'];
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';
					htmlnew = htmlnew + '<tr>';
					htmlnew = htmlnew + '<td colspan="3" class="w3-teal" style="text-align:center">';
					htmlnew = htmlnew + '<h4>'+data['events']['Host']+'<br>'+data['events']['Mobile']+'</h4>';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';
					htmlnew = htmlnew + '<tr>';
					htmlnew = htmlnew + '<td colspan="3">';
					htmlnew = htmlnew + ''+data['events']['EventDescription']+'<br><br>';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';
					
					i = i + 1;
				
				htmlnew = htmlnew + '</table>';
				htmlnew = htmlnew + '<div class="w3-bottom">';
				htmlnew = htmlnew + '<ul class="w3-navbar w3-red w3-large">';
    htmlnew = htmlnew + '<li><a href="#" onclick="iet.events()"><< Events</a></li>';
				htmlnew = htmlnew + '</ul>';
				htmlnew = htmlnew + '</div>';
				$('#result').html(htmlnew);
			},
			error: function(data){
//				console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
			}
		});		
			$("#addEvent").hide();	
	},
	categories: function(){
		
		if(!localStorage[storage+".listName"]){
			localStorage.setItem(storage+'.listName','{"Funny":1}');
			var listName = localStorage[storage+".listName"]; 
			var  myURL = "http://indianeagles.team/mobile/listProducts/Name/All";	
			htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
			$('#result').html(htmlnew);				
			$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
				var stringy = JSON.stringify(data);
				localStorage.setItem(storage+'.listName',stringy);	
			},
			error: function(data){
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
			}
		});
			var listName = localStorage[storage+".listName"]; 
			var data = jQuery.parseJSON( listName );
		}else{
			var listName = localStorage[storage+".listName"]; 
			var data = jQuery.parseJSON( listName );
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
		}
		
		
		if(!localStorage[storage+".listCode"]){
			localStorage.setItem(storage+'.listCode','{"Funny":1}');
			var listCode = localStorage[storage+".listCode"]; 
			var myURL = "http://indianeagles.team/mobile/listProducts/Code/";
			htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
			$('#result').html(htmlnew);				
			$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
				var stringy = JSON.stringify(data);
				localStorage.setItem(storage+'.listCode',stringy);	
			},
			error: function(data){
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
			}
		});
			var listCode = localStorage[storage+".listCode"]; 
			var data = jQuery.parseJSON( listCode );
		}else{
			var listCode = localStorage[storage+".listCode"]; 
			var data = jQuery.parseJSON( listCode );
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
		}

		
		if(!localStorage[storage+".categories"]){
		localStorage.setItem(storage+'.categories','{"Funny":1}');
			var categories = localStorage[storage+".categories"]; 
			var  myURL = "http://indianeagles.team/mobile/productcategories";	
			htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
			$('#result').html(htmlnew);				
			$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
				var stringy = JSON.stringify(data);
				localStorage.setItem(storage+'.categories',stringy);	
			},
			error: function(data){
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
			}
		});
			var categories = localStorage[storage+".categories"]; 
			var data = jQuery.parseJSON( categories );
		}else{
			var categories = localStorage[storage+".categories"]; 
			var data = jQuery.parseJSON( categories );
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
		}

//			console.log(data);

				var htmlnew = '';
				$('#TitleProducts').html('Categories');
				htmlnew = htmlnew + '<table class="w3-table-all">';
				
				for (key in data['categories']) {
					
					var element = data['categories'][key];
//				console.log(element);
					htmlnew = htmlnew + '<tr class="w3-bottombar w3-border-blue">';
					htmlnew = htmlnew + '<td style="text-align:center;">';
					htmlnew = htmlnew + '<h3><strong><a style="text-decoration:none" href="#" onclick=iet.products("'+encodeURIComponent(element['Name'])+'");>'+element['Name']+' ('+element['count']+')</a></strong></h3>';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';
				}
				htmlnew = htmlnew + '</table>';
//			var  myURL = "http://indianeagles.team/mobile/";	
//			console.log(htmlnew);
				$('#result').html(htmlnew);
				
//				console.log($("#result").html());
		 
		if(!localStorage[storage+".cart"]){
			localStorage.setItem(storage+'.cart',"680003:1");
			var cart = localStorage[storage+".cart"]; 
		}else{
			var cart = localStorage[storage+".cart"]; 
		} 
		
// 	console.log(cart);
		var obj = malformedJSON2Array(cart); 
 
//		console.log(obj.length);
		var count = obj.length;
			htmlnew = "Cart: "+(count-1)+" items";
			$('#Cart').html(htmlnew);				
	},
	favorites: function(){
			var mcaNumber = localStorage[storage+".mcaNumber"];
			var  myURL = "http://indianeagles.team/mobile/favorites"+'/'+mcaNumber;	
			htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
			$('#result').html(htmlnew);				
		$.ajax({
		crossOrigin: true,
		url: myURL,
			success: function(data){
				var htmlnew = '';
				var mcaNumber = localStorage[storage+".mcaNumber"];
//				console.log(data);
				htmlnew = htmlnew + '<table class="w3-table-all">';
				if((data['products']).length==2){
						element = data['products'][0];
						htmlnew = htmlnew + '<tr>';
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span><strong><a style="text-decoration:none" href="#" onclick=iet.product("'+element['Code']+'")>'+element['Code']+'</a></strong></span><br>';
						if(mcaNumber!=""){
						htmlnew = htmlnew + '<a href="#" onclick=iet.delfavorite("'+element['Code']+'","'+mcaNumber+'")><i class="fa fa-heartbeat fa-2x" ></i></a>';
						}
						htmlnew = htmlnew + '</td>';
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span><a style="text-decoration:none" href="#" onclick=iet.product("'+element['Code']+'")>'+element['Name']+'</a></span>';
						htmlnew = htmlnew + '</td>';					
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + element['Size'];
						htmlnew = htmlnew + '</td>';										
						htmlnew = htmlnew + '</tr>';
						htmlnew = htmlnew + '<tr class="w3-small w3-bottombar w3-border-blue">';
						htmlnew = htmlnew + '<td colspan="3">MRP: ';
						var mrp = parseFloat(Math.round(element['MRP'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + mrp;
						htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;DP: ';
						var dp = parseFloat(Math.round(element['DP'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + dp;
						htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;BV: ';
						var bv = parseFloat(Math.round(element['BV'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + bv;
						htmlnew = htmlnew + '</td>';
						htmlnew = htmlnew + '</tr>';
						$('#TitleProducts').html(element['Category']);
				}else{
						for (key in data['products']) {
						element = data['products'][key];
						htmlnew = htmlnew + '<tr class="w3-topbar w3-border-blue">';
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span><strong><a style="text-decoration:none" href="#" onclick=iet.product("'+element['Code']+'")>'+element['Code']+'</a></strong></span><br>';
						if(mcaNumber!=""){
						htmlnew = htmlnew + '<a href="#" onclick=iet.delfavorite("'+element['Code']+'","'+mcaNumber+'")><i class="fa fa-heartbeat fa-2x" ></i></a>';
						}
						htmlnew = htmlnew + '</td>';
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span><a style="text-decoration:none" href="#" onclick=iet.product("'+element['Code']+'")>'+element['Name']+'</a></span>';
						htmlnew = htmlnew + '</td>';					
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + element['Size'];
						htmlnew = htmlnew + '</td>';										
						htmlnew = htmlnew + '</tr>';
						htmlnew = htmlnew + '<tr class="w3-small w3-bottombar w3-border-blue">';
						htmlnew = htmlnew + '<td colspan="3">MRP: ';
						var mrp = parseFloat(Math.round(element['MRP'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + mrp;
						htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;DP: ';
						var dp = parseFloat(Math.round(element['DP'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + dp;
						
						htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;BV: ';
						var bv = parseFloat(Math.round(element['BV'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + bv;
						htmlnew = htmlnew + '</td>';

						htmlnew = htmlnew + '</tr>';
						
						$('#TitleProducts').html(element['Category']);
					}
				}

				
				htmlnew = htmlnew + '</table><br><hr><br>';
				htmlnew = htmlnew + '<div class="w3-bottom">';
				htmlnew = htmlnew + '<ul class="w3-navbar w3-red w3-large">';
    htmlnew = htmlnew + '<li><a href="#" onclick="iet.categories()"><< Categories</a></li>';
				htmlnew = htmlnew + '</ul>';
				htmlnew = htmlnew + '</div>';
				
				$('#result').html(htmlnew);
			},
			error: function(data){
//				console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);

			}
		}); 
			
	},
	products: function(category){
		if(!localStorage[storage+"."+category]){
			localStorage.setItem(storage+'.'+category,'{"products":[{"_id":"000","Code":"000000","Name":"","Size":""}]}');
			var products = localStorage[storage+"."+category];
			var data = jQuery.parseJSON( products );
			var  myURL = "http://indianeagles.team/mobile/products"+'/'+encodeURI(category);	
			htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
			$('#result').html(htmlnew);				
			$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
				var stringy = JSON.stringify(data);
				localStorage.setItem(storage+'.'+category,stringy);	
				var products = localStorage[storage+"."+category]; 
				var data = jQuery.parseJSON( products );
				iet.products(category);
			},
			error: function(data){
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
			}
		});
		}else{
			var products = localStorage[storage+"."+category]; 
			var data = jQuery.parseJSON( products );
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
		}
				var htmlnew = '';
				var mcaNumber = localStorage[storage+".mcaNumber"];
//				console.log(data);
				htmlnew = htmlnew + '<table class="w3-table-all">';
				if(data['products'].length==2){
						element = data['products'][0];
						htmlnew = htmlnew + '<tr>';
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span><strong><a style="text-decoration:none" href="#" onclick=iet.product("'+element['Code']+'")>'+element['Code']+'</a></strong></span><br>';
						if(mcaNumber!=""){
						htmlnew = htmlnew + '<a href="#" onclick=iet.favorite("'+element['Code']+'","'+mcaNumber+'")><i class="fa fa-heart fa-2x" ></i></a>';
						}
						htmlnew = htmlnew + '</td>';
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span><a style="text-decoration:none" href="#" onclick=iet.product("'+element['Code']+'")>'+element['Name']+'</a></span>';
						htmlnew = htmlnew + '</td>';					
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + element['Size'];
						htmlnew = htmlnew + '<br>';
						htmlnew = htmlnew + '<a href="#" onclick=iet.addcart("'+element['Code']+'","'+mcaNumber+'")><i class="fa fa-plus fa-2x" ></i></a>';
						htmlnew = htmlnew + '</td>';										
						htmlnew = htmlnew + '</tr>';
						htmlnew = htmlnew + '<tr class="w3-small w3-bottombar w3-border-blue">';
						htmlnew = htmlnew + '<td colspan="3">MRP: ';
						var mrp = parseFloat(Math.round(element['MRP'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + mrp;
						htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;DP: ';
						var dp = parseFloat(Math.round(element['DP'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + dp; 
						htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;BV: ';
						var bv = parseFloat(Math.round(element['BV'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + bv;
						htmlnew = htmlnew + '</td>';
						htmlnew = htmlnew + '</tr>';
						$('#TitleProducts').html(element['Category']);
				}else{
						for (key in data['products']) {
						element = data['products'][key];
						htmlnew = htmlnew + '<tr class="w3-topbar w3-border-blue">';
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span><strong><a style="text-decoration:none" href="#" onclick=iet.product("'+element['Code']+'")>'+element['Code']+'</a></strong></span><br>';
						if(mcaNumber!=""){
						htmlnew = htmlnew + '<a href="#" onclick=iet.favorite("'+element['Code']+'","'+mcaNumber+'")><i class="fa fa-heart fa-2x" ></i></a>';
						}
						htmlnew = htmlnew + '</td>';
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span><a style="text-decoration:none" href="#" onclick=iet.product("'+element['Code']+'")>'+element['Name']+'</a></span><br>';
						if((element['Code']).substring(0,1)=="0"){
							htmlnew = htmlnew + '<img src="http://indianeagles.team/img/x'+element['Code']+'.jpg" width="30" class="w3-center">';
						}
						htmlnew = htmlnew + '</td>';					
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span class="w3-small">'+element['Size']+'</span>';
						htmlnew = htmlnew + '<br>';
						htmlnew = htmlnew + '<a href="#" onclick=iet.addcart("'+element['Code']+'","'+mcaNumber+'")><i class="fa fa-plus fa-2x" ></i></a>';
						htmlnew = htmlnew + '</td>';										
						htmlnew = htmlnew + '</tr>';
						htmlnew = htmlnew + '<tr class="w3-small w3-bottombar w3-border-blue">';
						htmlnew = htmlnew + '<td colspan="3">MRP: ';
						var mrp = parseFloat(Math.round(element['MRP'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + mrp;
						htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;DP: ';
						var dp = parseFloat(Math.round(element['DP'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + dp;
						
						htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;BV: ';
						var bv = parseFloat(Math.round(element['BV'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + bv;
						htmlnew = htmlnew + '<span class="w3-right" style="margin-top:0px;margin-bottom:0px">';
						
						htmlnew = htmlnew + '</td>';

						htmlnew = htmlnew + '</tr>';
						
						$('#TitleProducts').html(element['Category']);
					}
				}

				
				htmlnew = htmlnew + '</table><br><hr><br>';
				
							htmlnew = htmlnew + '<div id="idaddproduct" class="w3-modal">';
							htmlnew = htmlnew + '<div class="w3-modal-content">';
							htmlnew = htmlnew + '<div class="w3-container w3-panel w3-yellow w3-card">';
							htmlnew = htmlnew + '<span onclick=$("#idaddproduct").hide(); ';
							htmlnew = htmlnew + 'class="w3-closebtn">&times;</span>';
							htmlnew = htmlnew + '<h2>Product has been added!</h2>';
							htmlnew = htmlnew + '</div>';
							htmlnew = htmlnew + '</div>';
							htmlnew = htmlnew + '</div>';
// When the user clicks anywhere outside of the modal, close it							
							htmlnew = htmlnew + '<script>';
							htmlnew = htmlnew + 'var modal = document.getElementById("idaddproduct");';
							htmlnew = htmlnew + 'window.onclick = function(event) {';
							htmlnew = htmlnew + 'if (event.target == modal) {';
       htmlnew = htmlnew + '$("#idaddproduct").hide()';
							htmlnew = htmlnew + '}';
							htmlnew = htmlnew + '}';
							htmlnew = htmlnew + '</script>';
							

				htmlnew = htmlnew + '<div class="w3-bottom">';
				htmlnew = htmlnew + '<ul class="w3-navbar w3-red w3-large">';
    htmlnew = htmlnew + '<li><a href="#" onclick="iet.categories()"><< Categories</a></li>';
				htmlnew = htmlnew + '</ul>';
				htmlnew = htmlnew + '</div>';
				
				$('#result').html(htmlnew);

	},
	
	product: function(code){
		var  myURL = "http://indianeagles.team/mobile/product"+'/'+code;	
		var mcaNumber = localStorage[storage+".mcaNumber"];
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				

		//		console.log(myURL);
		$.ajax({
		crossOrigin: true,
		url: myURL,
			success: function(data){
				
				var htmlnew = '';
				$('#TitleProducts').html(data['product']['Category']);
				htmlnew = htmlnew + '<table class="w3-table-all">';
					
					htmlnew = htmlnew + '<tr>';
					htmlnew = htmlnew + '<td><strong>';
					htmlnew = htmlnew + data['product']['Code'];
					htmlnew = htmlnew + '</strong><br>';
					if(mcaNumber!=""){
						htmlnew = htmlnew + '<a href="#" onclick=iet.favorite("'+element['Code']+'","'+mcaNumber+'")><i class="fa fa-heart fa-2x" ></i></a>';
						}
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + data['product']['Name'];
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';					
					htmlnew = htmlnew + '<tr>';
					htmlnew = htmlnew + '<td><strong>';
					htmlnew = htmlnew + 'Category';
					htmlnew = htmlnew + '</strong></td>';
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + data['product']['Category'];
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';					
					htmlnew = htmlnew + '<tr>';
					htmlnew = htmlnew + '<td><strong>';
					htmlnew = htmlnew + 'Size';
					htmlnew = htmlnew + '</strong></td>';
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + data['product']['Size'];
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';					
					htmlnew = htmlnew + '<tr>';
					htmlnew = htmlnew + '<td colspan="2" style="text-align:center">';
					htmlnew = htmlnew + '<img src="http://indianeagles.team/img/'+data['product']['Code']+'.jpg" width=98%>';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';
					htmlnew = htmlnew + '<tr>';					
					htmlnew = htmlnew + '<td><strong>';
					htmlnew = htmlnew + 'MRP';
					htmlnew = htmlnew + '</strong></td>';
					htmlnew = htmlnew + '<td>Rs. ';
					htmlnew = htmlnew + parseFloat(data['product']['MRP']).toFixed(2);
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';				
					htmlnew = htmlnew + '<tr>';										
					htmlnew = htmlnew + '<td><strong>';
					htmlnew = htmlnew + 'DP';
					htmlnew = htmlnew + '</strong></td>';
					htmlnew = htmlnew + '<td>Rs. ';
					htmlnew = htmlnew + parseFloat(data['product']['DP']).toFixed(2);
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';					
					htmlnew = htmlnew + '<tr>';					
					htmlnew = htmlnew + '<td><strong>';
					htmlnew = htmlnew + 'PV';
					htmlnew = htmlnew + '</strong></td>';
					htmlnew = htmlnew + '<td>Rs. ';
					htmlnew = htmlnew + parseFloat(data['product']['PV']).toFixed(2);
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';				
					htmlnew = htmlnew + '<tr>';										
					htmlnew = htmlnew + '<td><strong>';
					htmlnew = htmlnew + 'BV';
					htmlnew = htmlnew + '</strong></td>';
					htmlnew = htmlnew + '<td>Rs. ';
					htmlnew = htmlnew + parseFloat(data['product']['BV']).toFixed(2);
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';					
					htmlnew = htmlnew + '<tr>';					
					htmlnew = htmlnew + '<td colspan="2">';
					htmlnew = htmlnew + data['product']['Description'];
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';		
//					htmlnew = htmlnew + '<tr>';					
//					htmlnew = htmlnew + '<td colspan="2">';
//					htmlnew = htmlnew + '<iframe src="https://www.youtube.com/embed/'+data['product']['Video']+'?rel=0&amp;controls=0" allowfullscreen="" frameborder="0" width="100%" height="400"></iframe>';
//					htmlnew = htmlnew + '</td>';
//					htmlnew = htmlnew + '</tr>';		


					
				htmlnew = htmlnew + '</table><br><hr><br>';
				htmlnew = htmlnew + '<div class="w3-bottom">';
				htmlnew = htmlnew + '<ul class="w3-navbar w3-red w3-large">';
    htmlnew = htmlnew + '<li><a href="#" onclick=iet.products("'+encodeURIComponent(data['product']['Category'])+'")><< '+data['product']['Category']+'</a></li>';
				htmlnew = htmlnew + '</ul>';
				htmlnew = htmlnew + '</div>';
				
				$('#result').html(htmlnew);
			},
			error: function(data){
//				console.log(data);

				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
			}
		}); 
	},
	login: function(){
		$("#LoginError").html("");

		var mcaNumber = $("#mcaNumber").val();
		var Mobile = $("#Mobile").val();
		if(mcaNumber==""){
			$("#mcaNumberError").html("MCA number is missing");
			return false;
		}
		if(mcaNumber.length<8){
			$("#mcaNumberError").html("MCA number is too short");
			return false;
		}	
		if(mcaNumber.length>8){
			$("#mcaNumberError").html("MCA number is too long");
			return false;
		}
		if(Mobile==""){
			$("#MobileError").html("Mobile number is missing");
			return false;
		}
		if(Mobile.length<10){
			$("#MobileError").html("Mobile number is too short");
			return false;
		}
//		console.log(mcaNumber);
//		console.log(Mobile);
		var  myURL = "http://indianeagles.team/mobile/login"+'/'+mcaNumber+'/'+Mobile;	
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				
		
//		console.log(myURL);
		$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
				
				if(data==null){
					$("#menuLogin").show();
					$("#menuLogout").hide();
					$("#menuMessage").hide();
					$("#menuMCA").hide();
					$("#menuMCAUp").hide();
					$("#LoginError").html("Unbale to connect! Try Again");
					return false;
				}
//				console.log(data);
				if(data['user']['mcaNumber']==mcaNumber){
								app.slidingMenu.setMainPage('validate.html', {closeMenu: true});
				}else{
					$("#menuLogin").show();
					$("#menuLogout").hide();
					$("#menuMessage").hide();
					$("#menuMCA").hide();
					$("#menuMCAUp").hide();
				}
			},
			error: function(data){
//				console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
			}
		}); 
	},
	sms: function(){
		$("#LoginError").html("");

		var mcaNumber = $("#mcaNumber").val();
		var Mobile = $("#Mobile").val();
		if(mcaNumber==""){
			$("#mcaNumberError").html("MCA number is missing");
			return false;
		}
		if(mcaNumber.length<8){
			$("#mcaNumberError").html("MCA number is too short");
			return false;
		}	
		if(mcaNumber.length>8){
			$("#mcaNumberError").html("MCA number is too long");
			return false;
		}
		if(Mobile==""){
			$("#MobileError").html("Mobile number is missing");
			return false;
		}
		if(Mobile.length<10){
			$("#MobileError").html("Mobile number is too short");
			return false;
		}
//		console.log(mcaNumber);
//		console.log(Mobile);
		var  myURL = "http://indianeagles.team/mobile/loginsms"+'/'+mcaNumber+'/'+Mobile;	
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				
		
//		console.log(myURL);
		$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
				
				if(data==null){
					$("#menuLogin").show();
					$("#menuLogout").hide();
					$("#menuMessage").hide();
					$("#menuMCA").hide();
					$("#menuMCAUp").hide();
					$("#LoginError").html("Unbale to connect! Try Again");
					return false;
				}
//				console.log(data);
				if(data['user']['mcaNumber']==mcaNumber){
								app.slidingMenu.setMainPage('validate.html', {closeMenu: true});
				}else{
					$("#menuLogin").show();
					$("#menuLogout").hide();
					$("#menuMessage").hide();
					$("#menuMCA").hide();
					$("#menuMCAUp").hide();
				}
			},
			error: function(data){
//				console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
			}
		}); 
	},
	validate: function(){
		var signinCode = $("#signinCode").val();
		
		if(signinCode==""){
			$("#signinCodeError").html("Validation Code is missing");
			return false;
		}
		if(signinCode.length<6){
			$("#signinCodeError").html("Validation Code is too short");
			return false;
		}
		if(signinCode.length>6){
			$("#signinCodeError").html("Validation Code is too long");
			return false;
		}
		var  myURL = "http://indianeagles.team/mobile/validate"+'/'+signinCode;
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				

//		console.log(myURL);
		$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
				if(data['user']=="null"){
					$("#menuLogin").show();
					$("#menuLogout").hide();
					$("#menuMessage").hide();
					$("#menuMCA").hide();
					$("#menuMCAUp").hide();
					$("#LoginError").html("Wrong Code entered!");
					return false;
				}
//					console.log(data);
					var mcaName = data['user']['mcaName'];
					
					///////////////////////////////////////////////////////
					localStorage.setItem(storage+'.mcaName',data['user']['mcaName']);
					localStorage.setItem(storage+'.mcaNumber',data['user']['mcaNumber']);
					localStorage.setItem(storage+'.refer',data['user']['refer']);
					localStorage.setItem(storage+'.refer_name',data['user']['refer_name']);
					localStorage.setItem(storage+'.DateJoin',data['user']['DateJoin']);
					///////////////////////////////////////////////////////
					$("#menuLogin").hide();
					$("#menuLogout").show();
					$("#menuMessage").show();
					$("#menuMCA").show();
					$("#menuMCAUp").show();
					$("#mcaLogin").html(mcaName);
					$("#mcaLoginUp").html(mcaName);
					app.slidingMenu.setMainPage('page1.html', {closeMenu: true});
			},
			error: function(data){
					$("#menuLogin").show();
					$("#menuLogout").hide();
					$("#menuMessage").hide();
					$("#menuMCA").hide();
					$("#menuMCAUp").hide();
					$("#LoginError").html("Unable to login! Try Again!");
//				console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);

			}
		}); 		
		var htmlnew = '';
		$('#result').html(htmlnew);
	},
	states: function(){
	var  myURL = "http://indianeagles.team/mobile/states";
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				
	
		$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
				var htmlnew = '';
				var i = 1;	
				htmlnew = htmlnew + '<table class="w3-table-all">';
//				console.log(data);
				for (key in data['States']) {
					element = data['States'][key];
					htmlnew = htmlnew + '<tr>';
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + i + '.';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '<td  class="">';
					htmlnew = htmlnew + '<span><a href="#" onclick=iet.distributors("'+encodeURIComponent(element)+'");>'+element+'</a><br></span>';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';
					i = i + 1;
				}
				htmlnew = htmlnew + '</table>';
				$('#resultStates').html(htmlnew);				
		},
			error: function(data){
//				console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);

			}
		});
	},
	distributors: function(state){
		var  myURL = "http://indianeagles.team/mobile/distributors"+'/'+encodeURI(state);	
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				

		//		console.log(myURL);
		$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
				var htmlnew = '<h3>'+state+'</h3>';
				htmlnew = htmlnew + '<ul class="w3-ul">';
				var i = 1;
//				console.log(data);	
						for (key in data['distributors']) {
						element = data['distributors'][key];
						htmlnew = htmlnew + '<li class="w3-pale-red">';
						htmlnew = htmlnew + i+'. '+element['City']+'';
						htmlnew = htmlnew + '</li>';
						htmlnew = htmlnew + '<li>';
						htmlnew = htmlnew + ''+element['Address']+'';
						htmlnew = htmlnew + '</li>';
						htmlnew = htmlnew + '<li>';
						htmlnew = htmlnew + 'Mobile: '+element['Mobile']+'';
						htmlnew = htmlnew + '</li>';
						i = i+1;
						}
						htmlnew = htmlnew + '<li class="w3-black"><font style="color:white">-*-End of list-*-</font></li>';
						htmlnew = htmlnew + '</ul><br><br><br><br>';
				htmlnew = htmlnew + '<div class="w3-bottom">';
				htmlnew = htmlnew + '<ul class="w3-navbar w3-gray w3-large">';
    htmlnew = htmlnew + '<li><a href="#" onclick="iet.states()"><< States</a></li>';
				htmlnew = htmlnew + '</ul>';
				htmlnew = htmlnew + '</div>';
					
						$('#resultStates').html(htmlnew);				
			},
			error: function(data){
//				console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);

			}
		});
	},
	upline: function(){
			$("#footer").html("");
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				
		var mcaNumber = localStorage[storage+".mcaNumber"];
		var mcaName = localStorage[storage+".mcaName"];
		var refer = localStorage[storage+".refer"];
		var refer_name = localStorage[storage+".refer_name"];
		var DateJoin = localStorage[storage+".DateJoin"];
		var  myURL = "http://indianeagles.team/mobile/bv/"+mcaNumber;
		htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
		$('#result').html(htmlnew);				
		var  myURL = "http://indianeagles.team/mobile/upline/"+mcaNumber;
		$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
// console.log(data)		;
				var i = 1;
				var htmlnew = '<table class="w3-table-all">';
//				console.log(data);
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<th>';
				htmlnew = htmlnew + '#';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th>';
				htmlnew = htmlnew + 'Name<br>MCA #';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th>';
				htmlnew = htmlnew + 'DL';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th class="w3-small" style="text-align:right">';
				htmlnew = htmlnew + 'Date Join<br>Days';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '</tr>';
///////////////////////////////////////////////////////// BOSS
				htmlnew = htmlnew + '<tr class="w3-pale-red w3-border-blue w3-bottombar">';				
					htmlnew = htmlnew + '<td >';
					htmlnew = htmlnew + 0;
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '<td >';
					htmlnew = htmlnew + data['users']['selfline'][0]['Name'];
					htmlnew = htmlnew + '<br>'
					htmlnew = htmlnew + '<span class="oswald" id="Status'+data['users']['selfline'][0]['Number']+'"></span>'
					htmlnew = htmlnew + '<br>'
					htmlnew = htmlnew + data['users']['selfline'][0]['Number'];
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '<td class="w3-center">';
					htmlnew = htmlnew + data['users']['selfline'][0]['countChild'];
					htmlnew = htmlnew + '<br><a href="#" onclick=iet.toggle("x'+data['users']['selfline'][0]['Number']+'")><i class="fa fa-dashboard fa-2x"></i></a></td>';
					htmlnew = htmlnew + '<td class="w3-small" style="text-align:right">';
					htmlnew = htmlnew + data['users']['selfline'][0]['DateJoin'];
					htmlnew = htmlnew + '<br>';
					htmlnew = htmlnew + data['users']['selfline'][0]['Days']; 
					htmlnew = htmlnew + ' days</a><br>';
					if(data['users']['selfline'][0]['Mobile']!=null){
						htmlnew = htmlnew + '<a href="tel:+91'+data['users']['selfline'][0]['Mobile']+'"><i class="fa fa-phone">'+data['users']['selfline'][0]['Mobile']+'</i></a>';
					}
					htmlnew = htmlnew + '<tr id="x'+data['users']['selfline'][0]['Number']+'"  style="display:none" class="w3-border-blue w3-bottombar">';				
										
					htmlnew = htmlnew + '<td colspan="4">';
					///////////////////////////Table
						htmlnew = htmlnew + '<table class="w3-table-all w3-small">';
						htmlnew = htmlnew + '<tr>';				
						htmlnew = htmlnew + '<th>Period</th>';						
						htmlnew = htmlnew + '<th style="text-align:right">PBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">GBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">#</th>';
						htmlnew = htmlnew + '<th style="text-align:right">TGBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">CTGBV</th>';
						htmlnew = htmlnew + '</tr>';
						i = 0;
						var totalBV = 0;
						var totalGBV = 0;
						var DisplayTo = new Date();
						var DisplayFrom = new Date('2016-08-01');
						var months = DisplayTo.getMonth() - DisplayFrom.getMonth() + (12 * (DisplayTo.getFullYear() - DisplayFrom.getFullYear()));
						var gtotal = 0;
						var dataLables = [];
						var chartBV = [];
						var chartGBV = [];
						var chartBVcolor = [];
						var chartGBVcolor = [];
						for (i=0;i<=months;i++) {
							htmlnew = htmlnew + '<tr>';				
							var newmonth = new Date(new Date(DisplayFrom).setMonth(DisplayFrom.getMonth()+i));
							var yyyymm = newmonth.yyyymm();
							var yyyymmBV = 'BV'.yyyymm+'';
							dataLables[i] = yyyymm ;
							var total = 0;
							 
							htmlnew = htmlnew + '<td class="w3-tiny">'+yyyymm+'</td>';	
							element = data['users']['selfline'][0]['BVs'][i];
							for(var j in element){
								var BV = element[j];
								chartBV[i] = BV || 0;
								chartBVcolor[i] = 'rgba(54, 162, 235, 0.2)',
								htmlnew = htmlnew + '<td style="text-align:right">'+BV+'</td>';
								total = total + BV;
								totalBV = totalBV + BV;
							}
							element = data['users']['selfline'][0]['GBVs'][i];
							for(var j in element){
								var GBV = element[j];
								chartGBV[i] = GBV || 0;
								chartGBVcolor[i] = 'rgba(255, 99, 132, 0.2)',
								htmlnew = htmlnew + '<td style="text-align:right">'+GBV+'</td>';						
								total = total + GBV;
								totalGBV = totalGBV + GBV;
							}
							element = data['users']['selfline'][0]['ACs'][i];
							for(var j in element){
								var AC = element[j];
								htmlnew = htmlnew + '<td style="text-align:right">'+AC+'</td>';						
							}
														
							gtotal = gtotal + total ;
							htmlnew = htmlnew + '<td style="text-align:right">'+total+'</td>';
							htmlnew = htmlnew + '<td style="text-align:right">'+gtotal+'</td>';						
						}
							htmlnew = htmlnew + '</tr>';				

							htmlnew = htmlnew + '<tr style="font-weight:bold">';				
						htmlnew = htmlnew + '<td>Total';				
						htmlnew = htmlnew + '</td>';										
						htmlnew = htmlnew + '<td style="text-align:right">'+totalBV+'</td>';
						htmlnew = htmlnew + '<td style="text-align:right">'+totalGBV+'</td>';
						htmlnew = htmlnew + '<td>&nbsp;</td>';				
						htmlnew = htmlnew + '<td>&nbsp;</td>';				
						htmlnew = htmlnew + '<td style="text-align:right">'+gtotal+'</td>';						
						htmlnew = htmlnew + '</tr>';				
						
						
						htmlnew = htmlnew + '</table>';
						htmlnew = htmlnew + '<span class="w3-small"># = Active consultants</span>';
						var bosscanvas = 'canvas'+data['users']['selfline'][0]['Number'];
						htmlnew = htmlnew + '<canvas id="'+bosscanvas+'"></canvas>';
						
						htmlnew = htmlnew + '</td>';
						htmlnew = htmlnew + '</tr>';				
						htmlnew = htmlnew + '</table>';
						$('#result').html(htmlnew);
						
						
						var varStatus = '#Status' + data['users']['selfline'][0]['Number'];
						for(var key in data['users']['levels']){
							element = data['users']['levels'][key];
							if(gtotal > element['Min']){
								var Status = element['Status']+' - '+element['Level']+'%';
								break; 
							}else{
								var Status = "---";
							}
						}
						$(varStatus).html(Status);
						htmlnew = $('#result').html();
				////////////////end table

///////////////////////////////////////////////////////// BOSS	END				
				k = 0;
					var dchartBV = [];
					var dchartGBV = [];

				for (key in data['users']['downline']) {
					dchartBV[k] = [];
					dchartGBV[k] = [];
					var totalBV = 0;
					var totalGBV = 0;
					
					element = data['users']['downline'][key];
					htmlnew = htmlnew + '<table class="w3-table-all">';					
					htmlnew = htmlnew + '<tr class=" w3-border-blue w3-bottombar">';
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + (k+1);
					htmlnew = htmlnew + '</td>';
					if(element['countChild']!=0){
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + element['Name'];
					htmlnew = htmlnew + '<br>'
					htmlnew = htmlnew + '<span class="oswald" id="Status'+element['Number']+'" style="color:black">-</span>'
					htmlnew = htmlnew + '<br>'

					htmlnew = htmlnew + element['Number'];
					htmlnew = htmlnew + '</td>';
					}else{
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + element['Name'];
					htmlnew = htmlnew + '<br>'
					htmlnew = htmlnew + element['Number'];
					htmlnew = htmlnew + '</td>';						
					}
					htmlnew = htmlnew + '<td text-align="center">';
					htmlnew = htmlnew + element['countChild'];
					htmlnew = htmlnew + '<br><a href="#" onclick=iet.toggle("x'+data['users']['downline'][k]['Number']+'")><i class="fa fa-dashboard fa-2x"></i></a></td>';
					htmlnew = htmlnew + '<td style="text-align:right" class="w3-small"><a href="#" onclick="iet.downline('+ element['Number'] +','+mcaNumber+')">';
					htmlnew = htmlnew + element['DateJoin'];
					htmlnew = htmlnew + '<br>';
					htmlnew = htmlnew + element['Days']; 
					htmlnew = htmlnew + ' days</a><br>';
					if(data['users']['downline'][k]['Mobile']!=null){
					htmlnew = htmlnew + '<a href="tel:+91'+data['users']['downline'][k]['Mobile']+'"><i class="fa fa-phone">'+data['users']['downline'][k]['Mobile']+'</i></a>';
					}
					htmlnew = htmlnew + '</tr>';					
//////////////////////////////////////////////////////////////////////////// DOWNLINE START
					htmlnew = htmlnew + '<tr id="x'+data['users']['downline'][k]['Number']+'"  style="display:none" class="w3-border-blue w3-bottombar">';				
					htmlnew = htmlnew + '<td colspan="4">';
						htmlnew = htmlnew + '<table class="w3-table-all w3-small">';
						htmlnew = htmlnew + '<tr>';				
						htmlnew = htmlnew + '<th>Period</th>';						
						htmlnew = htmlnew + '<th style="text-align:right">PBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">GBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">#</th>';						
						htmlnew = htmlnew + '<th style="text-align:right">TGBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">CTGBV</th>';
						htmlnew = htmlnew + '</tr>';
						i = 0;
						var DisplayTo = new Date();
						var DisplayFrom = new Date('2016-08-01');
						var months = DisplayTo.getMonth() - DisplayFrom.getMonth() + (12 * (DisplayTo.getFullYear() - DisplayFrom.getFullYear()));
						var gtotal = 0;
						for (i=0;i<=months;i++) {
							htmlnew = htmlnew + '<tr>';				
							var newmonth = new Date(new Date(DisplayFrom).setMonth(DisplayFrom.getMonth()+i));
							var yyyymm = newmonth.yyyymm();
							var yyyymmBV = 'BV'.yyyymm+'';
							var total = 0;
							htmlnew = htmlnew + '<td class="w3-tiny">'+yyyymm+'</td>';	
							element = data['users']['downline'][k]['BVs'][i];
							for(var j in element){
								var BV = element[j];
								dchartBV[k][i] = BV || 0;
								chartBVcolor[i] = "'rgba(54, 162, 235, 0.2)'";
								htmlnew = htmlnew + '<td style="text-align:right">'+BV+'</td>';
								total = total + BV;
								totalBV = totalBV + BV;
							}
							
							element = data['users']['downline'][k]['GBVs'][i];
							for(var j in element){
								var GBV = element[j];
								dchartGBV[k][i] = GBV || 0;
								chartGBVcolor[i] = "'rgba(255, 99, 132, 0.2)'";
								htmlnew = htmlnew + '<td style="text-align:right">'+GBV+'</td>';						
								total = total + GBV;
								totalGBV = totalGBV + GBV;
							}
							element = data['users']['downline'][k]['ACs'][i];
							for(var j in element){
								var AC = element[j];
								htmlnew = htmlnew + '<td style="text-align:right">'+AC+'</td>';						
							}

							gtotal = gtotal + total ;
							htmlnew = htmlnew + '<td style="text-align:right">'+total+'</td>';
							htmlnew = htmlnew + '<td style="text-align:right">'+gtotal+'</td>';						
						}

						htmlnew = htmlnew + '</tr>';				
						
						htmlnew = htmlnew + '<tr style="font-weight:bold">';				
						htmlnew = htmlnew + '<td>Total';				
						htmlnew = htmlnew + '</td>';										
						htmlnew = htmlnew + '<td style="text-align:right">'+totalBV+'</td>';
						htmlnew = htmlnew + '<td style="text-align:right">'+totalGBV+'</td>';
						htmlnew = htmlnew + '<td>&nbsp;</td>';				
						htmlnew = htmlnew + '<td>&nbsp;</td>';				
						htmlnew = htmlnew + '<td style="text-align:right">'+gtotal+'</td>';						
						htmlnew = htmlnew + '</tr>';				
						
						htmlnew = htmlnew + '</table><span class="w3-small"># = Active consultants</span>';
						var downlinecanvas = 'canvas'+data['users']['downline'][k]['Number'];
						
					var varStatus = '#Status' + data['users']['downline'][k]['Number'];
						for(var key in data['users']['levels']){
							element = data['users']['levels'][key];
							if(gtotal > element['Min']){
								var Status = element['Status']+' - '+element['Level']+'%';
								break; 
							}else{
								var Status = "---";
							}
						}						
						
						htmlnew = htmlnew + '<canvas id="'+downlinecanvas+'"></canvas>';
					htmlnew = htmlnew + '</td>';
					
					htmlnew = htmlnew + '</tr>';				
					htmlnew = htmlnew + '</table>';
				$('#result').html(htmlnew);

					$(varStatus).html(Status);
				htmlnew = $('#result').html();
			
////////////////////////////////////////////////////////////////////////////	DOWNLINE END
					k = k +1;
				}
					htmlnew = htmlnew + '<table class="w3-table-all">';					
				htmlnew = htmlnew + '<tr class="w3-gray">';
				htmlnew = htmlnew + '<th colspan="2">';
				htmlnew = htmlnew + 'Total';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th class="w3-right">';
				htmlnew = htmlnew + data['users']['count'];
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th>';
				htmlnew = htmlnew + '';
				htmlnew = htmlnew + '</th>';
				
				htmlnew = htmlnew + '</tr>';				
				htmlnew = htmlnew + '</table><br><br>';
			
			$('#result').html(htmlnew);
				var dataLables = [];
				for (i=0;i<=months;i++) {
					var newmonth = new Date(new Date(DisplayFrom).setMonth(DisplayFrom.getMonth()+i));
					var yyyymm = newmonth.yyyymm();
					dataLables[i] = "'"+yyyymm+"'" ;
				}
			
			var script = "<script>";			
				script = script + "setTimeout(function(){";
				script = script + "var ctx = document.getElementById('"+bosscanvas+"');";
				script = script + "var canvas = new Chart(ctx, {";
					script = script + "type: 'bar',";
					script = script + "data: {";
					script = script + "			labels: ["+dataLables+"],";
						script = script + "datasets: [{";
							script = script + "label: 'GBV',";
							script = script + "data: ["+chartGBV+"],";
							script = script + "backgroundColor: [";
							for (i=0;i<=months;i++) {
								script = script + "				'rgba(54, 162, 235, 0.2)',";
							}
						script = script + "				]" ;
						script = script + "},{";
						script = script + "label: 'PBV',";
						script = script + "data: ["+chartBV+"],";
						script = script + "				backgroundColor: [";
						for (i=0;i<=months;i++) {
							script = script + "				'rgba(255, 99, 132, 0.2)',";
						}
						script = script + "				]" ;
						script = script + "}]";
					script = script + "},";
					script = script + "options: {";
						script = script + "scales: {";
							script = script + "xAxes: [{";
								script = script + "stacked: true,";
							script = script + "}],";
							script = script + "yAxes: [{";
								script = script + "stacked: true";
							script = script + "}]";
						script = script + "}";
					script = script + "}";
				script = script + "});";
			script = script + "}, 0);";
			script = script + "</script>";
//			$("#script").html(script);

			script = script + "<script>";
				k = 0;
				var DisplayTo = new Date();
				var DisplayFrom = new Date('2016-08-01');
				var months = DisplayTo.getMonth() - DisplayFrom.getMonth() + (12 * (DisplayTo.getFullYear() - DisplayFrom.getFullYear()));
//				console.log(dataLables);
	for (key in data['users']['downline']) {
		var downlinecanvas = 'canvas'+data['users']['downline'][k]['Number'];
			script = script + "setTimeout(function(){";
			script = script + "var ctx = document.getElementById('"+downlinecanvas+"');";
			script = script + "	var canvas = new Chart(ctx, {";
			script = script + "		type: 'bar',";
			script = script + "		data: {";
			script = script + "			labels: ["+dataLables+"],";
			script = script + "			datasets: [{";
			script = script + "				label: 'GBV',";
			script = script + "				data: ["+dchartGBV[k]+"],";
			script = script + "				backgroundColor: [";
									for (i=0;i<=months;i++) {
			script = script + "				'rgba(54, 162, 235, 0.2)',";
									}
			script = script + "				]" ;
			script = script + "			},{";
			script = script + "				label: 'PBV',";
			script = script + "				data: ["+dchartBV[k]+"],";
			script = script + "				backgroundColor: [";
									for (i=0;i<=months;i++) {
			script = script + "				'rgba(255, 99, 132, 0.2)',";
									}
			script = script + "				]" ;

			script = script + "			}]";
			script = script + "		},";
			script = script + "		options: {";
			script = script + "			scales: {";
			script = script + "				xAxes: [{";
			script = script + "					stacked: true,";
			script = script + "				}],";
			script = script + "				yAxes: [{";
			script = script + "					stacked: true";
			script = script + "				}]";
			script = script + "			}";
			script = script + "		}";
			script = script + "	});";
			script = script + "}, 0);";
			k = k + 1;
	}
	script = script + "</script>";
	$("#script").html(script);
	var meMCA = data['users']['selfline'][0]['Name']+" "+data['users']['selfline'][0]['Number'];
	$("#meMCA").html(meMCA);

			},
			error: function(data){}
		});
		
	},
	consultants:function(){
			$("#footer").html("");
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				

		var mcaNumber = localStorage[storage+".mcaNumber"];
		var mcaName = localStorage[storage+".mcaName"];
		var refer = localStorage[storage+".refer"];
		var refer_name = localStorage[storage+".refer_name"];
		var DateJoin = localStorage[storage+".DateJoin"];
		var  myURL = "http://indianeagles.team/mobile/bv/"+mcaNumber;
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				
		
		$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
				
				var i = 1;
				var htmlnew = '<table class="w3-table-all">';
//				console.log(data);
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<th width="5%">';
				htmlnew = htmlnew + '#';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th width="50%">';
				htmlnew = htmlnew + 'Name<br>MCA #';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th width="10%">';
				htmlnew = htmlnew + 'DL';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th class="w3-small" style="text-align:right">';
				htmlnew = htmlnew + 'Date Join<br>Days';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '</tr>';
///////////////////////////////////////////////////////// BOSS
				htmlnew = htmlnew + '<tr class="w3-pale-red w3-border-blue w3-bottombar">';				
					htmlnew = htmlnew + '<td >';
					htmlnew = htmlnew + 0;
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '<td >';
					htmlnew = htmlnew + data['users']['selfline'][0]['Name'];
					htmlnew = htmlnew + '<br>'
					htmlnew = htmlnew + '<span class="oswald" id="Status'+data['users']['selfline'][0]['Number']+'"></span>'
					htmlnew = htmlnew + '<br>'
					htmlnew = htmlnew + data['users']['selfline'][0]['Number'];
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '<td class="w3-center">';
					htmlnew = htmlnew + data['users']['selfline'][0]['countChild'];
					htmlnew = htmlnew + '<br><a href="#" onclick=iet.toggle("x'+data['users']['selfline'][0]['Number']+'")><i class="fa fa-dashboard fa-2x"></i></a></td>';
					htmlnew = htmlnew + '<td class="w3-small" style="text-align:right">';
					htmlnew = htmlnew + data['users']['selfline'][0]['DateJoin'];
					htmlnew = htmlnew + '<br>';
					htmlnew = htmlnew + data['users']['selfline'][0]['Days']; 
					htmlnew = htmlnew + ' days</a><br>';
					if(data['users']['selfline'][0]['Mobile']!=null){
					htmlnew = htmlnew + '<a href="tel:+91'+data['users']['selfline'][0]['Mobile']+'"><i class="fa fa-phone">'+data['users']['selfline'][0]['Mobile']+'</i></a>';
					}
					htmlnew = htmlnew + '</td></tr>';				
					htmlnew = htmlnew + '<tr id="x'+data['users']['selfline'][0]['Number']+'"  style="display:none" class="w3-border-blue w3-bottombar">';				
										
					htmlnew = htmlnew + '<td colspan="4">';
					///////////////////////////Table
						htmlnew = htmlnew + '<table class="w3-table-all w3-small">';
						htmlnew = htmlnew + '<tr>';				
						htmlnew = htmlnew + '<th>Period</th>';						
						htmlnew = htmlnew + '<th style="text-align:right">PBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">GBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">#</th>';
						htmlnew = htmlnew + '<th style="text-align:right">TGBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">CTGBV</th>';
						htmlnew = htmlnew + '</tr>';
						i = 0;
						var DisplayTo = new Date();
						var DisplayFrom = new Date('2016-08-01');
						var months = DisplayTo.getMonth() - DisplayFrom.getMonth() + (12 * (DisplayTo.getFullYear() - DisplayFrom.getFullYear()));
						var gtotal = 0;
						var totalBV = 0;
						var totalGBV = 0;
						
						var dataLables = [];
						var chartBV = [];
						var chartGBV = [];
						var chartBVcolor = [];
						var chartGBVcolor = [];
						for (i=0;i<=months;i++) {
							htmlnew = htmlnew + '<tr>';				
							var newmonth = new Date(new Date(DisplayFrom).setMonth(DisplayFrom.getMonth()+i));
							var yyyymm = newmonth.yyyymm();
							var yyyymmBV = 'BV'.yyyymm+'';
							dataLables[i] = yyyymm ;
							var total = 0;
							htmlnew = htmlnew + '<td class="w3-tiny">'+yyyymm+'</td>';	
							element = data['users']['selfline'][0]['BVs'][i];
							for(var j in element){
								var BV = element[j];
								chartBV[i] = BV || 0;
								chartBVcolor[i] = 'rgba(54, 162, 235, 0.2)',
								htmlnew = htmlnew + '<td style="text-align:right">'+BV+'</td>';
								total = total + BV;
								totalBV = totalBV + BV;
							}
							element = data['users']['selfline'][0]['GBVs'][i];
							for(var j in element){
								var GBV = element[j];
								chartGBV[i] = GBV || 0;
								chartGBVcolor[i] = 'rgba(255, 99, 132, 0.2)',
								htmlnew = htmlnew + '<td style="text-align:right">'+GBV+'</td>';						
								total = total + GBV;
								totalGBV = totalGBV + GBV;
							}
							element = data['users']['selfline'][0]['ACs'][i];
							for(var j in element){
								var AC = element[j];
								htmlnew = htmlnew + '<td style="text-align:right">'+AC+'</td>';						
							}
														
							gtotal = gtotal + total ;
							htmlnew = htmlnew + '<td style="text-align:right">'+total+'</td>';
							htmlnew = htmlnew + '<td style="text-align:right">'+gtotal+'</td>';						
						}
							htmlnew = htmlnew + '</tr>';				
						htmlnew = htmlnew + '<tr style="font-weight:bold">';				
						htmlnew = htmlnew + '<td>Total';				
						htmlnew = htmlnew + '</td>';										
						htmlnew = htmlnew + '<td style="text-align:right">'+totalBV+'</td>';
						htmlnew = htmlnew + '<td style="text-align:right">'+totalGBV+'</td>';
						htmlnew = htmlnew + '<td>&nbsp;</td>';				
						htmlnew = htmlnew + '<td>&nbsp;</td>';				
						htmlnew = htmlnew + '<td style="text-align:right">'+gtotal+'</td>';						
						htmlnew = htmlnew + '</tr>';				
						htmlnew = htmlnew + '</table>';
						htmlnew = htmlnew + '<span class="w3-small"># = Active consultants</span>';
						var bosscanvas = 'canvas'+data['users']['selfline'][0]['Number'];
						htmlnew = htmlnew + '<canvas id="'+bosscanvas+'"></canvas>';
						
						htmlnew = htmlnew + '</td>';
						htmlnew = htmlnew + '</tr>';				
						htmlnew = htmlnew + '</table>';
						$('#result').html(htmlnew);
						
						
						var varStatus = '#Status' + data['users']['selfline'][0]['Number'];
						for(var key in data['users']['levels']){
							element = data['users']['levels'][key];
							if(gtotal > element['Min']){
								var Status = element['Status']+' - '+element['Level']+'%';
								break; 
							}else{
								var Status = "---";
							}
						}
						$(varStatus).html(Status);
						htmlnew = $('#result').html();
				////////////////end table

///////////////////////////////////////////////////////// BOSS	END				
				k = 0;
					var dchartBV = [];
					var dchartGBV = [];

				for (key in data['users']['downline']) {
					dchartBV[k] = [];
					dchartGBV[k] = [];
					element = data['users']['downline'][key];
					htmlnew = htmlnew + '<table class="w3-table-all">';					
					htmlnew = htmlnew + '<tr class=" w3-border-blue w3-bottombar">';
					htmlnew = htmlnew + '<td width="5%">';
					htmlnew = htmlnew + (k+1);
					htmlnew = htmlnew + '</td>';
					if(element['countChild']!=0){
					htmlnew = htmlnew + '<td width="50%"><a href="#" onclick="iet.downline('+ element['Number'] +','+mcaNumber+')"><strong style="color:blue">';
					htmlnew = htmlnew + element['Name'];
					htmlnew = htmlnew + '<br>'
					htmlnew = htmlnew + '<span class="oswald" id="Status'+element['Number']+'" style="color:black">-</span>'
					htmlnew = htmlnew + '<br>'

					htmlnew = htmlnew + element['Number'];
					htmlnew = htmlnew + '</strong></a></td>';
					}else{
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + element['Name'];
					htmlnew = htmlnew + '<br>'
					htmlnew = htmlnew + element['Number'];
					htmlnew = htmlnew + '</td>';						
					}
					htmlnew = htmlnew + '<td text-align="center" width="10%">';
					htmlnew = htmlnew + element['countChild'];
					htmlnew = htmlnew + '<br><a href="#" onclick=iet.toggle("x'+data['users']['downline'][k]['Number']+'")><i class="fa fa-dashboard fa-2x"></i></a></td>';
					htmlnew = htmlnew + '<td style="text-align:right" class="w3-small"><a href="#" onclick="iet.downline('+ element['Number'] +','+mcaNumber+')">';
					htmlnew = htmlnew + element['DateJoin'];
					htmlnew = htmlnew + '<br>';
					htmlnew = htmlnew + element['Days']; 
					htmlnew = htmlnew + ' days</a><br>';
					if(data['users']['downline'][k]['Mobile']!=null){
					htmlnew = htmlnew + '<a href="tel:+91'+data['users']['downline'][k]['Mobile']+'"><i class="fa fa-phone">'+data['users']['downline'][k]['Mobile']+'</i></a>';
					}
					htmlnew = htmlnew + '</td></tr>';					
//////////////////////////////////////////////////////////////////////////// DOWNLINE START
						var totalBV = 0;
						var totalGBV = 0;

					htmlnew = htmlnew + '<tr id="x'+data['users']['downline'][k]['Number']+'"  style="display:none" class="w3-border-blue w3-bottombar">';				
					htmlnew = htmlnew + '<td colspan="4">';
						htmlnew = htmlnew + '<table class="w3-table-all w3-small">';
						htmlnew = htmlnew + '<tr>';				
						htmlnew = htmlnew + '<th>Period</th>';						
						htmlnew = htmlnew + '<th style="text-align:right">PBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">GBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">#</th>';						
						htmlnew = htmlnew + '<th style="text-align:right">TGBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">CTGBV</th>';
						htmlnew = htmlnew + '</tr>';
						i = 0;
						var DisplayTo = new Date();
						var DisplayFrom = new Date('2016-08-01');
						var months = DisplayTo.getMonth() - DisplayFrom.getMonth() + (12 * (DisplayTo.getFullYear() - DisplayFrom.getFullYear()));
						var gtotal = 0;
						for (i=0;i<=months;i++) {
							htmlnew = htmlnew + '<tr>';				
							var newmonth = new Date(new Date(DisplayFrom).setMonth(DisplayFrom.getMonth()+i));
							var yyyymm = newmonth.yyyymm();
							var yyyymmBV = 'BV'.yyyymm+'';
							var total = 0;
							htmlnew = htmlnew + '<td class="w3-tiny">'+yyyymm+'</td>';	
							element = data['users']['downline'][k]['BVs'][i];
							for(var j in element){
								var BV = element[j];
								dchartBV[k][i] = BV || 0;
								chartBVcolor[i] = "'rgba(54, 162, 235, 0.2)'";
								htmlnew = htmlnew + '<td style="text-align:right">'+BV+'</td>';
								total = total + BV;
								totalBV = totalBV + BV;
							}
							
							element = data['users']['downline'][k]['GBVs'][i];
							for(var j in element){
								var GBV = element[j];
								dchartGBV[k][i] = GBV || 0;
								chartGBVcolor[i] = "'rgba(255, 99, 132, 0.2)'";
								htmlnew = htmlnew + '<td style="text-align:right">'+GBV+'</td>';						
								total = total + GBV;
								totalGBV = totalGBV + GBV;
							}
							element = data['users']['downline'][k]['ACs'][i];
							for(var j in element){
								var AC = element[j];
								htmlnew = htmlnew + '<td style="text-align:right">'+AC+'</td>';						
							}

							gtotal = gtotal + total ;
							htmlnew = htmlnew + '<td style="text-align:right">'+total+'</td>';
							htmlnew = htmlnew + '<td style="text-align:right">'+gtotal+'</td>';						
						}

						htmlnew = htmlnew + '</tr>';				
						htmlnew = htmlnew + '<tr style="font-weight:bold">';				
						htmlnew = htmlnew + '<td>Total';				
						htmlnew = htmlnew + '</td>';										
						htmlnew = htmlnew + '<td style="text-align:right">'+totalBV+'</td>';
						htmlnew = htmlnew + '<td style="text-align:right">'+totalGBV+'</td>';
						htmlnew = htmlnew + '<td>&nbsp;</td>';				
						htmlnew = htmlnew + '<td>&nbsp;</td>';				
						htmlnew = htmlnew + '<td style="text-align:right">'+gtotal+'</td>';						
						htmlnew = htmlnew + '</tr>';				
						
						htmlnew = htmlnew + '</table><span class="w3-small"># = Active consultants</span>';
						var downlinecanvas = 'canvas'+data['users']['downline'][k]['Number'];
						
					var varStatus = '#Status' + data['users']['downline'][k]['Number'];
						for(var key in data['users']['levels']){
							element = data['users']['levels'][key];
							if(gtotal > element['Min']){
								var Status = element['Status']+' - '+element['Level']+'%';
								break; 
							}else{
								var Status = "---";
							}
						}						
						
						htmlnew = htmlnew + '<canvas id="'+downlinecanvas+'"></canvas>';
					htmlnew = htmlnew + '</td>';
					
					htmlnew = htmlnew + '</tr>';				
					htmlnew = htmlnew + '</table>';
				$('#result').html(htmlnew);

					$(varStatus).html(Status);
				htmlnew = $('#result').html();
			
////////////////////////////////////////////////////////////////////////////	DOWNLINE END
					k = k +1;
				}
					htmlnew = htmlnew + '<table class="w3-table-all">';					
				htmlnew = htmlnew + '<tr class="w3-gray">';
				htmlnew = htmlnew + '<th colspan="2">';
				htmlnew = htmlnew + 'Total';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th class="w3-right">';
				htmlnew = htmlnew + data['users']['count'];
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th>';
				htmlnew = htmlnew + '';
				htmlnew = htmlnew + '</th>';
				
				htmlnew = htmlnew + '</tr>';				
				htmlnew = htmlnew + '</table><br><br>';
			var myName = mcaName + " - "+ mcaNumber;
			$('#meMCA').html(myName);				
			
			$('#result').html(htmlnew);
				var dataLables = [];
				for (i=0;i<=months;i++) {
					var newmonth = new Date(new Date(DisplayFrom).setMonth(DisplayFrom.getMonth()+i));
					var yyyymm = newmonth.yyyymm();
					dataLables[i] = "'"+yyyymm+"'" ;
				}
			
			var script = "<script>";			
				script = script + "setTimeout(function(){";
				script = script + "var ctx = document.getElementById('"+bosscanvas+"');";
				script = script + "var canvas = new Chart(ctx, {";
					script = script + "type: 'bar',";
					script = script + "data: {";
					script = script + "			labels: ["+dataLables+"],";
						script = script + "datasets: [{";
							script = script + "label: 'GBV',";
							script = script + "data: ["+chartGBV+"],";
							script = script + "backgroundColor: [";
							for (i=0;i<=months;i++) {
								script = script + "				'rgba(54, 162, 235, 0.2)',";
							}
						script = script + "				]" ;
						script = script + "},{";
						script = script + "label: 'PBV',";
						script = script + "data: ["+chartBV+"],";
						script = script + "				backgroundColor: [";
						for (i=0;i<=months;i++) {
							script = script + "				'rgba(255, 99, 132, 0.2)',";
						}
						script = script + "				]" ;
						script = script + "}]";
					script = script + "},";
					script = script + "options: {";
						script = script + "scales: {";
							script = script + "xAxes: [{";
								script = script + "stacked: true,";
							script = script + "}],";
							script = script + "yAxes: [{";
								script = script + "stacked: true";
							script = script + "}]";
						script = script + "}";
					script = script + "}";
				script = script + "});";
			script = script + "}, 0);";
			script = script + "</script>";
//			$("#script").html(script);

			script = script + "<script>";
				k = 0;
				var DisplayTo = new Date();
				var DisplayFrom = new Date('2016-08-01');
				var months = DisplayTo.getMonth() - DisplayFrom.getMonth() + (12 * (DisplayTo.getFullYear() - DisplayFrom.getFullYear()));
//				console.log(dataLables);
	for (key in data['users']['downline']) {
		var downlinecanvas = 'canvas'+data['users']['downline'][k]['Number'];
			script = script + "setTimeout(function(){";
			script = script + "var ctx = document.getElementById('"+downlinecanvas+"');";
			script = script + "	var canvas = new Chart(ctx, {";
			script = script + "		type: 'bar',";
			script = script + "		data: {";
			script = script + "			labels: ["+dataLables+"],";
			script = script + "			datasets: [{";
			script = script + "				label: 'GBV',";
			script = script + "				data: ["+dchartGBV[k]+"],";
			script = script + "				backgroundColor: [";
									for (i=0;i<=months;i++) {
			script = script + "				'rgba(54, 162, 235, 0.2)',";
									}
			script = script + "				]" ;
			script = script + "			},{";
			script = script + "				label: 'PBV',";
			script = script + "				data: ["+dchartBV[k]+"],";
			script = script + "				backgroundColor: [";
									for (i=0;i<=months;i++) {
			script = script + "				'rgba(255, 99, 132, 0.2)',";
									}
			script = script + "				]" ;

			script = script + "			}]";
			script = script + "		},";
			script = script + "		options: {";
			script = script + "			scales: {";
			script = script + "				xAxes: [{";
			script = script + "					stacked: true,";
			script = script + "				}],";
			script = script + "				yAxes: [{";
			script = script + "					stacked: true";
			script = script + "				}]";
			script = script + "			}";
			script = script + "		}";
			script = script + "	});";
			script = script + "}, 0);";
			k = k + 1;
	}
	script = script + "</script>";
	$("#script").html(script);
		},
			error: function(data){
//				console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];
//				console.log(htmlnew);
				$('#result').html(htmlnew);
			}
		});
		
	},
	downline: function(mcaNumber,upline){
		htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
		$('#result').html(htmlnew);				

		var  myURL = "http://indianeagles.team/mobile/bv/"+mcaNumber+'/'+upline;
		htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
		$('#result').html(htmlnew);				
		
		$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
//				console.log(data);
				var i = 1;
						var totalBV = 0;
						var totalGBV = 0;

				var htmlnew = '<table class="w3-table-all">';
//				console.log(data);
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<th>';
				htmlnew = htmlnew + '#';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th>';
				htmlnew = htmlnew + 'Name<br>MCA #';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th>';
				htmlnew = htmlnew + 'DL';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th class="w3-small" style="text-align:right">';
				htmlnew = htmlnew + 'Date Join<br>Days';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '</tr>';
///////////////////////////////////////////////////////// BOSS
				htmlnew = htmlnew + '<tr class="w3-pale-red w3-border-blue w3-bottombar">';				
					htmlnew = htmlnew + '<td >';
					htmlnew = htmlnew + 0;
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '<td >';
					htmlnew = htmlnew + data['users']['selfline'][0]['Name'];
					htmlnew = htmlnew + '<br>'
					htmlnew = htmlnew + '<span class="oswald" id="Status'+data['users']['selfline'][0]['Number']+'"></span>'
					htmlnew = htmlnew + '<br>'
					htmlnew = htmlnew + data['users']['selfline'][0]['Number'];
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '<td class="w3-center">';
					htmlnew = htmlnew + data['users']['selfline'][0]['countChild'];
					htmlnew = htmlnew + '<br><a href="#" onclick=iet.toggle("x'+data['users']['selfline'][0]['Number']+'")><i class="fa fa-dashboard fa-2x"></i></a></td>';
					htmlnew = htmlnew + '<td class="w3-small" style="text-align:right">';
					htmlnew = htmlnew + data['users']['selfline'][0]['DateJoin'];
					htmlnew = htmlnew + '<br>';
					htmlnew = htmlnew + data['users']['selfline'][0]['Days']; 
					htmlnew = htmlnew + ' days</a><br>';
					if(data['users']['selfline'][0]['Mobile']!=null){
						htmlnew = htmlnew + '<a href="tel:+91'+data['users']['selfline'][0]['Mobile']+'"><i class="fa fa-phone">'+data['users']['selfline'][0]['Mobile']+'</i></a>';
					}
					htmlnew = htmlnew + '<tr id="x'+data['users']['selfline'][0]['Number']+'"  style="display:none" class="w3-border-blue w3-bottombar">';				
										
					htmlnew = htmlnew + '<td colspan="4">';
					///////////////////////////Table
						htmlnew = htmlnew + '<table class="w3-table-all w3-small">';
						htmlnew = htmlnew + '<tr>';				
						htmlnew = htmlnew + '<th>Period</th>';						
						htmlnew = htmlnew + '<th style="text-align:right">PBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">GBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">#</th>';
						htmlnew = htmlnew + '<th style="text-align:right">TGBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">CTGBV</th>';
						htmlnew = htmlnew + '</tr>';
						i = 0;
						var DisplayTo = new Date();
						var DisplayFrom = new Date('2016-08-01');
						var months = DisplayTo.getMonth() - DisplayFrom.getMonth() + (12 * (DisplayTo.getFullYear() - DisplayFrom.getFullYear()));
						var gtotal = 0;
						var dataLables = [];
						var chartBV = [];
						var chartGBV = [];
						var chartBVcolor = [];
						var chartGBVcolor = [];
						for (i=0;i<=months;i++) {
							htmlnew = htmlnew + '<tr>';				
							var newmonth = new Date(new Date(DisplayFrom).setMonth(DisplayFrom.getMonth()+i));
							var yyyymm = newmonth.yyyymm();
							var yyyymmBV = 'BV'.yyyymm+'';
							dataLables[i] = yyyymm ;
							var total = 0;
							 
							htmlnew = htmlnew + '<td class="w3-tiny">'+yyyymm+'</td>';	
							element = data['users']['selfline'][0]['BVs'][i];
							for(var j in element){
								var BV = element[j];
								chartBV[i] = BV || 0;
								chartBVcolor[i] = 'rgba(54, 162, 235, 0.2)',
								htmlnew = htmlnew + '<td style="text-align:right">'+BV+'</td>';
								total = total + BV;
								totalBV = totalBV + BV;
							}
							element = data['users']['selfline'][0]['GBVs'][i];
							for(var j in element){
								var GBV = element[j];
								chartGBV[i] = GBV || 0;
								chartGBVcolor[i] = 'rgba(255, 99, 132, 0.2)',
								htmlnew = htmlnew + '<td style="text-align:right">'+GBV+'</td>';						
								total = total + GBV;
								totalGBV = totalGBV + GBV;
							}
							element = data['users']['selfline'][0]['ACs'][i];
							for(var j in element){
								var AC = element[j];
								htmlnew = htmlnew + '<td style="text-align:right">'+AC+'</td>';						
							}
														
							gtotal = gtotal + total ;
							htmlnew = htmlnew + '<td style="text-align:right">'+total+'</td>';
							htmlnew = htmlnew + '<td style="text-align:right">'+gtotal+'</td>';						
						}
							htmlnew = htmlnew + '</tr>';				
						
						htmlnew = htmlnew + '<tr style="font-weight:bold">';				
						htmlnew = htmlnew + '<td>Total';				
						htmlnew = htmlnew + '</td>';										
						htmlnew = htmlnew + '<td style="text-align:right">'+totalBV+'</td>';
						htmlnew = htmlnew + '<td style="text-align:right">'+totalGBV+'</td>';
						htmlnew = htmlnew + '<td>&nbsp;</td>';				
						htmlnew = htmlnew + '<td>&nbsp;</td>';				
						htmlnew = htmlnew + '<td style="text-align:right">'+gtotal+'</td>';						
						htmlnew = htmlnew + '</tr>';				
						
						htmlnew = htmlnew + '</table>';
						htmlnew = htmlnew + '<span class="w3-small"># = Active consultants</span>';
						var bosscanvas = 'canvas'+data['users']['selfline'][0]['Number'];
						htmlnew = htmlnew + '<canvas id="'+bosscanvas+'"></canvas>';
						
						htmlnew = htmlnew + '</td>';
						htmlnew = htmlnew + '</tr>';				
						htmlnew = htmlnew + '</table>';
						$('#result').html(htmlnew);
						
						
						var varStatus = '#Status' + data['users']['selfline'][0]['Number'];
						for(var key in data['users']['levels']){
							element = data['users']['levels'][key];
							if(gtotal > element['Min']){
								var Status = element['Status']+' - '+element['Level']+'%';
								break; 
							}else{
								var Status = "---";
							}
						}
						$(varStatus).html(Status);
						htmlnew = $('#result').html();
				////////////////end table

///////////////////////////////////////////////////////// BOSS	END				
				k = 0;
					var dchartBV = [];
					var dchartGBV = [];

				for (key in data['users']['downline']) {
						var totalBV = 0;
						var totalGBV = 0;

					dchartBV[k] = [];
					dchartGBV[k] = [];
					element = data['users']['downline'][key];
					htmlnew = htmlnew + '<table class="w3-table-all">';					
					htmlnew = htmlnew + '<tr class=" w3-border-blue w3-bottombar">';
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + (k+1);
					htmlnew = htmlnew + '</td>';
					if(element['countChild']!=0){
					htmlnew = htmlnew + '<td><a href="#" onclick="iet.downline('+ element['Number'] +','+mcaNumber+')"><strong style="color:blue">';
					htmlnew = htmlnew + element['Name'];
					htmlnew = htmlnew + '<br>'
					htmlnew = htmlnew + '<span class="oswald" id="Status'+element['Number']+'" style="color:black">-</span>'
					htmlnew = htmlnew + '<br>'

					htmlnew = htmlnew + element['Number'];
					htmlnew = htmlnew + '</strong></a></td>';
					}else{
					htmlnew = htmlnew + '<td>';
					htmlnew = htmlnew + element['Name'];
					htmlnew = htmlnew + '<br>'
					htmlnew = htmlnew + element['Number'];
					htmlnew = htmlnew + '</td>';						
					}
					htmlnew = htmlnew + '<td text-align="center">';
					htmlnew = htmlnew + element['countChild'];
					htmlnew = htmlnew + '<br><a href="#" onclick=iet.toggle("x'+data['users']['downline'][k]['Number']+'")><i class="fa fa-dashboard fa-2x"></i></a></td>';
					htmlnew = htmlnew + '<td style="text-align:right" class="w3-small"><a href="#" onclick="iet.downline('+ element['Number'] +','+mcaNumber+')">';
					htmlnew = htmlnew + element['DateJoin'];
					htmlnew = htmlnew + '<br>';
					htmlnew = htmlnew + element['Days']; 
					htmlnew = htmlnew + ' days</a><br>';
					if(data['users']['downline'][k]['Mobile']!=null){
					htmlnew = htmlnew + '<a href="tel:+91'+data['users']['downline'][k]['Mobile']+'"><i class="fa fa-phone">'+data['users']['downline'][k]['Mobile']+'</i></a>';
					}
					htmlnew = htmlnew + '</tr>';					
//////////////////////////////////////////////////////////////////////////// DOWNLINE START
					htmlnew = htmlnew + '<tr id="x'+data['users']['downline'][k]['Number']+'"  style="display:none" class="w3-border-blue w3-bottombar">';				
					htmlnew = htmlnew + '<td colspan="4">';
						htmlnew = htmlnew + '<table class="w3-table-all w3-small">';
						htmlnew = htmlnew + '<tr>';				
						htmlnew = htmlnew + '<th>Period</th>';						
						htmlnew = htmlnew + '<th style="text-align:right">PBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">GBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">#</th>';						
						htmlnew = htmlnew + '<th style="text-align:right">TGBV</th>';
						htmlnew = htmlnew + '<th style="text-align:right">CTGBV</th>';
						htmlnew = htmlnew + '</tr>';
						i = 0;
						var DisplayTo = new Date();
						var DisplayFrom = new Date('2016-08-01');
						var months = DisplayTo.getMonth() - DisplayFrom.getMonth() + (12 * (DisplayTo.getFullYear() - DisplayFrom.getFullYear()));
						var gtotal = 0;
						for (i=0;i<=months;i++) {
							htmlnew = htmlnew + '<tr>';				
							var newmonth = new Date(new Date(DisplayFrom).setMonth(DisplayFrom.getMonth()+i));
							var yyyymm = newmonth.yyyymm();
							var yyyymmBV = 'BV'.yyyymm+'';
							var total = 0;
							htmlnew = htmlnew + '<td class="w3-tiny">'+yyyymm+'</td>';	
							element = data['users']['downline'][k]['BVs'][i];
							for(var j in element){
								var BV = element[j];
								dchartBV[k][i] = BV || 0;
								chartBVcolor[i] = "'rgba(54, 162, 235, 0.2)'";
								htmlnew = htmlnew + '<td style="text-align:right">'+BV+'</td>';
								total = total + BV;
								totalBV = totalBV + BV;
							}
							
							element = data['users']['downline'][k]['GBVs'][i];
							for(var j in element){
								var GBV = element[j];
								dchartGBV[k][i] = GBV || 0;
								chartGBVcolor[i] = "'rgba(255, 99, 132, 0.2)'";
								htmlnew = htmlnew + '<td style="text-align:right">'+GBV+'</td>';						
								total = total + GBV;
								totalGBV = totalGBV + GBV;
							}
							element = data['users']['downline'][k]['ACs'][i];
							for(var j in element){
								var AC = element[j];
								htmlnew = htmlnew + '<td style="text-align:right">'+AC+'</td>';						
							}

							gtotal = gtotal + total ;
							htmlnew = htmlnew + '<td style="text-align:right">'+total+'</td>';
							htmlnew = htmlnew + '<td style="text-align:right">'+gtotal+'</td>';						
						}

						htmlnew = htmlnew + '</tr>';				
						htmlnew = htmlnew + '<tr style="font-weight:bold">';				
						htmlnew = htmlnew + '<td>Total';				
						htmlnew = htmlnew + '</td>';										
						htmlnew = htmlnew + '<td style="text-align:right">'+totalBV+'</td>';
						htmlnew = htmlnew + '<td style="text-align:right">'+totalGBV+'</td>';
						htmlnew = htmlnew + '<td>&nbsp;</td>';				
						htmlnew = htmlnew + '<td>&nbsp;</td>';				
						htmlnew = htmlnew + '<td style="text-align:right">'+gtotal+'</td>';						
						htmlnew = htmlnew + '</tr>';				


						htmlnew = htmlnew + '</table><span class="w3-small"># = Active consultants</span>';
						var downlinecanvas = 'canvas'+data['users']['downline'][k]['Number'];
						
					var varStatus = '#Status' + data['users']['downline'][k]['Number'];
						for(var key in data['users']['levels']){
							element = data['users']['levels'][key];
							if(gtotal > element['Min']){
								var Status = element['Status']+' - '+element['Level']+'%';
								break; 
							}else{
								var Status = "---";
							}
						}						
						
						htmlnew = htmlnew + '<canvas id="'+downlinecanvas+'"></canvas>';
					htmlnew = htmlnew + '</td>';
					
					htmlnew = htmlnew + '</tr>';				
					htmlnew = htmlnew + '</table>';
				$('#result').html(htmlnew);

					$(varStatus).html(Status);
				htmlnew = $('#result').html();
			
////////////////////////////////////////////////////////////////////////////	DOWNLINE END
					k = k +1;
				}
					htmlnew = htmlnew + '<table class="w3-table-all">';					
				htmlnew = htmlnew + '<tr class="w3-gray">';
				htmlnew = htmlnew + '<th colspan="2">';
				htmlnew = htmlnew + 'Total';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th class="w3-right">';
				htmlnew = htmlnew + data['users']['count'];
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<th>';
				htmlnew = htmlnew + '';
				htmlnew = htmlnew + '</th>';
				
				htmlnew = htmlnew + '</tr>';				
				htmlnew = htmlnew + '</table><br><br>';
			
			$('#result').html(htmlnew);
				var dataLables = [];
				for (i=0;i<=months;i++) {
					var newmonth = new Date(new Date(DisplayFrom).setMonth(DisplayFrom.getMonth()+i));
					var yyyymm = newmonth.yyyymm();
					dataLables[i] = "'"+yyyymm+"'" ;
				}
			
			var script = "<script>";			
				script = script + "setTimeout(function(){";
				script = script + "var ctx = document.getElementById('"+bosscanvas+"');";
				script = script + "var canvas = new Chart(ctx, {";
					script = script + "type: 'bar',";
					script = script + "data: {";
					script = script + "			labels: ["+dataLables+"],";
						script = script + "datasets: [{";
							script = script + "label: 'GBV',";
							script = script + "data: ["+chartGBV+"],";
							script = script + "backgroundColor: [";
							for (i=0;i<=months;i++) {
								script = script + "				'rgba(54, 162, 235, 0.2)',";
							}
						script = script + "				]" ;
						script = script + "},{";
						script = script + "label: 'PBV',";
						script = script + "data: ["+chartBV+"],";
						script = script + "				backgroundColor: [";
						for (i=0;i<=months;i++) {
							script = script + "				'rgba(255, 99, 132, 0.2)',";
						}
						script = script + "				]" ;
						script = script + "}]";
					script = script + "},";
					script = script + "options: {";
						script = script + "scales: {";
							script = script + "xAxes: [{";
								script = script + "stacked: true,";
							script = script + "}],";
							script = script + "yAxes: [{";
								script = script + "stacked: true";
							script = script + "}]";
						script = script + "}";
					script = script + "}";
				script = script + "});";
			script = script + "}, 0);";
			script = script + "</script>";
//			$("#script").html(script);

			script = script + "<script>";
				k = 0;
				var DisplayTo = new Date();
				var DisplayFrom = new Date('2016-08-01');
				var months = DisplayTo.getMonth() - DisplayFrom.getMonth() + (12 * (DisplayTo.getFullYear() - DisplayFrom.getFullYear()));
//				console.log(dataLables);
	for (key in data['users']['downline']) {
		var downlinecanvas = 'canvas'+data['users']['downline'][k]['Number'];
			script = script + "setTimeout(function(){";
			script = script + "var ctx = document.getElementById('"+downlinecanvas+"');";
			script = script + "	var canvas = new Chart(ctx, {";
			script = script + "		type: 'bar',";
			script = script + "		data: {";
			script = script + "			labels: ["+dataLables+"],";
			script = script + "			datasets: [{";
			script = script + "				label: 'GBV',";
			script = script + "				data: ["+dchartGBV[k]+"],";
			script = script + "				backgroundColor: [";
									for (i=0;i<=months;i++) {
			script = script + "				'rgba(54, 162, 235, 0.2)',";
									}
			script = script + "				]" ;
			script = script + "			},{";
			script = script + "				label: 'PBV',";
			script = script + "				data: ["+dchartBV[k]+"],";
			script = script + "				backgroundColor: [";
									for (i=0;i<=months;i++) {
			script = script + "				'rgba(255, 99, 132, 0.2)',";
									}
			script = script + "				]" ;

			script = script + "			}]";
			script = script + "		},";
			script = script + "		options: {";
			script = script + "			scales: {";
			script = script + "				xAxes: [{";
			script = script + "					stacked: true,";
			script = script + "				}],";
			script = script + "				yAxes: [{";
			script = script + "					stacked: true";
			script = script + "				}]";
			script = script + "			}";
			script = script + "		}";
			script = script + "	});";
			script = script + "}, 0);";
			k = k + 1;
	}
	script = script + "</script>";
	$("#script").html(script);
	var meMCA = data['users']['selfline'][0]['Name']+" "+data['users']['selfline'][0]['Number'];
	$("#meMCA").html(meMCA);
 
		var footer = '<div class="w3-btn-group w3-bottom">';
		footer = footer + '<button class="w3-btn w3-black" onclick="iet.consultants()" style="width:50%">Home</button>';
		footer = footer + '<button class="w3-btn w3-pink" onclick="iet.downline('+upline+')" style="width:50%">Back</button>';
		footer = footer + '</div>';
		$("#footer").html(footer);
		},
			error: function(data){
//				console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];
//				console.log(htmlnew);
				$('#result').html(htmlnew);
			}
		});
		
	},
	logout:function(){
		$('#menuLogout').hide();
		$('#menuMessage').hide();
		$('#menuMCA').hide();
		$('#menuMCAUp').hide();
		$('#menuLogin').show();
		localStorage.removeItem(storage+'.mcaName');
		localStorage.removeItem(storage+'.mcaNumber');
		localStorage.removeItem(storage+'.refer');
		localStorage.removeItem(storage+'.refer_name');
		localStorage.removeItem(storage+'.DateJoin');
		
	},
	searchPhone:function(){
		var searchText = $("#searchText").val();
		 if ($("#contactsList").length == 1) {
					var options = new ContactFindOptions();
					options.filter = searchText;
					options.multiple = true;
					options.desiredFields = [navigator.contacts.fieldType.id];
					options.hasPhoneNumber = true;
					var filter = ['name','dispalyName'];
					navigator.contacts.find(filter, onSuccessContact, onErrorContact, options);
    }
	},
	searchEmail:function(){
		var searchText = $("#searchText").val();
		 if ($("#contactsList").length == 1) {
					var options = new ContactFindOptions();
					options.filter = searchText;
					options.multiple = true;
					options.desiredFields = [navigator.contacts.fieldType.id];
					options.hasPhoneNumber = true;
					var filter = ['name','dispalyName'];
					navigator.contacts.find(filter, onSuccessContact, onErrorContact, options);
    }
	},
	searchName:function(){
		var searchText = $("#searchText").val();
		 if ($("#contactsList").length == 1) {
					var options = new ContactFindOptions();
					options.filter = searchText;
					options.multiple = true;
					options.desiredFields = [navigator.contacts.fieldType.id];
					options.hasPhoneNumber = true;
					var filter = ['name','dispalyName'];
					navigator.contacts.find(filter, onSuccessContact, onErrorContact, options);
    }
	},
	contacts: function(){
	},
	messages:function(){
		var  myURL = "http://indianeagles.team/mobile/userlist/";
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#mcaNumber').html(htmlnew);				
		
		var fromMCA = localStorage[storage+".mcaNumber"];
//		console.log(myURL);
	$.ajax({
		crossOrigin: true,
		url: myURL,
		success: function(data){
			var htmlnew = '<option>- Select -</option>';
			htmlnew = htmlnew + '<ul class="w3-ul">';
			var i = 1;
//			console.log(data);	
			for (key in data['list']) {
				element = data['list'][key];
				htmlnew = htmlnew + '<option value="'+element['mcaNumber']+'">';
				htmlnew = htmlnew + element['mcaName'];
				htmlnew = htmlnew + '</option>';
			}
				$('#mcaNumber').html(htmlnew);
			},
			error: function(data){
//				console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#mcaNumber').html(htmlnew);

			}
		});	
		var  myURL = "http://indianeagles.team/mobile/messages/"+fromMCA;
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#mcaNumber').html(htmlnew);				
		
//		console.log(myURL);
		$.ajax({
		crossOrigin: true,
		url: myURL,
		success: function(data){
//				console.log(data);
				var htmlnew = '<table class="w3-table-all">';
				for (key in data['messages']){
					element = data['messages'][key];
					htmlnew = htmlnew + '<tr>';
					htmlnew = htmlnew + '<td class="w3-topbar w3-border-blue"><span class="w3-left w3-small">From:'+element['fromMCAName']+'<br>'+element['DateTime']+'</span></td>';
					htmlnew = htmlnew + '<td class="w3-topbar w3-border-blue"><span class="w3-left w3-small">To:'+element['toMCAName']+'</span><a href="#" onclick=iet.deleteMessage("'+element['_id']+'") class="w3-right"><i class="fa fa-lg fa-remove"></i></a></td>';
					htmlnew = htmlnew + '</tr>';
					htmlnew = htmlnew + '<tr>';
					htmlnew = htmlnew + '<td colspan="2" class="w3-bottombar w3-border-blue"><div class="w3-left" id="'+element['_id']+'">'+element['msg']+'</div><br>';
					htmlnew = htmlnew + '<span class="w3-left w3-small">&nbsp;';
					if(element['read']==true){
						htmlnew = htmlnew + '<i class="fa fa-lg  fa-envelope-o fa-2x"></i>';
					}else{
						htmlnew = htmlnew + '<a href="#" onclick=iet.readMessage("'+element['_id']+'")><i class="fa fa-lg  fa-envelope fa-2x"></i></a>';
					}
					htmlnew = htmlnew + '</span>'
					htmlnew = htmlnew + '<span class="w3-right w3-small">&nbsp;<a href="#" text="Reply" alt="Reply" onclick="iet.replyMessage('+element['fromMCANumber']+');"><i class="fa fa-mail-reply fa-2x"></i></a>&nbsp;</span>';
					htmlnew = htmlnew + '<span class="w3-right w3-small">&nbsp;<a href="#" text="Forward" alt="Forward" onclick="iet.forwardMessage('+element['_id']+');"><i class="fa fa-mail-forward fa-2x"></i></a>&nbsp;</span>';
					htmlnew = htmlnew + '</td>';
					htmlnew = htmlnew + '</tr>';
				}
				htmlnew = htmlnew + '</table>';
				$("#messageList").html(htmlnew);
		},
		error: function(data){
//				console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#messageList').html(htmlnew);

		}
		});
	},
	replyMessage: function(mcaNumber){
		$("#allButton").prop( "disabled", true );
		$("#downlineButton").prop( "disabled", true );
		$("#mcaNumber").val(mcaNumber);
	},
	forwardMessage: function(id){
		$("#allButton").prop( "disabled", true );
		$("#downlineButton").prop( "disabled", true );
		$("#message").val($(id).html());
	},
	deleteMessage: function (id){
		var  myURL = "http://indianeagles.team/mobile/deleteMessage/"+id;
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				
		
//		console.log(myURL);
		$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
				iet.messages();
			},
			error: function(data){
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
			},
			
		});
	},
	readMessage:function(id){
		var  myURL = "http://indianeagles.team/mobile/readMessage/"+id;
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#result').html(htmlnew);				
		
//		console.log(myURL);
		$.ajax({
			crossOrigin: true,
			url: myURL,
			success: function(data){
				iet.messages();
			},
			error: function(data){
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#result').html(htmlnew);
			},
			
		});
	},
	messageAll: function(){
		var msg = encodeURIComponent($("#message").val());
		if(msg==""){$("#messageSuccess").html("Empty message!");return false;}
		var fromMCA = localStorage[storage+".mcaNumber"];
		myURL = "http://indianeagles.team/mobile/messageall/"+fromMCA+'/'+msg;
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#messageSuccess').html(htmlnew);				
		
//		console.log(myURL);
	$.ajax({
		crossOrigin: true,
		url: myURL,
		success: function(data){
			$("#message").val("");
			$("#messageSuccess").show();
			$("#messageSuccess").html("Message sent!");
		},
		error: function(data){
//			console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#messageSuccess').html(htmlnew);
		}
	});
	}, 
	messageDownline:function(){
		var msg = encodeURIComponent($("#message").val());
		if(msg==""){$("#messageSuccess").html("Empty message!");return false;}
		var fromMCA = localStorage[storage+".mcaNumber"];
		myURL = "http://indianeagles.team/mobile/messagedownline/"+fromMCA+'/'+msg;
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#messageSuccess').html(htmlnew);				
		
//		console.log(myURL);
	$.ajax({
		crossOrigin: true,
		url: myURL,
		success: function(data){
			$("#message").val("");
			$("#messageSuccess").show();
			$("#messageSuccess").html("Message sent!");

		},
		error: function(data){
//			console.log(data);
	htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#messageSuccess').html(htmlnew);
		}		
	});
	},
	message:function(){
		var msg = encodeURIComponent($("#message").val());
		if(msg==""){$("#messageSuccess").html("Empty message!");return false;}
		var mcaNumber = $("#mcaNumber").val();
		var fromMCA = localStorage[storage+".mcaNumber"];
		myURL = "http://indianeagles.team/mobile/message/"+fromMCA+'/'+mcaNumber+'/'+msg;
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#messageSuccess').html(htmlnew);				

//		console.log(myURL);
		$.ajax({
		crossOrigin: true,
		url: myURL,
		success: function(data){
			$("#message").val("");
			$("#messageSuccess").show();
			$("#messageSuccess").html("Message sent!");
		},
		error: function(data){
//			console.log(data);
	htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#messageSuccess').html(htmlnew);
		}
	});
},
	addEvent:function(){
		var Date = encodeURIComponent($("#Date").val());
		var Time = encodeURIComponent($("#Time").val());
		var Topic = encodeURIComponent($("#Topic").val());
		var Event = encodeURIComponent($("#Event").val());
		var Place = encodeURIComponent($("#Place").val());
		var Address = encodeURIComponent($("#Address").val());
		var City = encodeURIComponent($("#City").val());
		var State = encodeURIComponent($("#State").val());
		var Host = encodeURIComponent($("#Host").val());
		var Mobile = encodeURIComponent($("#Mobile").val());
		var EventDescription = encodeURIComponent($("#EventDescription").val());
		if(Date==""||Date==null){
			$("#eventSave").html("Date is not valid!");
			return false;
		}
		if(Time==""||Time==null){
			$("#eventSave").html("Time is not valid!");
			return false;
		}
		if(Topic==""||Topic==null){
			$("#eventSave").html("Topic is not valid!");
			return false;
		}
		if(Event==""||Event==null){
			$("#eventSave").html("Event is not valid!");
			return false;
		}
		if(Place==""||Place==null){
			$("#eventSave").html("Place is not valid!");
			return false;
		}
		if(Address==""||Address==null){
			$("#eventSave").html("Address is not valid!");
			return false;
		}
		if(City==""||City==null){
			$("#eventSave").html("City is not valid!");
			return false;
		}
		if(State==""||State==null){
			$("#eventSave").html("State is not valid!");
			return false;
		}
		if(Host==""||Host==null){
			$("#eventSave").html("Meeting Host is not valid!");
			return false;
		}
		if(Mobile==""||Mobile==null){
			$("#eventSave").html("Mobile is not valid!");
			return false;
		}
		if(EventDescription==""||EventDescription==null){
			$("#eventSave").html("EventDescription is not valid!");
			return false;
		}
		myURL = "http://indianeagles.team/mobile/addevent/"+Date+'/'+Time+'/'+Topic+'/'+Event+'/'+Place+'/'+Address+'/'+City+'/'+State+'/'+Host+'/'+Mobile+'/'+EventDescription;
				htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
				$('#eventSave').html(htmlnew);				

//		console.log(myURL);
		$.ajax({
		crossOrigin: true,
		url: myURL,
		success: function(data){
			$("#eventSave").html("Event Saved!");
			iet.events();
		},
		error: function(data){
//			console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#eventSave').html(htmlnew);
		}
		});
	},
	push: function(){
		var data = [1,2];
		monaca.cloud.Push.setHandler(function(data) {
//  console.log(data[0]);
//  console.log(data[1]);
	});
		
	},
	toggle:function(divid){
		$("#"+divid).toggle();
	},
	offers: function(){
		
	},
	favorite:function(Code,mcaNumber){
		myURL = "http://indianeagles.team/mobile/favorite/"+Code+'/'+mcaNumber;
		htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
		$('#favorite').html(htmlnew);				

		$.ajax({
		crossOrigin: true,
		url: myURL,
		success: function(data){
			$("#favorite").html("Favorite changed!");
		},
		error: function(data){
//			console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#favorite').html(htmlnew);
		}
		});
	},
	delfavorite:function(Code,mcaNumber){
		myURL = "http://indianeagles.team/mobile/delfavorite/"+Code+'/'+mcaNumber;
		htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
		$('#favorite').html(htmlnew);				

		$.ajax({
		crossOrigin: true,
		url: myURL,
		success: function(data){
			$("#favorite").html("Favorite changed!");
			iet.favorites();
		},
		error: function(data){
//			console.log(data);
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#favorite').html(htmlnew);
		}
		});
	},
	addcart:function(Code,mcaNumber){
		htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
		$('#favorite').html(htmlnew);				
		var codeAdd = 0;
		var newArray = [];
		
		if(!localStorage[storage+".cart"]){
			localStorage.setItem(storage+'.cart',"680003:1");
		}else{
		var	cart = localStorage[storage+".cart"]; 
		}
//		console.log("x"+cart+"xu");
		
		var obj = malformedJSON2Array(cart);
//		console.log(obj);
		for(key in obj){
			element = obj[key];
			for(keyi in element){
				zelement = element[keyi];
				if(keyi==Code){
					codeAdd = 1;
					zelement = zelement + 1;
				}
				newArray.push(keyi+":"+zelement)
			}
		}
		if(codeAdd==0){
			newArray.push(Code+":"+1);
		}
		var count = newArray.length;
		
		localStorage.setItem(storage+'.cart',newArray.toString());	
//		console.log(localStorage[storage+".cart"]); 
		htmlnew='Item added to Cart';
		$('#favorite').html(htmlnew);				
		htmlnew = "Cart: "+(count-1)+" items";
		$('#Cart').html(htmlnew);				
		$("#idaddproduct").show();
	},
	minuscart: function(Code,mcaNumber){
		htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
		$('#favorite').html(htmlnew);				
		var codeAdd = 0;
		var newArray = [];
		var cart = "";
		if(!localStorage[storage+".cart"]){
			cart="680003:1";
		}else{
			cart = localStorage[storage+".cart"];
		}

		var obj = malformedJSON2Array(cart);
		for(key in obj){
			element = obj[key];
			for(keyi in element){
				zelement = element[keyi];
				if(keyi==Code){
					codeAdd = 1;
					zelement = zelement - 1;
				}
				if(zelement>0){
				newArray.push(keyi+":"+zelement);
				}
			}
		}
		var count = newArray.length;
		localStorage.setItem(storage+'.cart',newArray.toString());	
		htmlnew='Item deleted to Cart';
		$('#favorite').html(htmlnew);				
		htmlnew = "Cart: "+(count-1)+" items";
		$('#Cart').html(htmlnew);
		iet.showcart();
		
	},
	showcart:function(){
		htmlnew='<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
		$('#result').html(htmlnew);				
		var cart = localStorage[storage+".cart"];	
	 var mcaNumber = localStorage[storage+".mcaNumber"];
		myURL = "http://indianeagles.team/mobile/showcart/"+encodeURIComponent(cart)+'/'+mcaNumber;
		
		$.ajax({
		crossOrigin: true,
		url: myURL,
		success: function(data){
//		console.log(data);
		$("#TitleProducts").html("My Cart");
		var mcaNumber = localStorage[storage+".mcaNumber"];
		var mcaName = localStorage[storage+".mcaName"];
		if(mcaNumber=='undefined'){
			mcaName = "";mcaNumber = "";
		}
		htmlnew = "";
		htmlnew = htmlnew + '<label>MCA Number</label>';
		htmlnew = htmlnew + '<input type="text" value="'+mcaNumber+'" id="mcaNumber" name="mcaNumber" class="w3-input">';
		htmlnew = htmlnew + '<label>MCA Name</label>';
		htmlnew = htmlnew + '<input type="text" value="'+mcaName+'" id="mcaName" name="mcaName" class="w3-input">';
		htmlnew = htmlnew + '<table class="w3-table">';
		htmlnew = htmlnew + '<tr class="w3-topbar w3-border-blue">';
		htmlnew = htmlnew + '<th>Code';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th>Name';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th>Size';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th>No';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';
		var gtmrp = 0;
		var gtdp = 0;
		for(key in data['product']){
			element = data['product'][key];
			htmlnew = htmlnew + '<tr class="w3-topbar w3-border-blue">';
			htmlnew = htmlnew + '<td><strong>';
			htmlnew = htmlnew + element['Code'];
			htmlnew = htmlnew + '</strong>';
					htmlnew = htmlnew + '<br>';
					htmlnew = htmlnew + '<a href="#" onclick=iet.addcart("'+element['Code']+'","'+mcaNumber+'");iet.showcart();><i class="fa fa-plus fa-2x" ></i></a>&nbsp;&nbsp;';
					htmlnew = htmlnew + '<a href="#" onclick=iet.minuscart("'+element['Code']+'","'+mcaNumber+'")><i class="fa fa-minus fa-2x" ></i></a>';
			htmlnew = htmlnew + '</td>';
			htmlnew = htmlnew + '<td>';
			htmlnew = htmlnew + element['Name'];
			htmlnew = htmlnew + '</td>';
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span class="w3-small">'+element['Size']+'</span>';
						htmlnew = htmlnew + '</td>';										
			htmlnew = htmlnew + '<td style="text-align:right">';
			htmlnew = htmlnew + element['Quantity'];
			
			htmlnew = htmlnew + '</td>';
			htmlnew = htmlnew + '</tr>';
			htmlnew = htmlnew + '<tr class="w3-small w3-bottombar w3-border-blue">';
			htmlnew = htmlnew + '<td colspan="4">MRP: ';
			var mrp = parseFloat(Math.round(element['MRP'] * 100) / 100).toFixed(2);
			htmlnew = htmlnew + mrp;
			htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;DP: ';
			var dp = parseFloat(Math.round(element['DP'] * 100) / 100).toFixed(2);
			htmlnew = htmlnew + dp; 
			var tmrp = parseFloat(parseFloat(Math.round(element['MRP'] * 100) / 100).toFixed(2)*parseFloat(element['Quantity'])).toFixed(2);
			var tdp = parseFloat(parseFloat(Math.round(element['DP'] * 100) / 100).toFixed(2)*parseFloat(element['Quantity'])).toFixed(2);
			htmlnew = htmlnew + '<br>Total-MRP: ';
			htmlnew = htmlnew + tmrp; 
			htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;Total-DP: ';
			htmlnew = htmlnew + tdp; 
			gtmrp = parseFloat(gtmrp) + parseFloat(tmrp);
			gtdp = parseFloat(gtdp) + parseFloat(tdp);
			htmlnew = htmlnew + '</tr>';
		}
			htmlnew = htmlnew + '<tr class="w3-bottombar w3-border-blue">';
			htmlnew = htmlnew + '<td colspan="4"><strong>';
			htmlnew = htmlnew + 'Total MRP: <span id="TotalMRP">' + parseFloat(gtmrp).toFixed(2)+'</span>';
			htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;';
			htmlnew = htmlnew + 'Total DP: <span id="TotalDP">' + parseFloat(gtdp).toFixed(2)+'</span>';
			htmlnew = htmlnew + '</strong></td>';
			htmlnew = htmlnew + '</tr>';
			htmlnew = htmlnew + '</table>';
		if(parseFloat(gtmrp).toFixed(2)==0){
			htmlnew = htmlnew + '<br><a href="#" 	class="w3-btn-block w3-green"	onclick="iet.categories()">Products</a>';
		}else{
			htmlnew = htmlnew + '<br><a href="#" 	class="w3-btn-block w3-pink"	onclick="iet.checkout()">Check out</a><br>';
			htmlnew = htmlnew + '<br><a href="#" 	class="w3-btn-block w3-gray"	onclick="iet.clearcart()">Clear cart</a><br>';
			htmlnew = htmlnew + '<br><a href="#" 	class="w3-btn-block w3-green"	onclick="iet.categories()">Continue Shopping</a>';
		}
		
				$('#result').html(htmlnew);
		},
		error: function(data){
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#favorite').html(htmlnew);
		}
		});
	},
	clearcart: function(){
		localStorage.setItem(storage+'.cart',"680003:1");
		var html = "Cart: 0 items";
		$('#Cart').html(html);
		iet.showcart()
	},
	checkout:function(){
			htmlnew = "";	
			$('#favorite').html(htmlnew);
		var mcaNumber = $("#mcaNumber").val();
		var mcaName = $("#mcaName").val();
		if(mcaNumber=='undefined'){
			mcaNumber = "";mcaName="";
		}
		
		var totalMRP = $("#TotalMRP").html();
		var totalDP = $("#TotalDP").html();
		var gtotalMRP = 0;
		var gtotalDP = 0;
		if(parseFloat(totalMRP)<4000){
			gtotalMRP = parseFloat(totalMRP) + parseFloat(65);
		}else{
			gtotalMRP = parseFloat(totalMRP);
		}
		if(parseFloat(totalDP)<4000){
			gtotalDP = parseFloat(totalDP) + parseFloat(65);
		}else{
			gtotalDP = parseFloat(totalDP);
		}
		var delivery = 65;
//		console.log(mcaNumber);
//		console.log(mcaName);
//		console.log(totalMRP);
//		console.log(totalDP);
		var htmlnew = "";
		htmlnew = htmlnew + '<table class="w3-table">';
		htmlnew = htmlnew + '<tr class="w3-topbar w3-border-blue">';
		htmlnew = htmlnew + '<th>MCA Number:' ;
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th id="PmcaNumber">' + mcaNumber ;
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';
		htmlnew = htmlnew + '<tr>';
		htmlnew = htmlnew + '<th>MCA Name:';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th id="PmcaName">' + mcaName;
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';
			if(mcaNumber==""){
		htmlnew = htmlnew + '<tr>';
		htmlnew = htmlnew + '<th>Total MRP:';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th id="PtotalMRP">' + totalMRP;
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';
			if(parseFloat(totalMRP)<4000){
		htmlnew = htmlnew + '<tr>';
		htmlnew = htmlnew + '<th>Delivery :';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th id="PdeliveryMRP">' + parseFloat(delivery).toFixed(2);
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';
			}
		htmlnew = htmlnew + '<tr>';
		htmlnew = htmlnew + '<th>Grand Total :';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th id="gTotalMRP">' + parseFloat(gtotalMRP).toFixed(2);
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';

			}else{
		htmlnew = htmlnew + '<tr>';
		htmlnew = htmlnew + '<th>Total DP: (Rs)';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th id="PtotalDP">' + totalDP;
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';				
			if(parseFloat(totalDP)<4000){
		htmlnew = htmlnew + '<tr>';
		htmlnew = htmlnew + '<th>Delivery :';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th id="PdeliveryDP">' + parseFloat(delivery).toFixed(2);
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';
			}
			
		htmlnew = htmlnew + '<tr>';
		htmlnew = htmlnew + '<th>Grand Total :';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th id="gTotalDP">' + parseFloat(gtotalDP).toFixed(2);
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';
		}
		htmlnew = htmlnew + '</table>';
		htmlnew = htmlnew + '<div class="w3-card">';
			htmlnew = htmlnew + '<header class="w3-container w3-blue"><h3>Delivery</h3></header>';
			htmlnew = htmlnew + '<div class="w3-container">';
				htmlnew = htmlnew + '<input type="radio" id="collect" name="collect" value="dp" class="w3-radio" onclick=$("#collectDP").show();$("#collectHome").hide();> <label class="w3-validate" >Collect from DP</label>&nbsp;';
				htmlnew = htmlnew + '<input type="radio" id="collect" name="collect" value="home"  class="w3-radio" checked onclick=$("#collectDP").hide();$("#collectHome").show();> <label class="w3-validate">Deliver to address</label>';
				htmlnew = htmlnew + '<input type="email" name="Email" id="Email" class="w3-input"><label class="w3-validate">Email</label>';
				htmlnew = htmlnew + '<input type="phone" name="Mobile" id="Mobile" class="w3-input"><label class="w3-validate">Mobile</label>';

			htmlnew = htmlnew + '</div><br>';
		
		
			htmlnew = htmlnew + '<div id="collectDP" style="display:none">';
		myURL = "http://indianeagles.team/mobile/dpaddress/";
		$.ajax({
		crossOrigin: true,
		url: myURL,
		success: function(data){
				htmlnew = htmlnew + '<div class="w3-panel w3-blue w3-card-8">';
					htmlnew = htmlnew + '<h2>Collect from DP</h2>';
				htmlnew = htmlnew + '</div>';
				htmlnew = htmlnew + '<div style="width:90%;margin:auto">';
			for(key in data['distributors']){
				var element = data['distributors'][key];
					htmlnew = htmlnew + '<input class="w3-radio" type="radio" name="dpPoint" id="dpPoint" value="'+element['_id']+'">';
					htmlnew = htmlnew + '<label class="w3-validate">'+element['City']+'</label><br>';
					htmlnew = htmlnew + '<input type="hidden" id="DPcity'+element['_id']+'" name="DPcity'+element['_id']+'" value="'+element['City']+'">';
					htmlnew = htmlnew + '<input type="hidden" id="DPstate'+element['_id']+'" name="DPstate'+element['_id']+'" value="'+element['State']+'">';
					htmlnew = htmlnew + '<input type="hidden" id="DPaddress'+element['_id']+'" name="DPaddress'+element['_id']+'" value="'+element['Address']+'">';
					htmlnew = htmlnew + '<input type="hidden" id="DPmobile'+element['_id']+'" name="DPmobile'+element['_id']+'" value="'+element['Mobile']+'">';
					htmlnew = htmlnew + '<input type="hidden" id="DPpayTM'+element['_id']+'" name="DPpayTM'+element['_id']+'" value="'+element['PayTM']+'">';
					htmlnew = htmlnew + '<input type="hidden" id="DPemail'+element['_id']+'" name="DPemail'+element['_id']+'" value="'+element['email']+'">';
					htmlnew = htmlnew + '<input type="hidden" id="DPname'+element['_id']+'" name="DPname'+element['_id']+'" value="'+element['Name']+'">';
			}
				htmlnew = htmlnew + '</div>';
			
				htmlnew = htmlnew + '<footer class="w3-container w3-blue"><h5></h5></footer>';
			htmlnew = htmlnew + '</div>';
			htmlnew = htmlnew + '<div id="collectHome" >';
				htmlnew = htmlnew + '<div class="w3-panel w3-blue w3-card-8">';
				htmlnew = htmlnew + '<h2>Delivery Address</h2>';
				htmlnew = htmlnew + '</div>';
				htmlnew = htmlnew + '<div style="width:90%;margin:auto">';
					htmlnew = htmlnew + '<input type="text" name="Address" id="Address" class="w3-input"><label>Address</label><br>';
					htmlnew = htmlnew + '<input type="text" name="City" id="City" class="w3-input"><label>City</label>';
					htmlnew = htmlnew + '<input type="text" name="Pincode" id="Pincode" class="w3-input"><label>Pincode</label>';
					htmlnew = htmlnew + '<input type="text" name="State" id="State" class="w3-input"><label>State</label>';
				htmlnew = htmlnew + '</div>';
				htmlnew = htmlnew + '<footer class="w3-container w3-blue"><h6><small>Please fill all the fields for prompt delivery</small></h6></footer>';
			htmlnew = htmlnew + '</div>';
			htmlnew = htmlnew + '</div><br>';
			htmlnew = htmlnew + '<br><a href="#" 	class="w3-btn-block w3-pink"	onclick="iet.checkemail();iet.payment()">Payment</a><br>';
		$('#result').html(htmlnew);
			
		},
		error: function(data){}
		});

//
	},
	checkemail:function(){
	var email = $("#Email").val();
	console.log(email);
	var pattern = "^.+@[^\.].*\.[a-z,A-Z]{2,}$";
	if ( !email.match(pattern) ) {
			error = "Email not correct";
			console.log(error);
			return false;
	}
	console.log('email correct');
	return true;
	},
	payment: function(){
		var collect = $("#collect:checked").val();
		var mcaNumber = $("#PmcaNumber").html();
		var mcaName = $("#PmcaName").html();
		var email = $("#Email").val();
		var mobile = $("#Mobile").val();
		if(mcaNumber==""||mcaNumber=="undefined"){
			var total = $("#PtotalMRP").html();
			var delivery = $("#PdeliveryMRP").html();
			var gtotal = $("#gTotalMRP").html();
		}else{
			var total = $("#PtotalDP").html();
			var delivery = $("#PdeliveryDP").html();
			var gtotal = $("#gTotalDP").html();
		}
		
		var htmlnew = "";
		htmlnew = htmlnew + '<div>';
		
		htmlnew = htmlnew + '<input type="hidden" id="collect" name="collect" value="'+collect+'">';		
		htmlnew = htmlnew + '<table class="w3-table">';
		htmlnew = htmlnew + '<tr class="w3-topbar w3-border-blue">';
		htmlnew = htmlnew + '<th>MCA Number:' ;
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th id="PmcaNumber">' + mcaNumber ;
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';
		htmlnew = htmlnew + '<tr>';
		htmlnew = htmlnew + '<th>MCA Name:';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th id="PmcaName">' + mcaName;
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';
		htmlnew = htmlnew + '<tr>';
		htmlnew = htmlnew + '<th>Grand Total:';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th id="gTotalDP">' + parseFloat(gtotal).toFixed(2);
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';
		htmlnew = htmlnew + '<tr>';
		htmlnew = htmlnew + '<th>Email:';
		htmlnew = htmlnew + '</th>';
		
		htmlnew = htmlnew + '<th id="Email">' + email;
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';
		htmlnew = htmlnew + '<tr>';
		htmlnew = htmlnew + '<th>Mobile:';
		htmlnew = htmlnew + '</th>';
		
		htmlnew = htmlnew + '<th id="Mobile">' + mobile;
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';
		
		if(collect=="dp"){
		htmlnew = htmlnew + '<tr>';
		htmlnew = htmlnew + '<th>Delivery:';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '<th id="Collect">Collect from DP';
		htmlnew = htmlnew + '</th>';
		htmlnew = htmlnew + '</tr>';
				var dpPoint = $("#dpPoint:checked").val();
				var address = $("#DPaddress"+dpPoint).val();
				var city = $("#DPcity"+dpPoint).val();
				var state = $("#DPstate"+dpPoint).val();
				var name = $("#DPname"+dpPoint).val();
				var email = $("#DPemail"+dpPoint).val();
				var mobile = $("#DPmobile"+dpPoint).val();
				var payTM = $("#DPpayTM"+dpPoint).val();
				
				htmlnew = htmlnew + '<tr>';

				htmlnew = htmlnew + '<td id="DPname" colspan="2"><h3 class="w3-btn w3-btn-block">'+name;
				htmlnew = htmlnew + '<input type="hidden" id="dpPoint" name="dpPoint" value="'+dpPoint+'">';
				htmlnew = htmlnew + '</h3></td>';
				htmlnew = htmlnew + '</tr>';
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<td id="DPaddress" colspan="2">'+address;
				htmlnew = htmlnew + '</td>';
				htmlnew = htmlnew + '</tr>';
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<td id="DPcity" colspan="2">'+city;
				htmlnew = htmlnew + '</td>';
				htmlnew = htmlnew + '</tr>';
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<td id="DPstate" colspan="2">'+state;
				htmlnew = htmlnew + '</td>';
				htmlnew = htmlnew + '</tr>';
				
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<th>DP Mobile:';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<td id="DPmobile">'+mobile;
				htmlnew = htmlnew + '</td>';
				htmlnew = htmlnew + '</tr>';
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<th>DP Email:';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<td id="DPemail">'+email;
				htmlnew = htmlnew + '</td>';
				htmlnew = htmlnew + '</tr>';
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<th>DP <img src="images/payTM.png" width="60px"> :';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<td id="DPpayTM"> '+payTM;
				htmlnew = htmlnew + '</td>';
				htmlnew = htmlnew + '</tr>';
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<td colspan="2">Please make the payment to PayTM: <strong>'+payTM +'</strong>, visit the DP to collect your order.';
				htmlnew = htmlnew + '</td>';
				htmlnew = htmlnew + '</tr>';
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<th>OrderNo:';
				htmlnew = htmlnew + '</th>';
				var max = 999999;
				var min = 100000;
				htmlnew = htmlnew + '<th id="OrderNo"> IET'+ parseFloat(Math.floor(Math.random() * (max - min + 1)));
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '</tr>';
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<td colspan="2">';
				htmlnew = htmlnew + '</td>';
				htmlnew = htmlnew + '</tr>';
		}
		if(collect=="home"){
			htmlnew = htmlnew + '<tr>';
			htmlnew = htmlnew + '<th>Delivery :';
			htmlnew = htmlnew + '</th>';
			htmlnew = htmlnew + '<th id="Collect" >Delivery to address';
			htmlnew = htmlnew + '</th>';
			htmlnew = htmlnew + '</tr>';
			htmlnew = htmlnew + '<tr>';
			htmlnew = htmlnew + '<td colspan="2"><h3 class="w3-btn w3-btn-block">Deliver to </h3></td>';
			htmlnew = htmlnew + '</tr>';
			var Address = $("#Address").val();
			var City = $("#City").val();
			var Pincode = $("#Pincode").val();
			var State = $("#State").val();
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<td id="DPaddress" colspan="2">'+Address;
				htmlnew = htmlnew + '</td>';
				htmlnew = htmlnew + '</tr>';
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<td id="DPcity" colspan="2">'+City+ " "+Pincode;
				htmlnew = htmlnew + '</td>';
				htmlnew = htmlnew + '</tr>';
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<td id="DPstate" colspan="2">'+State; 
				htmlnew = htmlnew + '</td>';
				htmlnew = htmlnew + '</tr>';
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<th>DP <img src="images/payTM.png" width="60px"> :';
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '<td id="DPpayTM"> 7597219319';
				htmlnew = htmlnew + '</td>';
				htmlnew = htmlnew + '</tr>';
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<td colspan="2">Please make the payment to PayTM: <strong>7597219319</strong>. Once the payment is received and confirmed, we will place the order on Modicare.com. The products will be dispatched by Modicare from their nearest MSC.';
				htmlnew = htmlnew + '</td>';
				htmlnew = htmlnew + '</tr>';
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<th>OrderNo:';
				htmlnew = htmlnew + '</th>';
				var max = 999999;
				var min = 100000;
				htmlnew = htmlnew + '<th id="OrderNo"> IET'+ parseFloat(Math.floor(Math.random() * (max - min + 1)));
				htmlnew = htmlnew + '</th>';
				htmlnew = htmlnew + '</tr>';
		}
				htmlnew = htmlnew + '<tr>';
				htmlnew = htmlnew + '<td colspan="2">Please quote the above Order No when communicating about this order with IndianEagles.Team. Send an email to admin@indianeagles.team or call +91 75972 19319.';
				htmlnew = htmlnew + '</td>';
				htmlnew = htmlnew + '</tr>';

		htmlnew = htmlnew + '</table>';
		htmlnew = htmlnew + '<br><a href="#" 	class="w3-btn-block w3-pink"	onclick="iet.sendpayment()">Confirm Order</a><br>';	
		htmlnew = htmlnew + '<p style="margin:auto;width:90%">Once you click, you order will be emailed to you and the DP or Admin of IndianEagles.</p>';
		htmlnew = htmlnew + '</div>';

		$('#result').html(htmlnew);
	},
	sendpayment:function(){
		var cart = localStorage[storage+".cart"];
		var mcaNumber = $("#PmcaNumber").html();
		var mcaName = $("#PmcaName").html();
		var email = $("#Email").html();
		var mobile = $("#Mobile").html();
		var address = $("#DPaddress").html();
		var city = $("#DPcity").html();
		var state = $("#DPstate").html();
		var orderNo = $("#OrderNo").html();
		var dpPoint = $("#dpPoint").val();
		var collect = $("#collect").val();
		
		myURL = "http://indianeagles.team/mobile/sendpayment/"
		+encodeURIComponent(cart)+"/"
		+encodeURIComponent(mcaNumber)+"/"
		+encodeURIComponent(mcaName)+"/"
		+encodeURIComponent(email)+"/"
		+encodeURIComponent(mobile)+"/"
		+encodeURIComponent(address)+"/"
		+encodeURIComponent(city)+"/"
		+encodeURIComponent(state)+"/"
		+encodeURIComponent(orderNo)+"/"
		+encodeURIComponent(collect)+"/"
		+encodeURIComponent(dpPoint)+"/";
		$.ajax({
		crossOrigin: true,
		url: myURL,
		success: function(data){
			console.log(data);
			if(data['result']['user']['mcaNumber']==mcaNumber){
				htmlnew = '<div style="width:90%;margin:auto"><p>Your order has been place with DP and an email has been sent to your email address.</p></div>';
				localStorage.setItem(storage+'.cart',"680003:1");
				var html = "Cart: 0 items";
				$('#Cart').html(html);
				
				$('#result').html(htmlnew);
			}
			console.log(data);
		},
		error:function(data){}
		});
	},
	active: function(){
		htmlnew='<div style="text-align:center"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>';
		$('#spinner').html(htmlnew);
		var mcaNumber = localStorage[storage+".mcaNumber"];
		var month = $("#month").val();
		if(!month){
			month = new Date();
			var month = month.yyyymm();
		}
		console.log(month);
		myURL = "http://indianeagles.team/mobile/active/"+mcaNumber+'/'+month;
		$.ajax({
		crossOrigin: true,
		url: myURL,
		success: function(data){
			console.log(data);
						var DisplayTo = new Date();
						var DisplayFrom = new Date('2016-08-01');
						var months = DisplayTo.getMonth() - DisplayFrom.getMonth() + (12 * (DisplayTo.getFullYear() - DisplayFrom.getFullYear()));
						htmlnew = '';
						htmlnew = htmlnew + '<select id="month" name="month" class="w3-select">'
						for (i=0;i<=months;i++) {
							
							var newmonth = new Date(new Date(DisplayFrom).setMonth(DisplayFrom.getMonth()+i));
							var yyyymm = newmonth.yyyymm();
							htmlnew = htmlnew + '<option value="'+yyyymm+'" ';
							if(yyyymm==month){htmlnew = htmlnew + ' selected '}
							htmlnew = htmlnew +'>'+yyyymm+'';				
							
							htmlnew = htmlnew + '</option>';				
						}
						htmlnew = htmlnew + '<select>';	
						htmlnew = htmlnew + '<a href="#" onclick="iet.active();" class="w3-btn w3-btn-block">List Eagles</a>';	
						$('#spinner').html('<label class="w3-label">Select Month</label>');
						
						htmlnew = htmlnew + '<table class="w3-table">';
						htmlnew = htmlnew + '<tr>';
						htmlnew = htmlnew + '<th>#</th>';
						htmlnew = htmlnew + '<th>Name<br>MCA#</th>';
						htmlnew = htmlnew + '<th>PBV</th>';
						htmlnew = htmlnew + '<th>Upline<br>MCA#</th>';
						htmlnew = htmlnew + '</tr>';
						var i = 1;
						for(key in data['result']){
						var element = data['result'][key];
						htmlnew = htmlnew + '<tr>';
						htmlnew = htmlnew + '<td>'+i+'</td>';
						htmlnew = htmlnew + '<th><a href="#" onclick="iet.downline('+ element['mcaNumber'] +','+mcaNumber+')"><strong style="color:blue">'+element['mcaName']+'<br>'+element['mcaNumber']+'</a></th>';
						htmlnew = htmlnew + '<td>'+element[month]['BV']+'</td>';
						htmlnew = htmlnew + '<td>'+element['refer_name']+'<br>'+element['refer_id']+'</td>';
						htmlnew = htmlnew + '</tr>';
						i++;
						}
						htmlnew = htmlnew + '</table><br><br>';
						htmlnew = htmlnew + '<div style="text-align:center"><h2 class="w3-orange">Non Active Eagles</h2></div>';
						htmlnew = htmlnew + '<table class="w3-table">';
						htmlnew = htmlnew + '<tr>';
						htmlnew = htmlnew + '<th>#</th>';
						htmlnew = htmlnew + '<th>Name<br>MCA#</th>';
						htmlnew = htmlnew + '<th>Upline<br>MCA#</th>';
						htmlnew = htmlnew + '</tr>';
						var i = 1;
						for(key in data['notPerformaing']){
						var element = data['notPerformaing'][key];
						htmlnew = htmlnew + '<tr>';
						htmlnew = htmlnew + '<td>'+i+'</td>';
						htmlnew = htmlnew + '<th><a href="#" onclick="iet.downline('+ element['mcaNumber'] +','+mcaNumber+')"><strong style="color:blue">'+element['mcaName']+'<br>'+element['mcaNumber']+'</a></th>';
						htmlnew = htmlnew + '<td>'+element['refer_name']+'<br>'+element['refer_id']+'</td>';
						htmlnew = htmlnew + '</tr>';
						i++;
						}
						htmlnew = htmlnew + '</table><br><br>';
						
						$('#result').html(htmlnew);
			console.log(data);
		},
		error: function(data){
				htmlnew = "Unable to connect to server. Status: "+data['status'];	
				$('#favorite').html(htmlnew);
		}
		});
	},
	listName: function(){
			var listName = localStorage[storage+".listName"]; 
			var data = jQuery.parseJSON( listName );
				var htmlnew = '';
				var mcaNumber = localStorage[storage+".mcaNumber"];
				htmlnew = htmlnew + '<table class="w3-table-all w3-small">';
				for (key in data['result']) {
						element = data['result'][key];
						htmlnew = htmlnew + '<tr class="w3-topbar w3-border-blue">';
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span><strong><a style="text-decoration:none" href="#" onclick=iet.product("'+element['Code']+'")>'+element['Code']+'</a></strong></span><br>';
						if(mcaNumber!=""){
						htmlnew = htmlnew + '<a href="#" onclick=iet.favorite("'+element['Code']+'","'+mcaNumber+'")><i class="fa fa-heart fa-2x" ></i></a>';
						}
						htmlnew = htmlnew + '</td>';
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span><a style="text-decoration:none" href="#" onclick=iet.product("'+element['Code']+'")><strong style="color:blue">'+element['Category']+'</strong><br>'+element['Name']+'</a></span><br>';
						if((element['Code']).substring(0,1)=="0"){ 
							htmlnew = htmlnew + '<img src="http://indianeagles.team/img/x'+element['Code']+'.jpg" width="30" class="w3-center">';
						}else{
							htmlnew = htmlnew + '<img src="http://indianeagles.team/img/'+element['Code']+'.jpg" width="30" class="w3-center" onclick=iet.idShowProduct("http://indianeagles.team/img/'+element['Code']+'.jpg")>';
						}
						htmlnew = htmlnew + '</td>';					
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span class="w3-small">'+element['Size']+'</span>';
						htmlnew = htmlnew + '<br>';
						htmlnew = htmlnew + '<a href="#" onclick=iet.addcart("'+element['Code']+'","'+mcaNumber+'")><i class="fa fa-plus fa-2x" ></i></a>';
						htmlnew = htmlnew + '</td>';										
						htmlnew = htmlnew + '</tr>';
						htmlnew = htmlnew + '<tr class="w3-small w3-bottombar w3-border-blue">';
						htmlnew = htmlnew + '<td colspan="3">MRP: ';
						var mrp = parseFloat(Math.round(element['MRP'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + mrp;
						htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;DP: ';
						var dp = parseFloat(Math.round(element['DP'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + dp;
						
						htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;BV: ';
						var bv = parseFloat(Math.round(element['BV'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + bv;
						htmlnew = htmlnew + '<span class="w3-right" style="margin-top:0px;margin-bottom:0px">';
						
						htmlnew = htmlnew + '</td>';

						htmlnew = htmlnew + '</tr>';
						
						$('#TitleProducts').html(element['Category']);
					}


				
				htmlnew = htmlnew + '</table><br><hr><br>';
							htmlnew = htmlnew + '<div id="idaddproduct" class="w3-modal">';
							htmlnew = htmlnew + '<div class="w3-modal-content">';
							htmlnew = htmlnew + '<div class="w3-container w3-panel w3-yellow w3-card">';
							htmlnew = htmlnew + '<span onclick=$("#idaddproduct").hide(); ';
							htmlnew = htmlnew + 'class="w3-closebtn">&times;</span>';
							htmlnew = htmlnew + '<h2>Product has been added!</h2>';
							htmlnew = htmlnew + '</div>';
							htmlnew = htmlnew + '</div>';
							htmlnew = htmlnew + '</div>';
							htmlnew = htmlnew + '<div id="idshowproduct" class="w3-modal">';
							htmlnew = htmlnew + '<div class="w3-modal-content">';
							htmlnew = htmlnew + '<div class="w3-container w3-panel w3-yellow w3-card">';
							htmlnew = htmlnew + '<span onclick=$("#idshowproduct").hide(); ';
							htmlnew = htmlnew + 'class="w3-closebtn">&times;</span>';
							htmlnew = htmlnew + '<img src="" width="100%" id="ImageSource">';
							htmlnew = htmlnew + '</div>';
							htmlnew = htmlnew + '</div>';
							htmlnew = htmlnew + '</div>';							
// When the user clicks anywhere outside of the modal, close it							
							htmlnew = htmlnew + '<script>';
							htmlnew = htmlnew + 'var modal = document.getElementById("idaddproduct");';
							htmlnew = htmlnew + 'var modalshow = document.getElementById("idshowproduct");';
							htmlnew = htmlnew + 'window.onclick = function(event) {';
							htmlnew = htmlnew + 'if (event.target == modal) {';
       htmlnew = htmlnew + '$("#idaddproduct").hide()';
							htmlnew = htmlnew + '}';
							htmlnew = htmlnew + 'if (event.target == modalshow) {';
       htmlnew = htmlnew + '$("#idshowproduct").hide()';
							htmlnew = htmlnew + '}';
							htmlnew = htmlnew + '}';
							htmlnew = htmlnew + '</script>';
				
				$('#result').html(htmlnew);			
		
	},
	idShowProduct: function(Code){
		$("#ImageSource").attr("src", Code);
		$("#idshowproduct").show();
	},
	listCode: function(){
			var listCode = localStorage[storage+".listCode"]; 
			var data = jQuery.parseJSON( listCode );

				var htmlnew = '';
				var mcaNumber = localStorage[storage+".mcaNumber"];
//				console.log(data);
				htmlnew = htmlnew + '<table class="w3-table-all w3-small">';
				for (key in data['result']) {
						element = data['result'][key];
						htmlnew = htmlnew + '<tr class="w3-topbar w3-border-blue">';
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span><strong><a style="text-decoration:none" href="#" onclick=iet.product("'+element['Code']+'")>'+element['Code']+'</a></strong></span><br>';
						if(mcaNumber!=""){
						htmlnew = htmlnew + '<a href="#" onclick=iet.favorite("'+element['Code']+'","'+mcaNumber+'")><i class="fa fa-heart fa-2x" ></i></a>';
						}
						htmlnew = htmlnew + '</td>';
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span><a style="text-decoration:none" href="#" onclick=iet.product("'+element['Code']+'")><strong style="color:blue">'+element['Category']+'</strong><br>'+element['Name']+'</a></span><br>';
						if((element['Code']).substring(0,1)=="0"){ 
							htmlnew = htmlnew + '<img src="http://indianeagles.team/img/x'+element['Code']+'.jpg" width="30" class="w3-center">';
						}else{
							htmlnew = htmlnew + '<img src="http://indianeagles.team/img/'+element['Code']+'.jpg" width="30" class="w3-center" onclick=iet.idShowProduct("http://indianeagles.team/img/'+element['Code']+'.jpg")>';
						}
						htmlnew = htmlnew + '</td>';					
						htmlnew = htmlnew + '<td>';
						htmlnew = htmlnew + '<span class="w3-small">'+element['Size']+'</span>';
						htmlnew = htmlnew + '<br>';
						htmlnew = htmlnew + '<a href="#" onclick=iet.addcart("'+element['Code']+'","'+mcaNumber+'")><i class="fa fa-plus fa-2x" ></i></a>';
						htmlnew = htmlnew + '</td>';										
						htmlnew = htmlnew + '</tr>';
						htmlnew = htmlnew + '<tr class="w3-small w3-bottombar w3-border-blue">';
						htmlnew = htmlnew + '<td colspan="3">MRP: ';
						var mrp = parseFloat(Math.round(element['MRP'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + mrp;
						htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;DP: ';
						var dp = parseFloat(Math.round(element['DP'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + dp;
						
						htmlnew = htmlnew + '&nbsp;&nbsp;&nbsp;&nbsp;BV: ';
						var bv = parseFloat(Math.round(element['BV'] * 100) / 100).toFixed(2);
						htmlnew = htmlnew + bv;
						htmlnew = htmlnew + '<span class="w3-right" style="margin-top:0px;margin-bottom:0px">';
						
						htmlnew = htmlnew + '</td>';

						htmlnew = htmlnew + '</tr>';
						
						$('#TitleProducts').html(element['Category']);
					}


				
				htmlnew = htmlnew + '</table><br><hr><br>';
							htmlnew = htmlnew + '<div id="idaddproduct" class="w3-modal">';
							htmlnew = htmlnew + '<div class="w3-modal-content">';
							htmlnew = htmlnew + '<div class="w3-container w3-panel w3-yellow w3-card">';
							htmlnew = htmlnew + '<span onclick=$("#idaddproduct").hide(); ';
							htmlnew = htmlnew + 'class="w3-closebtn">&times;</span>';
							htmlnew = htmlnew + '<h2>Product has been added!</h2>';
							htmlnew = htmlnew + '</div>';
							htmlnew = htmlnew + '</div>';
							htmlnew = htmlnew + '</div>';
// When the user clicks anywhere outside of the modal, close it							
							htmlnew = htmlnew + '<script>';
							htmlnew = htmlnew + 'var modal = document.getElementById("idaddproduct");';
							htmlnew = htmlnew + 'var modalshow = document.getElementById("idshowproduct");';
							htmlnew = htmlnew + 'window.onclick = function(event) {';
							htmlnew = htmlnew + 'if (event.target == modal) {';
       htmlnew = htmlnew + '$("#idaddproduct").hide()';
							htmlnew = htmlnew + '}';
							htmlnew = htmlnew + 'if (event.target == modalshow) {';
       htmlnew = htmlnew + '$("#idshowproduct").hide()';
							htmlnew = htmlnew + '}';
							htmlnew = htmlnew + '}';
							htmlnew = htmlnew + '</script>';

				$('#result').html(htmlnew);			

		
	},
}

function onSuccessContact(contacts) {
    var html = "";
//				console.log(contacts.length);
				html += '<ul class="w3-gray">';
    for (var i = 0; i < contacts.length; i++) { 
					
     if ($.trim(contacts[i].displayName).length != 0 || $.trim(contacts[i].nickName).length != 0) {
						html += contacts[i].displayName ? contacts[i].displayName : contacts[i].nickName;
					}
					if (contacts[i].emails) {
						for (var j = 0; j < contacts[i].emails.length; j++) {
						html += '<p>Email:&nbsp;&nbsp; <a style="font-size:small" onclick="app.sendToEmail(this.name)" name="'+contacts[i].emails[j].value+'">'+contacts[i].emails[j].value+'</a></p>';
						}
					}
					if (contacts[i].phoneNumbers) {
						for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
							html += '<p>Phone: <a style="font-size:small" onclick="app.sendToPhone(this.name)" name="'+contacts[i].phoneNumbers[j].value+'">'+contacts[i].phoneNumbers[j].value+'</a></p>';
						}
					}
    }
    if (contacts.length === 0) {
        html = '<li>';
        html += '<h2>No Contacts</h2>';
        html += '<label>No Contacts Listed</label>';
        html += '</li>';
    }
				html += '</ul>';
				html += '<p>&nbsp;</p>';
				html += '<p class="w3-block"> Found '+contacts.length+' contacts!</p>';
    $("#contactsList").html(html);

}

function onErrorContact(contactError) {
 alert('Oops Something went wrong!');
} 

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(), !mm[1] && '0', mm, !dd[1] && '0', dd].join(''); // padding
};

Date.prototype.yyyymm = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
		mm = pad(mm,2,'0');
  var dd = this.getDate();
  return [this.getFullYear(), '-', mm].join(''); // padding
};

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
function getName(c) {
    var name = c.displayName;
    if(!name || name === "") {
        if(c.name.formatted) return c.name.formatted;
        if(c.name.givenName && c.name.familyName) return c.name.givenName +" "+c.name.familyName;
        return "Nameless";
    }
    return name;
}
function malformedJSON2Array (tar) {
    var arr = [];
//				console.log("x"+tar+"x");
    tar = tar.replace(/^\{|\}$/g,'').split(',');
// 						tar = tar.split(",") ;
//				 this.split(str).join(newstr);
    for(var i=0,cur,pair;cur=tar[i];i++){
        arr[i] = {};
        pair = cur.split(':');
        arr[i][pair[0]] = /^\d*$/.test(pair[1]) ? +pair[1] : pair[1];
    }
    return arr;
}
function myReplace(str,substr ,newstr) {
    return str.split(substr).join(newstr); 
};
