const SHOW_DRAWER = `SHOW_DRAWER`;
const CLOSE_DRAWER = `CLOSE_DRAWER`;

export function editDrawer (state, action) {
    switch(action.type){
        case SHOW_DRAWER:
            return {...state,drawerVisible: true};
        case CLOSE_DRAWER:
            return {...state,drawerVisible: false};
        default:
            return {...state,drawerVisible: false};
    }
}

export function showDrawer(state) {
    return { type: SHOW_DRAWER, state }
}

export function closeDrawer(state) {
    return { type: CLOSE_DRAWER, state }
}