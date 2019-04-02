const data = require('../data/seed_data')

exports.seed = async function (knex, Promise) {
  // Deletes ALL existing entries
  await Promise.all([
	knex('sales_conditions_descriptions').del(),
	knex('sales_conditions').del(),
	knex('trades').del(),
	knex('exchanges').del(),
	knex('companies').del()
  ]);

  await knex('companies').insert(data.companies);
  await knex('exchanges').insert(data.exchanges);
  await knex('trades').insert(data.trades);
  await knex('sales_conditions_descriptions').insert(data.salesConditionsDescriptions);
  await knex('sales_conditions').insert(data.salesConditions);

};