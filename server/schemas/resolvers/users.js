const { User, Location } = require("../../models/index");
const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { signToken } = require("../../util/auth");
const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../util/validators");

module.exports = {
  Query: {
    getUsers: async (parent, args, context) => {
      console.log(context.user)
      const users = await User.find();
      // if(users.length < 1) {
      //     res.json({message: "No users"})
      // }
      return users;
    },
    getUser: async (parent, { _id }) => {
      const user = await User.findOne({ _id }).populate("locations");
      return user;
    },
  },
  Mutation: {
    register: async (parent, args) => {
      const { valid, errors } = validateRegisterInput(
        args.username,
        args.email,
        args.password,
        args.confirmPassword
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const foundUser = await User.findOne({ username: args.username });
      if (foundUser) {
        throw new UserInputError("Username is taken", {
          errors: {
            username: "This username is taken",
          },
        });
      }
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const { valid, errors } = validateLoginInput(email, password);
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPW = await user.isCorrectPassword(password);

      if (!correctPW) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};
