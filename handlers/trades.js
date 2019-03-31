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


exports.deleteTrade = async function (request, h) {
    try {
        const numDeleted = await Trades
        .query()
        .delete()
        .where('id', '=', request.payload.id);

        if(numDeleted===0){
            throw Boom.badRequest("Nothing was deleted")
        }

        return h.response(numDeleted)

    } catch (err) {
        throw Boom.badRequest(err);
    }
}

exports.insertTrade = async function (request, h) {
    try {
        const trade = await Trades
        .query()
        .insert({
            id: request.payload.id,
            price: request.payload.price,
            size: request.payload.size,
            timestamp: request.payload.timestamp,
            exchange_code: request.payload.exchangeCode,
            suspiscious: request.payload.suspiscious,
            company_code: request.payload.companyCode
        })

        if(trade instanceof Trades){
            return h.response(trade)
        }
        else{
            throw Boom.badRequest("Failed to insert, check your parameters")
        }

    } catch (err) {
        throw Boom.badRequest(err);
    }
}

exports.health = function (request, h) {
    return h.response({status: 200});
}
