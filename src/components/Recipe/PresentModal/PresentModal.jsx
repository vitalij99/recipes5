import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

import {
  AkcentTitle,
  BtnIcon,
  BtnModal,
  ContainerTitle,
  ModalTitle,
  OverlayModal,
  WrapperModal,
} from './PresentModal.styled';

const modalRoot = document.querySelector('#modal-root');

function PresentModal({ onClose, event }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  let titleDescr = null;

  useEffect(() => {
    setIsOpenModal(onClose);
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
  }, []);

  useEffect(() => {
    if (isOpenModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpenModal]);

  switch (event) {
    case 'firstShopping':
      titleDescr = {
        text: (
          <ModalTitle>
            <AkcentTitle>Wow!</AkcentTitle> You have created your first shopping
            list!
          </ModalTitle>
        ),
      };
      break;
    case 'tenRecipesOnFavorite':
      titleDescr = {
        text: (
          <ModalTitle>
            <AkcentTitle>Wow!</AkcentTitle> You have added 10 recipes to your
            favorites!
          </ModalTitle>
        ),
      };
      break;
    case 'firstRecipeOnFavorite':
      titleDescr = {
        text: (
          <ModalTitle>
            <AkcentTitle>Wow!</AkcentTitle> You have added the first recipe to
            your favorites!
          </ModalTitle>
        ),
      };
      break;
    case 'oneHundredDay':
      titleDescr = {
        text: (
          <ModalTitle>
            <AkcentTitle>Wow!</AkcentTitle> You have been using the application
            for 100 days!
          </ModalTitle>
        ),
      };
      break;
    default:
      titleDescr = {
        text: 'Event not find',
      };
  }

  const handleCoseModal = () => {
    setIsOpenModal(false);
  };
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setIsOpenModal(false);
    }
  };

  if (!isOpenModal) {
    return null;
  }
  return (
    <>
      {createPortal(
        <OverlayModal onClick={handleBackdropClick}>
          <WrapperModal type={event}>
            <ContainerTitle>
              <>{titleDescr.text}</>
              <BtnModal type="button" onClick={handleCoseModal}>
                <BtnIcon />
              </BtnModal>
            </ContainerTitle>
          </WrapperModal>
        </OverlayModal>,
        modalRoot
      )}
    </>
  );
}

export default PresentModal;
