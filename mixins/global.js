// this.$gasp.registerEffect({
//   name:"animeElement",
//   effect:(targets, config) =>{
//     return this.$gsap.to(targets,{
//       x:config.x,
//       y:config.y
//     })
//   }
// })



export default {
  mounted() {
    this.$gsap.config({
    nullTargetWarn:false
    })
    document.body.addEventListener("mousemove", event =>{
      const mouseY = event.clientY
      const mouseX = event.clientX

      this.$gsap.to('.circle',{
        x:mouseX/40,
        y:mouseY/40
      })

      this.$gsap.to('.circleProject',{
        x:mouseX/40,
        y:mouseY/40
      })

      this.$gsap.to('.donut',{
        x:-mouseX/60,
        y:-mouseY/60
      })

      this.$gsap.to('.donutProject',{
        x:-mouseX/60,
        y:-mouseY/60
      })
    })

    this.$gsap.timeline({
      duration: 0.6,
    })
    .to('.title', {
      autoAlpha: 1,
      x: 0,
      scale:1
    })
    .to('.txt', {
      autoAlpha: 1,
      x: 0,
    },"<0.65")
    .to('.gradientImg', {
      autoAlpha: 1,
      y: 0,
    },"<0.75")
    .to('.animePicture',{
      autoAlpha:1,
      x:0,
      scale:1
    },"<0.75")
    .to('.skills',{
      autoAlpha:1,
      y:0
    },">")
    .to('.logo',{
      autoAlpha:1,
      x:0,
      stagger:{each:0.5}
    },">")
    .to('.btnDiv',{
      autoAlpha:1,
      x:0,
    },">")
    .to('.myProject h1',{
      autoAlpha:1,
      y:0,
    },">")
  },

  methods:{
    visibilityChanged(isVisible, entry) {
      if (entry.isIntersecting){
        this.$gsap.timeline({
          ease:'power4.out',
          duration:.6,
        })
        .to('.weatherApi',{
          autoAlpha:1,
          x:0,
          stagger:{each:0.5}
        })
      }
    },
    visibilityProjectElectronic(isVisible,entry){
      if (entry.isIntersecting){
        this.$gsap.timeline({
          ease:'power4.out',
          duration:.6,
        })
        .to('.projectElectronic',{
          autoAlpha:1,
          y:0,
          stagger:{each:0.5}
        })
      }
    },
    visibilityShopApp(isVisible,entry){
      if (entry.isIntersecting){
        this.$gsap.timeline({
          ease:'power4.out',
          duration:.6,
        })
          .to('.shopApp',{
            autoAlpha:1,
            x:0,
            stagger:{each:0.5}
          })
      }
    },
    visibilityEshop(isVisible,entry){
      if (entry.isIntersecting){
        this.$gsap.timeline({
          ease:'power4.out',
          duration:.6,
        })
          .to('.eshop',{
            autoAlpha:1,
            x:0,
            stagger:{each:0.5}
          })
      }
    },
  }
}

