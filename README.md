# A Very Simple Chrome Extension Starting Template

This is just a small template that helps you get started creating a chrome extension.
It doesn't setup any icons or anything in the manifest file. It is just a very basic 
starting point using rollup to bundle the code.

It sets up **Rollup** to output the bundled files to the **dist/scripts** directory. It also
copies the **manifest.json** to the **dist** directory.

The template starts you out with a **background.js** and a **content.js** file (both of which
do pretty much nothing).

## Caution

This is just meant to be a starting template and you should consult the documentation at [https://developer.chrome.com/docs/extensions/](https://developer.chrome.com/docs/extensions/)
to configure your manifest file and setup any other scripts you may need. There is no guarantee that this template 
does anything correctly or according to "best practices". 

You can also consult the documentation for Rollup to make any changes to **rollup.config.js**.

## How to use

- Fork this repository or click the **"Use this template"** button on the [github page](https://github.com/tyler-daigle/chrome-extension-template)
- First run **npm install** to install rollup.
- Edit the scripts in the **src** directory
- run the build command from the **package.json** file: 
    ```console 
    $ npm run build
    ```
- Your bundled code should be output to the **dist/scripts** folder if everything worked.
- You can then load the unpacked extension in Chrome.

**Note that the dist folder is NOT checked in to git since it is listed in the .gitignore file**

You can also run
```console
$ npm run clean
```
which will delete the dist folder.