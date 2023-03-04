import { Main, Section } from './App.styled';
import { CardlList } from './cardList/CardList';
import useLocalStorage from '../hooks/UseLocalStorage';
import Context from '../Context';
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

// import useLocalStorage from "../hooks/useLocalStorage";
// import './App.css';
// import TwitCards from './twitCards/TwitCards';
// import Context from '../Context';

// function App() {
//   const [followings, setFollowings] = useLocalStorage('followings', []);

//   const handleFollowings = id => {
//     const followingUser = followings.filter(userId => userId === id);

//     if(followingUser.length > 0){
//       return setFollowings(prevState => prevState.filter(userId => userId !== id));
//     }

//     setFollowings(prevState => [...prevState, id]);
//   };

//   const value = {
//     followings,
//     handleFollowings
//   };

//   return (
//     <Context.Provider value={value}>
//     <div className="box">
//       <TwitCards/>
//     </div>
//     </Context.Provider>
//   );
// };

// export default App;