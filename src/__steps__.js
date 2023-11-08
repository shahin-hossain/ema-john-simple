/**
 * -----------------------
 * firebase authentication
 * -----------------------
 * 1.create a firebase project
 * 2. create a web application
 * 3. npm install firebase
 * 4. save firebase config and export default app
 * 5. build > authentication > get started > enable signIn method
 * 6. Create sign up and login route
 * 
 * */

/**
 * ---------------
 * Context Provider
 * --------------------
 * 1. Create a context provider
 * 2. Create a context and set provider
 * 3. set the children props
 * 4. set Context Value
 * 5. set the provider
 * 
 * 
 * */

/**
 * ---------------
 * HOSTING
 * ------------------
 * location : build > Hosting
 * ->one time install per PC
 * 1. npm install -g firebase-tools
 * 2. firebase login
 * 
 * for each project one time
 * 1. firebase init
 * 2. proceed (y দিয়ে proceed করতে হবে।)
 * 3. hosting: firebase (up and down arrow for change) use (space bar) to select 
 * 4. existing project 
 * 5. select the project carefully 
 * 6. which project as public directory : dist (vite এর ক্ষেত্রে হবে dist এবং create react app এর জন্য build)
 * 7. single page application: yes
 * 8. continuous deployment : no (আপাতত)
 * 
 * For Every Time deploy
 * 1. npm run build 
 * 2. firebase deploy
 */