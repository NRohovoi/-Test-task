import React, { useContext } from 'react';
import Context from '../../Context';

import Logo from '../logo/Logo';

import {
  ListItem,
  ProfileCard,
  AvatarWrapper,
  Avatar,
  CentralLine,
  BoxInfo,
  BoxTweet,
  CounTweet,
  Tweet,
  BoxFollow,
  CounFollow,
  Follow,
  Button,
  NextButton,
} from './CardListItem.styled';

import Ellipse from '../../images/Ellipse.png';

export default function CardListItem({ data }) {
  const { followings, handleFollowings } = useContext(Context);

  const { id, countFollowers, followers, countTweets, tweets, avatar } = data;

  const followingUserId = followings.filter(userId => userId === id);

  const countFollower =
    followingUserId.length > 0 ? countFollowers + 1 : countFollowers;

  return (
    <ListItem>
      <ProfileCard>
        <Logo />
        <CentralLine />
        <AvatarWrapper>
          <img src={Ellipse} alt="frame of avatar" />
          <Avatar src={avatar} alt={avatar} />
        </AvatarWrapper>
        <BoxInfo>
          <BoxTweet>
            <CounTweet>{countTweets}</CounTweet>
            <Tweet>{tweets} </Tweet>
          </BoxTweet>
          <BoxFollow>
            <CounFollow>{followers}</CounFollow>
            <Follow>{countFollower} </Follow>
          </BoxFollow>
        </BoxInfo>
        {followingUserId.length > 0 ? (
          <NextButton
            className="followingButton"
            onClick={() => handleFollowings(id)}
          >
            Following
          </NextButton>
        ) : (
          <Button className="followButton" onClick={() => handleFollowings(id)}>
            Follow
          </Button>
        )}
      </ProfileCard>
    </ListItem>
  );
}
