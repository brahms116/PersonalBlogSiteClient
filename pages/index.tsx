import Layout from '../layout'
import image from '../public/blog.svg'


export default function Home() {
  return (
    <Layout>
      <nav>
        <h6 className="hover">DAVID KWONG: BLOG</h6>
        <ul className="navlinks">
          <li className="hover">HOME</li>
          <li className="hover">ABOUT</li>
        </ul>
      </nav>
      <div className="landing">
            <div className="landingHeading">
                <h1>MY 2cs ON FAITH</h1>
              <sub>A CHRISTIAN BLOG BY <span className="name">DAVID KWONG</span></sub>          
            </div>
            <img src={image}></img>
      </div>
      <style jsx>{`
        nav{
          position:absolute;
          color:#f6f6f6;
          display:flex;
          justify-content:space-between;
          width:100%;
          align-items:center;
          
          padding:${35/16}rem ${67/16}rem;
        }
        h1{
          margin-bottom:1.25rem;
        }

        .navlinks{
          display:flex;
          list-style:none;
        }

        .navlinks li{
          padding:0 ${25/16}rem;
          font-size:1rem;

        }
        .landing{
          max-width: 100vw;
          height: 100vh;
          background: #2c2c2c;
          display:grid;
          grid-template:
            " . . " 1fr
            "textA svgA" auto
            " . ." 1fr / 1fr 1fr
        }

        .landingHeading{
          grid-area:textA;
          padding-right:3.7rem;
          padding-left:2.2rem;
          min-width:26rem;
          color:#f6f6f6;
          display:flex;
          flex-direction:column;
          justify-self:end;
          align-self:center;
        }

        .landing img{
          grid-area:svgA;
          justify-self:start;
          padding-left:8rem;
          padding-right:2.2rem;
        }


        .name{
          color:#4AA9EE;
        }

      
      `}</style>
    </Layout>
  )
}
