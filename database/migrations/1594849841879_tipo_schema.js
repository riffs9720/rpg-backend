'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoSchema extends Schema {
  up () {
    this.create('tipos', (table) => {
      table.increments()
      table.string('descricaoTipo').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tipos')
  }
}

module.exports = TipoSchema
