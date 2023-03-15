db.produtos.countDocuments({
  nome: { $regex: "(?i)mc(?-i)" },
});