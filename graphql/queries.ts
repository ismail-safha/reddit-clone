import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    subredditPaginatedListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

//postList
export const GET_ALL_POSTS = gql`
  query MyQuery {
    postPaginatedList {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      comment {
        created_at
        id
        post_id
        text
        username
      }
      subreddit {
        created_at
        id
        topic
      }
      vote {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;
