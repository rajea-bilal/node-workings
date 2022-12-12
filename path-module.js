  import path from "path"


//  this is going to return my platform specific separator
//    console.log(path.sep)

//  using path.join to join different path segments together to a resulting normalized path using the separator, '/' in our case. We want to access the leFile that exists inside the Subfolder, that exists inside the Content folder. So when we use this path.join, we can create a path to that particular file from where we are. 
const filePath = path.join('Content', 'Subfolder', 'leFile.js')
console.log(filePath)

// path.basename
// We can also access the last portion of the file name through this property.
const base = path.basename(filePath)
// console.log(base)

// path.resolve
// it accepts a sequence of path or path segments and resolves it into an absolute path
// the __dirname is a global variable which points to the directory this path.js exists in
const absolute = path.resolve(__dirname, 'Content', 'Subfolder', 'leFile.js')
console.log(absolute)
// the __dirname will not work when using ES6 Modules. 