const { ApolloServer, gql } = require("apollo-server");
const PORT = process.env.PORT || 4000;

const typeDefs = gql`
  type Query {
    greeting: String
    interestingUrls: [String]
    randomDiceThrow: Int
    e: Float
    eulersSeries: [Float]
  }
`;

const rootValue = () => {
  const getRandomDiceThrow = (sides = 6) => Math.ceil(Math.random() * sides);
  const getEutersSeries = (n = 1000) => {
    var eulersSeries = [];
    for (var i = 0; i < n; i++) {
      eulersSeries.push(Math.pow(1 + 1 / (i + 1), i + 1));
    }

    return eulersSeries;
  };

  return {
    greeting: "Hello world!",
    interestingUrls: ["https://kursreacta.pl", "https://64bites.com"],
    randomDiceThrow: getRandomDiceThrow(),
    e: Math.E,
    eulersSeries: getEutersSeries()
  };
};

const server = new ApolloServer({
  typeDefs,
  rootValue,
  introspection: true,
  playground: true
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
