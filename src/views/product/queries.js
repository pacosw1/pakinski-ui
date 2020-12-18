const { gql } = require("@apollo/client");

const SEARCH_TAGS = gql`
  query tags($keyword: String!) {
    searchTags(keyword: $keyword) {
      id
      title
    }
  }
`;


const CREATE_PRODUCT = gql`

  mutation product($input: ProductInput) {
    createProduct(input: $input) {
        message
    }
  }
`;

const GET_CHAR_COUNT = gql`
  query {
    characters {
      info {
        pages
        count
      }
    }
  }
`;

export { SEARCH_TAGS, GET_CHAR_COUNT, CREATE_PRODUCT };