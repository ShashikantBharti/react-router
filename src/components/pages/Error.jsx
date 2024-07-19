import { styled } from 'styled-components';

const Error = () => {
  return (
    <StyledError>
      <h1 style={{ fontSize: '80px' }}>404</h1>
      <h1> Page Not Found Error!!!</h1>
      <br />
      <p>Something went wrong!!</p>
    </StyledError>
  );
};

export default Error;

const StyledError = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
