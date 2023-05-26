export const errorHTTP = (res, err) => {
  res.status(500);
  res.send({ error: err });
};

export const errorMessage = (res, err = "ERROR_NOT_FOUNT", code = 401) => {
  res.status(code);
  res.send({ error: err });
};
