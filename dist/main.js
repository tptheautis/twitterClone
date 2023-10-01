/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/githubProfile.js":
/*!******************************!*\
  !*** ./src/githubProfile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rightSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rightSidebar */ \"./src/rightSidebar.js\");\n\n\nfunction githubProfile() {\n  // Github Profile\n  const githubContainer = document.createElement('div');\n  githubContainer.classList.add('githubContainer');\n  const githubTextContainer = document.createElement('div');\n  githubTextContainer.classList.add('githubTextContainer');\n  const githubIcon = document.createElement('img');\n  githubIcon.classList.add('githubIcon');\n  githubIcon.src = '../src/assets/gitIcon.png';\n  const githubName = document.createTextNode('GitHub');\n  const githubNameContainer = document.createElement('div');\n  githubNameContainer.classList.add('githubNameContainer');\n  const githubUsername = document.createTextNode('@github');\n  const githubUsernameContainer = document.createElement('div');\n  githubUsernameContainer.classList.add('githubUsernameContainer');\n  _rightSidebar__WEBPACK_IMPORTED_MODULE_0__.whoToFollowContainer.append(githubContainer);\n  githubContainer.append(githubIcon);\n  githubContainer.append(githubTextContainer);\n  githubTextContainer.append(githubNameContainer);\n  githubTextContainer.append(githubUsernameContainer);\n  githubNameContainer.append(githubName);\n  githubUsernameContainer.append(githubUsername);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (githubProfile);\n\n\n//# sourceURL=webpack://twitterclone/./src/githubProfile.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _leftSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leftSidebar */ \"./src/leftSidebar.js\");\n/* harmony import */ var _middleContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middleContent */ \"./src/middleContent.js\");\n/* harmony import */ var _rightSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rightSidebar */ \"./src/rightSidebar.js\");\n/* harmony import */ var _odinProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./odinProfile */ \"./src/odinProfile.js\");\n/* harmony import */ var _githubProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./githubProfile */ \"./src/githubProfile.js\");\n/* harmony import */ var _stackProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stackProfile */ \"./src/stackProfile.js\");\n\n\n\n\n\n\n\nfunction createHomePage() {\n  (0,_leftSidebar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_middleContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_rightSidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_odinProfile__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_githubProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  (0,_stackProfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\n\n\n//# sourceURL=webpack://twitterclone/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"column1\": () => (/* binding */ column1),\n/* harmony export */   \"column2\": () => (/* binding */ column2),\n/* harmony export */   \"column3\": () => (/* binding */ column3),\n/* harmony export */   \"happeningContainer\": () => (/* binding */ happeningContainer),\n/* harmony export */   \"mainContainer\": () => (/* binding */ mainContainer),\n/* harmony export */   \"row1\": () => (/* binding */ row1),\n/* harmony export */   \"row2\": () => (/* binding */ row2),\n/* harmony export */   \"searchBar\": () => (/* binding */ searchBar),\n/* harmony export */   \"whoToFollowContainer\": () => (/* binding */ whoToFollowContainer)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n// Base layout\nconst content = document.getElementById('content');\nconst mainContainer = document.createElement('div');\nconst column1 = document.createElement('div');\nconst column2 = document.createElement('div');\nconst column3 = document.createElement('div');\nconst row1 = document.createElement('div');\nconst row2 = document.createElement('div');\nconst searchBar = document.createElement('div');\nconst happeningContainer = document.createElement('div');\nconst whoToFollowContainer = document.createElement('div');\nmainContainer.classList.add('mainContainer');\ncolumn1.classList.add('column1');\ncolumn2.classList.add('column2');\ncolumn3.classList.add('column3');\nrow1.classList.add('row1');\nrow2.classList.add('row2');\nsearchBar.classList.add('searchBar');\nhappeningContainer.classList.add('happeningContainer');\nwhoToFollowContainer.classList.add('whoToFollowContainer');\ncontent.append(mainContainer);\nmainContainer.append(column1);\nmainContainer.append(column2);\nmainContainer.append(column3);\ncolumn2.append(row1);\ncolumn2.append(row2);\ncolumn3.append(searchBar);\ncolumn3.append(happeningContainer);\ncolumn3.append(whoToFollowContainer);\n\n\n\n\n\n// Project Global Variables\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://twitterclone/./src/index.js?");

/***/ }),

