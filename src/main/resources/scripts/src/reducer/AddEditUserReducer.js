const SHOW_DRAWER = `SHOW_DRAWER`;
const ON_CLOSE = `ON_CLOSE`;
const SEARCH_DATA = `SEARCH_DATA`;
//drawerVisible是否弹出抽屉编辑画面,user是单条用户信息，successs操作是否成功
export function showUserInfo (state = {drawerVisible: false},action) {
    switch(action.type){
        case SHOW_DRAWER:
            return {drawerVisible: true, user:action.text, success:action.success, message:action.message, typeItem:action.typeItem, icon:action.icon};
        case ON_CLOSE:
            return {drawerVisible: false, user: action.text, success:action.success, message:action.message, typeItem:action.typeItem, icon:action.icon};
        case SEARCH_DATA:
            return {drawerVisible: false, dataList: action.dataList, formValues: action.formValues}
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