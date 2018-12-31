const mouseTracking = function(container) {
  container =
    typeof container == "string"
      ? document.querySelector(container)
      : container;
  const mouse = { x: 0, y: 0 };

  function tracking(e) {
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY;
    var containerRect = container.getBoundingClientRect();

    if (
      mouse.x > containerRect.left &&
      mouse.x < containerRect.right &&
      mouse.y > containerRect.top &&
      mouse.y < containerRect.bottom
    ) {
      return true;
    } else {
      return false;
    }
  }

  container.addEventListener(
    "mousemove",
    e => {
      tracking(e);
    },
    false
  );
};

export default mouseTracking;
