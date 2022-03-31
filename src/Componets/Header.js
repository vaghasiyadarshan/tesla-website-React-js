import React, { useState } from 'react';
import styled from 'styled-components'
// import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@material-ui/icons/Menu';
function Header() {
    const [buergerstate,setbuergerstate] = useState(false);
    return (
        <Container>
            <a >
                <img src="/images/logo.svg"/>
                                </a>

            <Manu>
                <a href="#">Model S</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Model Z</a>
            </Manu>
            <RigthManu>
                <a href="#">
                    Shop
                </a>
                <a href="#">Tesia Account</a>
                <CostomMenu onClick={()=>setbuergerstate(true)}/>
            </RigthManu>
                <BurgerNav show={buergerstate}>
                   {/* <CancelIcon/> */}
                   <CloseIcone>
                   <h1 onClick={()=>setbuergerstate(false)}>X</h1>

                   </CloseIcone>
                    <li><a href="#">Existing inventory</a></li>
                    <li><a href="#">Existing inventory</a></li>
                    <li><a href="#">Existing inventory</a></li>
                    <li><a href="#">Existing inventory</a></li>
                    <li><a href="#">Existing inventory</a></li>
                    <li><a href="#">Existing inventory</a></li>
                    <li><a href="#">Existing inventory</a></li>
                    <li><a href="#">Existing inventory</a></li>
                    <li><a href="#">Existing inventory</a></li>
                </BurgerNav>
        </Container>

    )
}

export default Header



const Container =styled.div`
min-height:60px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
position: fixed;
top: 0;
left: 0;
right: 0; 
z-index:1;


`
const Manu =styled.div`
display: flex;
align-item: center;
justify-content: center;
flex 1;
@media only screen and (max-width: 700px) {
    display:none;
}
a{
    font-weight: 900;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;


}
`

const RigthManu =styled.div`

display:flex;
a{
    font-weight: 900;
    text-transform: uppercase;
    margin-right: 10px;


}
`
const CostomMenu = styled(MenuIcon)`
cursor:pointer;

`
const BurgerNav = styled.div`
background:white;
width:300px;
top: 0;
bottom: 0;
right: 0;
position:fixed;
z-index:100;
// display:flex;
// flex-direction:column;
// text-align: start;
list-style: none;
display: ${props => props.show ? 'block' : 'none'};
transition-delay: 1s;
}
li{
    padding: 15px 15px;
    border-bottom: 1px solid rgba(0,0,0,.2);

    a{
        font-weight:900; 
        cursor:pointer;

    }
}
`
const CloseIcone = styled.div`
display: flex;
justify-content: flex-end;
h1{

    margin-right: 20px;
    cursor: pointer
}
`