# hexo-index-anything

![nodei.co](https://nodei.co/npm/hexo-index-anything.png?downloads=true&downloadRank=true&stars=true)

![npm](https://img.shields.io/npm/v/hexo-index-anything.svg)

Hexo plugin to generate a indexes from custom front matter variables. Suppose
you have an author variable in your front matter, this plugin will generate
files like /authors/author-name.html, listing each post by that author.

## Deprecated

Please open an issue if you would like to take ownership.

## Install

`npm install --save hexo-index-anything`

## Configuration

an example. would be included in `_config.yml`

```yaml
indexAnything:
  author: authors
```

## Usage

Install, configure, then `hexo generate` as usual.

## Api

See the [fancy annotated code](http://leviwheatcroft.github.io/hexo-index-anything/docs/index.js.html)

## Author

Levi Wheatcroft <levi@wht.cr>

## Contributing

Contributions welcome; Please submit all pull requests against the master
branch.

## License

 - **MIT** : http://opensource.org/licenses/MIT
