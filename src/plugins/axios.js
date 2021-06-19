import Vue from 'vue'

import axios from 'axios'

// axios.defaults.baseURL="http://localhost:3333"

Vue.use({
    install(Vue){
        Vue.prototype.$http=axios.create({
            baseURL:"http://localhost:3333"
        })
        Vue.prototype.$http.interceptors.request.use(config=>{
            if(config.method=='get'){
                console.log('MÉTODO = GET')
            }
            return config
        },error=>Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(config=>{
            if(config.method=='get'){
                console.log('MÉTODO = GET')
            }
            return config
        },error=>Promise.reject(error))
    }
})