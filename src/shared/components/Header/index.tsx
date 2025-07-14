import React from 'react';
import Image from 'next/image';

import beTalentLogo from '@/shared/assets/be-talent-logo.png';

import { headerStyled } from './stylest';

function Header() {
  return (
    <header className={headerStyled()}>
      <Image
        src={beTalentLogo.src}
        alt="be talent logo"
        width={90}
        height={34}
      />
    </header>
  );
}

export default Header;
