import React from 'react';
import { CurrentUser } from 'types/users';
import { Wrapper, WrapperUserInfo } from './styles';
import { Img } from 'styles/globalStyles';
import { Label } from 'styles/globalStyles';

type Props = {
  signOut(): void;
  user: CurrentUser;
};

const InformactionAccount = ({ user, signOut }: Props) => (
  <Wrapper style={{ zIndex: 2 }}>
    <Img
      className="rounded-circle"
      src={user.photoURL}
      alt="user"
      width="50%"
      margin="auto"
      display="block"
    />
    <WrapperUserInfo>
      <Label fontWeight={500} fontSize="16px" lineHeight="29px">
        {user.displayName}
      </Label>
      <Label fontWeight={400} fontSize="14px" color="#5f6368">
        {user.email}
      </Label>
    </WrapperUserInfo>
    <button
      type="button"
      className="btn btn-light"
      style={{ display: 'block', margin: 'auto' }}
      onClick={signOut}
    >
      Sign Out
    </button>
  </Wrapper>
);

export default InformactionAccount;
