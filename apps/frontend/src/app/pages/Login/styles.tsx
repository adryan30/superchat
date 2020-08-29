import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;

export const LoginCard = styled.div`
  height: 26rem;
  width: 20rem;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 10px 0px;
  background-image: linear-gradient(
      216deg,
      rgba(77, 77, 77, 0.05) 0%,
      rgba(77, 77, 77, 0.05) 25%,
      rgba(42, 42, 42, 0.05) 25%,
      rgba(42, 42, 42, 0.05) 38%,
      rgba(223, 223, 223, 0.05) 38%,
      rgba(223, 223, 223, 0.05) 75%,
      rgba(36, 36, 36, 0.05) 75%,
      rgba(36, 36, 36, 0.05) 100%
    ),
    linear-gradient(
      44deg,
      rgba(128, 128, 128, 0.05) 0%,
      rgba(128, 128, 128, 0.05) 34%,
      rgba(212, 212, 212, 0.05) 34%,
      rgba(212, 212, 212, 0.05) 57%,
      rgba(25, 25, 25, 0.05) 57%,
      rgba(25, 25, 25, 0.05) 89%,
      rgba(135, 135, 135, 0.05) 89%,
      rgba(135, 135, 135, 0.05) 100%
    ),
    linear-gradient(
      241deg,
      rgba(55, 55, 55, 0.05) 0%,
      rgba(55, 55, 55, 0.05) 14%,
      rgba(209, 209, 209, 0.05) 14%,
      rgba(209, 209, 209, 0.05) 60%,
      rgba(245, 245, 245, 0.05) 60%,
      rgba(245, 245, 245, 0.05) 69%,
      rgba(164, 164, 164, 0.05) 69%,
      rgba(164, 164, 164, 0.05) 100%
    ),
    linear-gradient(
      249deg,
      rgba(248, 248, 248, 0.05) 0%,
      rgba(248, 248, 248, 0.05) 32%,
      rgba(148, 148, 148, 0.05) 32%,
      rgba(148, 148, 148, 0.05) 35%,
      rgba(202, 202, 202, 0.05) 35%,
      rgba(202, 202, 202, 0.05) 51%,
      rgba(181, 181, 181, 0.05) 51%,
      rgba(181, 181, 181, 0.05) 100%
    ),
    linear-gradient(92deg, hsl(214, 0%, 11%), hsl(214, 0%, 11%));
`;

export const UsernameInput = styled.input`
  margin-top: 10px;
  width: 85%;
  height: 3rem;
  border-radius: 2rem;
  outline: 0;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
`;

export const LoginButton = styled.button`
  margin-top: 10px;
  border-radius: 2rem;
  font-size: 1.6rem;
  width: 60%;
  height: 3rem;
  font-weight: light;
  border: 0;
  outline: 0;
  background-color: #909090;
  &:hover {
    background-color: #808080;
  }
`;

export const LogoImg = styled.img`
  height: 16rem;
`;
