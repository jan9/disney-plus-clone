import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg' />
        <SignUp>GET THE DISNEY BUNDLE</SignUp>
        <Description>
          <span>Stream now.</span> Terms apply.
        </Description>
        <CTALogoTwo src='/images/cta-logo-two.png' />
        <Description2>
          <a href=''>Sign up for Disney+ only.</a>
          <br />
          <span>$7.99/month or $79.99/year.</span>
        </Description2>
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;
  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/images/login-background.jpg');
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const CTALogoOne = styled.img``;

const CTALogoTwo = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 9px;
  text-align: center;
  padding: 10px 0;
  span {
    color: #9a9b9c;
  }
`;
const Description2 = styled.p`
  font-size: 15px;
  letter-spacing: 1.5px;
  text-align: center;

  a {
    text-decoration: underline;
    color: white;
  }
  span {
    color: #9a9b9c;
  }
`;
