'use strict';

const { Model } = require('objection')

class SalesConditions extends Model {
    static get tableName() {
        return 'sales_conditions'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                trade_id: {type:'integer'},
                code: {type:'string'}
            }
        }
    }

    static get relationMappings() {
        return {
            trades: {
                relation: Model.BelongsToOneRelation,
                modelClass: __dirname + '/Trades',
                join: {
                    from: 'sales_conditions.trade_id',
                    to: 'trades.id'
                }
            }
        }
    }
}

module.exports = SalesConditions