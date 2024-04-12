import * as core from '@actions/core'
import * as version from './version'
import * as markdown from './markdown'
// import * as github from '@actions/github'
import  {Octokit}  from '@octokit/rest';


export async function createReleaseDraft(
  versionTag: string,
  repoToken: string,
  changeLog: string
): Promise<string> {
  // const octokit = new github.GitHub(repoToken)

  // const github = new GitHub.(process.env.GITHUB_TOKEN)
  const octokit = new Octokit({
      auth: repoToken}
    );

  const response = await octokit.repos.createRelease({
    owner: octokit.repos.get.arguments(),
    repo: octokit.repos.get.name,
    tag_name: versionTag,
    name: version.removePrefix(versionTag),
    body: markdown.toUnorderedList(changeLog),
    prerelease: version.isPrerelease(versionTag),
    draft: true
  })

  if (response.status !== 201) {
    throw new Error(`Failed to create the release: ${response.status}`)
  }

  core.info(`Created release draft ${response.data.name}`)

  return response.data.html_url
}
