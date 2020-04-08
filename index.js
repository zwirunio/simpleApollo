const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        greeting: String
        interestingUrls: [String]
        firstName: String
        email: String
        pets: [String]
    }
`;

const data = {
    greeting: "Hello World!",
    interestingUrls: ["https://google.com", "https://kursreacta.pl", "https://graphql.org/"],
    firstName: "John",
    email: "john@example.com",
    pets: ["Mittens", "Doggo", "Birb"]
}

const server = new ApolloServer({ typeDefs, rootValue: data });

server.listen({ port: 4000 }).then((result) => console.log(result.url));