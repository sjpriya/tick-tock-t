var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(600,600); 
    angleMode(DEGREES);      
}

function draw(){
    background("black");
        
    hr = hour();
    mn = minute();
    sc = second();

    textSize(50);
    textFont("Arial");
    
    stroke("orange");
    fill("orange");
    text(hr+":" + mn + ":" + sc,220,550);

    textFont("arial");
    textSize(18);
    noStroke();
    fill("white");
    text("12", 345,120);

    noStroke();
    fill("white");
    text("3", 480,255);

    noStroke();
    fill("white");
    text("9", 190,255);

    noStroke();
    fill("white");
    text("6", 350,400);

    //Translation and rotation 
    translate(350,250);
    rotate(-90);

    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    //drawing seconds hand 
    // rotate with scAngle 
    // with red stroke and strokeweight 5 
    // line between 0,0 and 115,0
    

    //drawing minutes hand
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7.5);
    line(0,0,115,0);
    pop();

    //drawing hour hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(10);
    line(0,0,75,0);
    pop();

    stroke(255,0,255);
    point(0,0);

    //drawing the arcs
    
    //strokeWeight(5);
    //noFill();
    //Seconds
    //stroke(255,0,0);
    //arc(0,0,400,400,0,scAngle);
    //Minutes
    strokeWeight(7.5);
    stroke(0,255,0);
    arc(0,0,370,370,0,mnAngle);
    //Hour
    strokeWeight(10);
    stroke(0,0,255);
    arc(0,0,340,340,0,hrAngle);

    drawSprites();

}