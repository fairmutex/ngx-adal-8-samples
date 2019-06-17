# NGX Adal 8 Samples

This sample app demonstrate usage of [ngx-adal-8](https://www.npmjs.com/package/ngx-adal-8) to get you started.

First register your front-end application with [Azure](https://portal.azure.com/).   
Instructions for registering Angular applications with Azure can be found [here](http://wpblog.fairmutex.com/2019/06/15/registering-an-angular-app-with-azure/)   
Take note of Application (client) ID (6) and Directory (tenant) Id (7)
## Samples in this repository



### ngx-adal-sample-using-login-button

Login and Logout button

### ngx-adal-sample-using-guard

Login is triggered as soon as you visit a route protected by a guard.

### ngx-adal-sample-using-APPINITIALIZER

Login is triggered before the app is loaded unless already logged in.

### ngx-adal-sample-using-app-constructor

Login is triggered as Appcomponent is constructed unless already logged in. I'm not a fan of this as the same result could be achieved using guards on the main route and looks neater.

### ngx-adal-sample-accessing-BACKEND-API

Login including secure API calls to a Sample .net core 2.2 API application
In Progress

