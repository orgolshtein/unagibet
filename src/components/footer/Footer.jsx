import styled from "styled-components";
import * as AppColor from "../../styles/Colors";
import paymentLine from "../../assets/overlays/footer-en.png";

const Footer = () => (
    <FooterDiv>
        <img src={paymentLine} alt="logo" />
        <div>
            <p>
            UnagiBet is a brand operated by Red Ross Entertainment Limited. Red Ross Entertainment Limited is licensed and regulated by the Malta Gaming Authority.
            </p>
            <p>
            Registered Address: Red Ross Entertainment Limited, 15 Yemen Road, Yemen.
            </p>
            <p>
            Gambling can be addictive. Play responsibly.
            </p>
        </div>
    </FooterDiv>
);

export default Footer;

const FooterDiv = styled.div`
    background-color: ${AppColor.MainTheme1};
    font-weight: 300;
    position: relative;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 5rem 10rem 10% 10rem;
    height: 7.8rem;
    z-index: 100;
    text-align: center;
    gap: 2rem;
    margin-top: 5rem;
    margin-bottom:0;

     @media only screen and (max-width: 800px) {
        height: fit-content; 
        z-index: 0;  
        margin: 0;
        padding: 0;
        padding-bottom: 2rem;   
    }

    img{
        width: 70rem;

        @media only screen and (max-width: 800px) {
            width: 90%;          
        }
    }

    p{
        line-height: 1.2rem;
        
        @media only screen and (max-width: 800px) {
            width: 100%;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            font-size:0.8rem;
        }
    }
`