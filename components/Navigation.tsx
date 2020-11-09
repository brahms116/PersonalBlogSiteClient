

export default function Navigation(){
    return(
        <div>
            <nav>
                <h6 className="hover">DAVID KWONG: BLOG</h6>
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
                    padding: 1rem 1rem;
                  }
                  .navlinks{
                    display:none;
                    list-style:none;
                  }
          
                  .navlinks li{
                    padding:0 ${25/16}rem;
                    font-size:1rem;
          
                  }
                  @media(min-width:768px){
                    .navlinks{
                      display:flex;
                    }
                    nav{
                      padding:${35/16}rem ${58/16}rem;
                    }
                  }
            
            `}</style>
        </div>
    )
}