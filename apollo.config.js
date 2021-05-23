module.exports = {
  client: {
    includes: ["./src/lib/gql/*.ts", "./src/lib/fragment/*.ts"],
    tagName: "gql",
    service: {
      name: "ec-server",
      url: "http://localhost:4000/graphql",
    },
  },
};
