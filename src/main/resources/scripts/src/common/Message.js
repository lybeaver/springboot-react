import { message } from 'antd'
export function Message (type, content) {
    if (type === 'SUCCESS') {
        return message.success(content)
    } else if (type === 'ERROR') {
        return message.error(content)
    } else if (type === 'WARNING') {
        return message.warning(content)
    } else {
        return "";
    }
}
