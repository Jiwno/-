let model_0, model_1, model_2;
let rot = 0;
let video;
let c;
let myColor = "green";

function preload() {
  model_0 = loadModel('Thinker.obj');
  model_1 = loadModel('unicorn.obj');
  //model_2 = loadImage('mone.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  video = createCapture(VIDEO);
  //video.loadPixels();

}

function draw() {
  lights();

  background(0);
  rectMode(CENTER);
  rect(0, 0, 40, 40);

  stroke(255);
  line(0, 0, -1 * width / 2, -1 * width / 2);
  line(0, 0, -1 * width / 2, 1 * width / 2);
  line(0, 0, 1 * width / 2, -1 * width / 2);
  line(0, 0, 1 * width / 2, 1 * width / 2);
  
  noStroke();

  //c = video.get(video.width / 2, video.height / 2);

  if (c[0] > c[1] && c[0] > c[2]) {
    myColor = "red"
  } else if (c[1] > c[0] && c[1] > c[2]) {
    myColor = "green"
  } else if (c[2] > c[1] && c[2] > c[0]) {
    myColor = "blue"
  }

  //print(myColor);


  switch (myColor) {
    case "red":
      print("red");
      //fill(255, 0, 0);

      for (let i = 0; i < 4; i++) {
        push();
        rotateZ(HALF_PI * i);
        translate(0, width/7, 0);
        rotateY(rot);
        scale(1.5);
        model(model_0)
        pop();
      }

      break;

    case "green":
      print("green");
      //fill(0, 255, 0);

      for (let i = 0; i < 4; i++) {
        push();
        rotateZ(HALF_PI * i);
        translate(0, width/7, 0);
        rotateY(rot);
        scale(1);
        model(model_1)
        pop();
      }

      break;

    case "blue":
      print("blue");
      //fill(0, 0, 255);

      for (let i = 0; i < 4; i++) {
        push();
        rotateZ(HALF_PI * i);
        translate(0, width/7, 0);
        rotateY(rot);
        scale(1);
        model(model_2)
        pop();
      }

      break;
  }

  rot += 0.01;
}
