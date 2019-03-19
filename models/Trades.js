'use strict';

const { Model } = require('objection')

class Trades extends Model {
    static get tableName() {
        return 'trades'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                price: { type: 'float' },
                size:{type:'integer'},
                time:{type:'unexisting-type'},
                exchange_code:{type:'string'},
                suspiscious:{type:'string'},
                company_code:{type:'string'}
            }
        }
    }

    static get relationMappings() {
        return {
            companies: {
                relation: Model.BelongsToOneRelation,
                modelClass: __dirname + '/Companies',
                join: {
                    from: 'trades.company_code',
                    to: 'companies.code'
                }
            },
            exchanges: {
                relation: Model.HasOneRelation,
                modelClass: __dirname + '/Exchanges',
                join: {
                    from:'trades.exchange_code', 
                    to: 'exchanges.code'
                }
            },
            salesConditions:{
                relation: Model.HasOneRelation,
                modelClass: __dirname + '/SalesConditions',
                join: {
                    from: 'trades.id',
                    to: 'sales_conditions.trade_id'
                }
            }
        }
    }
}

module.exports = Trades