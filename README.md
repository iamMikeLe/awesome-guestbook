# Awesome guestbook Code challenge

## Assignment:

- Initialize a new React project named 'Awesome Guestbook' that contains a single page with a form and a table
- The form should contain the following fields: name, a unique required email, a department select (marketing, IT, sales, management), and a required checkbox.
- The table should render all visitors.
- Include a button to remove any visitor.
- Ensure that added data is stored in the local storage for preservation after a page refresh.
- Use the https://mui.com/ library, which we use in all of our existing projects.
- Implement the project using TypeScript.

## !!!IMPORTANT!!!

- When reviewing my code challenge, I kindly request that you carefully check the descriptions accompanying my pull requests. These descriptions encapsulate my thought process and rationale behind the decisions made to address specific issues encountered during development. You can find them [here](https://github.com/iamMikeLe/awesome-guestbook/pulls?q=is%3Apr+is%3Aclosed) (you can ignore my first pull request)

## Run Locally

Clone the project

```bash
  git clone https://github.com/iamMikeLe/awesome-guestbook.git
```

Install and start

```bash
  cd awesome-guestbook
  npm install
  npm run dev
```

run tests

- make sure that the front-end is running locally before running tests
- you can adjust the domain in cypress/e2e/domainUrl.ts - will create a .env for this later

then:

```bash
  cd awesome-guestbook
  npx cypress run
```

or with a GUI

```bash
  cd awesome-guestbook
  npx cypress open
```

- then select e2e testing > chrome > and then select specs to run
