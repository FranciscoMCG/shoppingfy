<div align="center">

# Shoppingfy 🛍 


</div>


<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the project](#about-the-project)
- [Considerations](#considerations)
- [Installation](#installation)


## About the project

Shoppingfy is a shopping basket that makes use of React, TypeScript and Redux Toolkit

---

## Considerations

Due to the short time constraint I'd like to leave the following considerations:
- Shortcuts were made! Especially when it comes to TypeScript, the slices could have been handled in a more type safe way by typing properties and respective possible use cases
- I haven't written any tests. In an ideal project I would have started by writing fundamental unit tests to prevent any logic issues. With more time, end-to-end tests could have been as well
- Syntax could be more careful. Naming is one of the most burdensome tasks in our job. My principle is, don't overthink, we can always go back to amend.
- Reusability. I would have built a reusable custom hook for data fetching and also abstract components like the `I` or the `Button`. In a real life scenario, these components would have been abstract in order to promote reusability
- Compilation. There was a compilation issue when naming `index` to some of the files. Didn't have time to investigate.
- TypeScript. I'm used to have a separate file `d.ts` for all types. eg. for `Button.tsx` I would have `Button.d.ts`
- Alert. I would have built a good looking modal to handle the Check Out.
- State. I would have thought better about the naming convention and the shape of those objects. Ideally I would have store more data than just the quantity and total price
- Currency. I should have handled the currency dynamically with the data I got from the api  
- A11y. Not built with A11y in mind
- Responsiveness. Built only with basic responsiveness for large mobile and desktop

## Installation

For local development, please follow the below steps:

1. Clone the repository

```sh
git clone https://github.com/FranciscoMCG/shoppingfy.git
```

2. Access the project folder

```sh
cd shoppingfy
```

3. Install dependencies

```sh
yarn install
```

4. Run the server

```sh
yarn start
```

5. Open the browser with the url
```sh
http://localhost:3000/
```
