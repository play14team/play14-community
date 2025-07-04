// eslint-disable-next-line @typescript-eslint/no-require-imports
const htmlToMd = require('html-to-md')

module.exports = {
  async up(knex) {
    const fields = ['openspace', 'law_of_two_feet', 'butterfly', 'bumblebee', 'schedule']

    await Promise.all(
      fields.map(async (field) => {
        // Fetch all entries with the field
        const entries = await knex('formats').select('id', field)

        for (const entry of entries) {
          if (entry.content) {
            // Convert HTML to Markdown
            const markdownContent = htmlToMd(entry[field])

            // Update the `content` field with the Markdown
            const updated = {}
            updated[field] = markdownContent
            await knex('formats').where({ id: entry.id }).update(updated)
          }
        }
      })
    )
  }
}
