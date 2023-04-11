# Capstone Project - Curtain Sales Website - Yi Yang 1995452

## Technology Stack

React + ReactHook + ReactRouter + Redux + Axios + Less + ...

## Plan completion function

1. Home page display
2. City management
3. Search function
4. Pull-up loading
5. Details page
6. Collection function
7. Order evaluation

## Initialize environment build

1. Project environment: create-react-app scaffolding builds the project environment
2. Support Less syntax
3. Integrate network request Axios

### Configuration supported by Less

In the environment built by React scaffolding, CSS and Sass/Scss are supported by default, so the configuration of Less need to be done.

1. Execute the command: npm run eject (do not do anything after creating the project, execute the command directly), if the file is modified, open the root directory of the file, display hidden files, delete the .git folder, and execute the command again
2. Execute the command: npm install less, npm install less-loader, to install Less dependencies
3. Modify the configuration file

```js
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

{
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders(
            {
                importLoaders: 3,
                sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
            },
            'less-loader'
        ),
    sideEffects: true,
},
{
    test: lessModuleRegex,
    use: getStyleLoaders(
        {
            importLoaders: 3,
            sourceMap: isEnvProduction
                ? shouldUseSourceMap
                : isEnvDevelopment,
            modules: {
                getLocalIdent: getCSSModuleLocalIdent,
            },
        },
        'less-loader'
    ),
},
```

### Configure network requests (Axios)

1. Execute the command: npm install axios, to install Axios dependencies
2. Configure related files - utils, api folder

### Configure initialization style

1. Initialize the css file
2. Introduce icon library

## Realize home page display

1. Create page: Home/Shop/LifeService/User
2. Create Route: 1.Install route dependencies: npm install react-router-dom 2.Configure Router
3. Create footer navigation
4. Create header navigation - REM configuration: Add REM's Computing Scheme to public/index.html
5. Swipeable-View:

   1. Reference: https://react-swipeable-views.com/
   2. Install dependencies:

   ```js
   npm install --save react-swipeable-views
   npm install --save react-swipeable-views-utils
   ```

   3. Pagination need to be implemented independently

   ```js
   npm install --save classnames
   ```

6. Build a server to provide data

   1. Install dependencies:

   ```js
   npm install --save express
   npm install --save cors
   ```

   2. Cross-domain: Use cors in server
   3. The data comes from /data/home/homehot.js

7. Home list data display
   HomeHotList: Get data, process data, filter data
   HomeHotView: View adaptation, rendering
   Use React useEffect to do business separation

## Realize city management

1. Create city management page and achieve routing jumps
<!-- 2. Realize route nesting, and make the shared bottom navigation into secondary routes -->
2. Realize components in city page: PubHeader, CurrentCity, CityList
3. Integrate Redux: Use it to store city page data, and the UI will render different results depending on the cities
   - Install redux dependencies
   ```js
   yarn add redux
   yarn add react-redux
   yarn add redux-devtools-extension
   ```
   - Create Redux: Store, Reducers, Actions
4. Associate redux to store city data
5. The page data needs to be switched according to the city
6. ABC form of city list
   - Reference: https://github.com/w3cay/react-city-select
   - City list data: src/data/city.js (Lite version to show their function)
   - Install dependencies
   ```js
   yarn add react-city-select
   ```

## Realize search function

1. Create a search page and configure routers

   - Extract the input component of the search
   - Configure routers
   - Monitor keycode for 'Enter' jump (keyCode === 13)
   - Routing jump with parameters: Use Hook, providing useParams by React-Router

2. Implements the interface for searching network requests

   - The server returns the same test data for each search due to data limitation

3. Frontend access interface and get data
4. List data rendering: use 'Item' to render each view to replace the previous direct rendering
   - Render html structure:
   ```html
   <p dangerouslySetInnerHTML="{{__html:data.description}}"></p>
   ```
5. Implement search header

## Implement pull-up loading

1. Pull-up loading package components
2. Implementation process
   - Listen for scrolling events: Scroll height + view height >= container list height (don't use)
3. getBoundingClientRect: Dynamically get the distance from the top of the element (use)
   - Dynamically get the distance from the top of the element < view height => data loading
4. Debounce and throttle
   - Debounce: Within a time limit (time interval), if multiple requests are initiated, the last one shall prevail
   - Throttle: Within a deadline (time interval), only one request is initiated
5. Load more data
