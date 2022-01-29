import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
  try {
    // query post
    const postMessages = await PostMessage.find()
    console.log("GET BUG FIX A")
    res.status(200).json(postMessages)
    console.log("additional logging A")
    console.log("successful get Posts A")
  } catch (error) {
    res.status(404).json({ message: error.message })
  }

}

export const createPost = async (req, res) => {
  const post = req.body

  const newPost = new PostMessage(post)

  try {
    await newPost.save()
    console.log("CREATE BUG FIX A")
    res.status(201).json(newPost)
    console.log("additional logging A")
    console.log("successful create post A")
    console.log("extra logging A")
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const deletePost = async (req, res) => {
  const { postId } = req.param

  const post = await PostMessage.findById(postId)

  try {
    await post.delete()
    console.log("DELETING post: ", postId)
    res.status(200)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}