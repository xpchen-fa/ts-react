import axios from "axios";
import { message } from 'antd'

// 请求拦截
axios.interceptors.request.use(config => {
    // 此处可以封装一些加载状态
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
})

// 如果http状态码正常，则直接返回数据
function checkStatus(response: { status: Number }) {
    if (response) {
        if (response.status === 200 || response.status === 304) {
            return response
        }
        switch (response.status) {
            case 400:
                message.error('请求错误')
                break
            case 401:
                // 权限处理 重新登录 清空token
                message.error('请检查用户名和密码')
                window.location.href = '/login'
                break
            case 403:
                message.error('身份过期请重新登录', 3)
                window.location.href = '#/login'
                break
            case 404:
                message.error('请求错误,未找到该资源')
                break
            case 405:
                message.error('请求方法未允许')
                break
            case 408:
                message.error('请求超时')
                break
            case 500:
                message.error('服务器端出错')
                break
            case 501:
                message.error('网络未实现')
                break
            case 502:
                message.error('网络错误')
                break
            case 503:
                message.error('服务不可用')
                break
            case 504:
                message.error('网络超时')
                break
            default:
                message.error('未知错误')
        }
        throw response;
    } else {
        throw { data: '网络错误' }
    }

}

axios.defaults.timeout = 10000;

// restful API封装
export default {
    post(url: string, data: Object) {
        return axios({
            method: 'post',
            url,
            data: data,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(
            (res) => {
                return checkStatus(res)
            }
        )
    },
    put(url: string, data: Object) {
        return axios({
            method: 'put',
            url,
            data: data,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(
            (res) => {
                return checkStatus(res)
            }
        )
    },
    get(url: string, params: Object) {
        return axios({
            method: 'get',
            url,
            params, // get 请求时带的参数
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(
            (res) => {
                return checkStatus(res)
            }
        )
    },
    del(url: string, params: Object) {
        return axios({
            method: 'delete',
            url,
            params, // get 请求时带的参数
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(
            (res) => {
                return checkStatus(res)
            }
        )
    }
}
