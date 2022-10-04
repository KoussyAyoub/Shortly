var i = 0 ;
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  var y = document.getElementById("login");
  var z = document.getElementById("shortly");
  var a = document.getElementById("hr");
  if (i%2 == 0) {
    y.className = "visibl1";
    z.className = "margin-a";
    a.className = "hr-class1";
    i+=1;
  } else {
    y.className = "visibl";
    z.className = "";
    a.className = "hr-class"
    i+=1;
  }
  
}
