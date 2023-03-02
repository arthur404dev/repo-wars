import { Dispatch, SetStateAction, useEffect, useState } from "react"

const fetchRepos = async (
  amount: number,
  setters: Dispatch<SetStateAction<any[]>>[],
) => {
  const res = { data: ["repo1", "repo2"] }
  setters.forEach((setter) => setter(res.data))
}

const useRepos = (amount: number) => {
  const [allRepos, setAllRepos] = useState<any>([])
  const [repositories, setRepositories] = useState<any>([])
  useEffect(() => {
    fetchRepos(amount, [setAllRepos, setRepositories])
  }, [])
  return [repositories, setRepositories, allRepos]
}

export default useRepos
