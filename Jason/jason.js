let http = new XMLHttpRequest();

let xhttp = document.getElementbyId('mylist');
	function loadAjax() {
		http.onreadstatechange =function () {
			xhttp.innerHTML = "Loading....";
			if(http.readyonstate == 4 && http.status == 200){
				let Data = jason.parse(http.response);
				let html ="";
				for(let i=0;i<10;I++){
					html = "<li"+Data[i].complete+"</li>"

				}
				xhttp.innerHTML = html;
			}
		}
	}
	xhttp.OPEN("GET"."jasonplacerholder.typicode.com/todos");
		  true;
	 xhttp.send();
