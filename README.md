# Overview

This is a chrome extension made in the competition hackIt by hyperVerge, it is a widget manager when you open new tab on chrome.

This Chrome Extension is a Widget and Productivity Manager tool for HyperVerge. It provides various features like Opportunity Board, Annoncement Board, Issue Generator and Tracker and Notice Boards which are vital for coordination among people within a company. We also provide some miscellaneous features like ChatGPT ChatBot Widget, Spotify Music Player, Todo List, Pomodoro Timer, etc which help in boosting efficiency of the employees. 

# Team

1. Suryanshu Choudhary
2. Aakrisht Srivastava 

We are from IIITRanchi

# Instructions To Run this repo

`cd client`

`npm i --legacy-peer-deps`

replace `scriptLink` with your own script link inside `constants/credentials.js`
make sure to not put the `action` query parameter'

for example it should be like this

`https://script.google.com/macros/s/AKfycbw9B7ehedmN8g_k7dLs-GciaU1tSLhGe3Gta5YP7x5B8HpWLl2eJ9x3r08tAV9Vxb60pA/exec` and not like `https://script.google.com/macros/s/AKfycbw9B7ehedmN8g_k7dLs-GciaU1tSLhGe3Gta5YP7x5B8HpWLl2eJ9x3r08tAV9Vxb60pA/exec/?action=getAan`

if you want to run a test, you can the google docs link already provided in a txt file

`npm run build`

Locate to the dist folder and unload the package in chrome extensinon developer mode.

# For AppScript

Open the sheet in the SheetLink.txt in client folder

Select Toolbar > Extensions > AppScript

Connect a google project and create OAuth2 credentials

Copy the Appscript code from `AppScriptCode.txt` to console

and deply

change the routes to new one in required pages



