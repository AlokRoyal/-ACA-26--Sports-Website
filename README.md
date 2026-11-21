# MS Dhoni Tribute Website

![HTML](https://img.shields.io/badge/HTML5-pages-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-styling-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)

A static tribute to Mahendra Singh Dhoni with three connected pages: biography and achievements, career timeline, and IPL results.

## Features

- Home page introduces Dhoni and presents biography and selected achievements
- Timeline and IPL results are separate pages
- Each page can use dedicated styles and JavaScript
- Local images keep the site self-contained

## How it works

The site is a collection of linked HTML documents. The browser loads index.html first, then follows links to timeline.html or iplResults.html. CSS controls each page’s presentation, while JavaScript provides the small interactions included in the project.

## Architecture

Browser → index.html → linked timeline/results pages → CSS/JS and local JPG assets

There is no application framework, backend, or remote content service.

## Start locally

1. Download or clone the repository.
2. Preserve the HTML, CSS, JavaScript, and image files in their relative locations.
3. Open index.html in a browser and navigate between pages.

No package installation or build command is necessary. Static hosting is sufficient.

## Project layout

- index.html — home page, biography, achievements
- timeline.html — career timeline
- iplResults.html — IPL results
- style.css, styletimeline.css, styleIplResults.css — page styling
- script.js, scriptIplResults.js — page interactions
- JPG files — backgrounds and cricket imagery

## Notes

Image filenames and relative paths must remain unchanged, especially on case-sensitive hosts. No tests or build scripts are configured. The repository does not list a license file; verify rights for included images before reuse.