/***/ "./src/leftSidebar.js":
/*!****************************!*\
  !*** ./src/leftSidebar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nfunction createLeftSidebar() {\n  // Left Sidebar Elements\n  const home = document.createElement('div');\n  const explore = document.createElement('div');\n  const notifications = document.createElement('div');\n  const messages = document.createElement('div');\n  const bookmarks = document.createElement('div');\n  const twitterBlue = document.createElement('div');\n  const profile = document.createElement('div');\n  const more = document.createElement('div');\n  const tweet = document.createElement('div');\n\n  // Left Sidebar Containers\n  const homeContainer = document.createElement('div')\n  const exploreContainer = document.createElement('div');\n  const notificationsContainer = document.createElement('div');\n  const messagesContainer = document.createElement('div');\n  const bookmarksContainer = document.createElement('div');\n  const twitterBlueContainer = document.createElement('div');\n  const profileContainer = document.createElement('div');\n  const moreContainer = document.createElement('div');\n  const tweetContainer = document.createElement('div');\n\n  // Left Sidebar Images\n  const twitterLogo = document.createElement('img');\n  twitterLogo.classList.add('twitterLogo');\n  twitterLogo.src = '../src/assets/twitter-logo.png';\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.column1.append(twitterLogo);\n  const homeLogo = document.createElement('img');\n  homeLogo.classList.add('homeLogo');\n  homeLogo.src = '../src/assets/home.png';\n  home.append(homeLogo);\n  const exploreLogo = document.createElement('img');\n  exploreLogo.classList.add('exploreLogo');\n  exploreLogo.src = '../src/assets/hashtag.png';\n  explore.append(exploreLogo);\n  const notificationsLogo = document.createElement('img');\n  notificationsLogo.classList.add('notificationsLogo');\n  notificationsLogo.src = '../src/assets/bell.png';\n  notifications.append(notificationsLogo);\n  const messagesLogo = document.createElement('img');\n  messagesLogo.classList.add('messagesLogo');\n  messagesLogo.src = '../src/assets/mail.png';\n  messages.append(messagesLogo);\n  const bookmarksLogo = document.createElement('img');\n  bookmarksLogo.classList.add('bookmarksLogo');\n  bookmarksLogo.src = '../src/assets/bookmark.png';\n  bookmarks.append(bookmarksLogo);\n  const twitterBlueLogo = document.createElement('img');\n  twitterBlueLogo.classList.add('twitterBlueLogo');\n  twitterBlueLogo.src = '../src/assets/twitterBlue.png';\n  twitterBlue.append(twitterBlueLogo);\n  const profileLogo = document.createElement('img');\n  profileLogo.classList.add('profileLogo');\n  profileLogo.src = '../src/assets/profile.png';\n  profile.append(profileLogo);\n  const moreLogo = document.createElement('img');\n  moreLogo.classList.add('moreLogo');\n  moreLogo.src = '../src/assets/more.png';\n  more.append(moreLogo);\n\n  // Left Sidebar Classes\n  home.classList.add('home');\n  explore.classList.add('explore');\n  notifications.classList.add('notifications');\n  messages.classList.add('messages');\n  bookmarks.classList.add('bookmarks');\n  twitterBlue.classList.add('twitterBlue');\n  profile.classList.add('profile');\n  more.classList.add('more');\n  tweet.classList.add('tweet');\n  homeContainer.classList.add('homeContainer');\n  exploreContainer.classList.add('exploreContainer');\n  notificationsContainer.classList.add('notificationsContainer');\n  messagesContainer.classList.add('messagesContainer');\n  bookmarksContainer.classList.add('bookmarksContainer');\n  twitterBlueContainer.classList.add('twitterBlueContainer');\n  profileContainer.classList.add('profileContainer');\n  moreContainer.classList.add('moreContainer');\n\n  // Left Sidebar Text\n  const homeText = document.createTextNode('Home');\n  const exploreText = document.createTextNode('Explore');\n  const notificationsText = document.createTextNode('Notifications');\n  const messagesText = document.createTextNode('Messages');\n  const bookmarksText = document.createTextNode('Bookmarks');\n  const twitterBlueText = document.createTextNode('Twitter Blue');\n  const profileText = document.createTextNode('Profile');\n  const moreText = document.createTextNode('More');\n  const tweetText = document.createTextNode('Tweet');\n\n  // Left Sidebar Appending\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.column1.append(homeContainer, exploreContainer, notificationsContainer, messagesContainer);\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.column1.append(bookmarksContainer, twitterBlueContainer, profileContainer, moreContainer);\n  homeContainer.append(homeLogo, homeText);\n  exploreContainer.append(exploreLogo, exploreText);\n  notificationsContainer.append(notificationsLogo, notificationsText);\n  messagesContainer.append(messagesLogo, messagesText);\n  bookmarksContainer.append(bookmarksLogo, bookmarksText);\n  twitterBlueContainer.append(twitterBlueLogo, twitterBlueText);\n  profileContainer.append(profileLogo, profileText);\n  moreContainer.append(moreLogo, moreText);\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.column1.append(tweet);\n  tweet.append(tweetText);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLeftSidebar);\n\n\n//# sourceURL=webpack://twitterclone/./src/leftSidebar.js?");

/***/ }),

