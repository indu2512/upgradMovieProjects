
const [login]=require("../controller/user.controller")


module.exports=(express,app)=>{
    const router=express.Router();
router.get("/login",login);
return app.use("/api",router);
};