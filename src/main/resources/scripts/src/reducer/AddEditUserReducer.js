const SHOW_DRAWER = 'SHOW_DRAWER';
const ON_CLOSE = 'ON_CLOSE';

export function showUserInfo (state = {drawerVisible: false},action) {
    switch(action.type){
        case SHOW_DRAWER:
            return {drawerVisible: true, user:action};
        case ON_CLOSE:
            return {drawerVisible: false};
        default:
            return {drawerVisible: false};
    }
}
//action creator
export function showDrawer(data) {
    return { data }
}
export function onClose(data) {
    return { data }
}