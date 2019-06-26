//基地址
var PATH = ''
// PATH = "http://127.0.0.1:8000/"
// PATH = "http://129.211.7.88:8000/"
PATH = "http://129.28.101.84/"
// PATH = "/api/"
// PATH = "http://192.168.43.227:8000/"


var INTERFACE = {
    // 注册
    REGISTER: PATH + 'account/register',
    // 登录
    LOGIN: PATH + 'account/login',
    // 登出
    LOGOUT: PATH + 'account/logout',
    // 个人信息
    ACCOUNT_PROFILE: PATH + 'account/profile',

    // 回复列表
    SHOW: PATH + 'database/show',
    // 添加
    ADD: PATH + 'database/add',
    // 删除
    DELETE: PATH + 'database/delete',
    // 更新
    UPDATE: PATH + 'database/update',

    // 获取登陆二维码
    WECHAT_LOGIN: PATH + 'itchats/testlogin',
    // 静态地址
    QRCODE: PATH + 'static/qrimages/'

}


export default {
    INTERFACE
}
