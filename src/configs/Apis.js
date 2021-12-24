import axios from "axios";
export let endpoints = {
  tours: "/tours/",
  "tour-detail": (tourId) => `/tours/${tourId}/`,
  "tour-schedules": (tourId) => `/tours/${tourId}/schedules/`,
  "tour-images": (tourId) => `/tours/${tourId}/images`,
  blogs: "/posts/",
  "blog-detail": (blogId) => `/posts/${blogId}/`,
  categories: "/categories/",
  tags: "/tags/",
  "oauth2-info": "/oauth2-info/",
  login: "/o/token/",
  "current-user": "/users/current-user/",
  register: "/users/",
  "comments-post": (postId) => `/posts/${postId}/comments/`,
  "comments-tour": (tourId) => `/tours/${tourId}/comments/`,
  "add-comment-post": (postId) => `/posts/${postId}/add_comment/`,
  "add-comment-tour": (tourId) => `/tours/${tourId}/add_comment/`,
  rating: (tourId) => `/tours/${tourId}/rate/`,
  "recently-post": "/posts/recently_posts",
  "recently-post-main": "/posts/recently_posts_main",
  "related-post": (postId) => `/posts/${postId}/related_posts/`,
  "incre-views": (postId) => `/posts/${postId}/views`,
  "booking": (tourId) => `/tours/${tourId}/booking/`
};

export default axios.create ({
  baseURL: "http://127.0.0.1:8000/",
});
