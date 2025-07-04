// eslint-disable-next-line @typescript-eslint/no-require-imports
const htmlToMd = require('html-to-md')

module.exports = {
  async up(knex) {
    // Fetch all entries with the `description` field
    const entries = await knex('events').select('id', 'description')

    for (const entry of entries) {
      if (entry.description) {
        // Convert HTML to Markdown
        const markdownContent = htmlToMd(entry.description)

        // Update the `description` field with the Markdown
        await knex('events').where({ id: entry.id }).update({ description: markdownContent })
      }
    }
  }
}
