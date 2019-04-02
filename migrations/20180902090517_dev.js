exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('companies', table => {
            table.string('code').primary();
            table.string('name').notNullable();
        })

        .createTable('exchanges', table=>{
            table.string('code').primary();
            table.string('description').notNullable();
        })

        .createTable('trades', table=>{
            table.increments('id').primary();
            table.float("price", 2).notNullable();
            table.integer("size").notNullable();
            table.string('suspiscious')

            table.string("company_code").notNullable()
            .references('code').inTable('companies')
            .onDelete('CASCADE');

            table.string('exchange_code').notNullable()
            .references('code').inTable('exchanges')
            .onDelete('CASCADE');

            table.datetime('timestamp',6);
        })

        .createTable('sales_conditions_descriptions', table=>{
            table.string('code').primary();

            table.string('description');
        })

        .createTable('sales_conditions', table=>{


            table.integer('trade_id').references('id').inTable('trades').onDelete('CASCADE');
            
            table.string('code').references('code').inTable('sales_conditions_descriptions').onDelete('CASCADE');

            table.unique(['trade_id', 'code'])
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