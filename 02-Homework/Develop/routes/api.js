const fs = require("fs")
const path = require("path")


function getNotes(){
    const data = fs.readFileSync('./db/db.json', 'utf-8');

}
module.exports = function (app) {
    app.get("/api/notes", function(req, res){
        res.json(getNotes());
    });
    app.post("/api/notes", function(req,res){
        req.body.id = path()
        const notes = getNotes();
        notes.push(req.body)
    })
    
    app.delete("/api/notes/:id", function(req, res){
        var id = req.params.id;
        console.log(id);
        const newNotes = getNotes().filter(notes=> note.id !== req.params.id);

        fs.writeFile("./db/db.json", JSON.stringify(newNotes), "utf-8", function(err){
            if (err) throw err;
            res.json({sucess: true})
        })
    })
};