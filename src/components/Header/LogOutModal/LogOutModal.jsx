import { CloseIcon } from '../HeaderIcon/HeaderIcon';
import {
  Modal,
  ModalOverlay,
  ModalLogOutText,
  ModalCancelButton,
  ModalLogOutButton,
  ModaButtonContainer,
  CloseIconContainer,
} from './LogOutModal.styled';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/auth/authOperation';

const LogOutModal = ({ handleToggleModalLogOut }) => {
  const dispatch = useDispatch();

  return (
    <ModalOverlay
      onClick={e => e.currentTarget === e.target && handleToggleModalLogOut()}
    >
      <Modal>
        <CloseIconContainer onClick={handleToggleModalLogOut}>
          <CloseIcon />
        </CloseIconContainer>
        <ModalLogOutText>Are you sure you want to log out?</ModalLogOutText>
        <ModaButtonContainer>
          <ModalLogOutButton
            type="button"
            onClick={() => dispatch(logoutThunk())}
          >
            Log out
          </ModalLogOutButton>
          <ModalCancelButton type="button" onClick={handleToggleModalLogOut}>
            Cancel
          </ModalCancelButton>
        </ModaButtonContainer>
      </Modal>
    </ModalOverlay>
  );
};

export default LogOutModal;
