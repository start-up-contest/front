import axiosClient from "../axios";

// 사용자 정보 조회
export function postRegister() {
    return axiosClient({
        url: '/register',
        method: 'post'
    })
}

//로그인
export function postLogin(request) {
    return axiosClient({
        url: '/login',
        method: 'post',
        data: request,
    })
}