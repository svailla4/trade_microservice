const Trades = require('../models/Trades')
const Companies = require('../models/Companies')
const Exchanges = require('../models/Exchanges')
const Boom = require('boom')

exports.fetchTrades = async function (request, h) {
    try {
        const trades = await Trades.query()
        .orderBy('timestamp');

        if (trades[0] instanceof Trades || trades.length == 0) {
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

        if (numDeleted === 0) {
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

        if (trade instanceof Trades) {
            return h.response(trade)
        }
        else {
            throw Boom.badRequest("Failed to insert, check your parameters")
        }

    } catch (err) {
        throw Boom.badRequest(err);
    }
}

exports.companyTrades = async function (request, h) {
    try {

        const company = await Companies
            .query()
            .findOne({ code: request.query.code });

        const companyTrades = await company
            .$relatedQuery('trades')
            .orderBy('timestamp');

        return h.response(companyTrades)
    } catch (err) {
        throw Boom.badRequest(err);
    }
}

exports.companyTradeRecent = async function (request, h) {
    try {

        const company = await Companies
            .query()
            .findOne({ code: request.query.code });

        const companyTrades = await company
            .$relatedQuery('trades')
            .orderBy('timestamp')
            .first();

        return h.response(companyTrades)

    } catch (err) {
        throw Boom.badRequest(err);
    }
}

exports.companyAverageStockPrice = async function (request, h) {
    try {

        const company = await Companies
            .query()
            .findOne({ code: request.query.code });

        const averageStockPrice = await company
            .$relatedQuery('trades')
            .avg('price as average')

        return h.response(averageStockPrice)

    } catch (err) {
        throw Boom.badRequest(err);
    }
}

exports.tradesOnExchange = async function (request, h) {
    try {

        const exchange = await Exchanges
            .query()
            .findOne({code: request.query.code});

        const trades = await exchange
            .$relatedQuery('trades')

        return h.response(trades)

    } catch (err) {
        throw Boom.badRequest(err);
    }
}

exports.todaysTrades = async function (request, h) {
    try {

        const actualDate = new Date();
        
        const startDate = new Date(actualDate.getFullYear()
        ,actualDate.getMonth()
        ,actualDate.getDate()
        ,0,0,0);

        const endDate =  new Date(actualDate.getFullYear()
        ,actualDate.getMonth()
        ,actualDate.getDate()
        ,23,59,59);

        const trades = await Trades
            .query()
            .where('timestamp', '>=', startDate)
            .andWhere('timestamp','<=', endDate);

        return h.response(trades)

    } catch (err) {
        throw Boom.badRequest(err);
    }
}

exports.mostTradedCompanyOnExchange = async function (request, h) {
    try {
        const exchange = await Exchanges
        .query()
        .findOne({code: request.query.code});

        const mostTraded = await exchange
        .$relatedQuery('trades')
        .select('company_code')
        .count('company_code as count')
        .groupBy('company_code')
        .orderBy('count', 'desc')
        .first();

        return h.response(mostTraded);

    } catch (err) {
        throw Boom.badRequest(err);
    }
}


exports.health = function (request, h) {
    return h.response({ status: 200 });
}
