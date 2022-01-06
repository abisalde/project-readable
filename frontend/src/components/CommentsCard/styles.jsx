import styled from 'styled-components';

export const ListContainer = styled.ol`
  display: flex;
  flex-flow: column-reverse;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

export const ListItem = styled.div`
  width: 100%;
  border-bottom: 0.032rem solid rgba(0, 0, 0, 0.21);
  padding-bottom: 0.5rem;
`;

export const TopItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Muted = styled.span`
  font-size: 0.865rem;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  margin-right: 0.85rem;
`;

export const MiddleItem = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

export const BottomItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
