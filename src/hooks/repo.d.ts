interface Repo {
  id: number
  name: string
  description: string
  full_name: string
  stargazers_count: number
  topics: string[]
  owner: {
    avatar_url: string
  }
  has_discussions: boolean
  has_downloads: boolean
  has_issues: boolean
  has_pages: boolean
  has_projects: boolean
  has_wiki: boolean
}
