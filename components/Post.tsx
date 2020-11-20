import { useRouter } from "next/router"
import formatDate from "../formatDate"
import { PostHeading } from "../interfaces"
import Link from 'next/link'


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

    return(
        <div>
            <Link href={`./posts/${props.id}`}>            
                <div className="post hover">
                    <h4>{props.title?.toUpperCase()}</h4>
                    <sub>{formatDate(props.createdAt!)+", DAVID KWONG"}</sub>
                    <p>{props.description}</p>
                </div>
            </Link>
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