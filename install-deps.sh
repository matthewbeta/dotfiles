# up to you (me) if you want to run this as a file or copy paste at your leisure

# Node
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"

# homebrew!
# you need the code CLI tools YOU FOOL.
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

#zsh
\curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh

# My extra stuff (do I need sudo here?)
# Check gems are up to date without installing documentation
sudo gem update --system --no-document
# Install jekyll
sudo gem install jekyll