/***/ "./src/middleContent.js":
/*!******************************!*\
  !*** ./src/middleContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction createMiddleContent() {\n  const searchTwitter = document.createElement('div');\n\n  const searchTwitterText = document.createTextNode('Search Twitter');\n  const homeHeadingContainer = document.createElement('h1');\n  const forYou = document.createElement('div');\n  const following = document.createElement('div');\n  homeHeadingContainer.classList.add('homeHeading');\n  forYou.classList.add('forYou');\n  following.classList.add('following');\n  const homeHeadingText = document.createTextNode('Home');\n  const blueUnderline1 = document.createElement('div');\n  blueUnderline1.classList.add('blueUnderline1');\n  const blueUnderline2 = document.createElement('div');\n  blueUnderline2.classList.add('blueUnderline2');\n  const forYouText = document.createTextNode('For you');\n  const forYouContainer = document.createElement('div');\n  forYouContainer.classList.add('forYouContainer');\n  forYouContainer.classList.add('.forYouContainer');\n  const forYouTextContainer = document.createElement('div');\n  forYouTextContainer.classList.add('forYouTextContainer');\n  const followingText = document.createTextNode('Following');\n  const followingContainer = document.createElement('div');\n  followingContainer.classList.add('followingContainer');\n  const followingTextContainer = document.createElement('div');\n  followingTextContainer.classList.add('followingTextContainer');\n  const row1OptionsContainer = document.createElement('div');\n  row1OptionsContainer.classList.add('row1OptionsContainer');\n  searchTwitter.append(searchTwitterText);\n  _index__WEBPACK_IMPORTED_MODULE_0__.row1.append(homeHeadingContainer, row1OptionsContainer);\n  homeHeadingContainer.append(homeHeadingText);\n  row1OptionsContainer.append(forYouContainer, followingContainer);\n  forYouContainer.append(forYouTextContainer);\n  followingContainer.append(followingTextContainer);\n  forYouTextContainer.append(forYouText);\n  followingTextContainer.append(followingText);\n  forYouTextContainer.append(blueUnderline1);\n  followingTextContainer.append(blueUnderline2);\n  blueUnderline2.style.backgroundColor = 'white';\n\n  // Blue Underline animation\n  forYouContainer.addEventListener('click', () => {\n    followingTextContainer.style.fontWeight = 200;\n    forYouTextContainer.style.fontWeight = 600;\n    blueUnderline1.style.backgroundColor = '#1DA1F2';\n    blueUnderline2.style.backgroundColor = 'white';\n  });\n  followingContainer.addEventListener('click', () => {\n    forYouTextContainer.style.fontWeight = 200;\n    followingTextContainer.style.fontWeight = 600;\n    blueUnderline2.style.backgroundColor = '#1DA1F2';\n    blueUnderline1.style.backgroundColor = 'white';\n    blueUnderline1.addEvenetListener('mouseover', () => {\n      blueUnderline1.style.backgroundColor = '#e1e8ed';\n    });\n  });\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMiddleContent);\n\n\n//# sourceURL=webpack://twitterclone/./src/middleContent.js?");

/***/ }),

