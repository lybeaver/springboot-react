const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
//reducer
export function auth(state='',action) {
    switch(action.type){
        case LOGIN:
            return action.state;
        case LOGOUT:
            return action.state;
        default:
            return state;
    }
}
//action creator
export function login(state) {
    return { type: LOGIN, state }
}
export function logout(state) {
    return { type: LOGOUT, state }
}