export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: 1338,
  url: "https://fs-api.igordokai.com",

  //port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