/***/ "./src/odinProfile.js":
/*!****************************!*\
  !*** ./src/odinProfile.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _rightSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rightSidebar */ \"./src/rightSidebar.js\");\n\n\n\nfunction odinProfile() {\n  // Odin Project Profile\n  const odinContainer = document.createElement('div');\n  odinContainer.classList.add('odinContainer');\n  const odinIcon = document.createElement('img');\n  odinIcon.classList.add('odinIcon');\n  odinIcon.src = '../src/assets/odinIcon.png';\n  const odinTextContainer = document.createElement('div');\n  odinTextContainer.classList.add('odinTextContainer');\n  const odinName = document.createTextNode('The Odin Project');\n  const odinNameContainer = document.createElement('div');\n  odinNameContainer.classList.add('odinNameContainer');\n  const odinUsername = document.createTextNode('@TheOdinProject');\n  const odinUsernameContainer = document.createElement('div');\n  odinUsernameContainer.classList.add('odinUsernameContainer');\n  _rightSidebar__WEBPACK_IMPORTED_MODULE_1__.whoToFollowContainer.append(odinContainer);\n  odinContainer.append(odinIcon);\n  odinContainer.append(odinTextContainer);\n  odinTextContainer.append(odinNameContainer);\n  odinTextContainer.append(odinUsernameContainer);\n  odinNameContainer.append(odinName);\n  odinUsernameContainer.append(odinUsername);\n\n  // Odin Buttons\n  const odinFollowButton = document.createElement('div');\n  odinFollowButton.classList.add('followButton');\n  const odinFollowButtonText = document.createTextNode('Follow');\n  odinFollowButton.append(odinFollowButtonText);\n  const odinFollowingButton = document.createElement('div');\n  odinFollowingButton.classList.add('followingButton');\n  const odinFollowingButtonText = document.createTextNode('Following');\n  odinFollowingButton.append(odinFollowingButtonText);\n  const odinUnfollowButton = document.createElement('div');\n  odinUnfollowButton.classList.add('unfollowButton');\n  const odinUnfollowButtonText = document.createTextNode('Unfollow');\n  odinUnfollowButton.append(odinUnfollowButtonText);\n\n  // Odin Button Functions\n  odinContainer.append(odinFollowButton);\n  odinFollowButton.addEventListener('click', () => {\n    odinContainer.removeChild(odinFollowButton);\n    odinContainer.append(odinFollowingButton);\n  });\n  odinFollowingButton.addEventListener('mouseenter', () => {\n    odinContainer.removeChild(odinFollowingButton);\n    odinContainer.append(odinUnfollowButton);\n  });\n  odinUnfollowButton.addEventListener('mouseout', () => {\n    odinContainer.removeChild(odinUnfollowButton);\n    odinContainer.append(odinFollowingButton);\n  });\n\n  // Odin pop-up\n  const unfollowPopUpContainer = document.createElement('div');\n  unfollowPopUpContainer.classList.add('unfollowPopUpContainer');\n  const overlay = document.createElement('div');\n  overlay.classList.add('overlay');\n  const popUpUnfollowTitle = document.createTextNode('Unfollow');\n  const odinPopUpUsername = document.createTextNode('@TheOdinProject?');\n  const odinPopUpUsernameContainer = document.createElement('div');\n  odinPopUpUsernameContainer.classList.add('popUpUnfollowUsernameContainer');\n  const odinPopUpUnfollowTitleContainer = document.createElement('div');\n  odinPopUpUnfollowTitleContainer.classList.add('popUpUnfollowTitleContainer');\n  const popUpPara = document.getElementById('odinPopUpPara');\n  const popUpParaContainer = document.createElement('div');\n  popUpParaContainer.classList.add('popUpParaContainer');\n  const popUpUnfollowButton = document.createElement('div');\n  popUpUnfollowButton.classList.add('popUpUnfollowButton');\n  const popUpUnfollowButtonText = document.createTextNode('Unfollow');\n  const popUpCancelButton = document.createElement('div');\n  popUpCancelButton.classList.add('popUpCancelButton');\n  const popUpCancelButtonText = document.createTextNode('Cancel');\n  unfollowPopUpContainer.append(odinPopUpUnfollowTitleContainer);\n  unfollowPopUpContainer.append(odinPopUpUsernameContainer);\n  odinPopUpUnfollowTitleContainer.append(popUpUnfollowTitle);\n  odinPopUpUsernameContainer.append(odinPopUpUsername);\n  unfollowPopUpContainer.append(popUpParaContainer);\n  popUpParaContainer.append(popUpPara);\n  unfollowPopUpContainer.append(popUpUnfollowButton);\n  unfollowPopUpContainer.append(popUpCancelButton);\n  popUpUnfollowButton.append(popUpUnfollowButtonText);\n  popUpCancelButton.append(popUpCancelButtonText);\n\n  odinUnfollowButton.addEventListener('click', () => {\n    _index__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(overlay);\n    _index__WEBPACK_IMPORTED_MODULE_0__.mainContainer.append(unfollowPopUpContainer);\n  });\n  popUpUnfollowButton.addEventListener('click', () => {\n    _index__WEBPACK_IMPORTED_MODULE_0__.mainContainer.removeChild(overlay);\n    _index__WEBPACK_IMPORTED_MODULE_0__.mainContainer.removeChild(unfollowPopUpContainer);\n    odinContainer.removeChild(odinFollowingButton);\n    odinContainer.append(odinFollowButton);\n  });\n  popUpCancelButton.addEventListener('click', () => {\n    _index__WEBPACK_IMPORTED_MODULE_0__.mainContainer.removeChild(overlay);\n    _index__WEBPACK_IMPORTED_MODULE_0__.mainContainer.removeChild(unfollowPopUpContainer);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (odinProfile);\n\n\n//# sourceURL=webpack://twitterclone/./src/odinProfile.js?");

