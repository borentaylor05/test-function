const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions

describe('GET /test', () => {
    const testResp = frisby.get(`${process.env.API_BASE_URL}/test`);

    it ('should returns 200 with the correct properties', function (done) {
        testResp
            .expect('status', 200)
            .expect('jsonTypes', 'event.stageVariables.lambdaAliasName', 'DEV')
            .expect('jsonTypes', 'version', 'V4')
            .done(done)
            .catch(done);
    });
});