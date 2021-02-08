const { getDiffieHellman } = require("crypto");
var fs = require("fs")
var path = require("path")
var {v4: uuidv4} = require('uuid')

function getNotes(){
    var data = fs.readFileSync('./db/db.json', 'utf8');
    return data

}
module.exports = function (app) {
    
    app.get("/api/notes", function(req, res){
         data = getNotes()
        res.json(data)
       
    });
    app.post("/api/notes", function(req,res){
        req.body.id = uuidv;
        var uuid = uuidv4();
        data.push(req.body)
        fs.writeFileSync("./db/db/json", JSON.stringify(data),(err)=>{
            if (err) throw err;
        })
        res.json(req.body)
    })
    
    app.delete("/api/notes/:id", function(req, res){
        var id = req.params.id;
        var blankNote =[]
        console.log(id);
        var newNotes = path.join(__dirname, "./db/db.json");

        newNotes = newNotes.slice(viewedNotes =>{
            return viewedNotes.id != getID;
        })
        for(viewedNotes of newNotes){
            viewedNotes.id = getID.toSring();
            blankNote++;
        }
        fs.writeFile("./db/db.json", JSON.stringify(newNotes), "utf8", function(err){
            if (err) throw err;
            res.json({sucess: true})
        })
    })
};