
exports.handler = (event) => {
    const resp = {
        event,
        version: 'V Another branch'
    };

    return Promise.resolve({
        statusCode: 200, 
        body: JSON.stringify(resp)
    });
};
