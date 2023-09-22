// have to declare ts module
// tell ts its okay to use things that arent normal js or ts types 

declare module "*.jpg" {
    const value = any;
    export default value;
}