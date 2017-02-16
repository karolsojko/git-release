var simpleGit = require('simple-git')(__dirname);

simpleGit
  .addConfig('user.name', process.env.GIT_USERNAME)
  .addConfig('user.email', process.env.GIT_USERMAIL);

simpleGit.clone(`https://${process.env.GIT_USERNAME}:${process.env.GITHUB_TOKEN}@github.com/${process.env.REPOSITORY}`, 'repo');
