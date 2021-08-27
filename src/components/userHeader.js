import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserHeader = (props) => {
  //mapstatetoprops
  //states are the reducers
  const user = useSelector((state) =>
    state.user.find((user) => user.id === props.userId)
  );
  //Dispatchtoprops
  //this is what actually fetches the users from the api calling the fetchUser
  // useEffect(() => {
  //   dispatch(fetchUser(props.userId));
  // }, [dispatch, props.userId]);

  if (!user) {
    return null;
  }

  return <div className='header'>{user.name}</div>;
};

export default UserHeader;
