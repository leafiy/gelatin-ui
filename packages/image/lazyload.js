 // function LazyLoad(src, options) {
 //   // this.settings = extend(defaults, options || {});

 // }


 // LazyLoad.prototype = {

 // }

 class LazyLoad {
   constructor(el, src, options = {}) {
     if (!el) {
       throw new Error('must assign a element')
     }
     if (src) {
       this.img = new Image()
       this.img.src = src
       this.src = src
     }

     this.el = el
     this.options = options
     this.observer = null;
     this.init();
   }
   init() {
     if (!root.IntersectionObserver) {
       this.loadImages();
       return;
     }
     let observerConfig = {
       root: this.settings.root,
       rootMargin: this.settings.rootMargin,
       threshold: [this.options.threshold]
     };
     this.observer = new IntersectionObserver(function(entries) {
       Array.prototype.forEach.call(entries, function(entry) {
         if (entry.isIntersecting) {
           this.observer.unobserve(entry.target);
           if (!this.src) {
             let src = entry.target.getAttribute(this.src);
             let srcset = entry.target.getAttribute(self.settings.srcset);
           }

           if ("img" === entry.target.tagName.toLowerCase()) {
             if (src) {
               entry.target.src = src;
             }
             if (srcset) {
               entry.target.srcset = srcset;
             }

           } else {
             entry.target.style.backgroundImage = "url(" + src + ")";
           }
         }
       });
     }, observerConfig);

     Array.prototype.forEach.call(this.el, function(el) {
       this.observer.observe(el);
     });
   }
   loadAndDestroy() {
     if (!this.settings) { return; }
     this.loadImages();
     this.destroy();
   }
   loadImages() {
     if (!this.settings) { return; }
     Array.prototype.forEach.call(this.el, function(image) {
       let src = image.getAttribute(self.settings.src);
       let srcset = image.getAttribute(self.settings.srcset);
       if ("img" === image.tagName.toLowerCase()) {
         if (src) {
           image.src = src;
         }
         if (srcset) {
           image.srcset = srcset;
         }
       } else {
         image.style.backgroundImage = "url('" + src + "')";
       }
     });
   }
   destroy() {
     if (!this.settings) { return; }
     this.observer.disconnect();
     this.settings = null;
   }
 }
