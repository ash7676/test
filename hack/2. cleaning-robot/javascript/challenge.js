// Robot controller implementation

import { robotControl, Direction } from "./robot-api.js";

const rc = robotControl("../resources/room-layout-1.txt");
const api = rc.robotApi;
// console.log("move--------",api.move())
// console.log("current DIR-----",api.getDirection());
// console.log("change dir---",api.turnLeft());
// console.log("new current DIR-----",api.getDirection());
// console.log("this turn left---",api.turnLeft())
// console.log("show left---",api.getDirection())
// console.log("get pos-----",api.getPosition());
// console.log("get position ahead-----",api.getPositionAhead());

cleanRooms(api);
rc.evaluateResult();

// Robot API
//
// api.move(); // move robot one step forward
// api.turnLeft(); // turn robot 90 degrees to the left
// api.turnRight(); // turn robot 90 degrees to the right
// api.getDirection(); // return the current direction, e.g. Direction.RIGHT
// api.isBarrierAhead(); // true -> barrier ahead
// api.getPosition(); // returns the current robot position, e.g. { x: 1, y: 2 }
// api.getPositionAhead(); // returns the position in front of the robot, doesn't check if a barrier

function cleanRooms(api) {
  // TODO add code here

  // matrix size is  7* 5

  console.log("robot initial position:---", api.getPosition());
  console.log("robot initial directiion------", api.getDirection());
  api.turnLeft();
  api.turnLeft();
  console.log("robot new directiion------", api.getDirection()); //left
  console.log("ne dir after mvoing---", api.getPosition());

  //clean first row
  //DIR= LEFT
  for (let r1 = 0; r1 <= 3; r1++) {
    api.move();
  }

  console.log("position after first row-----", api.getPosition());
  //DIR DOWN -> DIR LEFT
  //CLEAN SECOND ROW
  api.turnLeft(); //DOWN
  api.move();
  api.turnLeft();
  console.log("dir2=---", api.getDirection());
  for (let r2 = 0; r2 <= 4; r2++) {
    api.move();
  }

  console.log(" position after cleaning second row----", api.getPosition());
  //7,1
  api.turnRight()
  api.move();
  api.turnRight()

  for (let r2 = 0; r2 <= 4; r2++) {
    api.move();
  }
  console.log("dir after cleaning thrid row---", api.getDirection());

  api.turnLeft();
  api.move();
  api.turnLeft()
  console.log("dir now11-----",api.getDirection())
  console.log("pos------",api.getPosition())
  for(let i=0; i<=3; i++){
    api.move()
  }
  console.log("POST-----",api.getPosition())
  api.turnLeft();
  api.turnLeft();
  for(let i=0; i<=7; i++){
    api.move()
  }
  console.log("POSSS----",api.getPosition())
  console.log("dir---",api.getDirection())

  api.turnLeft();
  api.move();
  console.log("POSSS----",api.getPosition())
  console.log("dir---",api.getDirection())
  api.turnLeft();

  console.log("DIRRR----",api.getDirection())
  for(let i=0; i<=6; i++){
    api.move()
  }
}

