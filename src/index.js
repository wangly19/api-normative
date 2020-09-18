const files = require.context('./model', false, /.js$/)


Object.keys(files).forEach(name => {
  console.log(name)
})