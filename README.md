# Basic full-Stack application boilerplate

## App's core in starting phase 

 ### CLIENT folder : 
    - index.jsx [Entry point for client JS ]
    - reducers folder [where the action that modify our store' status are created ad take place]
    - store [Where our state is being managed from]
    - tests folder [where our client-side specs will be]
    

### node_modules folder : 
    - All packages and dependencies necessary for a basic functionality 

### PUBLIC folder: 
    - bundle.js  [Bundling all inter-dependent js files in the correct order]
    - bundle.js.map [Basically, it maps bundle.js' combined/minified file back to an unbuilt state]
    - favicon [The icon at the title of your page on the browser's tab]
    - index.html [official html landing page]
    - style.css [css styling]

### SERVER folder: 

    - index.js [Entry point for server JS]
    - api folder [where all my back-end-routes are located] 
    - database folder [where database is connecting from and the models for it live]
    - start.js [initializes and syncs database]

### .gitignore 

    - [Allows git to ignore npm libraries and very large dependencies during commits] 
