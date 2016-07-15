varpointsArray = document.getElementsByClassName('point');

var animatePoints = function(points){        
             
    var revealFirstPoint = function() {
        points[0].style.opacity = 1;
        points[0].style.transform = "scaleX(1) translateY(0)";
        points[0].style.msTransform = "scaleX(1) translateY(0)";
        points[0].style.WebkitTransform = "scaleX(1) translateY(0)";
    };
               
    var revealSecondPoint = function() {
        points[1].style.opacity = 1;
        points[1].style.transform = "scaleX(1) translateY(0)";
        points[1].style.msTransform = "scaleX(1) translateY(0)";
        points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
    };
            
    var revealThirdPoint = function() {
        points[2].style.opacity = 1;
        points[2].style.transform = "scaleX(1) translateY(0)";
        points[2].style.msTransform = "scaleX(1) translateY(0)";            
        points[2].style.WebkitTransform = "scaleX(1) translateY(0)";  
    };
             
    revealFirstPoint();
    revealSecondPoint();
    revealThirdPoint();
             
};

window.onload = function() {
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    
    window.addEventListener('scroll', function(event) {
    console.log("current offset from the top is " + sellingPoints.getBoundingClientRect().top + "pixels");
    });
}