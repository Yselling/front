const api = (method, path, data = null) => {
    const config = {
        baseUrl: "http://localhost/api/",
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
                    'Content-Type': 'application/json',
            }
            : {
                    'Content-Type': 'application/json',
            };
    };

    return {
        method: method,
        url: url(),
        headers: headers(),
        data: data,
    };
};

export default api;
