const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
//reducer
const initState = {
    isLogin: false,
    token: '',
    user:{}
}
export function loginInfo (state = initState,action) {
    console.log("actioninfo",action);
    switch(action.type){
        case LOGIN:
            return {isLogin: true, token:action.state.token, user:action.state.user};
        case LOGOUT:
            return initState;
        default:
            return initState;
    }
}
//action creator
export function login(state) {
    return { type: LOGIN, state }
}
export function logout(state) {
    return { type: LOGOUT, state }
}