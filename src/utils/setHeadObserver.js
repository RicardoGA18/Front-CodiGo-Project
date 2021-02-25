const setHeadObserver = () => {
  const StaticHead = document.getElementById("StaticHead")

  const handleIntersection = (entries) => {
    const entry = entries[0]
    const StaticHead = document.getElementById("StaticHead")
    const DesktopHead = document.getElementById("DesktopHead")

    if( (StaticHead) && (DesktopHead) ){
      if(entry.isIntersecting){
        StaticHead.style.marginBottom = '0'
        DesktopHead.style.position = 'relative'
        DesktopHead.style.top = 'initial'
        DesktopHead.style.left = 'initial'
      }else{
        StaticHead.style.marginBottom = '70px'
        DesktopHead.style.position = 'fixed'
        DesktopHead.style.top = '0'
        DesktopHead.style.left = '0'
      }
    }
  }

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0,
  })

  observer.observe(StaticHead)
}

export default setHeadObserver
