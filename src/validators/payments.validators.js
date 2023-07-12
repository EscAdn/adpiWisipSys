import validateResults from './../helpers/validateHelper'
import {check} from 'express-validator'

export const validateCreated = [
  check("invoice").exists().isNumeric(),
  check("valid_until").exists().isString(),
  check("state").exists().isString().custom((value, {req}) => {
  	if(value === "Activa" || value === "Vencida"){
  		return true
  	}
  	throw new Error("El estado no es valido")
  }),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export const validateUpdate = [
  check("state").exists().isString().custom((value, {req}) => {
    if(value === "Activa" || value === "Vencida"){
      return true
    }
    throw new Error("El estado no es valido")
  }),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];
