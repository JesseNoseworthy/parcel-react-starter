# Parcel React Starter Kit 📦

This _barebones_ React boilerplate generate outputs an app using the following tools:

- **Language**: [React](https://reactjs.org)
- **Build Tool**: [Parcel](https://parceljs.org)
- **Styling Library**: [styled-components](https://www.styled-components.com)

The outputted folder structure is as follows:

```
src
│  package.json
│
└─- app
│   │  index.html
│   │  index.js (entry point)
└─- assets
│   │  favicon.ico
└─- components
└─- resource-strings (removable)
└─- utilities
│   └─- styles (optional styled-components configurations)
|   |   helpers.js
```

## Getting Started

1. Generate your app 
    ```shell
    $ npx parcel-react-starter your-app-name
    ```

2. Navigate to the directory for your newly generated app (`./your-app-name` for instance)
    ```shell
    $ cd your-app-name
    ```

3. Run a fresh install
    ```shell
    $ yarn
    ```

4. Start your app!
    ```shell
    $ yarn start
    ```