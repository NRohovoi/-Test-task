import CardListItem from '../cardListItem/CardListItem';

import { Container, List } from './CardList.styled';

import dataCard from '../../CardsData';

export const CardlList = () => {
  return (
    <Container>
      <List>
        {dataCard &&
          dataCard.map(data => <CardListItem key={data.id} data={data} />)}
      </List>
    </Container>
  );
};
