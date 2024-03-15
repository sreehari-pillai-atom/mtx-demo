# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.


## Local testing 

- To start a local testing , We first enable a new debug profile . I named it `development`
- From `package.json` I removed the "cds.requires" tags and moved all to `.cdsrc.json`
- in cdsrc json , I enabled 2 setups for `development` profiles . 1 - mock strategy for authentication 2 - db credentials 

### Where to fetch the db credentials ? 

> In the provider sub account, open the `Instances and Subscriptions`. Apply a filter to show only "Service manager" . Find the one with name `mtx-demo-db-management` . You will see `n+1` records under the instnace , where n being the number of subscriptions. Select one by one. In the detail screen , it will show the tenant name . Skip if its "t0" . Match the tenant id with the sub account of subscriber. Click on "View credentials" and thats the access credentials to DB container 

>> Note - never keep it in cdsrc.json , move it to .cdsrc.provate.json as it wont be pushed to github ( or ven remove .cdsrc.json from github push )
