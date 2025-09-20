export interface GitHubStats {
  hireable: boolean | null;   // Some profiles return null
  public_repos: number;
  followers: number;
  following: number;
  company: string | null;
  location: string | null;
}
