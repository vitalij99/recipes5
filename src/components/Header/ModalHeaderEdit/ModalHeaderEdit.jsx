import {
  HeaderModalEditButton,
  HeaderModalEdit,
} from '../HeaderIcon/HeaderIcon';

import {
  Modal,
  EditProfileContainer,
  EditProfileText,
  EditProfileIcon,
  EditProfileButton,
  EditProfileButtonText,
} from './ModalHeaderEdit.styled';

const ModalHeaderEdit = () => {
  return (
    <Modal>
      <EditProfileContainer>
        <EditProfileText>Edit profile</EditProfileText>
        <EditProfileIcon>
          <HeaderModalEdit />
        </EditProfileIcon>
      </EditProfileContainer>
      <EditProfileButton type="button">
        <EditProfileButtonText>Log out </EditProfileButtonText>
        <HeaderModalEditButton />
      </EditProfileButton>
    </Modal>
  );
};

export default ModalHeaderEdit;
