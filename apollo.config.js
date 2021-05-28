module.exports = {
  client: {
    includes: ["./src/apollo/gql/*.ts", "./src/apollo/fragment/*.ts"],
    tagName: "gql",
    service: {
      name: "ec-server",
      url: "http://localhost:4000/graphql",
    },
  },
};
