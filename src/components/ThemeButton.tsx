/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  outline: transparent;
`;

const ToggleWrap = styled.div`
    height: 1.2rem;
    width: 2.4rem;
    background-color: #409fe4;
    border-radius: 100px;
    position: relative;
    overflow: hidden;
    transition: all 300ms ease;
    box-shadow: inset -3px 5px 5px rgb(0 0 0 / 10%), inset -2px -5px 5px rgba(0, 0, 0, 0.2), 4px 4px 4px rgba(255, 255, 255, 1);
    &.night {
        background-color: #1d1f2b;
    }
`;

const ToggleInput = styled.input`
    display: none;
    :checked ~ .clouds {
        top: 150%;
    }
    :checked ~ .sun-moon {
        left: calc(100% - 1.1rem);
        background-color: #c4c9d2;
        transform: rotateZ(180deg);
    }
    :checked ~ .backdrops {
        left: calc(100% - 1.3rem);
    }
    :checked ~ .sun-moon .crater {
        display: block;
    }
    :checked ~ .stars {
        top: 50%;
    }
`;

const CloudWrap = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    transition: all 300ms ease;
`;

const CloudCont = styled.div`
    position: absolute;
    right: 10%;
    top: 50%;
    background-color: #fbfbfb;
    background: url("https://firebasestorage.googleapis.com/v0/b/archiprivatechat.appspot.com/o/public%2FClouds.png?alt=media&token=86cc7c55-ee79-4ff7-a875-da234fa5619e&_gl=1*xlhdpj*_ga*MzczMTQ1OTY0LjE2OTI5NDE3OTY.*_ga_CW55HF8NVT*MTY5OTIzNTEyNS43LjEuMTY5OTIzNTM0Mi41Ny4wLjA.");;
    height: 0.2rem;
    width: 1rem;
    transform: scale(-0.8, 0.8);
    &::before {
        content: "";
        position: absolute;
        background-color: #fbfbfb;
        height: 2rem;
        width: 8rem;
        bottom: 1.8rem;
        left: 0;
        border-radius: 100px 100px 0 0px;
    }
    &::after {
        content: "";
        position: absolute;
        background-color: #fbfbfb;
        height: 4rem;
        width: 4rem;
        bottom: 18px;
        left: 10px;
        border-radius: 100%;
    }
`;

const BackdropWrap = styled.div`
    position: absolute;
    left: 10px;
    top: 10px;
    height: 10rem;
    width: 10rem;
    transition: all 300ms ease;
`;

const BackdropCont = styled.div`
    height: 2rem;
    width: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 100%;

    position: absolute;
    left: 30%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 300ms ease;
    &::before, &::after {
        content: "";
        height: 20rem;
        width: 20rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 100%;
        position: absolute;
        transition: all 300ms ease;
    }
    &::before {
        left: 15%;
    }
    &::after {
        left: 30%;
    }
`;

const StarWrap = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: -50%;
    left: 0;
    transform: translate(0, -50%);
    transition: all 300ms ease;
`;

const StarCont = styled.div`
    position: absolute;
    left: 10%;
    top: 50%;
    height: 6px;
    width: 6px;
    border-radius: 100%;
    background-color: #c4c9d2;
    box-shadow: 0 0 4px #fff;
    animation: twinkle 1s infinite alternate;
    &::before {
        content: "";
        position: absolute;
        left: 300%;
        top: 300%;
        height: 4px;
        width: 4px;
        border-radius: 100%;
        background-color: #c4c9d2;
        box-shadow: 0 0 4px #fff;
    }
    &::after {
        content: "";
        position: absolute;
        left: 400%;
        bottom: 400%;
        height: 5px;
        width: 5px;
        border-radius: 100%;
        background-color: #c4c9d2;
        box-shadow: 0 0 4px #fff;
    }
    @keyframes twinkle {
        from {
            opacity: 1;
        }

        to {
            opacity: 0.5;
        }
    }
`;

const SunMoonWrap = styled.div`
    height: 1rem;
    width: 1rem;
    background: linear-gradient(130deg, #f2fa8f, #eb9a25);
    border-radius: 100%;
    position: absolute;
    left: 1px;
    top: 50%;
    transform: translateY(-50%);
    transition: 300ms ease;
`;

const Crater = styled.div`
    display: none;
    position: absolute;
    left: 30%;
    top: 60%;
    transform: translate(-50%, -50%);
    height: 3rem;
    width: 3rem;
    background-color: #949eb2;
    border-radius: 100%;
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.4);
    &::before {
        content: "";
        height: 15px;
        width: 15px;
        position: absolute;
        top: -100%;
        left: 50%;
        background-color: #949eb2;
        border-radius: 100%;
        box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.4);
    }
    &::after {
        content: "";
        height: 20px;
        width: 20px;
        position: absolute;
        bottom: 40%;
        left: 150%;
        background-color: #949eb2;
        border-radius: 100%;
        box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.4);
    }
`;






function ThemeButton () {
    return (
        <>
            <Container>
                <ToggleWrap>
                    <ToggleInput />
                    <CloudWrap>
                        <CloudCont className="clouds"></CloudCont>
                    </CloudWrap>

                    <BackdropWrap className="backdrops">
                        <BackdropCont />
                    </BackdropWrap>

                    <StarWrap className="stars">
                        <StarCont />
                    </StarWrap>

                    <SunMoonWrap className="sun-moon">
                        <Crater className="crater"/>
                    </SunMoonWrap>
                </ToggleWrap>
            </Container>
        </>
    )
}

export default ThemeButton;