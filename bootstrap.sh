#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE}")";

git pull origin master;

function doIt() {
	rsync --exclude ".git/" \
		--exclude ".DS_Store" \
		--exclude ".osx" \
		--exclude "bootstrap.sh" \
		--exclude "README.md" \
		--exclude "LICENSE-MIT.txt" \
		-avh --no-perms . ~;
	source ~/.bash_profile;
}


read "?This may overwrite existing files in your home directory. Are you sure? (y/n) "
if [[ "$REPLY" =~ ^[Yy]$ ]]
then
	doIt
fi
unset doIt;
