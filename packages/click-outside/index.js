import Vue from "vue";
const HANDLER = "__click_outside";

function bind(el, binding, vnode) {
  unbind(el);

  let vm = vnode.context;

  let callback = binding.value;
  if (typeof callback !== "function") {
    throw new Error("binding.value should be a function");
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  let initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: this test used to be just `el.containts`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (
      initialMacrotaskEnded &&
      (path ? path.indexOf(el) < 0 : !el.contains(ev.target))
    ) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener("click", el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener("click", el[HANDLER], false);
  delete el[HANDLER];
}

const directive = {
  name: "ui-click-outside",
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind
};

const mixin = {
  directives: { onClickOutside: directive }
};

export { directive, mixin };
