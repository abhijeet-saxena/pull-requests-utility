// ==UserScript==
// @name         PR-Guidelines-Sidebar
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Code Review Checklist Extension Script
// @author       itsRockyy
// @match        https://github.com/*/pull/*
// @updateURL    https://github.com/itsRockyy/pull-requests-utility/raw/master/pr-guidelines.user.js
// @grant        GM_addStyle
// ==/UserScript==

document.body.innerHTML += `
<div id="sidebar" class="hide">
<div class="resizable">
    <div class="header">
      <div class="pin" title="Pin Panel">📌</div>
      <div class="theme" title="Toggle Dark Mode">
        <div class="light-mode"></div>
        <div class="dark-mode"></div>
      </div>
    </div>
    <h5>General/Codestyle</h5>
        <div class="item"><input type="checkbox" id="1" /><label for="1" title="Does the code work?">Code Functionality</label></div>
        <div class="item"><input type="checkbox" id="2" /><label title="Are variables, functions, class names descriptive enough?" for="2">Descriptive variable names</label></div>
        <div class="item"><input type="checkbox" id="3" /><label title="Prefer clarity over equivalent code written in fewer words/lines" for="3">Easy to understand & concise</label></div>
        <div class="item"><input type="checkbox" id="4" /><label title="Code must follow your projects coding guideliens" for="4">Coding Guidelines</label></div>
        <div class="item"><input type="checkbox" id="5" /><label title="Check for possible refactoring" for="5">DRY Code</label></div>
        <div class="item"><input type="checkbox" id="6" /><label title="Small components are easy to maintain/test and understand" for="6">Reasonably small components</label></div>
        <div class="item"><input type="checkbox" id="7" /><label title="Check for infinite loops or boundary conditions" for="7">Memory Leaks / Performancce issues</label></div>
        <div class="item"><input type="checkbox" id="8" /><label title="Modular code, separate layers for UI and API" for="8">Separation of Concerns</label></div>
        <div class="item"><input type="checkbox" id="9" /><label title="Use constants instead" for="9">No hard coded values</label></div>
        <div class="item"><input type="checkbox" id="10" /><label title="Remove unused code" for="10">No comments</label></div>
    <h5>Javascript / React</h5>
      <div class="item"><input type="checkbox" id="11" /><label title="Avoid Class components as they increase complexity" for="11">Use Functional components</label></div>
      <div class="item"><input type="checkbox" id="12" /><label title="Use proptypes wherever possible" for="12">Components have well-defined interfaces</label></div>
      <div class="item"><input type="checkbox" id="13" /><label title="Minimize complexity of component" for="13">Single Responsibility Principle</label></div>
      <div class="item"><input type="checkbox" id="14" /><label title="Check if same code can be used elsewhere" for="14">Use Hooks for reusable logic</label></div>
      <div class="item"><input type="checkbox" id="15" /><label title="Take advantage of latest ES features" for="15">ES6 features</label></div>
      <div class="item"><input type="checkbox" id="16" /><label title="No empty catch blocks" for="16">Catch & handle errors</label></div>
      <div class="item"><input type="checkbox" id="17" /><label title="0 Lint errors and warnings" for="17">No Linting errors</label></div>
      <div class="item"><input type="checkbox" id="18" /><label title="camelCase for variables, PascalCase for Classes/Components/Interfaces" for="18">Consistent Naming Conventions</label></div>
      <div class="item"><input type="checkbox" id="19" /><label title="Check for undefined or null" for="19">Null checks & Edge Cases</label></div>
      <div class="item"><input type="checkbox" id="20" /><label title="No unnecessary render" for="20">No state updates in loop</label></div>
      <div class="item"><input type="checkbox" id="21" /><label title="No generic elements" for="21">Flex/Box instead of &lt;div&gt;</label></div>
      <div class="item"><input type="checkbox" id="22" /><label title="Maximum depth of nesting should not be greater than 2" for="22">No Deep Nesting</label></div>
    <h5>HTML / CSS</h5>
      <div class="item"><input type="checkbox" id="23" /><label title="smallcase for original HTML tags, PascalCase for custom tags" for="23">Naming conventions</label></div>
      <div class="item"><input type="checkbox" id="24" /><label title="<font> <b> <i> etc not to be used" for="24">No deprecated HTML</label></div>
      <div class="item"><input type="checkbox" id="25" /><label title="<main> <header> <article> etc. to be used" for="25">Semantic & accessible HTML</label></div>
      <div class="item"><input type="checkbox" id="26" /><label title="Avoid using id as selector. Never use !important" for="26">CSS selectors have lowese specificity</label></div>
      <div class="item"><input type="checkbox" id="27" /><label title="Avoid inline styles, use classes instead" for="27">No inline styles</label></div>
      <div class="item"><input type="checkbox" id="28" /><label title="All themes should be derived from common capability" for="28">Styles from a standard library</label></div>
      <div class="item"><input type="checkbox" id="29" /><label title="Animate opacity, transform only" for="29">CSS animations performance</label></div>
    <h5>Other</h5>
      <div class="item"><input type="checkbox" id="30" /><label title="Code is written to be easily to extendable and changeable. Check that the code is written with likely future use-cases in mind. Consider scalability by imagining what might happen to the code you’re reviewing if it were put under unexpected load." for="30">Maintainable, Reusable and Scalable</label></div>
      <div class="item"><input type="checkbox" id="31" /><label title="When a certain level of failure is anticipated, it must be handled elegantly. Code should be easy to understand. " for="31">Reliable and Readable</label></div>
      <div class="item"><input type="checkbox" id="32" /><label title="Writing insecure code introduces vulnerabilities into the system. As developers/reviewers, put yourselves in the shoes of someone trying to exploit the system" for="32">Safe Web Security Practices</label></div>
      <div class="item"><input type="checkbox" id="33" /><label title="Performance for users and Resource Consumption." for="33">Speed and Performance</label></div>
  </div>
</div>
`;

