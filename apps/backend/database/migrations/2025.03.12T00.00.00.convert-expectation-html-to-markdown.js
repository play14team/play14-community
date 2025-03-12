// eslint-disable-next-line @typescript-eslint/no-require-imports
const htmlToMd = require('html-to-md')

module.exports = {
  async up(knex) {
    // Fetch all entries with the `description` field
    const entries = await knex('expectations').select('id', 'content')

    for (const entry of entries) {
      if (entry.content) {
        // Convert HTML to Markdown
        const markdownContent = htmlToMd(entry.content)

        // Update the `content` field with the Markdown
        await knex('expectations').where({ id: entry.id }).update({ content: markdownContent })
      }
    }
  }
}
