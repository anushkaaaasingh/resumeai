const mongoose = require("mongoose")

const blacklistSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  }
 }, { timestamps: true })
const TokenBlacklistmodel = mongoose.model("Blacklist", blacklistSchema)
module.exports = TokenBlacklistmodel