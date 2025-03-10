module.exports = {
  async up(knex) {
    await knex.schema.table('events', (table) => {
      table.renameColumn('status', 'current_status')
    })
  }
}
