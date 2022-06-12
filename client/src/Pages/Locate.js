import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { ADD_LOCATION } from "../utils/mutations";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";

const Locate = () => {
  const nav = useNavigate();
  const userProfile = Auth.getProfile();
  const username = userProfile.data.username;
  console.log(username);

  const [values, setValues] = useState({
    username: "AppSolo",
    name: "",
    description: "",
    long: 0,
    lat: 0,
  });

  const [addLocation, { loading }] = useMutation(ADD_LOCATION, {
    update(proxy, result) {
      nav("/map");
    },
    onError(err) {
      console.log(err);
    },
    variables: {
      username: values.username,
      name: values.name,
      description: values.description,
      long: parseFloat(values.long),
      lat: parseFloat(values.lat),
    },
  });

  //Form onChange Handler
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  console.log(values);

  const onSubmit = (event) => {
    event.preventDefault();
    addLocation();
  };
  //End Form

  // Geolocation
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  // End Geolocation

  return (
    <>
      <div className="geolocate">
        <button className="ui secondary button" onClick={getLocation}>Get Location</button>
        <h1 className={lat ? "" : "hidden"}>Coordinates</h1>
        <p className={!lat ? "geo-info" : "hidden"}>Click "Get Location" to populate form with your current location and fill in the rest!</p>
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}
      </div>

      <div className="form-container">
        <Form
          onSubmit={onSubmit}
          noValidate
          className={loading ? "loading" : ""}
        >
          <h1 className="center">Add Location</h1>
          <Form.Input
            label="Name of Location"
            type="text"
            placeholder="Appalachian Trail"
            name="name"
            value={values.name}
            onChange={onChange}
          />

          <Form.Input
            label="Description"
            type="text"
            placeholder="A beautiful hike..."
            name="description"
            value={values.description}
            onChange={onChange}
          />

          <Form.Input
            label="Latitude"
            type="number"
            name="lat"
            value={lat ? values.lat=lat : values.lat}
            onChange={onChange}
          />

          <Form.Input
            label="Longitude"
            type="number"
            name="long"
            value={lng ? values.long=lng : values.long}
            onChange={onChange}
          />
          <Button type="submit" color="olive" fluid>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Locate;
