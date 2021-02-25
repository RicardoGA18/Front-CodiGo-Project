import React, {useEffect, useState} from 'react'
import setSliderMq from '../../utils/setSliderMq'
/* TEMP */
import sliders from '../../utils/temp/JsonSlider'

const Slider = () => {
  const setSlides = () => {
    return sliders.map((slide,_id)=>{
      return (
        <img src={slide} key={_id}/>
      )
    })
  }

  useEffect(() => {
    setSliderMq()
  },[])

  const [slide,setSlide] = useState(0)

  const rightSlider = () => {
    if(sliders.length !== 1){
      const newSlide = slide + 1
      const maximum = sliders.length - 1
      if(newSlide > maximum){
        setSlide(0)
      }else{
        setSlide(newSlide)
      }
    }
  }

  const leftSlider = () => {
    if(sliders.length !== 1){
      const newSlide = slide - 1
      const maximum = sliders.length - 1
      if(newSlide < 0){
        setSlide(maximum)
      }else{
        setSlide(newSlide)
      }
    }
  }

  useEffect(()=>{
    const images = Array.from(document.querySelectorAll('.Slider img'))
    images.forEach(image => {
      image.style.opacity = '0'
    })
    images[slide].style.opacity = '1'
  },[slide])

  const setClassControl = (controlNum) => {
    if(controlNum === slide){
      return 'Slider__Control is-active'
    }else{
      return 'Slider__Control'
    }
  }

  const setSliderControls = () => {
    let controls = [];
    for(let i = 0; i < sliders.length; i++){
      let control = (
        <div className={setClassControl(i)} key={i} onClick={() => {
          setSlide(i)
        }}></div>
      )
      controls.push(control)
    }
    return controls
  }

  return (
    <div className="Slider" >
      {setSlides()}
      <div className="Slider__Left" onClick={leftSlider}>
        <i className="fas fa-angle-left fa-2x"></i>
      </div>
      <div className="Slider__Right" onClick={rightSlider}>
        <i className="fas fa-angle-right fa-2x"></i>
      </div>
      <div className="Slider__ControlBox">
        <div className="Slider__Controls">
          {setSliderControls()}
        </div>
      </div>
    </div>
  )
}

export default Slider