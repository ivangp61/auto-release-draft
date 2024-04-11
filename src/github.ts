import * as core from '@actions/core'
import * as version from './version'
import * as markdown from './markdown'
const { GitHub, context } = require('@actions/github')

export async function createReleaseDraft(
  versionTag: string,
  repoToken: string,
  changeLog: string
): Promise<string> {
  // const octokit = new github.GitHub(repoToken)
  // const octokit = new Octokit({ auth: `personal-access-token123` });
  const github = new GitHub(process.env.GITHUB_TOKEN)

  const response = await github.repo.createRelease({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
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
