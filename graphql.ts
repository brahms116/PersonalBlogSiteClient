import { GraphQLClient } from "graphql-request";

const endpoint = "https://backend.davidkwong.net/blog/graphql";
// const endpoint = "http://localhost:8000/graphql"

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
});
