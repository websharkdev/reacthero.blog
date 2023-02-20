import { gql, request } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCSM_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query Assets {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
                width
              }
            }
            createdAt
            slug
            title
            excerpt
            hashtag {
              id
              tag
            }
            featuredImage {
              url
            }
            categories {
              name
              id
              slug
              relate
            }
            id
          }
        }
      }
    }
  `

  const results = await request(graphqlAPI!, query)
  return results.postsConnection.edges
}
export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        name
        slug
        id
        relate
      }
    }
  `

  const result = await request(graphqlAPI!, query)

  return result.categories
}

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        id
        author {
          name
          bio
          photo {
            url
          }
        }

        hashtag {
          id
          tag
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          id
          name
          slug
        }
      }
    }
  `

  const result = await request(graphqlAPI!, query, { slug })

  return result.post
}

export const getSimilarPosts = async (categories: string[], slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }, last: 3) {
        title
        featuredImage {
          url
        }
        id
        excerpt
        createdAt

        slug
        hashtag {
          id
          tag
        }
      }
    }
  `
  const result = await request(graphqlAPI!, query, { slug, categories })

  return result.posts
}

export const getSocialMedia = async () => {
  const query = gql`
    query GetSocialMedias {
      socialMedias {
        title
        icon {
          fileName
          url
        }
        link
        id
      }
    }
  `

  const result = await request(graphqlAPI!, query)

  return result
}

// export const getAdjacentPosts = async (createdAt, slug) => {
//   const query = gql`
//     query GetAdjacentPosts($createdAt: DateTime!, $slug: String!) {
//       next: posts(first: 1, orderBy: createdAt_ASC, where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//       previous: posts(
//         first: 1
//         orderBy: createdAt_DESC
//         where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `

//   const result = await request(graphqlAPI!, query, { slug, createdAt })

//   return { next: result.next[0], previous: result.previous[0] }
// }

export const getPostByHashtag = async (tag: string) => {
  const query = gql`
    query GetHashtagPost($tag: String!) {
      postsConnection(where: { hashtag_some: { tag_contains: $tag } }) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            id
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            hashtag {
              id
              tag
            }
            categories {
              id
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI!, query, { tag })

  return result.postsConnection.edges
}

export const getCategoryPost = async (slug: string) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            id
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            hashtag {
              id
              tag
            }
            categories {
              id
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI!, query, { slug })

  return result.postsConnection.edges
}

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        
            hashtag {
              id
              tag
            }
        id
        title
        slug
        createdAt
      }
    }   
  `

  const result = await request(graphqlAPI!, query)

  return result.posts
}

// export const submitComment = async (obj) => {
//   const result = await fetch('/api/comments', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(obj),
//   })

//   return result.json()
// }

// export const getComments = async (slug: string) => {
//   const query = gql`
//     query GetComments($slug: String!) {
//       comments(where: { post: { slug: $slug } }) {
//         name
//         createdAt
//         comment
//       }
//     }
//   `

//   const result = await request(graphqlAPI!, query, { slug })

//   return result.comments
// }

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        id
        excerpt
        createdAt
        slug
        hashtag {
          id
          tag
        }
      }
    }
  `
  const result = await request(graphqlAPI!, query)

  return result.posts
}
