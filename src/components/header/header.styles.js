import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';



const OptionContainerStyles = css`
    padding: 10px 15px;
    text-decoration: none;
    cursor: pointer;
   
`;




export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
      }

    


    
`

export const LogoContainer = styled(Link)`
    padding: 4px;
    font-size: 50px;
    font-family: 'Niconne', cursive;
    text-decoration: none;
    font-weight: bold;
    position:relative;

       :hover {
          color:black;
          text-decoration:none;


         

          }

          @media screen and (max-width: 800px) {
            font-size:20px;
            padding: 0;
        

          
        
`;


export const OptionsContainer = styled.div`
    height: 100%;
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: flex-end;
    position:relative;


    @media screen and (max-width: 800px) {
        font-size:10px;
        padding: 0;


    
    

`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
    
    @media screen and (max-width: 800px) {
        width: 80%;
      }
`;


export const OptionDiv = styled.div`
    ${OptionContainerStyles}


    @media screen and (max-width: 800px) {
        width: 80%;
      }
    
`;



