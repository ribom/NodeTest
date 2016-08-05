var modelSuccess = {
    resultText: 'You have successfully signed up to Gman\'s site of awesomenes!',
};

var modelFailure = {
    resultText: 'Could not add user',
};

createModel = function(signupResult) {
    if(signupResult == null || signupResult.result.ok !== 1){
        return modelFailure;
    } else {
        return modelSuccess;
    }
};

module.exports = {
    createModel: createModel
};
