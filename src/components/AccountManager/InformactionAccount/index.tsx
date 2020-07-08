import React from 'react';
import { CurrentUser } from 'context/AuthContext';
import { Wrapper, Img, WrapperUserInfo, Label } from './styles';

type Props = {
  signOut(): void;
  user: CurrentUser;
};

const InformactionAccount = ({ user, signOut }: Props) => (
  <Wrapper>
    <Img className="rounded-circle" src={user.photoURL} alt="user" />
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
