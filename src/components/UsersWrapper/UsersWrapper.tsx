import {FC} from 'react'
import Feed from '../Feed/Feed';
import { Wrapper } from './UserWrapper.style';
import Avatar from '../Avatar/Avatar';

interface UsersWrapperProps{
users: any;
}

const UsersWrapper:FC<UsersWrapperProps> = ({users}) => {
  return (
    <Wrapper>
      {users?.length ? (
        <div>
      <div className='userWrapper'>
        {users?.map((user: any) => (
          <div className='user'>
            <Avatar
              imgSrc={user?.profilePictureUrl}
              userName={user?.name}
              key={user?.id}
            />
            <h3>{user?.name}</h3>
         </div>
        ))}
            </div>
        </div>
      ): (
        <h3 className='no_users'>There are no Users!</h3>
      )}
    </Wrapper>
  )
}

export default UsersWrapper
