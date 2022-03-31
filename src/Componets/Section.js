import React from 'react'
import styled from 'styled-components'

function Section({ title, discription, leftbutton, rightbutton, backgroundimage }) {

    return (
        <Wrap bgImage={backgroundimage}>
           
              
           

                <ItemText>
                    <h1>{title}</h1>
                    <p>{discription}</p>

                </ItemText>
           
            <Buttons>

                <ButtonGroup>
                    <LeftButton>
                        {leftbutton}
                    </LeftButton>
                    {rightbutton && <RightButton>
                        {rightbutton}

                    </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src="/images/Down-Arrow.svg">

                </DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
width: 100vw;
height: 100vh;

// background-image: url("/images/model-s.jpg");
background-size: cover;
background-position: center;
background-repeat: not-repeat;
display: flex;
flex-direction:column;
justify-content: space-between;
align-items: center; 
background-image: ${props => `url("/images/${props.bgImage}")`}

`

const ItemText = styled.div`
padding-top: 15vh;
text-align:center;
`;

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;

@media only screen and (max-width: 600px) {
            flex-direction: column;
  }

`



const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content: center;
align-items: center;
border-radius: 100px;
text-transform:uppercase;
opacity: 0.5;
font-size:12px;
cursor: pointer;
margin: 8px;

`
const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`
const DownArrow = styled.img`

height: 40px;
animation: animateDown infinite 1.5s;


`
const Buttons = styled.div`
`