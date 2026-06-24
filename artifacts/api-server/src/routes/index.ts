import { Router, type IRouter } from "express";
import healthRouter from "./health";
import articlesRouter from "./articles";
import bulkRouter from "./articles/bulk";
import githubRouter from "./github";

const router: IRouter = Router();

router.use(healthRouter);
router.use(articlesRouter);
router.use(bulkRouter);
router.use(githubRouter);

export default router;
