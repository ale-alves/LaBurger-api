const getUsers = (req, res) => {
  res.send({
    mensage: "All users.",
  });
};

const getUserOnly = (req, res) => {
  const userUid = req.params.userUid;
  res.send({
    mensage: "Only user.",
    userUid: userUid,
  });
};

const postUser = (req, res) => {
  res.send({
    mensage: "Create user.",
  });
};

const putUser = (req, res) => {
  const userUid = req.params.userUid;
  res.send({
    mensage: "Update user.",
    userUid: userUid,
  });
};

const deleteUser = (req, res) => {
  const userUid = req.params.userUid;
  res.send({
    mensage: "Delete user.",
    userUid: userUid,
  });
};

module.exports = { getUsers, getUserOnly, postUser, putUser, deleteUser };
