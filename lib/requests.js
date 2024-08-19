import request, { GraphQLClient, gql } from "graphql-request"


const endpoint = process.env.NEXT_PUBLIC_HASHNODE_ENDPOINT
const publicationID = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID
const githubEndpoint = process.env.NEXT_PUBLIC_GITHUB_ENDPOINT
const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN

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
        domainInfo: response.publication.domainInfo.hashnodeSubdomain
    }
}

const client = new GraphQLClient(githubEndpoint, {
    headers: {
        Authorization: `Bearer ${githubToken}`,
    },
});

const query = gql`
  query($number_of_repos: Int!) {
    viewer {
    name
    bio
    avatarUrl
    createdAt
    isHireable
    status{
        message
    }
    repositories(last: $number_of_repos) {
      nodes {
        name
        visibility
        primaryLanguage {
          id
          name
        } 
        description
        url
        updatedAt
        repositoryTopics(first:3){
         totalCount
          nodes{
            topic{
              name
            }
          }
        }
      }
    }
  }
  }
`;

export async function getGitRepos() {
    const variables = {
        number_of_repos: 8,
    };

    try {
        const response = await client.request(query, variables);
        return response;
    } catch (error) {
        console.error('Error:', error);
        if (error.response) {
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
        }
        console.error('Request:', error.request);
        return [];
    }
}