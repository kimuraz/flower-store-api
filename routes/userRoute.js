const User = require("../models/user");

module.exports = [
  {
    method: ["GET", "POST"],
    path: "/api/user",
    handler: (request, h) => {
      switch (request.method) {
        case "get":
          return User.find(); // promisse -https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
          break;
        case "post":
          const user = new User({
            name: request.payload.name,
            password: request.payload.password,
            email: request.payload.email,
            dateOfBirth: request.payload.dateOfBirth,
            socialNumber: request.payload.socialNumber,
            gender: request.payload.gender
          });

          return user.save();
          break;
        default:
          return h.response({ code: 405 });
      }
    }
  },

  {
    method: ["PATCH", "DELETE", "GET"],
    path: "/api/user/{id}",
    handler: (request, h) => {
      switch (request.method) {
        case "delete":
          return User.deleteOne({ _id: request.params.id }); // params da url

        case "patch":
          return user.updateOne(request.params);
        case "get":
          return user.findById({ _id: request.params.id });
      }
      return h.response(response);
    }
  },

  {
    method: ["POST"],
    path: "/api/user/auth",
    handler: (validate = async (request, email, password, h) => {
      const User = User[email];
      if (!user) {
        return { credentials: null, isValid: false };
      }

      const isValid = await Bcrypt.compare(password, user.password);
      const credentials = { id: user.id, email: user.email };
      return { isValid, credentials };
    })
  }
];
