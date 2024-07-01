// const nodemail =require("nodemailer");
// //ypry rdvx tsvz rehw
// const sendEmail =async({emailTo ,subject  ,code ,content} )=>{
//    const transporter =nodemail.createTransport({
//     host:"smtp.gmail.com",
//    port: 465,
//     secure:false,
//     auth:{
//         user:"abdelouafi.sidane2014@gmail.com",
//         pass: "ypry rdvx tsvz rehw"
//     },
//    });
//    const message ={
//     from: 'abdelouafi.sidane2014@gmail.com', // Add a from address
//     to:emailTo,
//     subject,
//     html:`
//         <div>
//         <h3> Use this bellow code to ${content}</h3>
//         <p> <strong>Code :</strong> ${code}</p>
//         </div>
//     `,
//    };
//    await transporter.sendMail(message)
// }
// module.exports =sendEmail ;
const nodemailer = require('nodemailer');
const {emailPassword , senderEmail}=require("../config/keys");

const sendEmail = async ({ emailTo, subject, code, content }) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // Use true for 465, false for other ports
            auth: {
                user: senderEmail,
                pass: emailPassword// Replace with your actual app password
            },
            debug: true, // Enable debugging
            logger: true // Enable logging
        });

        const message = {
            from: 'abdelouafi.sidane2014@gmail.com', // Add a from address
            to: emailTo,
            subject: subject,
            html: `
                <div>
                    <h3> Use the code below to ${content}</h3>
                    <p><strong>Code:</strong> ${code}</p>
                </div>
            `,
        };

        await transporter.sendMail(message);
        console.log('Email sent successfully');

    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = sendEmail;
