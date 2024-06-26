import express from "express";
import avaliadorRoutes from "./avaliadorRoutes";

const appRouter = express();

appRouter.use("/avaliadores", avaliadorRoutes);

export default appRouter;
