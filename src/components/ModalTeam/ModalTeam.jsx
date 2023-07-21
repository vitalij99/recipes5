/* eslint-disable jsx-a11y/anchor-has-content */
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  BtnContainer,
  BtnIcon,
  BtnModal,
  CardInfoContainer,
  CardNameContainer,
  FotoDeveloper,
  LinkGit,
  NameInfo,
  OverlayModal,
  TeamCard,
  TeamCardContainer,
  TeamCards,
  Title,
  WrapperModal,
  IconGit,
} from './ModalTeam.styled';
import { developers } from './TeamInfo';

const modalRoot = document.querySelector('#modal-team-root');

function ModalTeam({ onClose, setIsOpenModal }) {
  useEffect(() => {
    setIsOpenModal(onClose);
  }, [onClose, setIsOpenModal]);

  useEffect(() => {
    if (onClose) {
      document.body.classList.add('isOpen');
    }
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        setIsOpenModal(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsOpenModal]);

  const handleCoseModal = () => {
    setIsOpenModal(false);
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setIsOpenModal(false);
    }
  };

  if (!onClose) {
    return null;
  }

  return (
    <>
      {createPortal(
        <OverlayModal onClick={handleBackdropClick}>
          <WrapperModal>
            <BtnContainer>
              <BtnModal type="button" onClick={handleCoseModal}>
                <BtnIcon />
              </BtnModal>
            </BtnContainer>
            <TeamCards>
              <Title>OUR DEVELOPMENT TEAM </Title>
              <TeamCardContainer>
                {developers.map(({ name, surname, gitLink, foto }, index) => (
                  <TeamCard key={index}>
                    <FotoDeveloper src={foto} alt="Foto" />
                    <CardInfoContainer>
                      <CardNameContainer>
                        <NameInfo>{name}</NameInfo>
                        <NameInfo>{surname}</NameInfo>
                      </CardNameContainer>
                      <LinkGit href={gitLink} target="_blank">
                        <IconGit />
                      </LinkGit>
                    </CardInfoContainer>
                  </TeamCard>
                ))}
              </TeamCardContainer>
            </TeamCards>
          </WrapperModal>
        </OverlayModal>,
        modalRoot
      )}
      ;
    </>
  );
}

export default ModalTeam;
