const {PORT,CONNECTION_URL ,JWT_SECRET ,EMAIL_PASSWORD ,SENDER_EMAIL}=process.env

module.exports= {
    port :PORT ,
    connectionUrl:CONNECTION_URL ,
    jwtSecret :JWT_SECRET,
    emailPassword:EMAIL_PASSWORD ,
    senderEmail:SENDER_EMAIL
}