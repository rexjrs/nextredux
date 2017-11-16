const routes = module.exports = require('next-routes')()

routes
.add('/:lang/', 'index')
.add('/:lang/joox', 'joox')
.add('/:lang/voov', 'voov')
.add('/:lang/login', 'login')