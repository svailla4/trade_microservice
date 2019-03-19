// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'fc8e189a-bb4f-466e-b459-e9e3ae845efd.b8a5e798d2d04f2e860e54e5d042c915.databases.appdomain.cloud',
      database: 'ibmclouddb',
      user:     'ibm_cloud_e2b0ec4f_f2ec_4805_8e8f_acebc5e8741d',
      password: '7a1049a0fc0643930b674a4e29ccfcf59e6cd10449b1c130813d471f140cce16'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
