import axios from "axios";
import moment from "moment";

const SAVE_SHOW = `SAVE_SHOW`;
const SAVE_CLOSE = `SAVE_CLOSE`;
const SEARCH_DATA = `SEARCH_DATA`;
//drawerVisible是否弹出抽屉编辑画面,user是单条用户信息，successs操作是否成功
export function showUserInfo (state={}, action) {
    switch(action.type){
        case SAVE_SHOW:
            return {...state, drawerVisible: true, user: action.text, success:action.success, message:action.message, typeItem:action.typeItem, icon:action.icon};
        case SAVE_CLOSE:
            return {...state, drawerVisible: false, user: action.text, success:action.success, message:action.message, typeItem:action.typeItem, icon:action.icon};
        case SEARCH_DATA:
            let result = [];
            axios.post("http://localhost:8080/public/searchUsers",action.searchValues)
                .then(res=>{
                    const pageInfo = res.data.pageInfo||{};
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
                })
            console.log("dataList dataList",result)
            return {...state, dataList: result}
        default:
            return state;
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