
const knex = require('knex')
const moment = require('moment')
const objection = require('objection')
const inflected = require('inflected')

const pluralize = inflected.pluralize.bind(inflected)
const Model = objection.Model

class Base extends Model {
  static get tableName () {
    return pluralize(this.name).toLowerCase()
  }

  $beforeInsert () {
    this.created_at = this.created_at || moment().format('YYYY-MM-DD HH:mm:ss')
    this.updated_at = this.created_at
  }

  $beforeUpdate () {
    this.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
  }

  // @override
  static knex () {
    if (!super.knex()) {
      super.knex(knex({
        client: 'mysql',
        connection: process.env.DATABASE_URL
      }))
    }

    return super.knex()
  }
}

module.exports = Base
