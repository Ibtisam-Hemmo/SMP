import { postModel } from '../../models/index.js';

const getPost = async (req, res) => {
    const { id } = req.params;
    
    try {
        const post = await postModel.findById(id)
        res.json(post);
        
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export default getPost;
