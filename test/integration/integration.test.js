const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions

describe('GET /test', () => {
    it ('should return a status of 200', function (done) {
        frisby
            .get(`${process.env.API_BASE_URL}/test`)
            .expect('status', 200)
            .expect('jsonTypes', 'stageVariables.lambdaAliasName', 'DEV')
            .done(done)
            .catch(done);
    });
});