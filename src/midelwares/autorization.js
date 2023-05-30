import { errorMessage } from "../helpers/errorHelper";
import { verifyToken } from "../helpers/jwtHelper";

export const authValidate = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      errorMessage(res, "ERROR_NOT_TOKEN", 409);
      return;
    }

    const token = req.headers.authorization.split(" ").pop();

    const tokenData = await verifyToken(token);
    console.log(tokenData, token);

    if (tokenData.id) {
      next();
    } else {
      errorMessage(res, "ERROR_NOT_ALLOW", 409);
    }
  } catch (e) {
    errorMessage(res, e.message, 401);
  }
};
