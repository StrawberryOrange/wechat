import Vue from 'vue'
import axios from 'axios'

const mixin = {
    methods: {
        test: function () {
            console.log('qaq')
        },
        ajax: function (options) {
            var headers = options.headers || {}
            var method = options.method || options.type || 'GET'
            var data = options.data || null
            var url = options.url || ''
            if (method === 'GET' && data) {
                let index = 0
                for (var key in data) {
                    url += (index === 0 ? '?' : '&') + key + '=' + data[key]
                    index++
                }
            }
            if (headers == {} && method == "POST") {
                header = {
                    "Content-Type": "application/x-www-form-urlencode; charset=utf-8;"
                }
            }
            console.log(options)
            axios({
                method: method,
                url: url,
                asyn: options.asyn || true,
                headers: headers,
                data: data
            })
                .then(function (res) {
                    var successCallback = options.success || null
                    if (typeof successCallback === 'function') {
                        successCallback(res.data, res.headers)
                    }
                })
                .catch(function (xhr) {
                    console.log(xhr)
                    console.log('出现错误')
                })

        }
    }
}

export default mixin