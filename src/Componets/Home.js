import React from "react";
import Section from "./Section";

import styled from 'styled-components';
const Home = () => {

    return (
        <Container>
             <Section
             title="Model S"
             discription="darshan"
             backgroundimage="model-s.jpg"
             leftbutton="Custom Order"
             rightbutton="Existing inventory"

             />
             <Section
             title="Model 3 "
             Discription="darshan"
             backgroundimage="model-3.jpg"
             leftbutton="Custom Order"
             rightbutton="Existing inventory"

             /> <Section
             title="Model X "
             Discription="darshansdfdffgfg"
             backgroundimage="model-x.jpg"
             leftbutton="Custom Order"
             rightbutton="Existing inventory"

             />
             <Section
             title="Model y "
             Discription="darshansdfdffgfg"
             backgroundimage="model-y.jpg"
             leftbutton="Custom Order"
             rightbutton="Existing inventory"

             />
             <Section
             title="Solar for new roofs "
             Discription="darshansdfdffgfg"
             backgroundimage="solar-roof.jpg"
             leftbutton="Custom Order"
             rightbutton="Lern more"

             /><Section
             title="Assesres"
             discription="dadusudhudhudh"
             backgroundimage="accessories.jpg"
             leftbutton="Custom Order"
             

             />
             <Section
             title="Model X "
             Discription="darshansdfdffgfg"
             backgroundimage="model-x.jpg"
             leftbutton="Custom Order"
             rightbutton="Existing inventory"

             />
        </Container>
    )
}
export default Home;

const Container = styled.div`
  height: 100vh;
`;




