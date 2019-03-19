const Trades = require('../handlers/trades')
const Joi = require('joi');

module.exports = [
    {
        method: 'GET',
        path: '/trades',
        handler: Trades.fetchTrades,
    }
    // {
    //     method: 'POST',
    //     path: '/login',
    //     handler: Users.login,
    //     options: {
    //         validate: {
    //             payload: {
    //                 email: Joi.string().regex(regexUtils.email).required(), // email regex
    //                 password: Joi.string().required()
    //             }
    //         }
    //     }
    // },
    // {
    //     method: 'POST',
    //     path: '/logout',
    //     handler: Users.logout,
    //     options:{
    //         auth: 'jwt'
    //     }
    // },
    // {
    //     method: 'GET',
    //     path: '/verifySession',
    //     handler: Users.verifySession,
    //     options:{
    //         auth:'jwt'
    //     }
    // }
]