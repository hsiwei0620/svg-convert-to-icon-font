## **svg convert to icon font** :blush:
**using gulp-iconfont to generate icon-font**
1. gulp-iconfont github ( [Reference](https://www.npmjs.com/package/gulp-iconfont) ) 
2. before using gulp , install node.js and npm
3. install gulp ( [Reference](https://ithelp.ithome.com.tw/articles/10185420) ) 

    `npm install gulp -g `
    
    `npm install --save-dev gulp`    
    
4. install gulp-iconfont 

   `npm install --save-dev gulp-iconfont`
  
   `npm install --save-dev gulp-consolidate`
  
  
6. create gulpfile.js
7. create _src/assets/icon_font_source/_ folder ( this is put new svg files with fill merge path )
8. create templates.css ( this is templates css file for generate iconfont )
9. split tasks across multiple files ( [Reference](https://github.com/gulpjs/gulp/blob/master/docs/recipes/split-tasks-across-multiple-files.md) )
10. using gulp-hub

    `npm install --save-dev gulp gulp-hub`
    
12. in command line , type in **gulp** or **gulp** **iconfont** to generate iconfont in _src/assets/icon_font/_



**May occur problems :**
 - [The following tasks did not complete: Did you forget to signal async completion?](https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async)
 
    solve :  add done() when task finished in each task.
 
 - If occur below error message , it means that you need to install python and set env path
 
    `gyp ERR! configure error gyp ERR! stack Error: Can't find Python executable "python", you can set the PYTHON env variable.`

    solve : 

    `npm install --global --production windows-build-tools` (Administrator)

    `npm install node-gyp`


**Note:**
 - the svg file must be with fill merge path , you can reference sample ( onlyBoard_fill_merge_path.svg )

