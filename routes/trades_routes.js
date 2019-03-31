const Trades = require('../handlers/trades')

module.exports = [
    {
        method: 'GET',
        path: '/trades',
        handler: Trades.fetchTrades,
    },
    {
        method: 'DELETE',
        path: '/trades/delete',
        handler: Trades.deleteTrade
    },
    {
        method: 'POST',
        path: '/trades/insert',
        handler: Trades.insertTrade
    }
]