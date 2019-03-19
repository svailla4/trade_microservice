exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('companies', table => {
            table.string('code').primary();
            table.string('name').notNullable();
        })

        .createTable('trades', table=>{
            table.increments('id').primary();
            table.float("price", 2).notNullable();
            table.integer("size").notNullable();
            table.string('suspiscious')

            table.string("company_code").notNullable();
            table.foreign('company_code').references('code').inTable('companies');

            table.string('exchange_code').notNullable();
            table.foreign('exchange_code').references('code').inTable('exchanges');

            table.datetime('timestamp',6);
        })

        .createTable('sales_conditions', table=>{
            table.integer('trade_id').primary();
            table.foreign('trade_id').references('id').inTable('trades');
            table.integer('code').primary();
        })

        .createTable('sales_conditions_descriptions', table=>{
            table.string('code').primary();
            table.foreign('code').references('code').inTable('sales_conditions');
            table.string('description');
        })

        .createTable('exchanges', table=>{
            table.string('code').primary();
            table.string('description').notNullable();
        })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('companies')
        .dropTableIfExists('trades')
        .dropTableIfExists('sales_conditions')
        .dropTableIfExists('sales_conditions_descriptions')
        .dropTableIfExists('exchanges')
};