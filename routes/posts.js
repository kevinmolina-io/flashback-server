import express from 'express'

import { getPosts, createPost, deletePost } from '../controllers/posts.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.delete('/:postId', deletePost)

export default router