//基地址
var PATH = ''
// PATH = "http://127.0.0.1:8000/"
// PATH = "http://129.211.7.88:8000/"
PATH = "http://129.28.101.84:8000/"
PATH = "/api/"
// PATH = "http://192.168.43.227:8000/"


var INTERFACE = {
    //注册
    REGISTER: PATH + 'account/register',
    LOGIN: PATH + 'account/login',
    LOGOUT: PATH + 'account/logout',
    ACCOUNT_PROFILE: PATH + 'account/profile',
    SHOW: PATH + 'database/show',
    ADD: PATH + 'database/add',
    DELETE: PATH + 'database/delete',
    UPDATE: PATH + 'database/update'
}


export default {
    INTERFACE
}
