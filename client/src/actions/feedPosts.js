import { getFeed } from '../apis/feedRequest.js';

const getFeedPosts = (userId) => async (dispatch) => {
    dispatch({ type: 'FEED_START' })
    try {
        const response = await getFeed(userId);
        dispatch({ type: 'FEED_SUCCESS', data: response.data })
    } catch (error) {
        console.log(error)
        dispatch({ type: 'FEED_FAIL' })
    }
}
export default getFeedPosts;
