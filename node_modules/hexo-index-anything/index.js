'use strict'
// require all the things
const _       = require('lodash')
const moment  = require('moment')
const S       = require('string')
const path    = require('path')


let Index

/**
 * Index Constructor
 * An index is a group of posts sorted according to the value of a single front
 * matter variable. For example, if you add an `author` variable to all your
 * posts, then an `author` index contains all posts with that variable, grouped
 * according to the value of the `author` variable.
 *
 * @class
 * @classdesc group of posts sorted according to a single front matter variable
 *
 * @constructor
 * @param {String} index
 * @param {String} path
 */
Index = function(index, path) {
  this.index = index
  this.path = path
  this.posts = {}
}

/**
 * push
 * add a post to this index. Only posts with this index set will be added,
 * others will be discarded
 *
 * @param {hexoPost} post - a post as created by hexo generator
 */
Index.prototype.push = function(post) {
  let index = this
  // discard posts where the index is not set
  if (!_.has(post, index.index)) {
    return
  }
  // deal with indexes containing multiple values (like tags)
  let values = _.flatten([post[index.index]])
  _.each(values, function(value) {
    value = S(value).slugify().s
    index.posts[value] = index.posts[value] || []
    index.posts[value].push(post)
  })
}


/**
 * return a path with or without asset folder
 *
 * @param {String} key the name of this index
 * @return String
 */
Index.prototype.getPath = function(key) {
  // if `post_asset_folder` is set, place indexes in folders
  if (hexo.config.post_asset_folder) {
    return path.join(
      S(this.path).slugify().s,
      key,
      'index.html'
    )
  }
  // otherwise make the file name match the index name
  return path.join(
    S(this.path).slugify().s,
    key + '.html'
  )
}

/**
 * getList
 * generates the the html page, which would list each of the pages created by
 * this instance. so the list page for an 'authors' index, would list the
 * authors, with links to pages listing their respective articles
 *
 * @return Array
 */
Index.prototype.getList = function() {
  let index = this
  // generate an array to be used as `posts` in template
  return _.map(_.keys(index.posts), function(key) {
    return {
      title: S(key).humanize().titleCase().s,
      date: moment(),
      path: index.getPath(key)
    }
  })
}

/**
 * getPages
 * return an array of page objects representing
 *   - each of the keys belonging to this index
 *   - one list, containing links to all of those keys
 *
 * @return Array
 */
Index.prototype.getPages = function() {
  let index = this
  // note the filename for list is going to be index
  index.posts.index = index.getList()
  return _.map(index.posts, function(posts, key) {
    // add handy methods for templates
    posts = _(posts)
    return {
      data: {
        title: 'Index for ' + S(key).humanize().titleCase().s,
        date: moment(),
        posts: posts
      },
      path: index.getPath(key),
      layout: hexo.config.indexAnything.template || 'index'
    }
  })
}

/**
 * register plugin
 * @function
 * @param {Object} locals
 */

if (typeof hexo === 'object') {
  hexo.extend.generator.register('indexAnything', function(locals) {
    let indexes = []
    // created index instances according to config
    _.each(hexo.config.indexAnything, function(path, index) {
      indexes.push(new Index(index, path))
    })
    // push each post to each index
    _.each(locals.posts.data, function(post) {
      _.each(indexes, function(index) {
        index.push(post)
      })
    })
    // hexo generator expects an array of pages, see `Index.prototype.getPages`
    return _.flatten(_.map(indexes, function(index) {
      return index.getPages()
    }))
  })
}
// expose Index for tests
module.exports = Index
