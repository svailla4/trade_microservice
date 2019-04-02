const Trades = require('../handlers/trades')
const Joi = require('joi');

module.exports = [
    {
        method: 'GET',
        path: '/trades',
        handler: Trades.fetchTrades,
    },
    {
        method: 'DELETE',
        path: '/trades/delete',
        handler: Trades.deleteTrade,
        options:{
            validate:{
                payload:{
                    id: Joi.number().required()
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/trades/insert',
        handler: Trades.insertTrade,
        options:{
            validate:{
                payload:{
                    id: Joi.number().integer().required(),
                    price: Joi.number().precision(2).required(),
                    size: Joi.number().integer().required(),
                    timestamp: Joi.date().timestamp('javascript').required(),
                    exchange_code: Joi.string().required(),
                    suspiscious: Joi.string().required(),
                    company_code: Joi.string().required()
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/health',
        handler: Trades.health
    },
    {
        method: 'GET',
        path: '/trades/company',
        handler: Trades.companyTrades,
        options:{
            validate:{
                query:{
                    code: Joi.string().required()
                }
            }
        }
    },
    {
        method: 'GET',
        path:'/trades/company/recent',
        handler: Trades.companyTradeRecent,
        options:{
            validate:{
                query:{
                    code: Joi.string().required()
                }
            }
        }
    },
    {
        method: 'GET',
        path:'/trades/company/average',
        handler: Trades.companyAverageStockPrice,
        options:{
            validate:{
                query:{
                    code: Joi.string().required()
                }
            }
        }
    },
    {
        method: 'GET',
        path:'/trades/exchange',
        handler: Trades.tradesOnExchange,
        options:{
            validate:{
                query:{
                    code: Joi.string().required()
                }
            }
        }
    },
    {
        method: 'POST',
        path:'/trades/date',
        handler: Trades.dateTrades,
        options:{
            validate:{
                payload:{
                    date: Joi.date().timestamp('javascript').required()
                }
            }
        }
    },
    {
        method: 'GET',
        path:'/trades/exchange/mostTrades',
        handler: Trades.mostTradedCompanyOnExchange,
        options:{
            validate:{
                query:{
                    date: Joi.string().required()
                }
            }
        }
    }
]