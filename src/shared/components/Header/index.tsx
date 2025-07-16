import React from 'react';

import BeTalentLogo from '../../assets/BeTalentLogo';
import { headerStyled } from './styles';

function Header() {
  return (
    <header className={headerStyled()}>
      <div className="flex h-full w-full max-w-[96.1rem] items-center justify-start">
        <BeTalentLogo />
      </div>
    </header>
  );
}

export default Header;
