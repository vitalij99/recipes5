import { useSelector } from 'react-redux';
import {
  AddImage,
  CloseIcon,
  HeaderModalEdit,
  UserIcon,
} from '../HeaderIcon/HeaderIcon';
import {
  ModalOverlay,
  Modal,
  Image,
  ImageContainer,
  CloseIconContainer,
  AddIconContainer,
  Input,
  Label,
  UserIconContainer,
  EditIconContainer,
  ModalSaveButton,
} from './UserProfile.styled';
import { selectAuthUser } from 'redux/auth/authSelector';
import { useState } from 'react';

const UserProfile = ({ handleToggleModalUserProfile }) => {
  const user = useSelector(selectAuthUser);
  const [state, setState] = useState('');
  console.log('🚀 ~ state:', state);

  const handleChange = ({ target }) => {
    const { value } = target;

    setState(value);
  };

  return (
    <ModalOverlay
      onClick={e =>
        e.currentTarget === e.target && handleToggleModalUserProfile()
      }
    >
      <Modal>
        <CloseIconContainer onClick={() => handleToggleModalUserProfile()}>
          <CloseIcon />
        </CloseIconContainer>
        <ImageContainer>
          <Image src={user.avatarUrl} />
          <AddIconContainer>
            <AddImage />
          </AddIconContainer>
        </ImageContainer>

        <form action="">
          <Label htmlFor="userName">
            <UserIconContainer>
              <UserIcon />
            </UserIconContainer>
            <Input
              type="text"
              name="userName"
              id="userName"
              value={state}
              onChange={handleChange}
            />
            <EditIconContainer>
              <HeaderModalEdit />
            </EditIconContainer>
          </Label>

          <ModalSaveButton type="submit">Save changes</ModalSaveButton>
        </form>
      </Modal>
    </ModalOverlay>
  );
};

export default UserProfile;
