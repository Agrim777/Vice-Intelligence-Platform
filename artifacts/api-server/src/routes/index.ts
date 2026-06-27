import { Router, type IRouter } from "express";
import healthRouter from "./health";
import publicRouter from "./public/index";
import sitemapRouter from "./public/sitemap";
import authRouter from "./admin/auth";
import adminArticlesRouter from "./admin/articles";
import adminCategoriesRouter from "./admin/categories";
import adminTagsRouter from "./admin/tags";
import adminMediaRouter from "./admin/media";
import adminSettingsRouter from "./admin/settings";

const router: IRouter = Router();

router.use(healthRouter);
router.use(publicRouter);
router.use(sitemapRouter);
router.use(authRouter);
router.use(adminArticlesRouter);
router.use(adminCategoriesRouter);
router.use(adminTagsRouter);
router.use(adminMediaRouter);
router.use(adminSettingsRouter);

export default router;
