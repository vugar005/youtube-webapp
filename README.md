# Youtube clone with Nx 

<img src="https://github.com/vugar005/vg-common/blob/main/images/Youtube-logo.webp" alt="Youtube Angular brand" width="100%"  height="400px">

---
**NOTE**:

*This is project is for educaiton purpose only and was made to illustrate example of building microfrontend using Angular, Module Federation.*   

---

## Features:   
☑ Multiple Angular applications on different domains   
☑ Shared UI components and utils  
☑ NgRx Store state management on each application   
☑ Communication between angular applications   
☑ Routing between applications     
 

There is 1 host (shell) and 3 remote apps (watch-app, likes-app, history-app).     

There are 3 versions of source codes available:   
[Turborepo](https://github.com/vugar005/youtube-webapp-turborepo)   
[Nx (Current Repo)](https://github.com/vugar005/youtube-webapp-nx)    
[Lerna](https://github.com/vugar005/youtube-webapp-lerna)   

---
**NOTE**:

*Server side rendering is implemented only on lerna and Turborepo edition*

---

## Demo: ▶
http://youtube.vugar.app

---
**NOTE**:

*Hosted application is using Turborepo edition repo*

---

## Getting Started 🚀

1- Install nx globally:   
```bash 
npm install nx@13.8.1 -g
```

2- On project root to install root dependencies   
```bash 
npm ci
```  

3- Start project and navigate to localhost:4200:  
```bash
nx serve shell:serve-mfe
```

4- To lint all apps: 
```bash
npm run lint:all
```
Other commands: please see ```package.json``` for other commands.   

## Tech Stack:   
<div style="display:flex;">
<img src="https://github.com/vugar005/vg-common/blob/main/icons/brands/angular.svg" title="Angular" alt="Angular" height="120"/>
<img src="https://github.com/vugar005/vg-common/blob/main/icons/brands/material.svg" title="Angular Material" alt="Angular Material" height="120"/>
<img src="https://github.com/vugar005/vg-common/blob/main/icons/brands/angular-universal.svg" title="Angular Universal" alt="Angular Universal" height="120"/>
<img src="https://github.com/vugar005/vg-common/blob/main/icons/brands/nestjs.svg" title="Angular Universal" alt="Angular Universal" height="120"/>
<img src="https://github.com/vugar005/vg-common/blob/main/icons/brands/ngrx.svg" title="NgRx" alt="NgRx store" height="120"/>
<img src="https://github.com/vugar005/vg-common/blob/main/icons/brands/rxjs.svg" title="RxJs" alt="RxJs" height="120"/>
<img src="https://github.com/vugar005/vg-common/blob/main/icons/brands/turborepo.svg" title="Turborepo"  alt="Turborepo" height="120"/>
</div>


## Pros and cons of Nx, Turborepo and Lerna tools
Below are just my experiences working in those tools. They can be inaccurate.   
### Lerna
✅ Supports both same and different versions of libraries (such as Angular, RxJs)   
✅ Native - Use Angular CLI   
❌ Configuration of applications required a change to `angular.json` to make it work. Switched to `ngx-build-plus` builders to support custom webpack config.  
❌ Slow development efficiency. Rebuild everytime you make changes to common packages such as UI   
❌ No dependency graph   

### Nx
❌ Not supports both same and different versions of libraries (such as Angular, RxJs). Only Monorepo.   
❌ Not native. Uses Nx CLI  
❌ Configuration of applications required a change to `angular.json` to make it work. Switched to Nx Officially Supported Builders to support custom webpack config.   
  Problems with adding new packages (such as ssr)    
✅ Very fast development efficiency   
✅ Powerful dependency graph   

### Turborepo
❌ Not supports both same and different versions of libraries (such as Angular, RxJs). Only Monorepo.   
✅ Native - Use Angular CLI  
❌ Configuration of applications required a change to `angular.json` to make it work. Switched to `ngx-build-plus` builders to support custom webpack config.   
✅ Fast development efficiency   
✅ Dependency graph  


## What is next?
Currently, the unit tests were not aded since the project was focused on main features such as module federation, managing state, intercommucation and so on. It can be started soon.

## Contribution guide 🌴
Want to contribute to improve community app? Looking forward for pull requests. Let's get started :)

## About me 🌴🏌️
Xtreme Junior Front end developer focused on nice architecture and long term webapps.
