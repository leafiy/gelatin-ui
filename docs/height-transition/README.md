# Height transition

<height-transition-index></height-transition-index>


 ```html
  <ui-height-transition :duration="1000">
   put your element here
  </ui-height-transition>
 ```




动画event与vue transition 钩子相同

```javascript
v-on:before-enter="beforeEnter"
v-on:enter="enter"
v-on:after-enter="afterEnter"
v-on:enter-cancelled="enterCancelled"

v-on:before-leave="beforeLeave"
v-on:leave="leave"
v-on:after-leave="afterLeave"
v-on:leave-cancelled="leaveCancelled"
```