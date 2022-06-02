
const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

let pokemon = undefined;

const listaPokemons = [
    { 
         id:001,
        
         nome: "Bulbasaur",
        
         imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",

         altura:"0,7 m",
        
         peso: "6,9 Kg ",
        
         categoria: "Semente",
        
         tipo:"Grama",
        
         descricao: "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
        
         habilidade: "Chicote de vinha",

    },
    { 
        id:002,
        
        nome: "Ivysaur",

        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
       
        altura:"1,0 m",
       
        peso: " 13 Kg ",
       
        categoria: "Semente",
       
        tipo:"Grama",
       
        descricao: "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce Quando o bulbo nas costas cresce, parece perder a capacidade de ficar em pé nas patas traseiras.",
       
        habilidade: "Chicote tóxico",
        
    },
    { 
        id:003,
        
        nome: "Venusaur",
        
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        
        altura:"2,0 m",
    
        peso: "100,0 Kg ",
    
        categoria: "Semente",
    
        tipo:"Grama",
    
        descricao: "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz do sol.",
    
        habilidade: "Raio de Sol",

    }
]

app.get("/", (req, res) => {
  res.render("index",{listaPokemons, pokemon});
  
});

app.post/*post pq envio dados*/("/create", (req, res)=>{
    const pokemon = req.body;
    
  
    pokemon.id = listaPokemons.length +1;
    listaPokemons.push(pokemon);
    res.redirect("/#cards")

});



app.listen(3000, () => 
    console.log("Servidor rodando em http://localhost:3000")
);