const SAVE_SHOW = `SAVE_SHOW`;
const SAVE_CLOSE = `SAVE_CLOSE`;
const SEARCH_DATA = `SEARCH_DATA`;
const DATA_LIST = {};
//drawerVisible是否弹出抽屉编辑画面,user是单条用户信息，successs操作是否成功
export function showUserInfo (state = DATA_LIST, action) {
    switch(action.type){
        case SAVE_SHOW:
            return {user:action.text, success:action.success, message:action.message, typeItem:action.typeItem, icon:action.icon};
        case SAVE_CLOSE:
            return {user: action.text, success:action.success, message:action.message, typeItem:action.typeItem, icon:action.icon};
        case SEARCH_DATA:
            return {dataList: action.dataList}
        default:
            return {drawerVisible: false};
    }
}

//action creator
export function saveShow(data) {
    return { data }
}
export function saveClose(data) {
    return { data }
}
export function searchData(data) {
    return { data }
}