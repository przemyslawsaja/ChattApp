import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphql',
});

const authLink = setContext((_, { headers }) => {

  const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MDU1MjE1NjYsImlhdCI6MTYwMzEwMjM2NiwiaXNzIjoiY2hhdGx5IiwianRpIjoiOTQ1ZjlmYzMtMDI0MC00YWEyLTkwOGMtZDljZWI4YWE3Y2ZkIiwibmJmIjoxNjAzMTAyMzY1LCJzdWIiOiI5YmI0Mzg4Zi04ZDI5LTQ2YTQtYmJlOC1hMjZkNWE1M2YxNmMiLCJ0eXAiOiJhY2Nlc3MifQ.YSdmCeWPt0Md3ZRWNU6YjyZR81TQ7Vq5KjfFAKqGUB8N-kmkGFRaUegQif_huF2tYOqXaticEic8tIe_VKwWQQ'

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
