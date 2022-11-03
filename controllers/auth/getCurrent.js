const getCurrent = async (req, res) => {
  const { email, verify } = req.user;

  res.json({
    email,
    verify,
  });
};

module.exports = getCurrent;
