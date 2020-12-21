const express = require('express');
const router = express.Router();

const verifyEmail = require('../emailUsingNodemailer/emailVerification');
const verifyNo = require('../smsUsingNexmo/noVerification')

router.post('/send', verifyEmail.sendEmail)

router.post('/sendNo', verifyNo.noVerify)

module.exports = router