import image from '../media/blog.svg'
import {graphqlClient} from '../graphql'
import {gql} from 'graphql-request'
import {ChangeEvent, useState} from 'react'
import {motion,useAnimation} from 'framer-motion'



interface CreateReaderResponse{
    createReader:{
        isError?:boolean
        msg?:string
    }
}

export default function LandingSection(){

    const [value,setValue] = useState('')
    const [errorMsg,setErrorMsg] = useState('')
    const [isAnimating,setIsAnimating] = useState(false)

    const buttonControl = useAnimation()
    const loaderControl = useAnimation()
    const onChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setValue(event.currentTarget.value)
    }

    const validateEmail = (str:string)=>{
        const result = str.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        return result!=null
    }

    console.log(validateEmail("hello@gfmail.com"))


    const onSubmit = async()=>{
        if(validateEmail(value)){
            if(!isAnimating){
                setIsAnimating(true)
                await buttonControl.start({
                    opacity:0
                })
                await buttonControl.start({
                    display:'none',
                    transition:{duration:0}
                })
                await loaderControl.start({display:'block',opacity:0,
                transition:{
                    duration:0
                }})
                await loaderControl.start({
                    opacity:1
                })

                

                try {
                    const email = `"${value}"`
                    const result:CreateReaderResponse = await graphqlClient.request(gql`
                        mutation{
                            createReader(email:${email}){
                                isError
                                msg
                            }
                        }
                    `)
                    if(result.createReader.isError && result.createReader.msg){
                        setErrorMsg(result.createReader.msg.toUpperCase())
                    }else{
                        //success
                        setValue('')
                    }
                } catch (error) {
                    console.log(error)
                    setErrorMsg(error.toString())
                }

                await loaderControl.start({
                    opacity:0
                })
                await loaderControl.start({
                    display:'none',
                    transition:{duration:0}
                })
                await buttonControl.start({display:'block',opacity:0,
                transition:{
                    duration:0
                }})
                await buttonControl.start({
                    opacity:1
                })
                setIsAnimating(false)
                
            
            }
        }else{
            setErrorMsg('SORRY, YOUR EMAIL WAS NOT VALID')
        }
    }
    return(
        <div>
            <div className="landing">
                <div className="landingHeading">
                    <h1>MY 2cs ON FAITH</h1>
                    <sub>A CHRISTIAN BLOG BY <span className="name">DAVID KWONG</span></sub>          
                        <div className="inputContainer">
                            <div className="textInputLabel">YOUR EMAIL ADRESS</div>
                            <input className="textInput" type="text" value={value} autoComplete="off" onChange={onChange}/>
                            <div className="helperText">{errorMsg===''?'':errorMsg}</div>
                            <div className="buttonContainer">
                                <motion.div animate={buttonControl}>
                                    <div className="outlineBtn lg hover" onClick={onSubmit}>SUBSCRIBE</div>    
                                </motion.div>
                            </div>
                            
                        </div>
                    <motion.div initial={{opacity:0,display:'none'}} animate={loaderControl}>
                        <div className="loader"></div>
                    </motion.div>
                </div>
                <img src={image}></img>
            </div>
        <style jsx>{`
            

            
            sub{
                margin-bottom:${67/16}rem;
            }
            h1{
                margin-bottom:1.875rem;
            }

            .loader{
                border: 1px #6b6b6b solid;
                border-top: 1px #4AA9EE solid;
                height:3rem;
                width:3em;
                margin:0 auto;
            }
            .buttonContainer{
                margin-top:${39/16}rem;
                width:100%;
            }
            .helperText{
                color:#fc0e00;
            }
            .textInputLabel{
                margin-bottom:0.625rem;
            }

            .inputContainer{
                width:80%;
                display:flex;
                flex-direction:column;
                align-items:start;
                align-self:center;
            }
              
            .landing{
                overflow-x:hidden;
                max-width: 100vw;
                min-height: 100vh;
                background: #2c2c2c;
                display:grid;
                grid-template:
                  "." 12rem
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
                .buttonContainer{
                    width:auto;
                }

                .inputContainer{
                    align-self:start;
                }
                .loader{
                    margin:0 3.5rem;
                }
            }  
        `}</style>
      </div>
    )
}

