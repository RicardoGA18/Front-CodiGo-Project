const setNavBg = () => {
  const NavCheck = document.getElementById('NavCheck')
  const BgMobNav = document.getElementById('BgMobNav')

  NavCheck.addEventListener('change',(e)=>{
    if(e.target.checked){
      BgMobNav.style.display = 'block'
    }else{
      BgMobNav.style.display = 'none'
    }
  })

  BgMobNav.addEventListener('click',(e)=>{
    const NavCheck = document.getElementById('NavCheck')
    NavCheck.checked = false
    e.target.style.display = 'none'
  })
}

export default setNavBg