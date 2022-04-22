import styled from 'styled-components';

//Background
import background from '../assets/UNCBackground.jpg';

export const colors = {
    primary : '#fff',
    theme : '#BE185D',
    light1 : '#F3F4F6',
    light2 : '#E5E7EB',
    dark1 : '#1F2937',
    dark2 : '#4B5563',
    dark3 : '#9CA3AF',
    red: '#DC2626'
}

//Styled Components
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

//Home Styling
export const StyledHome = styled.h2`
    font-size: ${props => props.size}px;
    text-align: center;
    color: ${props => props.color ? props.color : colors.theme};
    padding: 5px;
    margin-bottom: 20px;
`;

export const StyledSubHome = styled.p`
    font-size: ${props => props.size}px;
    text-align: center;
    color: ${props => props.color ? props.color : colors.theme};
    padding: 5px;
    margin-bottom: 25px;    
`;