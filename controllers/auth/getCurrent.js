const { User } = require('../../models/user');
const { RequestError } = require('../../helpers');

const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    throw new RequestError(401, 'Not authorized');
  }
  const { email, verify } = user;

  res.status(200).json({
    email,
    verify,
  });
};

module.exports = getCurrentUser;
