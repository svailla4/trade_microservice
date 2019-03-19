'use strict';

const { Model } = require('objection')

class Companies extends Model {
    static get tableName() {
        return 'companies'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                code: { type: 'string' },
                name: { type: 'string' }
            }
        }
    }

    static get relationMappings() {
        return {
            trades: {
                relation: Model.HasOneRelation,
                modelClass: __dirname + '/Trades',
                join: {
                    from: 'companies.code',
                    to: 'trades.company_code'
                }
            }
        }
    }
}

module.exports = Companies