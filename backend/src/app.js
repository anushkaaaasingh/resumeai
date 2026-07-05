const express = require("express")
const cookieparser =require("cookie-parser")
const app = express()

app.use(express.json())
app.use(cookieparser())
app.use(express.urlencoded({ extended: true }))

const authRouter = require("./routes/auth.routes")
app.use("/api/auth", authRouter)

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      message: "Invalid JSON payload. Make sure request bodies use valid JSON with double-quoted keys.",
      error: err.message,
    })
  }

  next(err)
})

module.exports = app