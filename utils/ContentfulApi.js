// /utils/ContentfulApi.js

export default class ContentfulApi {

  static async callContentful(query) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }

    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json(),
      )
      return data
    } catch (error) {
      throw new Error("Could not fetch data from Contentful!")
    }
  }

  static async getInfoPage(locale) {
    // Build the query
    const query = `
    {
      settingCollection (limit: 1, locale: "${locale}") {
        items {
          slogan
          subslogan
          contactEmail
          contactPhone
          sectionServiceTitle
          sectionServiceDescription
          sectionPortafolioTitle
          sectionPortafolioDescription
          sectionBlogTitle
          sectionBlogDescription
          socialNetworkGithub
          socialNetworkLinkedin
        }
      }
    }
    `

    // Call out to the API
    const response = await this.callContentful(query)
    const posts = response.data.settingCollection.items.length > 0
      ? response.data.settingCollection.items[0]
      : null

    return posts
  }

  static async getServicesLanding(locale, limit = 6) {
    // Build the query
    const query = `
      {
        postCollection(where: {type: "Service"}, order: sorted_ASC, locale: "${locale}", limit: ${limit}) {
          items {
            title
            sorted
            description
          }
        }
      }
    `

    // Call out to the API
    const response = await this.callContentful(query)
    return response.data.postCollection.items
  }

  static async getWorkLanding(locale, limit = 4) {
    // Build the query
    const query = `
      {
        postCollection(where: {type: "Work"}, order: sorted_ASC, locale: "${locale}", limit: ${limit}) {
          items {
            title,
            description
            cover {
              title
              url
            }
            slug
            link
          }
        }
      }
    `

    // Call out to the API
    const response = await this.callContentful(query)
    return response.data.postCollection.items
  }

  static async getWorkPagination(locale, skip, limit) {
    // Build the query
    const query = `
      {
        postCollection(locale: "${locale}" skip: ${skip} limit: ${limit} where: {type: "Work"} order: sorted_ASC) {
          skip
          limit
          total
          items {
            title,
            description
            cover {
              title
              url
            }
            slug
            link
          }
        }
      }
    `

    // Call out to the API
    const response = await this.callContentful(query)
    return response.data.postCollection
  }

  static async getSlugs(type) {
    // Build the query
    const query = `
      {
        postCollection (where: {type: "${type}"}) {
          items {
            slug
          }
        }
      }
    `

    // Call out to the API
    const response = await this.callContentful(query)
    return response.data.postCollection.items.map(item => item.slug)
  }

  static async getArticlesLanding(locale, limit = 4) {
    // Build the query
    const query = `
      {
        postCollection(where: {type: "Article"}, locale: "${locale}", limit: ${limit}, order: publishDate_DESC) {
          items {
            title,
            description
            contentfulMetadata {
              tags {
                id
                name
              }
            }
            publishDate
            slug
          }
        }
      }
    `

    // Call out to the API
    const response = await this.callContentful(query)
    return response.data.postCollection.items
  }

  static async getArticlesPagination(locale, skip, limit) {
    // Build the query
    const query = `
      {
        postCollection(locale: "${locale}" skip: ${skip} limit: ${limit} where: {type: "Article"} order: publishDate_DESC) {
          skip
          limit
          total
          items {
            title
            slug
            description
            publishDate
            cover {
              title
              url
            }
          }
        }
      }
    `

    // Call out to the API
    const response = await this.callContentful(query)
    return response.data.postCollection
  }

  static async getPostsRelated(type, tags, slugNoInclude) {
    // Build the query
    const query = `
    {
      postCollection (where: {type: "${type}", slug_not: "${slugNoInclude}" contentfulMetadata: {tags: {id_contains_some: ${JSON.stringify(tags)}}}}){
        items {
          cover{
            url
            title
          }
          publishDate
          title
          slug
          type
        }
      }
    }  
    `

    // Call out to the API
    const response = await this.callContentful(query)
    return response.data.postCollection.items
  }

  static async getPostBySlug(locale, slug) {
    // Build the query
    const query = `
    {
      postCollection(locale: "${locale}" where: {slug: "${slug}" }) {
        items {
          title
          slug
          contentfulMetadata {
            tags {
              id
              name
            }
          }
          description
          publishDate
          cover {
            title
            url
          }
          content {
            json
          }
        }
      }
    }  
    `

    // Call out to the API
    const response = await this.callContentful(query)
    const post = response.data.postCollection.items.length > 0
      ? response.data.postCollection.items[0]
      : null

    return post
  }

  static async getTotalPosts(type) {
    // Build the query
    const query = `
    {
      postCollection(where: {type: "${type}" }) {
        total
      }
    }  
    `

    // Call out to the API
    const response = await this.callContentful(query)
    return response.data.postCollection.total
  }

  static async getPostsForSearch(locale) {
    // Build the query
    const query = `
    {
      postCollection (locale: "${locale}" where: {OR: [{type: "Article"},{type: "Work"}]}){
         items {
          title
          type
          slug
        }
      }
    }  
    `

    // Call out to the API
    const response = await this.callContentful(query)
    return response.data.postCollection.items
  }
}