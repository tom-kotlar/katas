# Project Setup Guide 🚀

Welcome to your new project! Follow these simple steps to get everything up and running.

## Step 1: Initialize Your Project 🛠

First things first, let's create the `package.json` file which is the heart of managing your project's dependencies and scripts.

1. Open your terminal.
2. Navigate to your project's root directory:
    ```bash
    cd path/to/your/project
    ```
3. Run the initialization command:
    ```bash
    npm init -y
    ```
    This command creates a default `package.json` file in your project directory. The `-y` flag automatically fills in the defaults without asking for input.

## Step 2: Install Necessary Packages 📦

Now, let's install the packages you'll need. Here, we're focusing on TypeScript and Jest, but you can adjust this list based on your project needs.

- **TypeScript**: The language you'll be using.
- **Jest**: The testing framework.
- **ts-jest**: A TypeScript preprocessor for Jest.
- **@types/jest**: TypeScript definitions for Jest.

Run the following command to install these packages as development dependencies:

```bash
npm install --save-dev typescript jest ts-jest @types/jest
```


# Create Your Project Structure 🗂

```

your-project-root/
│
├── src/
│   ├── array-utils/
│   │   ├── array-utils.ts         # Array utility 
│   │   └── array-utils.spec.ts    # Array tests
│   ├── number-utils/
│   │   ├── number-utils.ts        # Number utility 
│   │   └── number-utils.spec.ts   # Number tests
│   ├── object-utils/
│   │   ├── object-utils.ts        # Object utility 
│   │   └── object-utils.spec.ts   # Object tests
│   ├── string-utils/
│   │   ├── string-utils.ts        # String utility 
│   │   └── string-utils.spec.ts   # String tests
│     
│
├── package.json            # Project manifest
├── tsconfig.json           # TypeScript configuration
└── jest.config.js          # Jest configuration

```


# Configure TypeScript and Jest 🔧

- **TypeScript Configuration:** Create a `tsconfig.json` in the root of your project. This file defines how TypeScript compiles your code.

- **Jest Configuration:** Set up `jest.config.js` also at the root. Adapt the Jest configuration to work with TypeScript as shown in previous instructions.

# Setting Up Git and Pushing to GitHub 🐱

Follow these steps to initialize Git for your project, commit your files, and push them to a new repository on GitHub.


## Initialize Git

```bash
git init
```

## Create a .gitignore File

Create a `.gitignore` file in your project's root directory to specify intentionally untracked files that Git should ignore.

```bash
touch .gitignore
```



## Link your local repository to your GitHub repository

```bash
git add .
```

### Commit your files:
```bash
git commit -m "Initial commit"
```

### Push your code to GitHub:
```bash
git push -u origin main
```

##  Create a new repository on GitHub:

```bash
git remote add origin https://github.com/yourusername/your-repository-name.git
git branch -M main
git push -u origin main
```



