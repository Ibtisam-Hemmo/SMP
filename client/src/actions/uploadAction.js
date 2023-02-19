import { UploadImage, SharePost } from '../apis/uploadReq.js';

export const uploadImage = (data) => async (dispatch) => {
    dispatch({ type: 'UPLOAD_START' })
    try {
        await UploadImage(data);
    } catch (error) {
        console.log(error);

    }
};

export const sharePost = (post) => async (dispatch) => {
    dispatch({ type: 'SHARE_START' })
    try {
        const { data } = await SharePost(post);
        dispatch({ type: 'SHARE_SUCCESS', data: data })

    } catch (error) {
        console.log(error);
        dispatch({ type: 'SHARE_FAIL' })

    }
};
