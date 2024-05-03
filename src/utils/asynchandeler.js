import Promices, { Promise } from "mongoose";

const asynchandeler = (midelwere) => {
  (req, res, next) => {
    Promise.resolved(midelwere(req, res, next)).catch((err) => {
      next(err);
    });
  };
};
export default asynchandeler;
