import React from "react";
import {
  ArrowDown,
  ArrowUp,
  ChatAltOutline,
  GiftOutline,
  ShareOutline,
  BookmarkOutline,
  DotsHorizontalOutline,
} from "heroicons-react";

interface PostProps {
  post: Post;
  postPage?: boolean;
}

function Post({ post }: PostProps) {
  return (
    <div>
      {/* Votes */}
      <div className="">
        <ArrowUp className="voteButtons hover:text-red-400" />
        <p>0</p>
        <ArrowDown className="voteButtons hover:text-blue-400" />
      </div>
      <div className="">
        {/* header */}
        <div className=""></div>
        {/* title */}
        <div className=""></div>
        {/* image */}
        <div className=""></div>
        {/* footer */}
        <div className=""></div>
      </div>
    </div>
  );
}

export default Post;
