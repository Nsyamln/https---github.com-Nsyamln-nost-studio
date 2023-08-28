import express from "express";
import conn from "../db.js";

const router = express.Router();

// simpan semua
// router.post("/all", async (_req, res) => {
//   for await (const product of products) {
//     const prepare = await conn.prepare(
//       "INSERT INTO products (name, image,price,stock,completeness, description) VALUES (?, ?, ?, ?, ?, ?)"
//     );
//     await prepare.execute([product.name, product.image,product.price,product.stock,product.completeness, product.description]);
//   }
//   res.send("Semua Product berhasil disimpan.");
// });

router.post("/all",async(req,res)=>{
  await conn.query(
    `INSERT INTO products VALUES ('${req.body.id}','${req.body.name}','${req.body.price}','${req.body.stock}','${req.body.completeness}','${req.body.description}')`
  );
  res.send("Product berhasil disimpan");
});

// tampilkan semua
router.get("/", async (_req, res) => {
  const products = await conn.query("SELECT * FROM products");
  res.json(products);
});

// tampilkan satu berdasarkan ID
router.get("/:id", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM products WHERE id = ?");
  const product = (await prepare.execute([req.params.id]))[0];
  res.json(product);
});

// buat
router.post("/", async (req, res) => {
  try {
    const prepare = await conn.prepare(
      "INSERT INTO products (name, image,price,stock,completeness, description) VALUES (?, ?, ?, ?, ?, ?)"
    );
    await prepare.execute([
      req.body.name,
      req.body.image,
      req.body.price,
      req.body.stock,
      req.body.completeness,
      req.body.description,
    ]);
    res.send("product berhasil disimpan.");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// edit
router.put("/:id", async (req, res) => {
  try {
    const prepare = await conn.prepare(
      "UPDATE products SET name = ?, image = ?, price=?,stock=?, completeness=?, description = ? WHERE id = ?"
    );
    await prepare.execute([
      req.body.name,
      req.body.image,
      req.body.price,
      req.body.stock,
      req.body.completeness,
      req.body.description,
      req.params.id,
    ]);
    res.send("product berhasil disimpan.");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// hapus berdasarkan ID
router.delete("/:id", async (req, res) => {
  try {
    const prepare = await conn.prepare("DELETE FROM products WHERE id = ?");
    await prepare.execute([req.params.id]);
    res.send("Product berhasil dihapus.");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// hapus semua
 
export default router;
