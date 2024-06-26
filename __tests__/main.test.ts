import * as core from '@actions/core'
import { run } from '../src/main'

jest.mock('@actions/core')

describe('When running the action', () => {
  const fakeSetOutput = core.setOutput as jest.MockedFunction<
    typeof core.setOutput
  >

  test('it should set the release-url output parameter', async () => {
    await run()
    expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything())
  })
  test('it should set the event-name output parameter', async () => {
    await run()
    expect(fakeSetOutput).toHaveBeenCalledWith('event-name', expect.anything())
  })
})
