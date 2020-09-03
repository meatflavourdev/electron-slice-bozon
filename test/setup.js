const path = require('path')
const { Application } = require('spectron')

const appPath = () => {
  switch (process.platform) {
    case 'darwin':
      return path.join(__dirname, '..', '.tmp', 'mac', 'SliceImageViewer.app', 'Contents', 'MacOS', 'SliceImageViewer')
    case 'linux':
      return path.join(__dirname, '..', '.tmp', 'linux', 'SliceImageViewer')
    case 'win32':
      return path.join(__dirname, '..', '.tmp', 'win-unpacked', 'SliceImageViewer.exe')
    default:
      throw Error(`Unsupported platform ${process.platform}`)
  }
}
global.app = new Application({ path: appPath() })
