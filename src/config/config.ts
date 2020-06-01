const config = {
    base: {
        api:"http://localhost:8080"
    },
    development: {
        api: "http://localhost:8080"
    },
    test: {
        api: "http://localhost:8080"
    },
    production: {
        api: "http://localhost:8080"
    }
};
export default Object.assign(config.base, config[process.env.NODE_ENV]);