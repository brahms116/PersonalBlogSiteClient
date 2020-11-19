import burgerSVG from '../media/Burger.svg'
import darkBurgerSVG from '../media/BurgerDark.svg'
import closeSVG from '../media/Close.svg'
import {motion, useAnimation} from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/router'
export default function Navigation(){
    const router= useRouter()
    const isHome = !router.pathname.includes("posts")
    const menuControl = useAnimation()
    const topBarControl =useAnimation()
    const [menuState,setMenuState] = useState(false)
    const [isAnimating,setIsAnimating] = useState(false)
    const handleClick = async()=>{
      if(!isAnimating){
        setIsAnimating(true)
        if(menuState){
          window.scrollTo(0,0)
          await menuControl.start({
            opacity:0
          })
          await topBarControl.start({
            opacity:1
          })
          setMenuState(false)
          setIsAnimating(false)
        }else{
          topBarControl.start({
            opacity:0
          })
          await menuControl.start({
            display:"block",
          })
          await menuControl.start({
            opacity:1
          })
          setMenuState(true)
          setIsAnimating(false)
        }
      }
    }
    return(
        <div>
            <nav className={isHome?"":"nothome"}>
                <h6 className="hover">DAVID: BLOG</h6>

                <div className="mobileMenu">
                  <motion.div animate={topBarControl}>
                    <div className="menubutton hover" onClick={handleClick}>
                      <img src={isHome?burgerSVG:darkBurgerSVG}/>
                    </div>
                  </motion.div>
                  <motion.div initial={{
                    display:"none",
                    opacity:0
                  }} animate={menuControl}>
                    <div className="slideMenu">
                        <div className="top">
                          <img onClick={handleClick} src={closeSVG} alt="" className="menubutton"/>
                        </div>
                        <ul className="navLinks">
                            <li className="current">HOME</li>
                            <li className="hover">ABOUT</li>
                        </ul>
                    </div>
                  </motion.div>
                </div>
                <ul className="navlinks">
                  <li className="current">HOME</li>
                  <li className="hover">ABOUT</li>
                </ul>
            </nav>
            <style jsx>{`
                h6{
                  font-weight:400;
                }
                .nothome{
                  color:#2c2c2c;
                  background:none
                }
                nav{
                    position:absolute;
                    top:0;
                    color:#f6f6f6;
                    display:flex;
                    justify-content:space-between;
                    width:100%;
                    align-items:center;
                    padding: 1.5rem 1.2rem;
                    overflow-x:hidden;
                    background:#2c2c2c;
                  }
                  .navlinks{
                    display:none;
                    list-style:none;
                  }

                  .slideMenu{
                    position:fixed;
                    background:#2c2c2c;
                    overflow:hidden;
                    color:#f6f6f6;
                    height:100vh;
                    width:100vw;
                    top:0;
                    left:0;
                  }
                  .slideMenu .top{
                    position:fixed;
                    width:100%;
                    padding: 1.5rem 1.2rem;
                    display:flex;
                    flex-direction:row-reverse;
                  }

                  .slideMenu .navLinks{
                    width:100%;
                    height:100%;
                    display:none;
                    list-style:none;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                  }
                  .slideMenu .navLinks li{
                    margin:0.5rem 0;
                    font-size:1.5rem;
                  }

                  .current{
                    color:#4AA9EE
                  }
          
                  @media(min-width:768px){
                    .mobileMenu{
                      display:none;
                    }
                    .navlinks{
                      display:flex;
                    }
                    .mobileMenu{
                      display:none;
                    }
                    .navlinks li{
                      padding:0 ${25/16}rem;
                      font-size:1rem;          
                    }
                    nav{
                      padding:${35/16}rem ${58/16}rem;
                    }
                  }
            
            `}</style>
        </div>
    )
}