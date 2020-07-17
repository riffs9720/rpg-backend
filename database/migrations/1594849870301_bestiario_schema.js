'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BestiarioSchema extends Schema {
  up () {
    this.create('bestiarios', (table) => {
      table.increments()
      table.string('nomeMonstro')
      table.integer('vidaAtual').notNullable()
      table.integer('vidaTotal').notNullable()
      table.integer('manaAtual').notNullable()
      table.integer('manaTotal').notNullable()
      table.integer('ataque')
      table.integer('defesa')
      table.integer('inteligencia')
      table.integer('resistencia')
      table.integer('previsao')
      table.integer('velocidade')
      table.integer('experiencia')
      table.integer('dropOuro')
      table.string('drop')
      table.integer('dropRate')
      table.timestamps()
    })
  }

  down () {
    this.drop('bestiarios')
  }
}

module.exports = BestiarioSchema
