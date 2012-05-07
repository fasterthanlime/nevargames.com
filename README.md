# Words [@nddrylliog](https://twitter.com/nddrylliog) types.

# How to run it locally

## Install Jekyll

    $ sudo gem install jekyll

## Clone the repository
    
    $ git clone --recursive https://github.com/nddrylliog/nddrylliog.github.com.git

## Run Jekyll
  
    $ cd nddrylliog.github.com
    $ jekyll --url http://localhost:4000 --base-url '' --auto --server
    
## Enjoy

Point your browser at [http://localhost:4000](http://localhost:4000).

# Posts

You will most likely want to update the `_posts` submodule location in *.gitmodules*.

# Stylesheets

The stylesheets are written with [Stylus](http://learnboost.github.com/stylus/).
Therefore, if you want to edit them, you will need to run

    stylus -w -c -o css/ _src/css
    
to compile them to plain CSS files.

# Deployment

Don't forget to change `url` and `baseurl` configuration options in *_config.yml* before deploying the website.
