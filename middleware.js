import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube"; //res.locals를 통해 변수를 템플릿에 globally 전달
  res.locals.routes = routes;
  next();
};
