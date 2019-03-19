const Trades = require('../models/Trades')
const Boom = require('boom')

exports.fetchTrades = async function (request, h) {
    try {
        const trades = await Trades.query();

        if (trades[0] instanceof Trades || trades.length ==0) {
            return h.response(trades);
        } else {
            throw Boom.badRequest("Failed to fetch trades")
        }
    } catch (err) {
        throw Boom.badRequest(err);
    }
}


exports.fetchMostTradedCompany = async function (request, h) {
    try {
        const trades = await Trades.query();

        if (trades[0] instanceof Trades || trades.length ==0) {
            return h.response(trades);
        } else {
            throw Boom.badRequest("Failed to fetch trades")
        }
    } catch (err) {
        throw Boom.badRequest(err);
    }
}

