# NgxAdalSampleUsingAPPINITIALIZER

# NGX Adal 8 Angular Front-end with APP_INITIALIZER and a mock Backend

This sample app demonstrate usage of [ngx-adal-8](https://www.npmjs.com/package/ngx-adal-8) to get you started accessing Azure secured Back-end.

First register your front-end application with [Azure](https://portal.azure.com/).   
Instructions for registering Angular applications with Azure can be found [here](http://wpblog.fairmutex.com/2019/06/15/registering-an-angular-app-with-azure/)   
Take note of Application (client) ID (6) and Directory (tenant) Id (7)
Instructions how to create and register back-end with Azure and grant fron-end app access can be found [here](http://wpblog.fairmutex.com/2019/06/18/registering-an-net-core-api-with-azure-portal-and-grant-permission-for-front-end/)

The API is just using an in memory library but coudl be easily be switched to be used with [.net core API Sample](https://github.com/fairmutex/ngx-adal-8-samples/tree/master/ngx-adal-sample-accessing-back-end/AzureSecuredAPI)

What this sample is demonstrating is if user is not logged in, will be redirecte dto log in, else profile is loaded prior the app is loaded. The HttpClientInMemoryWebApiModule is set to delay the reply for 5 seconds so you can see that everything  is working as expected.