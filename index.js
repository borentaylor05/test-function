
exports.handler = (event) => {
    console.log('V3');
    return Promise.resolve({statusCode: 200, body: JSON.stringify(event)});
}