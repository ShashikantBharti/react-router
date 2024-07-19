import { Outlet } from 'react-router-dom';
import { StyledContainer } from './Layout';

const PostLayout = () => {
  return (
    <>
      <h1>Post Layout</h1>
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </>
  );
};

export default PostLayout;
