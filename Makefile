.PHONY: all

all:
	cd _posts && git pull origin master
	jekyll --no-server
