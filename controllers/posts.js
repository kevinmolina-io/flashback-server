import PostMessage from '../models/postMessage.js'

// get posts call
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()

    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }

}

// create posts call
export const createPost = async (req, res) => {
  const post = req.body

  const newPost = new PostMessage(post)

  try {
    await newPost.save()
    // saving post...
    console.log("saving posts...")
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}