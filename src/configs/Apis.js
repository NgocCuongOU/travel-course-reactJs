import axios from "axios"
export let endpoints = {
    "tours": "/tours/",
    "tour-detail": (tourId) => `/tours/${tourId}/`,
    "tour-schedules": (tourId) => `/tours/${tourId}/schedules/`,
    "tour-images": (tourId) => `/tours/${tourId}/images`,
    "blogs": "/posts/",
    "blog-detail": (blogId) => `/posts/${blogId}/`,
    "categories": "/categories/",
    "tags": "/tags/",
    "oauth2-info": "/oauth2-info/",
    "login": "/o/token/",
    "current-user": "/users/current-user/"
}

export default axios.create({
    baseURL: "http://127.0.0.1:8000/"
})