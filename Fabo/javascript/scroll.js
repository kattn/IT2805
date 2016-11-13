function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

/* returns a y position of en element based on the ID */
function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;

    /* Adds the elements offset, and the parentNodes offset, to top to y untill
    all the parents, except the body tag, is accounted for */
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

/* Scroll smoothly from the current possition to the target eID */
function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    
    /* Guarentees the distance is positive */
    var distance = stopY > startY ? stopY - startY : startY - stopY;

    /* No need to smoothscroll over short distances */
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }

    /* Sets the speed based on the distance, maxing at 20 */
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;

    /* Sets a step size */
    var step = Math.round(distance / 25);

    /* Makes sure the scroll direction is right */
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;

    /* Scrolling, one loop for each direction */
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
    return false;
}

/*HENTET FRA: http://web.archive.org/web/20140213105950/http://itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript*/