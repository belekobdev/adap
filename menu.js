const mc = new Hammer(document.body);
const swipeMenu = document.querySelector("#swipeMenu").classList;

// listen to events...
mc.on("swipeleft swiperight", function (ev) {
  if (ev.type === "swipeleft") {
    swipeMenu.remove("swipe-menu--show");
  } else {
    swipeMenu.add("swipe-menu--show");
  }
});
