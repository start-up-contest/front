import axiosClient from "../axios";

// 사용자 정보 조회
export function postRegister() {
    return axiosClient({
        url: '/register',
        method: 'post'
    })
}