import * as core from '@actions/core'
// import * as event from './event'
// import * as version from './version'
// import * as git from './git'
// import * as github from './github';


export async function run(): Promise<void> {
  try {
    // const token = core.getInput('repo-token');

    // const tag = event.getCreatedTag();
    // let releaseUrl = '';

    // if (tag && version.isSemVer(tag)) {
    //   const changeLog = await git.getChangesIntroducedByTag(tag);      

    //   releaseUrl = await github.createReleaseDraft(tag, token, changeLog);
    // }

    core.setOutput('event-name', 'someeventname');
    core.setOutput('release-url', 'someur.com');
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) {
      core.setFailed(error.message);
      console.log(error.message);
      core.debug(error.message);
    }
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
