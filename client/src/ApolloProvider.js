import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http//localhost:3001/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)