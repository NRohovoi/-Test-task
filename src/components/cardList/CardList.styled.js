import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 20px;
  box-shadow: ${p => p.theme.shadows.card};
  border-radius: ${p => p.theme.radii.card};
  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 48px 60px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 48px 100px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p => p.theme.space[6]};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
  }
`;
