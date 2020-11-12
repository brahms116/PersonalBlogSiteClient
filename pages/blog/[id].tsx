import { useRouter } from "next/router"
import Post from "../../components/Post"
import Layout from "../../layout"



const PostPage = ()=>{

    
    return(
        <Layout>
            <div className="post">
                <h1>THIS IS MY FIRST POST</h1>
                <sub>IT WAS CREATED 2 WEEKS AGO, DAVID KWONG</sub>
                <div className="imageContainer">
                    <img src="https://images.unsplash.com/photo-1582133456397-cb5dc96e9f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1403&q=80" alt="Picture"/>
                </div>
                <p>I’m ever so thankful that God placed me on the Amos bus, crawling through the red stained outback of Australia. Through this two week episode, God has really stamped in bold the word “humility” in my mental image of serving God and evangelism. In the past, sinful pride has led me to the paradigm in which I, myself, am responsible for convincing others of the truth of the Gospel. That somehow the existence of a God we can’t even begin to fathom can be proven through rational arguments. That somehow, my knowledge of the Christian faith or my past personal experiences of God can heighten the value of my resume; as if I was a more eligible candidate for God’s mission work! </p>
                <h2>OTHER RELEVANT POSTS</h2>
                <Post/>
                <Post/>
            </div>
            
            <style jsx>{`
                h2{
                    margin-top:6rem;
                    margin-bottom:2.8rem;
                }
                img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                    object-position:center;
                }
                sub{
                    margin-top:1.5rem;
                    padding-left:5px;
                }
                .imageContainer{
                    margin-top:4.65rem;
                    width:100%;
                    height:18rem;
                    background:#f9f9f9;
                    overflow:hidden;
                    border-radius:0.3rem;
                    margin-bottom:3rem;
                }
                .post{
                    color:#2c2c2c;
                    margin:10rem 0;
                    padding: 0 2rem;
                    display:flex;
                    flex-direction:column;
                    width:100%;
                }
                
                @media (min-width:768px){
                    .post{
                        padding: 0 4rem;
                    }
                    .imageContainer{
                        height:26rem;
                    }
                }
                @media (min-width:992px){
                    .post{
                        padding: 0 8rem;
                        width:992px;
                    }
                    .imageContainer{
                        height:32rem;
                           
                    }
                }
            `}</style>
        </Layout>
    )
}

export default PostPage