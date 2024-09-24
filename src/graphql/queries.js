/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPetstore = /* GraphQL */ `
  query GetPetstore($id: ID!) {
    getPetstore(id: $id) {
      id
      Name
      Age
      About
      Breed
      Colour
      Image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPetstores = /* GraphQL */ `
  query ListPetstores(
    $filter: ModelPetstoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPetstores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Age
        About
        Breed
        Colour
        Image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
