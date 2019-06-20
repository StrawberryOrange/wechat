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

add githubEmial test


### 接口文档（弃用）

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
| -1 | 用户已存在 |
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
| -1 | 暂定 |
| -2 | 密码错误 |
| -3 | 用户名不存在 |

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

4、5、6、7公用一套状态码
| 状态码 | 内容 |
| :-----: | :----: |
| 200 | 获取成功 |
| -5 | 用户不匹配（删除） |
| 0 | 未知错误 |
4. 用户回复数据查看
    ```json
    url:129.28.101.84/database/show
    methods: GET
    params:none
    success_return:{
        
    "主键1": {
        "收到内容": "回复内容"
    },
    "主键2": {
        "收到内容": "回复内容"
    }
    }
    err0_result:{
        "code":0,
        "message":"unknow error",
    }
    ```
5. 添加回复
    ```json
    url:129.28.101.84/database/add
    methods: POST
    body:{
        "收到内容":"回复内容",
        "收到内容":"回复内容",
        "收到内容":"回复内容",
    }
    sussecc_return:{
        "code":200,
        "message":"ok",
    }
    err0_result:{
        "code":0,
        "message":"unknow error",
    }
    ```
6. 删除回复
    ```json
    url:129.28.101.84/database/delete/?id=2123
    methods: GET
    params:n//删除回复的主键
    sussecc_return:{
        "code":200,
        "message":"ok",
    }
    err0_result:{
        "code":0,
        "message":"unknow error",
    }
    ```
7.  修改回复
    ```json
    url:129.28.101.84/database/update/?id=n
    methods: post
    params:n//删除回复的主键
    body:{
        "new回复":"new收到",
        
    }
    sussecc_return:{
        "code":200,
        "message":"ok",
    }
    err0_result:{
        "code":0,
        "message":"unknow error",
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



# 微信回复助手项目

## 1. 项目主体

1. 测试服务器
    - 腾讯云服务器IP：129.28.101.84 
    - ssh私钥登录，ssh_port:22
2. 测试端口8000
3. 开发环境：ubuntu16.04+nginx+uwsgi+django2.1+Vue.js+itchat+MySQL(测试阶段使用sqlite)
4. GitHub分支定义

   | branch | 定义 |
   | - | - |
   | master | 稳定版,用于上线使用 |
   | development | 后端开发测试项目 |
   | vuejs | 前端vue项目 |


## 2. 后端API接口说明
每次post请求都需要带csrf_token参数（后期）
除account接口外，其他接口都需要登陆访问，携带有有效都session信息
- _状态码说明_
 
| code | message |
|-|-|
| 200 | 成功 |
| 1 | 数据内容 |
| 0 | 未知错误 |
| -1 | 用户未关注公众号 |
| -2 | 用户名被使用 |
| -3 | 用户名或密码错误 |
| -4 | 参数错误 |


1. 用户注册
    ```json
    url:129.28.101.84/account/register
    methods: POST
    body:{
        
        
        "username":"username",
        "password":"pwd",
        "last_name":"1", //这个参数很重要，需要和公众号项目同时使用，在注册时需要关注关注公众号，生成last_name，接口测试时可自行配置
    }
    success_result:{
        "code":200,
        "message":"ok"
    }
    err0_result:{
        "code":0,
        "message":"unknow error",
    }
    ```
2. 用户登录
    ```json
    url:129.28.101.84account/login
    methods: POST
    body:{
        "username":"username",
        "password":"pwd"
    }
    success_result:{
        "code":200,
        "message":"ok"
    }
    err3_result:{
        "code":-3,
        "message":"invalid login"
    }
    err0_result:{
        "code":0,
        "message":"unknow error",
    }
    ```
3. 用户退出
    ```json
    url:129.28.101.84/account/logout
    methods: GET
    params:None
    success_result:{
        "code":200,
        "message":"ok"
    }
    err0_result:{
        "code":0,
        "message":"unknow error"
    }
    ```


8. 微信二维码地址
    ```json
    url:129.28.101.84/wechat/testlogin
    methods: GET
    params:None
    return:{
        "code":200,
        "pid":"pid" // 静态文件地址/static/qrimages/pid.png" 
    }
    ```

## 3.开发进度

### 3.1 需要修改完善的功能

1. 添加用户管理模版，为用户提供邮箱修改功能，其他的数据可以不要弄；
2. 用户的邮箱一般不会用，是不是可以用公众号想服务器请求修改密码请求；将修改密码改为用微信登陆，或者使用微信修改密码
3. 完善数据库内容，因为程序在运行时会产生很大的内存，同时在微信登陆的同时也有很大的负荷；
4. ~~每次用户请求完成之后将pymongo数据库连接关闭，但是由于用户每次的自动回复内容是在数据库中的内容，所以这个连接没有办法关闭；~~,将数据库放在另一台服务器上，这样有助于提高数据和网站的安全性和性能
5. 为用户点击获取二维码时，美化二维码页面，为用户实现使用网页按钮开启和关闭用户自动回复
6. ~~用户提交修改表单后要为用户显示上次修改的时间，需要通过一个新的数据库表单来处理这个时间{openid:openid,lasttime:time};~~
7. 需要将数据库中的计数变量用_id的值来计数，同时在个位数前补0来处理表单排序；在微信端的函数计数和读取是使用nu这个键计数的，现在要删除之后用主键来计数和返回给用户，完成删除和查看；
8. 需要链接微信公众号，将token接入，调试微信的性能,同时修改配置的返回格式
9. ~~用户自动回复的内容也要通过pid获取，要检测用户是否已经登陆，即是否存在openidpid~~
10. 用户在微信和网页端的接口还存在一定的缺口，同时用户回复的主键还没有解决，用户添加自动回复的条数也还未处理好，现在需要注意的是将用户的数据保存，还有用户到底啊在mongodb中有多少个表

### 3.2 已经完善的内容

1. 用户的登陆注册与mongodb数据库中的openid的连接，没有在sqlite数据库中创建新的数据表单，直接在pymongo中连接；
2. 将itchat请求是二维码保存在本地的静态文件中，同时在使用时可以关闭服务器自动打开二维码图片（是否在使用后要删除文件？）；
3. 我已经将用户重置密码的邮箱和页面都写好了，但是在用户使用的时候，因为被163识别为垃圾邮件，应该要使用QQ或者Gmail来处理邮件（或者不使用邮件服务系统）
4. 用户关注公众号之后会直接得到他的userid（4位数左右）用户在网页端可以输入四位数字即可

### 3.3 需求确定

* 注册
>
> 登录/注册页面为系统进入的第一个界面，用户初次进入（无账号）需要在此输入注册的用户名，密码
> 进入第二个页面，强制要求用户关注公众号并且*让用户把公众号获得的动态验证码填写至此页面*
> 后台核验完成，注册成功，可以登录
>

* 登录
>
> *用户可以在微信公众号内快捷管理自己定义的回复内容*
> *其他功能待后续讨论*
>
> 在登陆/注册页面登陆
> 进入用户个人中心，展示微信扫码、消息定义等

- 用户接口（API）
  - 登录、退出、注册、修改密码
  - 用户信息（用户的微信名称，openID，用户的ID，用户昵称，用户的邮箱）
  - 用户微信回复信息修改
  - 个人微信登录接口
  - 用户开启和关闭自动回复接口
  



