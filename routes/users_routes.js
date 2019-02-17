const Users = require('../handlers/users')
const { verifyUniqueUser } = require('../utils/userFunctions')
const regexUtils = require('../utils/regexUtils')
const Joi = require('joi');

module.exports = [
    {
        method: 'POST',
        path: '/register',
        handler: Users.createUser,
        options: {
            pre: [{ method: verifyUniqueUser }],
            validate: {
                payload: {
                    email: Joi.string().regex(regexUtils.email).required(), // email regex
                    password: Joi.string().regex(regexUtils.password).required() // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number, one special character
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: Users.login,
        options: {
            validate: {
                payload: {
                    email: Joi.string().regex(regexUtils.email).required(), // email regex
                    password: Joi.string().required()
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/logout',
        handler: Users.logout,
        options:{
            auth: 'jwt'
        }
    },
    {
        method: 'GET',
        path: '/verifySession',
        handler: Users.verifySession,
        options:{
            auth:'jwt'
        }
    }
]