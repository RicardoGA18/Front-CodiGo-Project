const setSliderMq = () => {
  // Tablet
  const matchMediaQueryTablet = (mq) => {
    if(mq.matches){
      const left = document.querySelector('.Slider .Slider__Left i')
      const right = document.querySelector('.Slider .Slider__Right i')
      left.className = 'fas fa-angle-left fa-3x'
      right.className = 'fas fa-angle-right fa-3x'
    }else{
      const left = document.querySelector('.Slider .Slider__Left i')
      const right = document.querySelector('.Slider .Slider__Right i')
      left.className = 'fas fa-angle-left fa-2x'
      right.className = 'fas fa-angle-right fa-2x'
    }
  }
  const mqTablet = window.matchMedia("(min-width: 500px)")
  matchMediaQueryTablet(mqTablet)
  mqTablet.addListener(matchMediaQueryTablet)

  //Desktop
  const matchMediaQueryDesktop = (mq) => {
    if(mq.matches){
      const left = document.querySelector('.Slider .Slider__Left i')
      const right = document.querySelector('.Slider .Slider__Right i')
      left.className = 'fas fa-angle-left fa-4x'
      right.className = 'fas fa-angle-right fa-4x'
    }else{
      const left = document.querySelector('.Slider .Slider__Left i')
      const right = document.querySelector('.Slider .Slider__Right i')
      left.className = 'fas fa-angle-left fa-3x'
      right.className = 'fas fa-angle-right fa-3x'
    }
  }
  const mqDesktop = window.matchMedia("(min-width: 1000px)")
  matchMediaQueryDesktop(mqDesktop)
  mqDesktop.addListener(matchMediaQueryDesktop)
}

export default setSliderMq