module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: 'Fira Code, monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    // cursorColor: 'rgba(248,28,229,0.75)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // color of the text
    // foregroundColor: '#fff',

    // terminal background color
    // backgroundColor: '#000',

    // border color (window, tabs)
    // borderColor: '#333',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    // padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      // black: '#000000',
      // red: '#ff0000',
      // green: '#33ff00',
      // yellow: '#ffff00',
      // blue: '#0066ff',
      // magenta: '#cc00ff',
      // cyan: '#00ffff',
      // white: '#d0d0d0',
      // lightBlack: '#808080',
      // lightRed: '#ff0000',
      // lightGreen: '#33ff00',
      // lightYellow: '#ffff00',
      // lightBlue: '#0066ff',
      // lightMagenta: '#cc00ff',
      // lightCyan: '#00ffff',
      // lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: 'SOUND',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false,
    
    hyperBorder: {
       borderColors: ['#fc1da7', '#fba506'],
       borderWidth: '2px'
    },
    
		hyperStatusLine: {
        footerTransparent: false,
      },
    
		hyperMaterialTheme: {
			// Set the theme variant, 
			// OPTIONS: 'Darker', 'Palenight', '' 
			theme: '',
			// Set the rgba() app background opacity, useful when enableVibrance is true 
			// OPTIONS: From 0.1 to 1 
			backgroundOpacity: '0.1',
			// Set the accent color for the current active tab 
			accentColor: '#64FFDA',
			// Mac Only. Need restart. Enable the dark vibrance and blurred background 
			// NOTE: The backgroundOpacity should be between 0.1 and 0.9 to see the effect. 
			enableVibrance: true,
		}
		
    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyperterm.org/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyper-blink',
    'hypercwd',
    'hyperterm-close-on-left',
    'hyperterm-paste',
		'hyperterm-tab-icons',
		  'hyperlinks',
		'hyper-statusline',
    'hyper-snazzy'
  ],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};