import burgerSVG from '../media/Burger.svg'
import closeSVG from '../media/Close.svg'
export default function Navigation(){
    return(
        <div>
            <nav>
                <h6 className="hover">DAVID: BLOG</h6>
                <div className="mobileMenu">
                  <div className="menubutton hover">
                    <img src={burgerSVG}/>
                    <div className="slideMenu">
                        <div className="top">
                          <h6>Navigation</h6>
                          <img src={closeSVG} alt="" className="menubutton"/>
                        </div>

                    </div>
                  </div>
                </div>
                <ul className="navlinks">
                  <li className="hover">HOME</li>
                  <li className="hover">ABOUT</li>
                </ul>
            </nav>
            <style jsx>{`
                nav{
                    position:absolute;
                    color:#f6f6f6;
                    display:flex;
                    justify-content:space-between;
                    width:100%;
                    align-items:center;
                    padding: 1.5rem 1.2rem;
                    overflow-x:hidden;
                  }
                  .navlinks{
                    display:none;
                    list-style:none;
                  }

                  .slideMenu{
                    position:absolute;
                    top:0;
                    left:0;
                  }
          
                  @media(min-width:768px){
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