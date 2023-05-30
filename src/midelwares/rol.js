import { errorMessage } from "../helpers/errorHelper";
import { verifyToken } from "../helpers/jwtHelper";
import { userServices } from "./../services/users";

export const validateAccessRol = (roles) => async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      errorMessage(res, "NOT_ALLOW", 409);
      return;
    }

    const token = req.headers.authorization.split(" ").pop();

    const tokenData = await verifyToken(token);

    const userData = await userServices.getUserById(tokenData.id);
    
    if ([].concat(roles).includes(userData[0].roles)) {
      next();
    } else {
      errorMessage(res, "NOT_ACCESS_PERMIT");
      return
    }
  } catch (e) {
    errorMessage(res, e.message);
  }
};
