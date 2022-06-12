import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER, GET_USERS } from "../utils/queries";
import Maps from "../Components/Map.jsx";
import Auth from "../utils/auth";

const Map = () => {
  const userProfile = Auth.getProfile();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { id: userProfile.data._id },
  });

  let locations;

  if (loading) {
    return <div>Loading...</div>;
  }
  if (data) {
    if (data.getUser.locations.length > 1) {
      locations = data.getUser.locations;
      return <Maps locations={locations} />;
    } else {
      return <div>No data to display</div>;
    }
  }
};

export default Map;
