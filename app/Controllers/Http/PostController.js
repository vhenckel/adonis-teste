'use strict'

const Post = use('App/Models/Post')

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   */
  async index ({ request, response, view }) {
    const posts = await Post.all()
    return posts
  }

  /**
   * Create/save a new post.
   * POST posts
   */
  async store ({ request, response }) {
    const data = request.only(['content'])
    const post = await Post.create(data)

    return post
  }

  /**
   * Display a single post.
   * GET posts/:id
   */
  async show ({ params, request, response, view }) {
    const post = await Post.find(params.id)

    return post
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   */
  async update ({ params, request, response }) {
    const data = request.only(['content'])
    const post = await Post.find(params.id)

    post.merge(data)

    await post.save()

    return post
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   */
  async destroy ({ params, request, response }) {
    const post = await Post.find(params.id)

    await post.delete()
  }
}

module.exports = PostController
