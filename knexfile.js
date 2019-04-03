// Update with your config settings.

module.exports = {

  development: {
      client: 'sqlite3',
      connection: {
          filename: './dev.sqlite3'
      }
  },

  localDatabase: {
        client: 'postgresql',
        connection: {
            database: 'trade_database',
            user:     'admin',
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
          database: 'ibmclouddb',
          user:     'ibm_cloud_09cb9d52_4a26_444c_bcb2_560856309522',
          password: `116abb081c0985a150206b8fe80016e11b0dfb3ab6ce0aa145ca54197077fd80`,
          host: '247273a3-7f0a-44b0-874e-9caf02cd06a7.b2b5a92ee2df47d58bad0fa448c15585.databases.appdomain.cloud',
          port: '32733',
          ssl: true
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
