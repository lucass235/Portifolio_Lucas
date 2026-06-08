import type { NextConfig } from "next";
import { execSync } from "node:child_process";
import packageJson from "./package.json";

const repositoryUrl = "https://github.com/lucass235/Portifolio_Programacao_Web";

function readGitValue(command: string) {
  try {
    return execSync(command, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch {
    return "";
  }
}

const commitSha =
  process.env.VERCEL_GIT_COMMIT_SHA ?? process.env.GITHUB_SHA ?? readGitValue("git rev-parse HEAD");
const shortCommitSha = commitSha ? commitSha.slice(0, 7) : "local";
const branchName =
  process.env.VERCEL_GIT_COMMIT_REF ??
  process.env.GITHUB_REF_NAME ??
  readGitValue("git branch --show-current") ??
  "local";
const releaseTag = `v${packageJson.version}-${shortCommitSha}`;

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_APP_VERSION: packageJson.version,
    NEXT_PUBLIC_GIT_BRANCH: branchName,
    NEXT_PUBLIC_GIT_COMMIT_SHA: shortCommitSha,
    NEXT_PUBLIC_RELEASE_TAG: releaseTag,
    NEXT_PUBLIC_RELEASE_URL: `${repositoryUrl}/releases/tag/${releaseTag}`,
  },
};

export default nextConfig;
