exports.handler= function(events, context, callback){
    let body 
    const secretContent = `
    <h3>Welcome to the Secret Area</h3>
    <p>We can tell you that the sky is <strong>blue</strong>, and 2+2=4</p>
    `
    if(event.body){
        body=JSON.parse(event.body)
    }else {
        body= {}
    }
    if(body.password == "javascript"){
        callback(null, {
            statusCode: 200,
            body : secretContent
        })
    } else {
        callback(null, {
            statusCode: 401
        })
    }

    
}