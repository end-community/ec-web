module.exports = {
  client: {
    includes: ["./src/gql/*.ts"],
    tagName: "gql",
    service: {
      name: "ec-server",
      url: "http://localhost:4000/graphql",
    },
  },
};
