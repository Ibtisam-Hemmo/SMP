const authReducer = (
    state = { authData: null, error: false, loading: false },
    action
) => {
    switch (action.type) {
        case "AUTH_START":
            return { ...state, loading: true, error: false }

        case "AUTH_SUCCESS":
            if (action.rememberMe) localStorage.setItem("user", JSON.stringify(action?.data), action.rememberMe);
            return { ...state, authData: action.data, loading: false, error: false }

        case "AUTH_FAIL":
            return { ...state, loading: false, error: true }

        case "UPDATING_START":
            return { ...state, updateLoading: true, error: false }

        case "UPDATING_SUCCESS":
            return { ...state, authData: action.data, updateLoading: false, error: false }

        case "UPDATING_FAIL":
            return { ...state, updateLoading: true, error: true }

        case "FOLLOW_USER":
            return {
                ...state,
                authData: {
                    ...state.authData,
                    following: [
                        ...(state.authData.following || []),
                        action.data,
                    ],
                },
            };

        case "UNFOLLOW_USER":
            return {
                ...state,
                authData: {
                    ...state.authData,
                    following: [
                        ...state.authData.following.filter((personId) => personId !== action.data)]
                }
            }

        case "LOG_OUT":
            return { ...state, authData: null, loading: false, error: true }

        default:
            return state
    }
}
export default authReducer;
