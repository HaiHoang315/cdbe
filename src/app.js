import express from "express";
import productRouter from "./routers/product";
import { connectDB } from "./config/db";
import path from "path";
import authRouter from "./routers/auth";
import dotenv from "dotenv";
import morgan from "morgan";
import session from "express-session";

dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true })); // Để xử lý dữ liệu form (application/x-www-form-urlencoded)
// Cấu hình session
app.use(
  session({
    secret: process.env.SESSION_SECRET || "mysecret",
    resave: false,
    saveUninitialized: true,
  })
);
//conect db
connectDB(process.env.DB_URI);

// Cấu hình thư mục views và view engine
const __dirname = path.resolve();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//routers
app.use("/api", productRouter);
app.use("/api", authRouter);

// Serve static files

app.get("/register", (req, res) => {
  res.render("register", { baseUrl: process.env.BASE_URL });
});
app.get("/login", (req, res) => {
  res.render("login", {
    baseUrl: process.env.BASE_URL,
    userLoggedIn: req.session.userLoggedIn || false,
  });
});
app.get("/profile", (req, res) => {
  res.render("profile", {
    baseUrl: process.env.BASE_URL,
    user: req.session.user || {},
  });
});

app.get("/editprofile", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  // Truyền dữ liệu người dùng vào view
  res.render("editprofile", {
    baseUrl: process.env.BASE_URL, 
    user: req.session.user,      
  });
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

export const viteNodeApp = app;
