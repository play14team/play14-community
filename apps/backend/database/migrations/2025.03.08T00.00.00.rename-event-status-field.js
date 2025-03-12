module.exports = {
  async up(knex) {
    const hasStatusColumn = await knex.schema.hasColumn('events', 'status')

    if (hasStatusColumn) {
      await knex.schema.table('events', (table) => {
        table.renameColumn('status', 'current_status')
      })
    }
  }
}
