import { Router, type IRouter } from "express";
import { Octokit } from "@octokit/rest";

const router: IRouter = Router();

const owner = "Agrim777";
const repo = "Vice-Intelligence-Platform";

// GET /github/branches
router.get("/github/branches", async (req, res): Promise<void> => {
  if (!process.env.GITHUB_TOKEN) {
    res.status(500).json({ error: "GITHUB_TOKEN not configured" });
    return;
  }

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  try {
    const { data } = await octokit.repos.listBranches({ owner, repo, per_page: 50 });
    res.json(data.map((b) => ({ name: b.name })));
  } catch (err: unknown) {
    req.log.error({ err }, "Failed to list branches");
    const status = (err as { status?: number }).status;
    if (status === 401 || status === 403) {
      // Token invalid — return graceful empty list so UI doesn't crash
      res.json([{ name: "main" }]);
      return;
    }
    const msg = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: msg });
  }
});

export default router;
