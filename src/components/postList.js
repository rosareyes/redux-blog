import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../actions';

const PostList = () => {
  useEffect(() => {
    fetchPosts();
  });

  return <div>Post List</div>;
};

export default PostList;
