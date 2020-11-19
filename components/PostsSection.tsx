import { PostHeading } from "../interfaces";
import Post from "./Post";


export default function PostsSection(props:{headings:PostHeading[]}){
    return(
        <div className="post">
            <h1>POSTS</h1>
            {props.headings.map((post,i)=><Post {...post} key={i}/>)}
            <style jsx>{`
                h1{
                    margin-top:6.1875rem;
                    margin-bottom:1.8rem;
                }
                .post{
                    color:#2c2c2c;
                    padding:0 2rem;
                    margin-bottom:1rem;

                }
                @media(min-width:768px){

                }
                @media(min-width:992px){
                    
                }
            `}</style>
        </div>        
    )
}