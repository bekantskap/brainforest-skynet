import { gql } from "@apollo/client";
import client from "./client";

export const getPageStaticProps = async () => {
  const res = await client.query({
    query: gql`
      query PageQuery {
        posts(first: 4, after: null) {
          nodes {
            databaseId
            uri
            title
            date
          }
        }
        menuItems {
          nodes {
            label
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: res.data.posts.nodes,
      menuItems: res.data.menuItems.nodes,
    },
  };
};
