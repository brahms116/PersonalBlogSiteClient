import { GetStaticProps } from "next";
import LandingSection from "../components/LandingSection";
import PostsSection from "../components/PostsSection";
import { PostHeading, PostHeadingResponse } from "../interfaces";
import Layout from "../layout";
import { graphqlClient } from "../graphql";
import { gql } from "graphql-request";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export interface indexProps {
  postsData: PostHeading[];
  cursor: string;
}

export default function Home(props: indexProps) {
  const [postHeadings, setPostHeadings] = useState(props.postsData);
  const [cursor, setCursor] = useState(props.cursor);
  const [isAnimating, setIsAnimating] = useState(false);
  const [morePosts, setMorePosts] = useState(!(props.cursor === "LP"));

  const loadButtonControl = useAnimation();
  const loaderControl = useAnimation();

  // useEffect(()=>{console.log(`cursor changed to:${cursor}`)},[cursor])

  const handleLoading = async () => {
    //  console.log(cursor)

    if (!isAnimating) {
      setIsAnimating(true);
      await loadButtonControl.start({
        opacity: 0,
      });
      await loadButtonControl.start({
        display: "none",
        transition: { duration: 0.1 },
      });
      await loaderControl.start({
        display: "block",
        transition: { duration: 0.1 },
      });
      await loaderControl.start({
        opacity: 1,
        transition: { duration: 1 },
      });
      // console.log(graphqlClient)
      try {
        const res: PostHeadingResponse = await graphqlClient.request(
          postQuery(1, cursor)
        );
        if (!res.getPostHeadingsByDate.isError) {
          setCursor(res.getPostHeadingsByDate.cursor);
          setPostHeadings([
            ...postHeadings,
            ...res.getPostHeadingsByDate.posts,
          ]);
          // console.log(res.getPostHeadingsByDate.cursor)

          if (res.getPostHeadingsByDate.cursor !== "LP") {
            await loaderControl.start({
              opacity: 0,
            });
            await loaderControl.start({
              display: "none",
              transition: { duration: 0.1 },
            });
            await loadButtonControl.start({
              display: "block",
              transition: { duration: 0.1 },
            });
            await loadButtonControl.start({
              opacity: 1,
              transition: { duration: 1 },
            });
          } else {
            setMorePosts(false);
          }
        } else {
          console.log(res.getPostHeadingsByDate.msg);
        }
      } catch (error) {
        console.log(error);
      }
      // console.log(cursor)

      setIsAnimating(false);
    }
  };

  return (
    <Layout>
      <LandingSection></LandingSection>
      <PostsSection headings={postHeadings} />
      {morePosts && (
        <div className="loaderSection">
          <motion.div
            initial={{ display: "none", opacity: 0 }}
            animate={loaderControl}
          >
            <div className="loader" />
          </motion.div>
          <motion.div animate={loadButtonControl} onClick={handleLoading}>
            <div className="outlineBtn lg hover">LOAD MORE</div>
          </motion.div>
        </div>
      )}
      <div className="margin"></div>
      <style jsx>{`
        .loaderSection {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 4rem 0;
          height: 6rem;
        }
        .margin {
          margin-bottom: 8rem;
        }
      `}</style>
    </Layout>
  );
}

const postQuery = (size?: number, cursor?: string) => {
  let opts = ``;
  if (size) {
    opts += `size:${size},`;
  }
  if (cursor) {
    opts += `cursor:"${cursor}"`;
  }

  return gql`
  {
    getPostHeadingsByDate(opts:{${opts}}){
      isError
      msg
      cursor
      posts{
        id
        title
        createdAt
        description
      }
    }
  }
`;
};

export const getStaticProps: GetStaticProps = async (context) => {
  // console.log(graphqlClient)
  const data: PostHeadingResponse = await graphqlClient.request(postQuery(20));
  if (data.getPostHeadingsByDate.isError)
    console.log(data.getPostHeadingsByDate.msg);
  return {
    props: {
      postsData: data.getPostHeadingsByDate.posts,
      cursor: data.getPostHeadingsByDate.cursor,
    },
    revalidate: 1,
  };
};
