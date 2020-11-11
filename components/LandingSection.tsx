import image from '../media/blog.svg'

export default function LandingSection(){
    return(
        <div>
            <div className="landing">
                <div className="landingHeading">
                    <h1>MY 2cs ON FAITH</h1>
                <sub>A CHRISTIAN BLOG BY <span className="name">DAVID KWONG</span></sub>          
                </div>
                <img src={image}></img>
            </div>
        <style jsx>{`
            
            h1{
                margin-bottom:1.875rem;
            }      
              
            .landing{
                overflow-x:hidden;
                max-width: 100vw;
                min-height: 100vh;
                background: #2c2c2c;
                display:grid;
                grid-template:
                  "." 7rem
                  "svgA" auto
                  "." 4rem
                  "textA" auto
                  "." 9rem / 100vw;
                justify-items:center;
            
            }
      
            .landingHeading{
                grid-area:textA;
                text-align:center;
                color:#f6f6f6;
                display:flex;
                flex-direction:column;
                align-self:center;
            }
      
            .landing img{
                grid-area:svgA;
                height:22rem;
            
            }
    
            .name{
                color:#4AA9EE;
            }
            @media(min-width:768px){
                .landing img{
                    height:30rem;
                }
            }   
            @media (min-width:992px) {
                .landing{
                grid-template:
                " . . " 1fr
                "textA svgA" auto
                " . ." 1fr / 1fr 1fr
                }
                .landingHeading{
                text-align:left;
                padding-right:3.7rem;
                padding-left:2.2rem;
                justify-self:end;
                }
                .landing img{
                justify-self:start;
                padding-left:10vw;
                padding-right:2.2rem;
                }
                
                
            }  
      
             
      
      
        
        `}</style>
      </div>
    )
}

