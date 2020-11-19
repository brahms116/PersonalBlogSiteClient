import { useRouter } from "next/router"
import formatDate from "../formatDate"
import { PostHeading } from "../interfaces"


function Divider(){
    return(
        <div className="divider">
            <style>{`
                .divider{
                    width:100%;
                    height:1px;
                    background:#c4c4c4;
                }
            `}</style>
        </div>
    )
}
export default function Post(props:PostHeading){

    const router = useRouter()

    const handleClick = ()=>router.push(`./posts/${props.id}`)
    return(
        <div>
            <div className="post hover" onClick={handleClick}>
                <h4>{props.title}</h4>
                <sub>{formatDate(props.createdAt!)}</sub>
                <p>{props.description}</p>
            </div>
            <Divider></Divider>
            <style jsx>{`
            
            h4{
                grid-area:titleA;
            }
            sub{
                grid-area:subA;
            }
            p{
                grid-area:pA;
            }
            .post{
                display:grid;
                grid-template:
                    "." 4rem
                    "titleA" auto
                    "." 0.5rem
                    "subA" auto
                    "." 1.75rem
                    "pA" auto
                    "." 4rem
                    / 100%;

            }
            .post:hover{
                background:#f9f9f9;
            }
            @media (min-width:768px){

            }
            @media (min-width:992px){

            }

            `}</style>
        </div>
    )
}