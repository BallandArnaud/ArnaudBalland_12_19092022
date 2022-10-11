# Sportsee

SportSee is an application that allows each of its users to achieve their goals by monitoring their progress.

## Prerequisites :

- [NodeJs (version 16.13)](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- Code editor ([Vscode](https://code.visualstudio.com/))

## Installation

### Install and start BackEnd

To use the application you need to clone the API from OpenClassrooms-Student-Center.
Open a terminal and follow the instructions below.

```bash
git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
cd P9-front-end-dashboard
npm install
```

Then launch the API

```bash
npm run start
```

Then you should see

```bash
> P9-front-end-dashboard@1.0.0 start
> node app/index.js

Magic happens on port 3000
```

To learn more about how the API works, go to : [https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

### Install and start FrontEnd

Now in another terminal, you need to clone the FrontEnd repository.

```bash
git clone https://github.com/BallandArnaud/ArnaudBalland_12_19092022.git
cd ArnaudBalland_12_19092022
npm install
```

Then launch the API

```bash
npm run start
```

When the terminal ask

```bash
? Something is already running on port 3000.

Would you like to run the app on another port instead? » (Y/n)
```

Click `Y` for yes and that's it ! You should see

```bash
You can now view arnaudballand_12_19092022 in the browser.

  Local:            http://localhost:3001
```

## Switch data

To switch the data to Mock or to API you can in `/src/utils/context/index.jsx` modify ans select `source.api` or `source.mock`.

```react
<SourceContext.Provider value={{ source: source.api }}>
```

## Switch User

If you want to change user, in the url of your browser you can choose the user id.
Only id 12 and 18 work.

For example if you want to visualize the data of the user whose id is 12 go to :
`http://localhost:3001/user/12`
