.PHONY: all

all:
	cd _posts && git pull --rebase origin master
	jekyll --no-server
