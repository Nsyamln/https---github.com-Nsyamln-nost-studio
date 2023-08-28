import  express  from "express";
import conn from "../db.js";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";
import  jwt  from "jsonwebtoken";

const router = express.Router();
router.use(cookieParser());

router.get("/tampil", async(_req,res)=>{
    const lihat = await conn.query(`select * from users`);
    res.send(lihat);
})

router.post("/registrasi",async (req,res)=>{
    
    const baris = await conn.query(
        `select * from users where email = '${req.body.email}'`
    );

    console.log(baris);
    if(baris.length === 1){
        res.send("Email sudah terdaftar");
    }else{
        // const salt = await bcrypt.genSalt();
        // const hash = await bcrypt.hash(req.body.password, salt);
        await conn.query(
            `INSERT INTO users VALUES(${req.body.id},'${req.body.name}','${req.body.email}','${req.body.password}','${req.body.role}','${req.body.address}','${req.body.phone_number}')`
        );
        res.send("Berhasil Registrasi");
    }

});

router.post("/login", async (req, res) => {

    const rows = await conn.query(
      `select * from users where email = '${req.body.email}'`
    );
    if (rows.length > 0) {
    //   const cek = await bcrypt.compare(
    //     req.body.password,
    //     rows[0].password
    //   );
        
        if(rows[0].password === req.body.password){
            const cek = true;
                if (cek === true) {
                    const token = jwt.sign(rows[0], "secret");
                    res.cookie("token", token);
                    res.send("berhasil login");
                    console.log(token);
                } else {
                    res.status(401);
                    res.send("password salah");
                }
        }
  
    } else {
      res.status(404);
      res.send("tidak ditemukan");
    }

});

//login
router.use((req,res,next)=>{
    let authorization = false;
    if(req.path === "/api/login"){
        next();
    }else if(req.body.cookie === true){
        try {
            req.me = jwt.verify(req.cookies.token,"secret");
            authorization = true;
        } catch (error) {
            res.clearCookie("token");
        }
    }
    if(authorization === true){
        if(req.path === "/login"){
            res.redirect("/");
        }else{
            if(req.path.startsWith("/login")){
                next();
            }else{
                if(req.path.startsWith("/api")){
                    res.statusCode(401);
                    res.send("Anda harus Login terlebih dahulu");
                }else{
                    res.redirect("/login");
                }
            }
        }
    }
});

router.get("/me",(req,res)=>{
    res.json(req.user);
})

router.post("/logout",(_req, res)=>{
    res.clearCookie("jwt").send("Logout berhasil");
});

export default router;


//router.post("/login",async(req,res)=>{
    //     const prepare = await conn.prepare("SELECT * FROM users WHERE email ='${req.body.email}'");
    //     const user = (await prepare.execute([req.body.email]))[0];
    //     if(user){
    //         if(await bcrypt.compare(req.body.password, user.password)){
    //             const token = jwt.sign(user, process.env.SECRET_KEY);
    //             res.cookie("jwt",token,{
                    
    //                 httpOnly:true,
    //             }).send("Login Berhasil");console.log(token);
    //         }else{
    //             res.status(401).send("Kata sandi salah");
    //         }
    //     }else{
    //         res.status(401).send("Pengguna tidak ditemukan");
    //     }
    // });