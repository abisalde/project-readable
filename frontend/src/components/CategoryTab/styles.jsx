import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.325rem 0rem;
  justify-content: space-between;
`;

export const Tab = styled.div`
  width: 100%;
  text-align: center;
  &:hover: {
    border-bottom: 0.25rem solid #4a435c;
    width: 200px;
  }
`;
