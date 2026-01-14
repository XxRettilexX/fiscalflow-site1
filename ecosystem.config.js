module.exports = {
    apps: [
        {
            name: 'fiscalflow',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production',
                PORT: 3000
            },
        },
    ],
};
