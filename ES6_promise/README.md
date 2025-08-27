# 📁 Create project folder
mkdir promises_async_project && cd promises_async_project

# 📄 Create all required JS files
touch 0-keep_every_promise.js
touch 1-dont_make_a_promise.js
touch 2-catch_me_if_you_can.js
touch 3-handle_multiple_successful_promises.js
touch 4-simple_promise.js
touch 5-reject_the_promises.js
touch 6-handle_multiple_promises.js
touch 7-load_balancer.js
touch 8-throw_an_error.js
touch 9-throw_error_try_catch.js
touch README.md

# 📝 Populate README.md
cat <<EOF > README.md
# Promises & Async Project

## 📚 Learning Objectives
By the end of this project, you should be able to explain and apply the following concepts without external help:

- What Promises are, why they exist, and how they work
- How to use `.then()`, `.resolve()`, and `.catch()` methods
- How to use every method of the `Promise` object
- How to use `throw` and `try/catch` for error handling
- How the `await` operator works
- How to write and use `async` functions

## 📌 Requirements
- All files will be interpreted/compiled on **Ubuntu 20.04 LTS** using **Node.js 20.x.x** and **npm 9.x.x**
- Allowed editors: **vi**, **vim**, **emacs**, **Visual Studio Code**
- All files must end with a **new line**
- A `README.md` file at the root of the project is **mandatory**
- All code files must use the `.js` extension
- Code will be tested using **Jest** with the command: `npm run test`
- Code will be verified against lint using **ESLint**
- To verify the entire project: `npm run full-test`
- All functions must be **exported**

## 📖 Resources
Recommended reading and watching:
- [JavaScript Promise: An Introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

EOF
