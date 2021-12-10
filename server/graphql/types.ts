import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    createSchema(id: String): String
  }
`;