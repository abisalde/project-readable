import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const ListDivide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 0.032rem solid rgba(0, 0, 0, 0.21);
  padding-bottom: 0.32rem;
`;

export const DivideLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const DivideRight = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  line-height: 1.65;
`;

export const Muted = styled.span`
  font-size: 0.865rem;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  margin-right: 0.85rem;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 25.3125rem;
  border-radius: 0.3125rem;
  vertical-align: middle;
`;

export const CommentsContainer = styled.div`
  width: 100%;
`;
