import {StyledHome, StyledSubHome} from './../components/Styles';

const Home = () => {
    return (
        <div>
            <div></div>
            <StyledHome size="50" color = "white">
                Welcome to your Mental Health Dashboard
            </StyledHome>
            <StyledSubHome size="25" color = "white">
                Please Browse Through these Resources
            </StyledSubHome>
        </div>
    );
};

export default Home;