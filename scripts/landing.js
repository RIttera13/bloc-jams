var pointsArray = document.getElementsByClassName('point');


var animatePoints = function () { 
             
    var points = document.getElementsByClassName('point');
    
    var revealPoint = function(location) {
        points[location].style.opacity = 1;
        points[location].style.transform = "scaleX(1) translateY(0)";
        points[location].style.msTransform = "scaleX(1) translateY(0)";
        points[location].style.WebkitTransform = "scaleX(1) translateY(0)"; 
    }
    
    forEach(points,revealPoint);
};

window.onload = function() {
   if (window.innerHeight > 950) {
       animatePoints(pointsArray);
   }
    
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance= sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    
    window.addEventListener("scroll", function(event) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
        animatePoints(pointsArray);
    }
  });
}