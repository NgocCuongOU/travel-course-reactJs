import axios from "axios"
export let endpoints = {
    "tours": "/tours/",
    "tour-detail": (tourId) => `/tours/${tourId}`
}

export default axios.create({
    baseURL: "http://127.0.0.1:8000/"
})