exports.companies = [
	{
		code: 'CIBC',
		name: 'Canadian Imperial Bank of Commerce'
	},
	{
		code: 'TD',
		name: 'TD Canada Trust'
	}
]

exports.trades =[
	{
		id: 1,
		price: 23.45,
		size: 100,
		suspiscious: 'yes',
		company_code: 'CIBC',
		exchange_code: 'TSX',
		timestamp: '2016-06-22 19:10:25-07'
	},
	{
		id: 2,
		price: 23.45,
		size: 100,
		suspiscious: 'yes',
		company_code: 'TD',
		exchange_code: 'TSX',
		timestamp: '2016-06-22 19:10:25-07'
	},
	{
		id: 3,
		price: 211.45,
		size: 2323,
		suspiscious: 'no',
		company_code: 'CIBC',
		exchange_code: 'TSX',
		timestamp: '2016-06-22 19:10:25-07'
	}
]

exports.exchanges = [
	{
		code: 'TSX',
		description: 'Toronto Stock Exchange'
	}
]

exports.salesConditions = [
	{
		trade_id: 1,
		code: 'A'
	},
	{
		trade_id: 2,
		code: 'A'
	},
	{
		trade_id: 3,
		code: 'A'
	}
]

exports.salesConditionsDescriptions =[
	{
        sales_conditions_id: 1,
		description: 'Accepted'
	}
]