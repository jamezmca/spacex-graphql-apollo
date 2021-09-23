import './App.css';
import Home from './Components/Home';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // HttpLink
} from '@apollo/client'

function App() {
  const uri = 'https://api.spacex.land/graphql'
  const client = new ApolloClient({
    uri: uri,
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
