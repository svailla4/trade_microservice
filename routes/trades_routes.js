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
    },
    {
        method: 'GET',
        path: '/health',
        handler: Trades.health
    },
    {
        method: 'GET',
        path: '/trades/company',
        handler: Trades.companyTrades
    },
    {
        method: 'GET',
        path:'/trades/company/recent',
        handler: Trades.companyTradeRecent
    },
    {
        method: 'GET',
        path:'/trades/company/average',
        handler: Trades.companyAverageStockPrice
    },
    {
        method: 'GET',
        path:'/trades/exchange',
        handler: Trades.tradesOnExchange
    },
    {
        method: 'GET',
        path:'/trades/today',
        handler: Trades.todaysTrades
    }
]