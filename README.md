![Logo](https://raw.githubusercontent.com/BetterSEQTA/BetterSEQTA-Plus/master/src/resources/icons/betterseqta-light-full.png#gh-dark-mode-only)
![Logo](https://raw.githubusercontent.com/BetterSEQTA/BetterSEQTA-Plus/master/src/resources/icons/betterseqta-dark-full.png#gh-light-mode-only)

<p align="center">
  A beautiful 🤩 Chrome Extension that adds additional features and gives an overall better experience for <a href="https://seqta.com.au">SEQTA Learn.</a> <strong>Currently looking for contributors</strong> 🔥
</p>

<p align="center">
 <a target="_blank" href="https://chrome.google.com/webstore/detail/betterseqta%20/afdgaoaclhkhemfkkkonemoapeinchel"><img src="https://user-images.githubusercontent.com/95666457/149519713-159d7ef7-2c21-4034-a616-f037ff46d9a4.png" alt="ChromeDownload" width="250"></a>
  <a target="_blank" href="https://discord.gg/YzmbnCDkat"><img src="https://github.com/SethBurkart123/EvenBetterSEQTA/assets/108050083/23055730-b16e-44c0-9bef-221d8545af92" width="240" style="border-radius:10%;" /></a>
</p>

## Table of contents

- [Features](#features)
- [Getting Started](#getting-started)

## Release Videos
<video autoplay loop muted controls="false" width="33%" src="https://github.com/SethBurkart123/EvenBetterSEQTA/assets/108050083/3084644a-edbc-40e5-b1ad-1fdea4f0ca18"></video>

## Features

- Dark mode
  - Custom Background
- Improved Styling/CSS
  - Improved look for SEQTA Learn
- Custom Home Page including:
  - Daily Lessons
  - Shortcuts
  - Easier Access Notices
- Options to remove certain items from the side menu
- Notification for next lesson (sent 5 minutes prior to lesson end)
- Browser Support
  - Chrome Supported
  - Edge Supported
  - Brave Supported
  - Opera Supported
  - Vivaldi Supported
  - Firefox (currently not supported, plans for it in future though [manifest v3 problems])
  - Safari (Experimental - only available via compilation)

## Getting started

1. Clone the repository

```
git clone https://github.com/SethBurkart123/EvenBetterSEQTA
```

### Running Development

1. Install dependencies

```
npm install # or your preferred package manager like pnpm or yarn
```

2. Run the dev script (it updates as you save files)

```
npm run dev
```

3. Load the extension into chrome

- Go to `chrome://extensions`
- Enable developer mode
- Click `Load unpacked`
- Select the `dist` folder

Just remember, in order to update changes to the extension, you need to click the refresh button on the extension in `chrome://extensions` whenever anything's changed.

### Building for production

1. Install dependencies

```
npm install # or your preferred package manager like pnpm or yarn
```

2. Run the build script

```
npm run build
```

3. Package it up (optional)

```
npm run package # this requires 7zip to be installed in order to work
```

## Folder Structure

The folder structure is as follows:

- The `src` folder contains source files that are compiled to the build directory.

- The `src/interface` folder contains source React files that are required for the Settings page.

- The `dist` folder is where the compiled code ends up, this is the folder what you need to load into chrome as an unpacked extension for development.

- The `safari` folder is an Xcode project, building it for MacOS does work, IOS needs a few modifications to the manifest to work, but I have managed to get it working. It will give an error, to fix this you need to regenerate it, you can delete the safari folder and then run the command `xcrun safari-web-extension-converter <extension-folder>/dist` and it will automatically generate the xcode project where you are.

## Contributors

<a href="https://github.com/betterseqta/betterseqta-plus/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=betterseqta/betterseqta-plus" />
</a>

## Credits

This extension was initially developed by [Nulkem](https://github.com/Nulkem/betterseqta), was ported to manifest V3 by [MEGA-Dawg68](https://github.com/MEGA-Dawg68) and is currently under active development by [SethBurkart123](https://github.com/SethBurkart123) and [Crazypersonalph](https://github.com/Crazypersonalph)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=BetterSEQTA/BetterSEQTA-Plus&type=Date)](https://star-history.com/#sethburkart123/EvenBetterSEQTA&Date)
