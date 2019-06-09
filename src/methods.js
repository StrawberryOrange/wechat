import axios from 'axios'
export default {
    methods: {
        axios: function () {
            axios({
                method: method,
                url: url,
                asyn: options.asyn || true,
                headers: headers,
                data: data
            }).then(function (res) {
                var successCallback = options.success || null
                if (typeof successCallback === 'function') {
                    successCallback(res.data, res.headers)
                }
            }).catch(function (xhr) {
                var code = xhr && xhr.responseJSON && xhr.responseJSON.code || -1
                if (code === 30006) {
                    console.error('token失效')
                } else if (code === 30007) {
                    console.error('token过期')
                    // 刷新token以后重试请求
                    self.refreshTokenEvent(function () {
                        var retryCallback = self.caringRequest(options) || null
                        if (typeof retryCallback === 'function') {
                            retryCallback()
                        }
                    })
                } else {
                    // 其他网络连接性错误，计划采用toast.............................
                    console.error(xhr && xhr.responseJSON && xhr.responseJSON.message || '网络请求异常')
                    self.toast({
                        message: xhr && xhr.responseJSON && xhr.responseJSON.message || '网络请求异常'
                    })
                }
            })
        }
    }
}