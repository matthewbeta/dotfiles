# Dotfiles

1. Update .extra.changeme with your details,
1. Install the OSX Command Line tools ```xcode-select --install``` (or go get X Code)
1. then:

````bash
# To update repo and rsync files to home dir
source bootrap.sh
# To install ruby, homebrew, some gems
source install-deps.sh
# To install some things with homebrew
source .brew
# To install cask and then install some apps
source .cask
# To Set some osx defaults and settings
source .macos
# Install mac apps (requires brew has run and installed [mas](https://git.io/v6yH3))
source .macappstore
# Install global NPM packages
source .nodemodules
````
If you need to update anything just run one, some or all again
