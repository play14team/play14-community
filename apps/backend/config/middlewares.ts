export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com', // Required for Strapi < 4.10.6, you can remove it otherwise
            'https://market-assets.strapi.io', // Required for Strapi >= 4.10.6, you can remove it otherwise
            process.env.STORAGE_CDN_URL
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com', // Required for Strapi < 4.10.6, you can remove it otherwise
            process.env.STORAGE_CDN_URL
          ],
          upgradeInsecureRequests: null
        }
      }
    }
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public'
]
