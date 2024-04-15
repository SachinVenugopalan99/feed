import React, {FC, memo} from 'react';
import avatar from '../../assets/avatar.svg';
import { Wrapper } from './Avatar.style';

interface AvatarProps {
imgSrc: string
userName: string
}

const Avatar:FC<AvatarProps> = ({imgSrc, userName}) => {
  return (
    <Wrapper>
    <img className='imgWrapper' src={imgSrc || avatar} alt={userName || 'avatar'} width='40px' height='40px' />
    </Wrapper>

  )
}

export default memo(Avatar)
