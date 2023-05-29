import jwt from "jsonwebtoken";
const JWT_FIRMA = process.env.JWT_FIRMA;

const generateJWT = async (users) => {
  const sing = jwt.sign(
    {
      id: users[0].id,
      user: users[0].name,
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
