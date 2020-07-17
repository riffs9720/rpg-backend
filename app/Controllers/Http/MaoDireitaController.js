'use strict'

const Equipamento = use('App/Models/Equipamento')
const Database = use('Database')

class MaoDireitaController {

        /**
   * Show a list of all equipamentos.
   * GET equipamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({params}) {
    const maoDireita = await Database
    .from('equipamentos')
    .where({ player_id: params.id, tipo_id: 3 })

    return maoDireita
  }

}

module.exports = MaoDireitaController
