var images = new Array()
     images[0] = "img/avatar12.png";     
     images[1] = "img/avatar12.PNG";   
	 images[2] = "img/avatar007.jpg"; 
     images[3] = "img/Avatar03.png"; 	 
	 images[4] = "img/avatar1.png";
     images[5] = "img/iuq.png";
     setInterval("changeImage()", 30000);
     var x=0;
     function changeImage()
     {
                document.getElementById("img").src=images[x]
                x++;
                if (images.length == x) 
                {
                    x = 0;
                }
     }
  <!-- End Page Container -->