import { gql, request } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCSM_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query GetPosts {
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
            featuredImage {
              url
            }
            categories {
              name
              id
              slug
              categoryRelateds {
                title
                id
              }
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
        categoryRelateds {
          title
          id
        }
      }
    }
  `

  const result = await request(graphqlAPI!, query)

  return result.categories
}

export const getAllPosts = async () => {
  const query = gql`
    query getAllPosts {
      posts {
        id
        stage
        slug
        title
        excerpt
        content {
          raw
        }
        featuredImage {
          id
          url
          width
        }
        hashtag {
          id
          tag
          stage
        }
      }
    }
  `
  const result = await request(graphqlAPI!, query)

  return result
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
    query getSimilarPosts($slug: String!, $categories: [String!]) {
      posts(where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }, last: 3) {
        title
        featuredImage {
          url
        }
        id
        excerpt
        createdAt
        content {
          raw
        }
        slug
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

export const getCategoryPost = async (slug: string) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      posts(where: { categories_some: { slug: $slug } }) {
        id
        stage
        slug
        title
        excerpt
        content {
          raw
        }
        featuredImage {
          id
          url
          width
        }
        hashtag {
          id
          tag
          stage
        }
      }
    }
  `

  const result = await request(graphqlAPI!, query, { slug })

  return result.posts
}

export const getFeaturedPosts = async () => {
  const query = gql`
    query getFeaturedPosts() {
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
        content {
          raw
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
    query getRecentPosts() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        id
        hashtag {
          id
          tag
        }
        content {
      raw
    }
        excerpt
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI!, query)

  return result.posts
}
