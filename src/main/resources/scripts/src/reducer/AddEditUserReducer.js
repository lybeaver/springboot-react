const SHOW_DRAWER = 'SHOW_DRAWER';
const ON_CLOSE = 'ON_CLOSE';

export function showVisible (state = {drawerVisible: false},action) {
    switch(action.type){
        case SHOW_DRAWER:
            return {drawerVisible: true};
        case ON_CLOSE:
            return {drawerVisible: false};
        default:
            return {drawerVisible: false};
    }
}
//action creator
export function showDrawer() {
    return { type: SHOW_DRAWER }
}
export function onClose() {
    return { type: ON_CLOSE }
}