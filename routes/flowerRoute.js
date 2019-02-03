const Flower = require('../models/flower');


module.exports = [
    {
        method: ['GET','POST'],
        path:'/api/flowers',
        handler: (request, h) => {
            switch(request.method){
                case 'get':
                    return Flower.find() // promisse -https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
                    break;
                case 'post':
                    const flower = new Flower(request.payload);//body do post
                    return flower.save()
                    break;
                default: 
                    return h.response({ code: 405 });
            }
        }
    },

    {
        method:['PATCH', 'DELETE', 'GET'],
        path:'/api/flowers/{id}',
        handler: (request, h) => {
            switch(request.method){
                case 'delete':
                    console.log('apagando');
                    return Flower.deleteOne({'_id':request.params.id});//params da url
                 
                case 'patch':
                    console.log ('alterando quantidade');
                    return Flower.updateOne({'_quantity':request.param.quantity});
                case 'get':
                    console.log('')
                    return Flower.findById({'_id': request.params.id});

            }
            return h.response(response);
        }

    }
    
];