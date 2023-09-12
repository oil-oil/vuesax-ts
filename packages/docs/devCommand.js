const { execSync } = require('child_process')

function runCommand() {
  let command = ''

  if (process.platform === 'win32') {
    command =
      'start turbo run build --filter=vuesax-ts -- --watch && start vitepress dev docs --port 3000'
  } else {
    command =
      'turborun build --filter=vuesax-ts -- --watch & vitepress dev docs --port 3000'
  }

  execSync(command, { stdio: 'inherit' })
}

runCommand()
