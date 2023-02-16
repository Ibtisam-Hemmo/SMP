import { postModel } from '../../models/index.js';

const getPost = async (req, res) => {
    const { id } = req.params;
    console.log('id: ', id);
    
    try {
        const post = await postModel.findById(id)
        console.log('post: ', post);
        res.json(post)

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export default getPost;
