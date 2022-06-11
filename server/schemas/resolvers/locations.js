const { User, Location } = require("../../models/index");
const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { validateLocationInput } = require("../../util/validators");
const { findOneAndDelete } = require("../../models/User");

module.exports = {
  Mutation: {
    addLocation: async (
      parent,
      { username, name, description, long, lat },
      context
    ) => {
      const { valid, errors } = validateLocationInput(
        username,
        name,
        description,
        long,
        lat
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      if (context.user) {
        const location = await Location.create({
          username,
          name,
          description,
          long,
          lat,
        });
        const user = await User.findOneAndUpdate(
          { username },
          { $push: { locations: location._id } },
          { new: true }
        );

        if (!user) {
        }
        return location;
      }
      throw new AuthenticationError("Not logged in");
    },
    deleteLocation: async (parent, {locationId}, context) => {
        if(context.user) {
            const location = await Location.findOneAndDelete({_id: locationId});
            if(!location) {
                throw new UserInputError("Location could not be found");
            }
            
        }
        throw new AuthenticationError("Not logged in");
    }
  },
};
