let touches = {
  touchstart: { x: -1, y: -1 },
  touchmove: { x: -1, y: -1 },
  touchend: false,
  direction: "undetermined"
};

const touchHandler = ({ event, axis = "x" }) => {
  let touch;
  if (typeof event !== "undefined") {
    event.preventDefault();
    if (typeof event.touches !== "undefined") {
      touch = event.touches[0];
      switch (event.type) {
        case "touchstart":
        case "touchmove":
          touches[event.type].x = touch.pageX;
          touches[event.type].y = touch.pageY;
          break;
        case "touchend":
          touches[event.type] = true;
          if (axis == "x") {
            if (touches.touchstart.x > -1 && touches.touchmove.x > -1) {
              touches.direction =
                touches.touchstart.x < touches.touchmove.x ? "right" : "left";

              return touches.direction;
            }
          } else {
            if (touches.touchstart.y > -1 && touches.touchmove.y > -1) {
              touches.direction =
                touches.touchstart.y < touches.touchmove.y ? "down" : "up";
              return touches.direction;
            }
          }
          break;
        default:
          break;
      }
    }
  }
};

export default touchHandler;
