import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../graphql/queries";
import Post from "./Post";

// interface FeedProps {
//   topic?: string;
// }

export default function Feed() {
  const { data } = useQuery(GET_ALL_POSTS);

  const posts: Post[] = data?.getPostList;

  return (
    <div className="mt-5 space-y-4">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
