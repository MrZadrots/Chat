function ExtractJwt(req) {
  let token = null;
  if (req.cookies && req.cookies.token != void 0) {
    token = req.cookies["token"];
  }
  return token;
}

module.exports = {
  jwt: {
    jwtFromRequest: ExtractJwt,
    secretOrKey: "TfbTq2NfLzqMcbVY9EpGQ2p"
  },

  expiresIn: "1 day",

  mongo: {
    url: "mongodb+srv://artem:EGORletov2312@cluster0.r7uqw.mongodb.net/Chatik?retryWrites=true&w=majority",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
};
