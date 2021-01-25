import { makeAugmentedSchema } from 'neo4j-graphql-js';
import { ApolloServer } from 'apollo-server';
import neo4j from 'neo4j-driver';

import { typeDefs } from './app/type-defs';

const schema = makeAugmentedSchema({ typeDefs });

const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic('neo4j', 'test123')
);

const server = new ApolloServer({
  schema,
  context: {
    driver
  }
});

server.listen(3003, 'localhost').then(({ url }) => {
  console.log(`GraphQL API ready at ${url}graphql`);
});
