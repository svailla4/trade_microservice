'use strict';

require('dotenv').config();
const Knex = require('knex');
const { Model } = require('objection');
const Hapi = require('hapi');
const knex = Knex(require('./knexfile').development);
const cfenv = require("cfenv");
Model.knex(knex);


let vcapLocal;
try {
  vcapLocal = require('./vcap-local.json');
  console.log("Loaded local VCAP");
} catch (e) { 
     console.log(e)
}

const appEnvOpts = vcapLocal ? { vcap: vcapLocal} : {}

const appEnv = cfenv.getAppEnv(appEnvOpts);

const server = Hapi.server({
    port: 8080,
    host: appEnv.host,
    routes: {
        cors: true
    }
});

const init = async () => {
    server.route(require('./routes/trades_routes'))

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

module.exports = {
    server: server.listener
}