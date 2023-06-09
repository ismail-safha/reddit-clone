import Head from "next/head";
import Feed from "../components/Feed";
import PostBox from "../components/PostBox";

export default function Home() {
  // handle Search

  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit-Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostBox />
      <div className="flex">
        <Feed />
      </div>
    </div>
  );
}
