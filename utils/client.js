import { ApolloClient, InMemoryCache } from "@apollo/client";
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

const client = new ApolloClient({
  uri: process.env.WP_API_URL,
  cache: new InMemoryCache(),
});

export default client;
