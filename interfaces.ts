

export interface GraphQLResponse{
    isError?:boolean
    msg?:string
}


export interface PostHeading{
    id?:string
    title?:string
    description?:string
    createdAt?:string
}


export interface PostData extends PostHeading{
    src?:string
    para?:string[]
}

export interface PostHeadingResponseData extends GraphQLResponse{
        cursor:string
        posts:PostHeading[]
}

export interface PostHeadingResponse{
    getPostHeadingsByDate:PostHeadingResponseData
}

export interface PostDataResponse extends GraphQLResponse,PostData{}