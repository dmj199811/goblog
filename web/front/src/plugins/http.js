import Vue from 'vue'
import axios from 'axios'

// axios请求地址
axios.defaults.baseURL = 'http://120.46.183.231:3000/api/v1'

Vue.prototype.$http = axios
