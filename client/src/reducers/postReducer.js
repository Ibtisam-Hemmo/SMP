const postReducer = (
    state = { posts: [], error: false, loading: false, uploading: false },
    action
) => {
    switch (action.type) {
        case "SHARE_START":
            return { ...state, loading: true, error: false, uploading: false }

        case "SHARE_SUCCESS":
            localStorage.setItem("posts", JSON.stringify({ ...action?.data }))
            return { ...state, posts: [action.data, ...state.posts], loading: false, error: false, uploading: false }

        case "SHARE_FAIL":
            return { ...state, loading: false, error: true }

        case "FEED_START":
            return { ...state, loading: true, error: false };

        case "FEED_SUCCESS":
            return { ...state, posts: action.data, loading: false, error: false };

        case "FEED_FAIL":
            return { ...state, loading: false, error: true };

        case "DELETE_POST_START":
            return { ...state, loading: true, error: false };

        case "DELETE_POST_SUCCESS":
            const newPosts = state.posts.filter(post => post._id !== action.postId);
            return { ...state, posts: newPosts, loading: false, error: false };

        case "DELETE_POST_FAIL":
            return { ...state, loading: false, error: true };

        default:
            return state;
    }
}
export default postReducer;
