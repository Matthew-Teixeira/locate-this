import React from "react";
import { Container, Header } from "semantic-ui-react";
import demoMap from "../assets/images/demoMap.png"
const Home = () => {
  return (
    <main className="bg-[#123698]">
      <Container text>
    <Header as='h2'>Locate-This</Header>
    <p>
    Discovered a cool view out on the trails? Afraid you’ll forget where it is, or perhaps you want to show a fellow hiker the location of your findings? 
    </p>
    <ol>
      <li>Whip out that phone and navigate to the “Locate” tab.</li>
      <li>Use the “Get Location” button at the top to populate the form’s coordinates section with your phones GPS data.</li>
      <ul>
        <li>You can add custom coordinates as well.</li>
      </ul>
      <li>Fill in the form with some details.</li>
      <li>Done, check out your map!</li>
    </ol>
    <img className="demo-map" src={demoMap}/>
  </Container>
    </main>
  );
};

export default Home;
