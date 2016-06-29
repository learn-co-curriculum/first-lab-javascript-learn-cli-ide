const expect = require('expect')
const fs = require('fs')
const path = require('path')

describe('First Lab', () => {
  const ORIGINAL_TEXT = 'I need to change!\n'
  it('you made a change!', () => {
    const topLevel = path.resolve(__dirname, '..')
    const fileCount = fs.readdirSync(topLevel).length
    const editableFileText = fs.readFileSync(path.resolve(__dirname, '..', 'edit_me.txt'), 'utf-8')

    expect(fileCount > 11 || editableFileText !== ORIGINAL_TEXT).toEqual(true, "Make sure you have added a new file or edited and saved edit_me.txt.")
  })
})
