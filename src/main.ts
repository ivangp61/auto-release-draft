import * as core from '@actions/core'

export async function run(): Promise<void> {
  try {

    const myTag = 'my tag';

    core.setOutput('release-url', 'the url')
    core.setOutput('tag', myTag)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()

// export async function run(): Promise<void> {
//   try {
//     const token = core.getInput('repo-token')
//     const tag = event.getCreatedTag()
//     let releaseUrl = ''

//     if (tag && version.isSemVer(tag)) {
//       const changeLog = await git.getChangesIntroducedByTag(tag)

//       releaseUrl = await github.createReleaseDraft(tag, token, changeLog)
//     }

//     core.setOutput('release-url', releaseUrl)
//   } catch (error) {
//     // Fail the workflow run if an error occurs
//     if (error instanceof Error) core.setFailed(error.message)
//   }
// }
