# Dotfiles

1. Install the OSX Command Line tools ```xcode-select --install``` (or go get X Code)
2. Sign into the App Store
3. Update .extra.changeme with your details,
4. [SSH](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) [Keys](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
5. then:

````bash
# To update repo and rsync files to home dir
source bootrap.sh
# To install ruby, homebrew, some gems
source install-deps.sh
# To install some things with homebrew
source .brew
# Install global NPM packages
source .nodemodules
# To Set some osx defaults and settings
source .macos
# Install mac apps (requires brew has run and installed [mas](https://git.io/v6yH3))
source .macappstore
````

If you need to update anything just run one, some or all again
