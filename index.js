
exports.handler = (event) => {
    return Promise.resolve({
        statusCode: 200, 
        body: {
            version: 'V4',
            event: JSON.stringify(event)
        }
    });
};
