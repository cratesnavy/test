//SCORE BOX +1 +2 +3
    var clicks = 0;     
    function one_point() {
        clicks += 1; 
        document.getElementById("clicks").innerHTML = clicks;
    }    
     function two_point() {
        clicks +=2;
         document.getElementById("clicks").innerHTML = clicks; 
     }     
     function three_point() {
        clicks +=3;
         document.getElementById("clicks").innerHTML = clicks; 
     }
     function onClickReset(){
         clicks =0;
         document.getElementById("clicks").innerHTML = clicks;
     }
	     var clicks2 = 0;     
    function one_point2() {
        clicks2 += 1; 
        document.getElementById("clicks2").innerHTML = clicks2;
    }    
     function two_point2() {
        clicks2 +=2;
         document.getElementById("clicks2").innerHTML = clicks2; 
     }     
     function three_point2() {
        clicks2 +=3;
         document.getElementById("clicks2").innerHTML = clicks2; 
     }
     function onClickReset2(){
         clicks2 =0;
         document.getElementById("clicks2").innerHTML = clicks2;
     }