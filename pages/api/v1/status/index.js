function status(req, res) {
  res.status(200).json({ chave: "Hello world" });
}

export default status;
