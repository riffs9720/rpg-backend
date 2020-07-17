'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayerSchema extends Schema {
  up () {
    this.create('players', (table) => {
      table.increments()
      table.string('jogador').notNullable
      table.string('nome').notNullable().unique()
      table.string('raca').notNullable()
      table.string('classe').notNullable()
      table.integer('arrombscoin')
      table.string('historia').notNullable()
      table.integer('experienciaAtual')
      table.integer('experienciaProximoNivel')
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
      table.integer('valorD4')
      table.integer('valorD6')
      table.integer('valorD8')
      table.integer('valorD10')
      table.integer('valorD12')
      table.integer('valorD20')
      table.integer('ataqueAtri')
      table.integer('defesaAtri')
      table.integer('inteligenciaAtri')
      table.integer('resistenciaAtri')
      table.integer('previsaoAtri')
      table.integer('velocidadeAtri')
      table.string('password', 60).notNullable()
      table.string('nivelAcesso').notNullable().defaultTo('Player')
      table.integer('qtdPocaoHp25')
      table.integer('qtdPocaoHp50')
      table.integer('qtdPocaoHp100')
      table.integer('qtdPocaoMp25')
      table.integer('qtdPocaoMp50')
      table.integer('qtdPocaoMp100')
      table.timestamps()
    })
  }

  down () {
    this.drop('players')
  }
}

module.exports = PlayerSchema
