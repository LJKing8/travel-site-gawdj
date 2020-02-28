exports.handler= function(events, context, callback){
    callback(null, {
        statusCode: 200,
        body : "welcome to the super secret area"
    })
}