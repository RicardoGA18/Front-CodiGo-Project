const setIconMq = (icon,classMobile,classTablet,classDesktop) => {
  //Tablet
  const matchMediaQueryTablet = (mqTablet) => {
    
    if(mqTablet.matches){
      icon.className = classTablet
    }else{
      icon.className = classMobile
    }
  }
  const mqTablet = window.matchMedia("(min-width: 500px)")
  mqTablet.addListener(matchMediaQueryTablet)
  //Desktop
  const matchMediaQueryDesktop = (mqDesktop) => {
    
    if(mqDesktop.matches){
      icon.className = classDesktop
    }else{
      matchMediaQueryTablet(mqTablet)
    }
  }
  const mqDesktop = window.matchMedia("(min-width: 1000px)")
  matchMediaQueryDesktop(mqDesktop)
  mqDesktop.addListener(matchMediaQueryDesktop)
}

export default setIconMq