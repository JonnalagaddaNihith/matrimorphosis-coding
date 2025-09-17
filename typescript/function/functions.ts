function username(fname:string, lastname?:string){
    if(lastname) console.log("Username : "+fname+lastname);
    else console.log("Username : "+fname);
}
username("Nihit");
username("Nihit", "Jonnalagadda")