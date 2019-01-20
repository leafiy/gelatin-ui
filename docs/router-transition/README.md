# Router-transition

> from [maoberlehner/vue-router-page-transitions](https://github.com/maoberlehner/vue-router-page-transitions)

<router-transition-index></router-transition-index>



```html
<ui-router-transition :is-back="isBack">
 <router-view></router-view>
</ui-router-transition>
```

在路由设置里增加`{meta:{transitionName:'fade'}}`来指定过渡方式

支持 `fade` `slide` `zoom` 三种过渡模式



由于使用`router`路径的深度来判断路由行为是前进/后退，平行路由的前进后退可以根据具体项目来判断，并使用`isBack`来传入指定方向，比如

```javascript
watch:{
 $route(){
  if(this.$route.to.name == 'home' && this.$route.from.name =='index'){
   this.isBack=true
  }
 }
}
```