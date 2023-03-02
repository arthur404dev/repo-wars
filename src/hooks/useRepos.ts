import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { githubClient } from "../api"

const randomSince = Math.floor(Math.random() * 1000000)

const fetchRepos = async (
  amount: number,
  setters: Dispatch<SetStateAction<any[]>>[],
) => {
  const res = await githubClient.request("GET /search/repositories", {
    q: `is:public stars:>1000 fork:false`,
    sort: "stars",
    order: "desc",
    per_page: amount,
    since: randomSince,
    page: 1,
  })
  setters.forEach((setter) => setter(res.data.items))
}

type UseReposReturnType = [
  repositories: Repo[],
  setRepositories: Dispatch<SetStateAction<Repo[]>>,
  allRepos: Repo[],
]

const useRepos = (amount: number): UseReposReturnType => {
  const [allRepos, setAllRepos] = useState<Repo[]>([])
  const [repositories, setRepositories] = useState<Repo[]>([])
  useEffect(() => {
    fetchRepos(amount, [setAllRepos, setRepositories])
  }, [])
  return [repositories, setRepositories, allRepos]
}

export default useRepos
