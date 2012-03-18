# Words [@nddrylliog](https://twitter.com/nddrylliog) types.

# How to run it locally

## Install Jekyll

    $ sudo gem install jekyll

## Clone the repository
    
    $ git clone --recursive git://github.com/romac/nddrylliog-blog.git

## Run Jekyll
  
    $ cd nddrylliog-blog
    $ jekyll --url http://localhost:4000 --base-url '' --server
    
## Enjoy

Point your browser at [http://localhost:4000](http://localhost:4000).

# Stylesheets

The stylesheets are written with [Stylus](http://learnboost.github.com/stylus/).
Therefore, if you want to edit them, you will need to run

    stylus -w -o css/ _src/css
    
to compile them to plain CSS files.

# Deployment

Don't forget to change `url` and `baseurl` configuration options in `_config.yml` before deploying the website.
