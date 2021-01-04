const { gql } = require("@apollo/client");


const AUTHENTICATE = gql`
  mutation auth($input: LoginData) {
    authenticate(input: $input) {
        Token
        Error {
            Message
            Code
        }
    }
  }
`;

export { AUTHENTICATE };