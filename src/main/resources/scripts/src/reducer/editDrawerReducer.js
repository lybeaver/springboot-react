const SHOW_DRAWER = `SHOW_DRAWER`;
const CLOSE_DRAWER = `CLOSE_DRAWER`;

export function editDrawer (state = {drawerVisible: false}, action) {
    switch(action.type){
        case SHOW_DRAWER:
            return {drawerVisible: true};
        case CLOSE_DRAWER:
            return {drawerVisible: false};
        default:
            return {drawerVisible: false};
    }
}

export function showDrawer(state) {
    return { type: SHOW_DRAWER,state }
}
export function closeDrawer(state) {
    return { type: CLOSE_DRAWER,state }
}