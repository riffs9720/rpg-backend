'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MestreSchema extends Schema {
  up () {
    this.create('mestres', (table) => {
      table.string('nome').notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('nivelAcesso').notNullable().defaultTo('player')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('mestres')
  }
}

module.exports = MestreSchema
