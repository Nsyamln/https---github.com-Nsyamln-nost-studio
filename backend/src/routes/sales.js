import express from "express";
import conn from "../db.js";

const users = [
  {
    sales_id: 1,
    product_id: 1,
    user_id: 1,
    date:"23/08/2023",
    qty:2,
  },
  
];

const router = express.Router();

// simpan semua
router.post("/all", async (_req, res) => {
  for await (const user of users) {
    const prepare = await conn.prepare(
      "INSERT INTO users (name, email, password, role, address, phone_number) VALUES (?, ?, ?, ?, ?, ?)"
    );
    await prepare.execute([user.name, user.email, user.password, user.role, user.address, user.phone_number]);
  }
  res.send("Semua user berhasil disimpan.");
});

// tampilkan semua
router.get("/", async (_req, res) => {
  const users = await conn.query("SELECT * FROM users");
  res.json(users);
});

// tampilkan satu berdasarkan ID
router.get("/:id", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM users WHERE id = ?");
  const user = (await prepare.execute([req.params.id]))[0];
  res.json(user);
});

// buat
router.post("/", async (req, res) => {
  try {
    const prepare = await conn.prepare(
      "INSERT INTO users (name, email, password, role, address, phone_number) VALUES (?, ?, ?, ?, ?, ?)"
    );
    await prepare.execute([
      req.body.name,
      req.body.email,
      req.body.password,
      req.body.role,
      req.body.address,
      req.body.phone_number,
    ]);
    res.send("user berhasil disimpan.");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// edit
router.put("/:id", async (req, res) => {
  try {
    const prepare = await conn.prepare(
      "UPDATE users SET name=?, email=?, password=?, role=?, address=?, phone_number=? WHERE id = ?"
    );
    await prepare.execute([
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role,
        req.body.address,
        req.body.phone_number,
    ]);
    res.send("user berhasil disimpan.");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// hapus berdasarkan ID
router.delete("/:id", async (req, res) => {
  try {
    const prepare = await conn.prepare("DELETE FROM users WHERE id = ?");
    await prepare.execute([req.params.id]);
    res.send("user berhasil dihapus.");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// hapus semua

export default router;
