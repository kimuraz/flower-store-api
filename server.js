'use strict';
const hapi = require('hapi');
const db = require ('./database').db;
const flowerRoutes = require('./routes/flowerRoute');
const userRoutes = require ('./routes/userRoute');
const user = require('./models/user');
//const Bcrypt = require('mongoose-bcryp');

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
userRoutes.forEach((route) =>{
    server.route(route);
});

const validate = async(request, email, password, h) => {
    const User = User[email];
        if (!user){
            return {credentials: null, isValid: false};
        }

        const isValid = await Bcrypt.compare(password, user.password);
        const credentials = {id: user.id, email: user.email};
        return {isValid, credentials};

};
const init = async () => {

    await server.start();
    console.log(`Server funcionando no: ${server.info.uri}`);

};

process.on('unhandledRejection', (err) =>{

    console.log(err);
    process.exit(1);

});

init();