/***/ }),

/***/ "./src/rightSidebar.js":
/*!*****************************!*\
  !*** ./src/rightSidebar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"whoToFollowContainer\": () => (/* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_0__.whoToFollowContainer)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction createRightSidebar() {\n  const searchTwitter = document.createElement('div');\n  const whatsHappening = document.createElement('h2');\n  const searchTwitterText = document.createTextNode('Search Twitter');\n  const whatsHappeningText = document.createTextNode('What\\'s Happening');\n  searchTwitter.append(searchTwitterText);\n  _index__WEBPACK_IMPORTED_MODULE_0__.happeningContainer.append(whatsHappeningText);\n  _index__WEBPACK_IMPORTED_MODULE_0__.column3.append(searchTwitter);\n  _index__WEBPACK_IMPORTED_MODULE_0__.column3.append(whatsHappening);\n\n  // Right Sidebar\n  const whoToFollowTextContainer = document.createElement('div');\n  whoToFollowTextContainer.classList.add('whoToFollowTextContainer');\n  const whoToFollowText = document.createTextNode('Who to follow');\n  _index__WEBPACK_IMPORTED_MODULE_0__.whoToFollowContainer.append(whoToFollowTextContainer);\n  whoToFollowTextContainer.append(whoToFollowText);\n\n  // SearchBar\n  const searchIcon = document.createElement('img');\n  searchIcon.classList.add('searchIcon');\n  searchIcon.src = '../src/assets/searchIcon.png';\n  _index__WEBPACK_IMPORTED_MODULE_0__.searchBar.append(searchIcon);\n  _index__WEBPACK_IMPORTED_MODULE_0__.searchBar.append(searchTwitterText);\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRightSidebar);\n\n\n//# sourceURL=webpack://twitterclone/./src/rightSidebar.js?");

/***/ }),

/***/ "./src/stackProfile.js":
/*!*****************************!*\
  !*** ./src/stackProfile.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rightSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rightSidebar */ \"./src/rightSidebar.js\");\n\n\nfunction stackProfile() {\n  // Stack Overflow Profile\n  const stackContainer = document.createElement('div');\n  stackContainer.classList.add('stackContainer');\n  const stackTextContainer = document.createElement('div');\n  stackTextContainer.classList.add('stackTextContainer');\n  const stackIcon = document.createElement('img');\n  stackIcon.classList.add('stackIcon');\n  stackIcon.src = '../src/assets/stackIcon.png';\n  const stackName = document.createTextNode('Stack Overflow');\n  const stackNameContainer = document.createElement('div');\n  stackNameContainer.classList.add('stackNameContainer');\n  const stackUsername = document.createTextNode('@StackOverflow');\n  const stackUsernameContainer = document.createElement('div');\n  stackUsernameContainer.classList.add('stackUsernameContainer');\n  _rightSidebar__WEBPACK_IMPORTED_MODULE_0__.whoToFollowContainer.append(stackContainer);\n  stackContainer.append(stackIcon);\n  stackContainer.append(stackTextContainer);\n  stackTextContainer.append(stackNameContainer);\n  stackTextContainer.append(stackUsernameContainer);\n  stackNameContainer.append(stackName);\n  stackUsernameContainer.append(stackUsername);\n\n  // Show More\n  const showMoreContainer = document.createElement('div');\n  showMoreContainer.classList.add('showMoreContainer');\n  const showMoreText = document.createTextNode('Show more');\n  _rightSidebar__WEBPACK_IMPORTED_MODULE_0__.whoToFollowContainer.append(showMoreContainer);\n  showMoreContainer.append(showMoreText);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackProfile);\n\n\n//# sourceURL=webpack://twitterclone/./src/stackProfile.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;