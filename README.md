## 1.wechat

***该项目仅为前端实现，后端服务器采用django实现，未开源

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


## 2.接口文档
http://www.yangp1205.cn/34/

**1.PATH = 129.28.101.84(测试端口8000）**
*每次post请求都需要带csrf_token参数（后期），除登陆注册外，其他接口都需要登陆访问，携带有有效都session信息*
**2.统一状态码**

| code | message |
|------|---------|
| 200 | ok |
| 0 | 未知错误 |
| -1 | 用户名已存在 |
| -2 | 用户名已存在 |
| -3 | 参数错误 |
| -4 | 用户名或密码错误 |
| -5 | 用户不匹配 |
| -6 | 验证码已使用，请检查是否正确，或通过微信公众号联系后台管理 |

### account部分

1.用户注册

```javascript
    url:PATH/account/register
    methods: POST
    params:None
    body:{
        "username":"username",
        "password":"pwd",
        "last_name":"1", 这个参数很重要，需要和公众号项目同时使用，在注册时需要关注关注公众号，生成last_name，接口测试时可自行配置
    }
    response:{
        success_result:{
            "code":200,
            "message":"ok"
        }
        err_result:{
            "code":0,
            "message":"未知错误",
        }
        err_result:{
            "code":-1,
            "message":"用户名已存在",
        }
        err_result:{
            "code":-3,
            "message":"参数错误",
        }
        err_result:{
            "code":-2,
            "message":"无效验证码",
        }
        err_result:{
            "code":-6,
            "message":"验证码已使用，请检查是否正确，或通过微信公众联系后台管理",
        }
    }

```

2.用户登录

```javascript
    url:PATH/account/login
    methods: POST
    params:None
    body:{
        "username":"username",
        "password":"pwd"
    }
    response:{
        success_result:{
            "code":200,
            "message":"ok"
        }
        err_result:{
            "code":-3,
            "message":"参数错误"
        }
        err_result:{
            "code":-4,
            "message":"用户名或密码错误",
        }
        err_result:{
            "code":0,
            "message":"未知错误",
        }
    }

```

3.用户退出

```javascript
    url:PATH/account/logout
    methods: GET
    params:None
    response:{
        success_result:{
            "code":200,
            "message":"ok"
        }
        err_result:{
            "code":0,
            "message":"未知错误"
        }
    }

```

4.用户修改密码

```javascript
    url : PATH/account/changepwd
    methods:POST
    params:None
    body:{
        "username":"username",
        "password":"pwd",
        "newpassword":"newpwd",
    }
    respomse:{
        success_result:{
            "code":200,
            "message":"ok"
        }
        err_result:{
            "code":0,
            "message":"未知错误"
        }
        err_result:{
            "code":-4,
            "message":"用户名或密码错误",
        }
    }

```

### 回复内容部分

1.用户回复数据查看

```javascript
    url:PATH/database/show
    methods: GET
    params:none
    body:None
    response:{
        success_return:{          
            "code": 200,
            "message": "ok",
            "data": [
                {
                    "id": 1,
                    "receive": "更新",
                    "response": "测试"
                },
                {
                    "id": 2,
                    "receive": "图标",
                    "response": "不能使用苹果输入中的图标，真的吗？"
                },
                {
                    "id": 3,
                    "receive": "苹果",
                    "response": "橘子"
                },
                {
                    "id": 4,
                    "receive": "添加",
                    "response": "测试"
                }     
            ]
        }
        err_result:{
            "code":0,
            "message":"未知错误",
        }
    }

```

2.添加回复

```javascript
    url:PATH/database/add
    methods: POST
    params:None
    body:{
        "request":"橘子",
        "response":"苹果"
    }
    response:{
        sussecc_return:{
            "code":200,
            "message":"ok",
        }
        err_result:{
            "code":0,
            "message":"未知错误",
        }
    }
    

```

3.删除回复

```javascript
    url:PATH/database/delete/?id=n
    methods: GET
    params:n  //删除内容的主键id
    body:None
    response:{
        sussecc_return:{
            "code":200,
            "message":"ok",
        }
        err_result:{
            "code":0,
            "message":"未知错误",
        }
        err_result:{
            "code":-5,
            "message":"用户不匹配",
        }
    }

```

4.修改回复

```javascript
    url:PATH/database/update/?id=n
    methods: POST
    params:n  //修改内容的主键id
    body:{
        "request":"修改",
        "response":"测试"
    }
    response:{
        sussecc_return:{
            "code":200,
            "message":"ok",
        }
        err_result:{
            "code":0,
            "message":"未知错误",
        }
        err_result:{
            "code":-5,
            "message":"用户不匹配",
        }
    }
    

```

### 个人微信登陆部分

1.微信二维码地址获取

```javascript
    url:PATH/wechat/testlogin
    methods: GET
    params:None
    body:None
    response:{
        sussecc_return:{
            "code":200,
            "pid":"pid" // 静态文件地址/static/qrimages/pid.png" 
        }
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
  



