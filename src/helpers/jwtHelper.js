import jwt from "jsonwebtoken";
const JWT_FIRMA = process.env.JWT_FIRMA;

const generateJWT = async (users) => {
  const sing = jwt.sign(
    {
      id: users.id,
      name: users.name,
      role: users.roles,
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
