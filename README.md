# Ecom
Full Stack E-Commerce website with Angular and Java Spring Boot
But i have quick training on typescript and angular and Spring Boot that you can use as reference 

# typescript-training

Transpilling means converting the code from one language to another eg: from typescript to javascript

`tsc sample-types.ts`

Run your converted Js file

`node sample-types.js`

Run `tsc --init` to generate tsconfig.json

You won't need to add the compiler flag after you confirgure  tsconfig.json

Eg: `tsc --target ES2016 --noEmitOnError Customer.ts`

To create a new project to existing folder 
run  `ng new appName --directory ./`

Install Bootstrap to your project
run `npm i bootstrap` and configure it on your angular.json file under
"styles": ["./node_modules/bootstrap/dist/css/bootstrap.min.css", "src/styles.css" ],