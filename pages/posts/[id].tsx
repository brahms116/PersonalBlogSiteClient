import { useRouter } from "next/router"
import Post from "../../components/Post"
import Layout from "../../layout"
import {GetStaticPaths, GetStaticProps} from 'next'
import { graphqlClient } from "../../graphql"
import { gql } from "graphql-request"
import { PostDataReponseData, PostPageResponse, PostHeading, PostIdsResponse } from "../../interfaces"
import formatDate from '../../formatDate'


interface PostPageProps extends PostDataReponseData{
    relevantPosts?:PostHeading[]
}


const PostPage = (props:PostPageProps)=>{

    const link = "https://images.unsplash.com/photo-1476490445914-cc8ed84a4277?ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80"
    // console.log(props)
    return(
        <Layout>
            <div className="post">
                <h1>{props.title?.toUpperCase()}</h1>
                <sub>{formatDate(props.createdAt!)+", DAVID KWONG"}</sub>
                <div className="imageContainer">
                    <img src={props.src?props.src:link} alt="Picture"/>
                </div>
                {props.para?.map((x,i)=>{return(
                    <p key={i}>{x}</p>
                )})}
                {props.relevantPosts && <h2>OTHER RELEVANT POSTS</h2>}
                {props.relevantPosts?.map((x,i)=>{
                    return(
                        <Post {...x} key={i}/>
                    )
                })}
            </div>
            
            <style jsx>{`
                h1{
                    overflow-wrap:break-word;
                }
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
                    max-height:18rem;
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
                    overflow-x:hidden;
                }
                
                @media (min-width:768px){
                    .post{
                        padding: 0 4rem;
                    }
                    .imageContainer{
                        max-height:26rem;
                    }
                }
                @media (min-width:992px){
                    .post{
                        padding: 0 8rem;
                        width:992px;
                    }
                    .imageContainer{
                        max-height:32rem;
                           
                    }
                }
            `}</style>
        </Layout>
    )
}

export default PostPage



export const getStaticPaths:GetStaticPaths = async () =>{
    const query = gql`
        {
            AllPostId{
                isError
                msg
                ids
            }
        }
    `
    const ids:PostIdsResponse = await graphqlClient.request(query)
    return{
        paths:ids.AllPostId.ids!.map(x=>({params:{id:x}})),
        fallback:true
    }
}

export const getStaticProps:GetStaticProps = async (context)=>{

    const id = `"${context.params!.id}"`

    const query = gql`
        {
            getPostById(id:${id}){
                isError
                msg
                title
                src
                description
                para
                createdAt
            }
            getPostHeadingsByDate(opts:{size:4}){
                isError
                msg
                cursor
                posts{
                    id
                    title
                    createdAt
                    description
                }
            }
        }
    `
    try {
        const res:PostPageResponse = await graphqlClient.request(query)
        console.log(res)
        const relevantPosts:PostHeading[] =[]
        if(!res.getPostHeadingsByDate.isError){
            for(let x of res.getPostHeadingsByDate.posts){
                if(x.id!==context.params!.id){
                    relevantPosts.push(x)
                }
            }
        }
        if(!res.getPostById.isError){
            return{
                props:{
                    title:res.getPostById.title || "Title Missing",
                    description:res.getPostById.description || "Description Missing",
                    src:res.getPostById.src,
                    para:res.getPostById.para || ["Missing Paragraphs"],
                    createdAt:res.getPostById.createdAt,
                    relevantPosts:relevantPosts
                
                },
                revalidate:1
            }
        }else{
            throw res.getPostById.msg
        }
    } catch (error) {
        console.log(error)
    }
    return{
        props:{}
    }
    
}