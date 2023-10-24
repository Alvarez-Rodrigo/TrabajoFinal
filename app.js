import express from "express"
import productsRouter from "./src/routes/products.router"
import cartsRouter from "./src/routes/carts.router.js"

const app = express()
app.use(express.json())

app.get("/", (req, res) => res.status(200).json({ message: "Server Ok" }))

app.use("/api/products", productsRouter)
app.use("/api/carts", cartsRouter)



const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
server.on('err', err => console.log(`Express server error: ${err.message}`))