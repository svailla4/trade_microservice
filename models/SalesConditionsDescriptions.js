'use strict';

const { Model } = require('objection')

class SalesConditionsDescriptions extends Model {
    static get tableName() {
        return 'sales_conditions_descriptions'
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
                modelClass: __dirname + '/SalesConditions',
                join: {
                    from: 'sales_conditions_descriptions.code',
                    to: 'sales_conditions.code'
                }
            }
        }
    }
}

module.exports = SalesConditionsDescriptions