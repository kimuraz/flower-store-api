const User = require('../models/user');


module.exports = [
    {
        method: ['GET','POST'],
        path:'/api/user',
        handler: (request, h) => {
            switch(request.method){
                case 'get':
                    return User.find() // promisse -https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
                    break;
                case 'post':
                    const user = new User({
                        name: request.payload.name,
                        password: request.payload.password,
                        email: request.payload.email,
                        dateOfBirth: request.payload.dateOfBirth,
                        socialNumber: request.payload.socialNumber,
                        gender: request.payload.gender,
                    });
                   /* try{
                        flower.save()
                    } catch(err){
                        console.log(err);
                    } */
                    return user.save()
                    break;
                default: 
                    return h.response({ code: 405 });
            }
        }
    },

    {
        method:['PATCH', 'DELETE', 'GET'],
        path:'/api/user/{id}',
        handler: (request, h) => {
            switch(request.method){
                case 'delete':
                    console.log('apagando');
                    return User.deleteOne({'_id':request.params.id});//params da url
                 
                case 'patch':
                    return user.updateOne({'email':request.param.email});
                case 'get':
                    console.log('')
                    return Flower.findById({'_id': request.params.id});

            }
            return h.response(response);
        }

    },
    
    {
        method:['PATCH'],
        path:'/api/user/email',
        handler: (request, h) => {
         
               return user.updateOne({'email':request.param.email});

        }
        },
    
{
        method:['PATCH'],
        path:'/api/user/adress',
        handler: (request, h) => {
         
               return user.updateOne({'deliveryAdress':request.param.deliveryAdress});

        }
        },
        {
            method:['PATCH'],
            path:'/api/user/password',
            handler: (request, h) => {
             
                   return user.updateOne({'password':request.param.password});
    
            }
            }
    ];
];
    