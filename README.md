#Basic full-Stack application boilerplate

##App's core in starting phase 

 ### APP folder : 
    - Main.js  [Renders root component at first]
    - Components folder  > root.js  [Our UI part of the app/react]
    - Reducers folder  >   index.js  [Where our actions to change state will be generated]
    - store.js  [Where most of the app's components' state is managed from] 

### node_modules folder : 
    - All packages and dependencies necessary for a basic functionality 

### PUBLIC folder: 
    - bundle.js  [Bundling all inter-dependent js files in the correct order]
    - bundle.js.map [Basically maps bundle.js' combined/minified file back to an unbuilt state]
    - favicon [The icon at the title of your page on the browser's tab]
    - index.html [official html landing page]
    - style.css [css styling]

### SERVER folder: 

    - Api folder > index.js [Initial app's route. Where first http request are taken to]
    - DB folder >  index.js [Db connection ]
