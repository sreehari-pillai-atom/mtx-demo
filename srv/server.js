const cds = require("@sap/cds");
const proxy = require("@sap/cds-odata-v2-adapter-proxy");
const xsenv = require("@sap/xsenv");

cds.on("bootstrap",  (app) => {
    //provide a v2 URL
    app.use(proxy());
    //your own getDependencies URL , to override standard. 
    app.get("/getDependencies", (req, res) => {
         xsenv.loadEnv();
         const services = xsenv.getServices({
           dest: { tag: "destination" } //exponse estination services' xsapp 
         });
         if(services && services.dest){
            cds.env.mtx.dependencies = [services.dest.xsappname];
         }
         else{
            cds.env.mtx.dependencies = [];
         }
       
         let deps = cds.env.mtx.dependencies.map((m) => {
           return { "xsappname": m }
         });
         res.status(200).json(deps);
       });


       app.delete("/-/cds/saas-provisioning/tenant/*" , async(req,res)=>{
         //runs for unsubscription - test this please 
          res.sendStatus(201);
       });
  });