import Head from "next/head";
import FormSearch from "../Components/FormSearch";
import Header from "../Components/Header";
import ProductList from "../Components/ProductList";

interface HomeProps {
  posts: any[];
}

export default function Home({ posts }: HomeProps) {
  // handle Search

  return (
    <>
      <Head>
        <title>Task-App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <Header />

        <FormSearch />
        <ProductList posts={posts} />
      </main>
    </>
  );
}
// fetch
export async function getServerSideProps() {
  const authToken = process.env.NEXT_PUBLIC_API_KEY;

  const query = `
        query GetGenericCatalytics {
          getGenericCatalytics {
            ...Catalytic
          }
        }

        fragment Catalytic on Catalytic {
          _id
          maker
          brand
          ref
          type
          images
          price
          yesterdayPrice
        }
  `;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ query }),
  };
  const response = await fetch(
    "https://api.catalyticworks.com/graphql",
    options
  );
  const data = await response.json();
  return {
    props: { posts: data?.data?.getGenericCatalytics },
  };
}
function onSearch(searchTerm: string) {
  throw new Error("Function not implemented.");
}
