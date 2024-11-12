import { createRouter } from '@nanostores/router'

export const $router = createRouter({
    home: '/',
    post: '/posts/:postId'
})