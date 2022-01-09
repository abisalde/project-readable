import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

export const CommentsContainer = styled.div`
  width: 100%;
`;

export const ListContainer = styled.ol`
  display: flex;
  flex-flow: column-reverse;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

export const Page404 = styled.div`
  display: flex;
  margin-top: 3rem;
  margin-bottom: 3rem;
  flex-flow: column;
  justify-content: center;
  width: 100%;
`;

export const Page404Text = styled.h1`
  font-size: 15rem;
  color: rgb(250, 226, 4);
  font-weight: bold;
  text-align: center;
`;

export const HelperText404 = styled.h6`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
`;

export const HelperText = styled.p`
  font-size: 1rem;
  text-align: center;
  padding-top: 0.75rem;
`;
