const data = require('../data/seed_data')

exports.seed = async function (knex, Promise) {
  // Deletes ALL existing entries
  await Promise.all([
	knex('sales_conditions_descriptions').del(),
	knex('sales_conditions').del(),
	knex('trades').del(),
	knex('exchanges').del(),
	knex('companies').del()
])

  await Promise.all([
	knex('companies').insert(data.companies),
	knex('exchanges').insert(data.exchanges),
	knex('trades').insert(data.trades),
	knex('sales_conditions').insert(data.salesConditions),
	knex('sales_conditions_descriptions').insert(data.salesConditionsDescriptions)
  ])
};