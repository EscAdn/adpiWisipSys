import bcryptjs from "bcryptjs";

export const encryp = async (password) => {
  return await bcryptjs.hash(password, 10);
};

export const compare = async (password, hash) => {
  return await bcryptjs.compare(password, hash);
};
