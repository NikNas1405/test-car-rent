import styled, { keyframes } from 'styled-components';

const speeder = keyframes`
  0% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -3px) rotate(-1deg);
  }
  20% {
    transform: translate(-2px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 3px) rotate(-1deg);
  }
  60% {
    transform: translate(-1px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-2px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
`;

const lf = keyframes`
  0% {
    left: 200%;
  }
  100% {
    left: -200%;
    opacity: 0;
  }
`;

const lf2 = keyframes`
  0% {
    left: 200%;
  }
  100% {
    left: -200%;
    opacity: 0;
  }
`;

const lf3 = keyframes`
 0% {
    left: 200%;
  }
  100% {
    left: -100%;
    opacity: 0;
  }
`;

const lf4 = keyframes`
0% {
    left: 200%;
  }
  100% {
    left: -100%;
    opacity: 0;
  }
`;

export const Container = styled.div`
  width: '120px';
  background: #fff;
`;

export const Title = styled.h1`
  position: absolute;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
  color: #ccc;
  font-weight: 600;
  left: calc(50% - 120px / 2);
  top: 75%;
`;

export const Body = styled.div`
  position: absolute;
  top: 20%;
  left: calc(50% - 150px);
  animation: ${speeder} 0.4s linear infinite;

  > span {
    height: 5px;
    width: 10px;
    background: #000;
    position: absolute;
    top: 80px;
    left: 10px;
    border-radius: 2px 10px 1px 0;
  }
`;

export const Base = styled.div`
  span {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 100px solid #000;
    border-bottom: 6px solid transparent;

    &:before {
      content: '';
      height: 22px;
      width: 22px;
      border-radius: 50%;
      background: #000;
      position: absolute;
      right: -110px;
      top: -16px;
    }

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-top: 0 solid transparent;
      border-right: 55px solid #000;
      border-bottom: 16px solid transparent;
      top: -16px;
      right: -98px;
    }
  }
`;

export const LongFazes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  > span {
    position: absolute;
    height: 2px;
    width: 20%;
    background: #999; //колір машинки

    &:nth-child(1) {
      top: 20%;
      animation: ${lf} 0.6s linear infinite;
      animation-delay: -5s;
    }

    &:nth-child(2) {
      top: 40%;
      animation: ${lf2} 0.8s linear infinite;
      animation-delay: -1s;
    }

    &:nth-child(3) {
      top: 60%;
      animation: ${lf3} 0.6s linear infinite;
    }

    &:nth-child(4) {
      top: 80%;
      animation: ${lf4} 0.5s linear infinite;
      animation-delay: -3s;
    }
  }
`;
