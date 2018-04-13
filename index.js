
exports.handler = (event) => {
    const resp = {
        event,
        version: 'V4'
    };

    return Promise.resolve({
        statusCode: 200, 
        body: JSON.stringify(resp)
    });
};