let pinned = false;

const sidebar = document.querySelector("#sidebar");
const theme = document.querySelector(".theme");
const pin = document.querySelector(".pin");

pin.addEventListener("click", () => {
  pinned = !pinned;
  pin.classList = pinned ? "pin pinned" : "pin";
});

theme.addEventListener("click", () => {
  theme.classList.toggle("dark");
  sidebar.classList.toggle("dark");
});

window.addEventListener("keyup", ({ key }) => {
  if (key === "Escape" && pinned && !sidebar.classList.contains("hide")) {
    pinned = false;
    pin.classList = "pin";
    sidebar.classList.add("hide");
  }
});

document.body.addEventListener("click", ({ target }) => {
  if (
    !pinned &&
    target.closest("#sidebar") == null &&
    !sidebar.classList.contains("hide")
  )
    sidebar.classList.add("hide");
});

sidebar.addEventListener("mouseenter", () => (sidebar.classList = ""));
sidebar.addEventListener("mouseleave", () => {
  if (!pinned) sidebar.classList = "hide";
});

GM_addStyle(`
  #sidebar, #sidebar * {
    box-sizing: border-box;
    user-select: none;
  }
  .resizable{
    direction: ltr;
  }
  #sidebar {
    direction: rtl;
    resize: horizontal;
    --sidebar-bg-color: #FFFFFF;
    --sidebar-text-color: #3D464D;
    --sidebar-border: #EBEBEB;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 400px;
    padding: 1rem;
    padding-left: 2rem;
    background: var(--sidebar-bg-color);
    color: var(--sidebar-text-color);
    box-shadow: 0 0 4px 0 var(--sidebar-border);
    z-index: 100;
    transition: all 250 ease-in-out;
    overflow-y: scroll;
    opacity: 1;
  }

  #sidebar.dark{
    --sidebar-bg-color: #22272e;
    --sidebar-text-color: #ADBAC7;
    --sidebar-border: #6E6E6E;
  }

  #sidebar .pin{
    height: 24px;
    width: 24px;
    display: grid;
    place-items: center;
    padding: 2px 7px 2px 5px;
    border-radius: 4px;
    cursor: pointer;
  }

  #sidebar .pin:hover, #sidebar .pinned{
    background: #D8E7F7;
  }

  #sidebar .item{
    display: flex;
    align-items: center;
  }

  #sidebar.hide {
    right: -370px;
    opacity: 0.8;
  }

  #sidebar .header {
    display: flex;
    justify-content: space-between;
  }

  .header a{
    color: #07C8FD;
    text-decoration: dotted;
    border-bottom: dotted 1px;
  }

  #sidebar h5{
    font-size: 1.1rem;
    margin-top: 12px;
  }

  #sidebar label {
    padding-left: 0.5rem;
    font-weight: 300;
  }

  #sidebar input:checked + label {
    text-decoration: line-through;
  }

  #sidebar input:checked::after {
    content: "✓";
    background: #27ac70;
    color: white;
    border: solid 1px #27ac70;
  }

  #sidebar input::after {
    content: " ";
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    font-size: 12px;
    border: solid 1px var(--sidebar-text-color);
  }

  #sidebar input {
    appearance: none;
    outline: none;
    border: none;
    box-sizing: border-box;
  }

  .light-mode {
    background: yellow;
    box-shadow: inset 0px 0px 1px 0.5px orange;
    transform: translateX(120%);
  }

  .dark-mode {
    background: transparent;
    box-shadow: inset 4px -3px 1px 0px black;
  }

  .theme {
    position: relative;
    width: 1rem;
    height: 1rem;
    overflow-x: hidden;
    cursor: pointer;
  }

  .dark .light-mode {
    transform: translateX(0);
  }

  .dark .dark-mode {
    transform: translateX(-120%);
  }

  .light-mode, .dark-mode {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: transform 250ms ease-out;
  }
`);
