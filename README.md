# wechat

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### 接口文档

- ~~基地址  `dir:127.0.0.1:8000/`~~

- 基地址 `dir: 129.28.101.84/`

> 暂未加入csrf_token验证

---

> 统一使用code:200作为成功标志，且除去token验证失败以外（尚未添加），其他http请求状态码均为200

---

>错误信息写在返回message里，已声明可以不用添加

1. 用户注册

| 状态码 | 内容 |
| :-----: | :----: |
| 200 | 成功注册 |
| 0 | 用户未关注 |
| -2 | 其他错误 |

    ```json
    url: dir + account/register
    methods: POST
    body:{
        "username":"username",
        "password":"pwd",
        "last_name":"1",
    }
    success_result:{
        "code":200,
        "message":"ok"
    }
    ```

2. 用户登录

| 状态码 | 内容 |
| :-----: | :----: |
| 200 | 成功登录 |
| -1 | 用户不存在 |
| -2 | 密码错误 |
| -3 | 其他错误 |

    ```json
    url: dir + account/login
    methods: POST
    body:{
        "csrf_token":"csrf",
        "username":"username",
        "password":"pwd"
    }
    success_result:{
        "code":200,
        "message":"ok"
    }    
    ```

3. 用户退出

| 状态码 | 内容 |
| :-----: | :----: |
| 200 | 成功退出 |
| -1 | 状态不允许 |
| -2 | 其他错误 |

    ```json
    url: dir + account/logout
    methods: GET
    params:None
    success_result:{
        "code":200,
        "message":"ok"
    }
    ```

4. 用户回复数据

| 状态码 | 内容 |
| :-----: | :----: |
| 200 | 获取成功 |
| -1 | 用户不存在 |
| -2 | 其他错误 |

    ```json
    url: dir + mongodb/show?id=userid
    methods: GET
    success_return:{
        code:200,
        message:'ok'
        data:{
            "主键1": {
                "收到内容": "回复内容"
            },
            "主键2": {
                "收到内容": "回复内容"
            },
            "3": {
                "苹果": "梨子"
            }
        }
    }
    error_return:{
        code:-1,
        message:'用户不存在'
    }
    ```

5. 添加回复

| 状态码 | 内容 |
| :-----: | :----: |
| 200 | 更新成功 |
| -1 | 状态不允许 |
| -2 | '收到内容'有重复，请检查 |
| -3 | 其他错误 |

    ```
    url: dir + mongodb/add?id=userid
    methods: POST,
    body:{
        "收到内容":"回复内容",
        "收到内容":"回复内容",
        "苹果":"樱桃",
    }
    sussecc_return:{
        "code":200,
        "message":"ok",
    }
    ```


6. 删除回复

| 状态码 | 内容 |
| :-----: | :----: |
| 200 | 删除成功 |
| -1 | 状态不允许 |
| -2 | 主键不存在 |
| -3 | 其他错误 |

    ```
    url: dir + mongodb/delete?id=userid&key=主键
    methods: DELETE
    result:{
        "code":200,
        "message":"ok"
    }
    ```
7.  修改回复

同添加回复

| 状态码 | 内容 |
| :-----: | :----: |
| 200 | 更新成功 |
| -1 | 状态不允许 |
| -2 | '收到内容'有重复，请检查 |
| -3 | 其他错误 |

    ```json
    url: dir + mongodb/add?id=userid
    methods: POST,
    body:{
        "收到内容":"回复内容",
        "收到内容":"回复内容",
        "苹果":"樱桃",
    }
    sussecc_return:{
        "code":200,
        "message":"ok",
    }
    ```

8. 微信二维码地址

| 状态码 | 内容 |
| :-----: | :----: |
| 200 | 获取成功 |
| -1 | 账户余额不足 |
| -2 | 正在生成 |
| -3 | 其他错误 |

    ```json
    url: dir + wechat/testlogin?id=userid
    methods: GET
    sussecc_return:{
        "code":1,
        "pid":"pid" // 静态文件地址/static/qrimages/pid.png" 
    }
    ```