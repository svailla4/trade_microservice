'use strict';

const { Model } = require('objection')

class Exchanges extends Model {
    static get tableName() {
        return 'exchanges'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                code: {type:'string'},
                description: {type:'string'}
            }
        }
    }

    static get relationMappings() {
        return {
            trades: {
                relation: Model.BelongsToOneRelation,
                modelClass: __dirname + '/Trades',
                join: {
                    from: 'exchanges.code',
                    to: 'trades.exchange_code'
                }
            }
        }
    }
}

module.exports = Exchanges