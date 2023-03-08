import { Main, Section } from './App.styled';
import { CardlList } from './components/cardList/CardList';
import useLocalStorage from './hooks/UseLocalStorage';
import Context from './Context';
export const App = () => {
  const [followings, setFollowings] = useLocalStorage('followings', []);

  const handleFollowings = id => {
    const followingUser = followings.filter(userId => userId === id);

    if (followingUser.length > 0) {
      return setFollowings(prevState =>
        prevState.filter(userId => userId !== id)
      );
    }

    setFollowings(prevState => [...prevState, id]);
  };

  const value = {
    followings,
    handleFollowings,
  };
  return (
    <Context.Provider value={value}>
      <Main>
        <Section>
          <CardlList />
        </Section>
      </Main>
    </Context.Provider>
  );
};
