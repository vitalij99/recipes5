import React from 'react';
import {
  Background,
  ParticleMobile1,
  ParticleMobile2,
  ParticleMobile3,
  ParticleTablet1,
  ParticleTablet2,
  ParticleTablet3,
  ParticlesContainer,
  Title,
} from './MainPageTitle.styled';
import Container from 'components/Container/Container';

function MainPageTitle({ title }) {
  return (
    <>
      <Background>
        <Container>
          <ParticlesContainer>
            <Title>{title}</Title>
            <ParticleMobile1>
              <svg
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="2"
                  width="6"
                  height="6"
                  rx="3"
                  transform="rotate(-25 0 2)"
                />
              </svg>
            </ParticleMobile1>
            <ParticleMobile2>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="2.84525"
                  width="8"
                  height="8"
                  rx="3"
                  transform="rotate(-25 0 2.84525)"
                  fill="#8BAA36"
                />
              </svg>
            </ParticleMobile2>
            <ParticleMobile3>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="3.38095"
                  width="8"
                  height="8"
                  rx="3"
                  transform="rotate(-25 0 3.38095)"
                  fill="#8BAA36"
                />
              </svg>
            </ParticleMobile3>
            <ParticleTablet1>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="5.07141"
                  width="12"
                  height="12"
                  rx="3"
                  transform="rotate(-25 0 5.07141)"
                />
              </svg>
            </ParticleTablet1>
            <ParticleTablet2>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="5.91666"
                  width="14"
                  height="14"
                  rx="3"
                  transform="rotate(-25 0 5.91666)"
                  fill="#8BAA36"
                />
              </svg>
            </ParticleTablet2>
            <ParticleTablet3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="5.91666"
                  width="14"
                  height="14"
                  rx="3"
                  transform="rotate(-25 0 5.91666)"
                  fill="#8BAA36"
                />
              </svg>
            </ParticleTablet3>
          </ParticlesContainer>
        </Container>
      </Background>
    </>
  );
}

export default MainPageTitle;
