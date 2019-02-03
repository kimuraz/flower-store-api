'use strict';
const hapi = require('hapi');
const db = require ('./database').db;
const flowerRoutes = require('./routes/flowerRoute');

const server = hapi.server({
    port:3000,
    host: '0.0.0.0'
});


server.route({
    method: 'GET',
    path:'/api',
    handler: (request, h) => {
        return h.response({
            'message': 'api'
        });
    } 
});

flowerRoutes.forEach((route) =>{
    server.route(route);
});

const init = async () => {

    await server.start();
    console.log(`Server funcionando no: ${server.info.uri}`);

};

process.on('unhandledRejection', (err) =>{

    console.log(err);
    process.exit(1);

});

init();

