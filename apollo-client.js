import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "https://dashboard.stepzen.com/explorer?getting-started=api%2Fnordic-puffin",
  uri: "https://kangasniemi.stepzen.net/api/nordic-puffin/__graphql",
  headers: {
    // Authorization: `apikey ${process.env.ADMIN_KEY}`,
    Authorization: `apikey kangasniemi::stepzen.io+1000::0a68a27714672d1e0749cae7713cc5e2c034f0e58fc9fb883af52eb2c49afa52`,
  },
  cache: new InMemoryCache(),
});
export default client;
