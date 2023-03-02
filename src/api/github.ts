import { Octokit } from "@octokit/core"

const token = import.meta.env.GITHUB_TOKEN

const octokit: Octokit = new Octokit({
  auth: token,
})

export default octokit
