'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EquipamentoSchema extends Schema {
  up () {
    this.create('equipamentos', (table) => {
      table.increments()
      table
      .integer('player_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('players')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table
      .integer('tipo_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('tipos')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('nomeEquipamento').notNullable()
      table.string('descSomaAtri1')
      table.integer('valSomaAtri1')
      table.string('descSomaAtri2')
      table.integer('valSomaAtri2')
      table.string('descSubAtri1')
      table.integer('valSubAtri1')
      table.string('descSubAtri2')
      table.integer('valSubAtri2')
      table.timestamps()
    })
  }

  down () {
    this.drop('equipamentos')
  }
}

module.exports = EquipamentoSchema
