const fs = require('fs');
const AWS = require('aws-sdk');
const {functionName, awsRegion} = require('../config');

AWS.config.update({region: awsRegion});

const lambda = new AWS.Lambda();

function updateAlias(functionName, version) {
    const params = {
        FunctionName: functionName, 
        FunctionVersion: version, 
        Name: 'DEV'
    };

    lambda.updateAlias(params, function(err) {
        if (err) console.log(`Error updating DEV to point to version ${version}`, err.stack); // an error occurred
        else     console.log(`Updated DEV to version ${version}`);           // successful response
    });
}

fs.readFile(`${functionName}.zip`, function (err, data) {
    if (err) { throw err; }
  
    var buffer = new Buffer(data, 'binary');

    const params = {
        FunctionName: functionName,
        Publish: true,
        ZipFile: buffer
    }
    
    lambda.updateFunctionCode(params, function(err, data) {
        if (err) return console.log(err, err.stack);
        
        updateAlias(functionName, data.Version);
    });
});
