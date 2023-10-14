const timeApi = (method, path) => {
    const config = {
        baseUrl: "https://api.sunrise-sunset.org/json?",
        path: path,
        token: null,
    };

    let url = () => {
        return config.baseUrl + config.path;
    };

    let headers = () => {
        return config.token
            ? {
                Authorization: `Bearer ${config.token}`,
            }
        : {};
    };

    return {
        method: method,
        url: url(),
        headers: headers(),
    };
};

export default timeApi;
