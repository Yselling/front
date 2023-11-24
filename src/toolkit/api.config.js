const api = (method, path, data = null, token = null) => {
    const config = {
        baseUrl: process.env.REACT_APP_API_URL,
        path: path,
        token: token,
    };

    let url = () => {
        return config.baseUrl + config.path;
    };

    let headers = () => {
        return config.token
            ? {
                    'Authorization': `Bearer ${config.token}`,
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
