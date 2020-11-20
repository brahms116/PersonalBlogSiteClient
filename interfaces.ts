import { graphql } from "graphql"


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

export interface PostIdsResponseData extends GraphQLResponse{
    ids?:string[]
}

export interface PostIdsResponse{
    AllPostId:PostIdsResponseData
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

export interface PostDataReponseData extends GraphQLResponse, PostData{}

export interface PostPageResponse extends PostHeadingResponse{
    getPostById: PostDataReponseData
}