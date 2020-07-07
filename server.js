// ---- EXPRESS JS - Framework
let express = require('express'),
    app = express();

// --- middleware
// - body-parser needed to catch and to treat information inside req.body
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res)=> {
        res.status(200).json({"serveur" : "ok"});
})

// ------------------------
// ROUTES RESOURCES
// ------------------------

var recettes_salade = [{
	"id" : "1",
	"nom" : "cesar",
	"description" : "préparation de la salade césar",
    "ingredients" : [ "poulet", "feuille_salade", "tomate"],
    "photo" : "1829913150257"
}]


app.get('/recettes',(req, res)=>{
	res.status(200).json(recettes_salade)
})


app.get('/recettes/:idRecette',(req, res)=>{
	res.status(200).json(recettes_salade.find(recettes_salade => recettes_salade.id == req.params.idRecette))
})

// ------------------------
// START SERVER
// ------------------------
app.listen(3011, function(){
    console.info('HTTP server started on port 3011');
});