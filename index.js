
exports.handler = (event) => {
    console.log('V2');
    return Promise.resolve({statusCode: 200, message: JSON.stringify(event)});
}