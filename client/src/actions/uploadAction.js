import { UploadImage, SharePost } from '../apis/uploadReq.js';

export const uploadImage = (data) => async (dispatch) => {
    console.log('upload image data: ', data);
    try {
        await UploadImage(data);
    } catch (error) {
        console.log(error);

    }
};

export const sharePost = (data) => async (dispatch) => {
    dispatch({ type: 'SHARE_START' })
    try {
        const newPost = await SharePost(data);
        console.log('newPost: ', newPost);
        dispatch({ type: 'SHARE_SUCCESS', data: newPost.data })

    } catch (error) {
        console.log(error);
        dispatch({ type: 'SHARE_FAIL' })

    }
};
