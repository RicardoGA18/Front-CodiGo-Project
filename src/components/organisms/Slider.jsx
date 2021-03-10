import React, {useEffect, useState} from 'react'
import setIconMq from '../../utils/setIconMq'
import { v4 as uuidv4 } from 'uuid'

const Slider = ({sliders,isProduct}) => {
  const rightIconId = uuidv4()
  const leftIconId = uuidv4()

  const slidesId = sliders.map(slideId => uuidv4())

  const setSlides = () => {
    return sliders.map((slide,_id)=>{
      return (
        <img src={slide} key={_id} data-slide={slidesId[_id]} />
      )
    })
  }

  useEffect(() => {
    const rightIcon = document.querySelector(`[data-icon="${rightIconId}"]`)
    const leftIcon = document.querySelector(`[data-icon="${leftIconId}"]`)
    if(isProduct){
      if((rightIcon) && (leftIcon)){
        setIconMq(
          rightIcon,
          'fas fa-angle-right fa-2x',
          'fas fa-angle-right fa-3x',
          'fas fa-angle-right fa-3x'
        )
        setIconMq(
          leftIcon,
          'fas fa-angle-left fa-2x',
          'fas fa-angle-left fa-3x',
          'fas fa-angle-left fa-3x'
        )
      }
    }else{
      if((rightIcon) && (leftIcon)){
        setIconMq(
          rightIcon,
          'fas fa-angle-right fa-2x',
          'fas fa-angle-right fa-3x',
          'fas fa-angle-right fa-4x'
        )
        setIconMq(
          leftIcon,
          'fas fa-angle-left fa-2x',
          'fas fa-angle-left fa-3x',
          'fas fa-angle-left fa-4x'
        )
      }
    }
  },[sliders])

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
    const images = []

    for(let i = 0; i < sliders.length; i++){
      const image = document.querySelector(`.Slider img[data-slide="${slidesId[i]}"]`)
      images.push(image)
    }

    images.forEach(image => {
      if(image){
        image.style.opacity = '0'
      }
    })
    if(images[slide]){
      images[slide].style.opacity = '1'
    }
  },[slide,sliders])

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
      {sliders.length > 1
        ? (<div className="Slider__Left" onClick={leftSlider}>
            <i className="fas fa-angle-left fa-2x" data-icon={leftIconId}></i>
          </div>)
        : (<></>)
      }
      {sliders.length > 1
        ? (<div className="Slider__Right" onClick={rightSlider}>
            <i className="fas fa-angle-right fa-2x" data-icon={rightIconId}></i>
          </div>)
        : (<></>)
      }
      {sliders.length > 1
        ? (<div className="Slider__ControlBox">
            <div className="Slider__Controls">
              {setSliderControls()}
            </div>
          </div>)
        : (<></>)
      }
    </div>
  )
}

export default Slider