import * as core from '@actions/core';
import * as event from './event';
import * as version from './version';
// import * as github from '@actions/github';

export async function run(): Promise<void> {
  try {
    const tag = event.getCreatedTag();
    // let releaseUrl = '';

    // console.log(myTag);

    if (tag && version.isSemVer(tag)) {
      // const changeLog = await git.getChangesIntroducedByTag(tag)

      // releaseUrl = await github.createReleaseDraft(tag, token, changeLog)
    }

    core.setOutput('release-url', tag)
    core.setOutput('tag', tag)
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
