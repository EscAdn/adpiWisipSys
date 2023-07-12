import jwt from "jsonwebtoken";
const JWT_FIRMA = process.env.JWT_FIRMA;

const generateJWT = async (users) => {
  // console.log(users)
  const sing = jwt.sign(
    {
      id: users.id,
      user: users.name,
      role: "roles",
    },
    JWT_FIRMA,
    { expiresIn: "24h" }
  );

  return sing;
};

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, JWT_FIRMA);
  } catch (error) {
    return null;
  }
};

export { generateJWT, verifyToken };
