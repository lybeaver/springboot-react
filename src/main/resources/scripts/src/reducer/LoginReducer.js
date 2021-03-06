const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
//reducer
const initState = {
    isLogin: false,
    token: '',
    user:{}
}
export function loginInfo (state,action) {
    switch(action.type){
        case LOGIN:
            return {...state,isLogin: true, token:action.state.token, user:action.state.user};
        case LOGOUT:
            return {...state,isLogin: false, token:null, user:action.state.user};
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