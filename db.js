const pg = require("pg");

const pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password:'thuytrang297',
    database:'NODE2906',
    idleTimeoutMillis: 1000,
    max:20,
    port:9999
});

// const sql ='SELECT * FROM "product"'; 

function queryDB(sql,cb){
pool.connect((error, client,done) => {
    client.query(sql,(errQuery,data) => {
        if(errQuery) return cb(errQuery,null);
        cb(null,data);
    })
});
}
function insertDB(name ,description,price,image ,video,cb){
    const insertSQL = `INSERT INTO "Product"(name, description, price, image, video) VALUES ('${name}', '${description}', ${price}, '${image}', '${video}');`;
    queryDB(insertSQL,(err,data) => {
        if(err) return cb(err,null);
        cb(null,data);
    })
}

// queryDB(sql,(err,result) => {
//     if(err) return console.log(err.toString());
//     console.log(result.rows);   
// });

//test insert hàm 
// insertDB('skywalker' ,'jedi','3000','kenobi.png' ,'kenobi.mp4',err => {
//     if(err) return  console.log(err.toString());
    
// })
module.exports = {
            queryDB,
            insertDB
};