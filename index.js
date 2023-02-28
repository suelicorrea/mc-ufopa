import app from "./config/express.js"

connst port = 3000;

const router = express.Router();

router.get("/", async (req, res, next) =>{
  res.json({})
})
app.use("/", router)

app.listem(
  port,
  ()=> console.log("Servidor funcionando!")
)
