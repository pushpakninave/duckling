import request, { gql } from "graphql-request"
import { env } from "./env"

const endpoint = env.NEXT_PUBLIC_HASHNODE_ENDPOINT
const publicationID = env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID

export async function getBlogName() {
    const query = gql`
    query getBlogName($publicationID : ObjectId!){
        publication(id : $publicationID){
            title,
            displayTitle,
            favicon,
            about{
                text
            }
        }
    }`

    const response = await request(endpoint, query, { publicationID })
    return {
        title: response.publication.title,
        about: response.publication.about
    }
}

export async function getPosts() {
    const query = gql`
    query getPosts($publicationID : ObjectId!){
        publication(id : $publicationID) {
        domainInfo{
            hashnodeSubdomain
        },
            posts(first: 6) {
                edges {
                    node {
                        title
                        brief
                        url
                        views
                        tags{
                          slug
                        }
                        coverImage {
                            url
                        }
                    }
                }
                pageInfo {
                    endCursor
                    hasNextPage
                }
            }
        }
    }`

    const response = await request(endpoint, query, { publicationID })
    return {
        posts: response.publication.posts.edges,
        domainInfo:response.publication.domainInfo.hashnodeSubdomain
    }
}