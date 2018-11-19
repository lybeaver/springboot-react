import axios from "axios";
import moment from "moment";

const SAVE_SHOW = `SAVE_SHOW`;
const SAVE_CLOSE = `SAVE_CLOSE`;
const SEARCH_DATA = `SEARCH_DATA`;
//drawerVisible是否弹出抽屉编辑画面,user是单条用户信息，successs操作是否成功
//reducer
export function showUserInfo (state={}, action) {
    switch(action.type){
        case SAVE_SHOW:
            return {...state, drawerVisible: true, user: action.text, success:action.success, message:action.message, typeItem:action.typeItem, icon:action.icon};
        case SAVE_CLOSE:
            return {...state, drawerVisible: false, user: action.text, success:action.success, message:action.message, typeItem:action.typeItem, icon:action.icon};
        case SEARCH_DATA:
            console.log("SEARCH_DATA SEARCH_DATA SEARCH_DATA",action)
            return {...state, dataList: action.dataList, defaultCurrent: action.defaultCurrent, pageSize:action.pageSize, total:action.total}
        default:
            return state;
    }
}
//action creator
export function saveShow(data) {
    return { type:`SAVE_SHOW`, data }
}
export function saveClose(data) {
    return { type:`SAVE_CLOSE`, data }
}
export function searchData(dispatch,data) {
    axios.post("http://localhost:8080/public/searchUsers",data)
        .then(res=>{
            const pageInfo = res.data.pageInfo || {};
            let result = [];
            (pageInfo.items || []).map((value,index) => {
                    const item = {
                        key: '',
                        name: '',
                        telephone: 0,
                        sex: '',
                        loginName: '',
                        birthday: '',
                        id: ''
                    }
                    item.id = value.id;
                    item.key = index.toString();
                    item.name = value.name;
                    item.telephone = value.telephone;
                    item.sex = value.sex === "1" ? "男":"女";
                    item.loginName = value.loginName;
                    item.birthday = moment(value.birthday).format('YYYY-MM-DD');
                    result.push(item);
                }
            );
            dispatch({type:`SEARCH_DATA`, dataList: result,defaultCurrent: pageInfo.defaultCurrent, pageSize:pageInfo.pageSize, total:pageInfo.totalNum});
        })
}