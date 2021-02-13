module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/users',
                permanent: true,
            },
            {
                source: '/users/:id/repositories',
                destination: '/users/:id',
                permanent: true,
            },

        ]
    },
}