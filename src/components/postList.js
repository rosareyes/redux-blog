import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./userHeader";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  console.log(posts);

  return (
    <div>
      <div className='ui relaxed divided list'>
        {posts.map((post) => {
          return (
            <div className='item' key={post.id}>
              <i className='large middle aligned icon user'></i>
              <div className='content'>
                <div className='description'>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
                <UserHeader userId={post.userId}></UserHeader>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
