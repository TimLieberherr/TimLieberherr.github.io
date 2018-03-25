
namespace portfolio{

// Interface Produkt
interface Produkt {
    bild: string;     
}

//Artikel 1 erstellt aus dem Interface:
var porto: Produkt = {
    bild: "Instabook-4416.jpg",
}

//Artikel 2 erstellt aus dem Interface:
var heidelberg: Produkt = {
    bild: "Instabook-3195.jpg",
}

//Artikel 3 erstellt aus dem Interface:
var münchen: Produkt = {
    bild: "Instabook-4575.jpg",
}

//Artikel 4:
var wetzlar: Produkt = {
    bild: "Wiese-1565.jpg",
}
   
//Artikel 5:
var freiburg: Produkt = {
    bild: "Wiese-1504.jpg",
}    
    
//Artikel 6:
var frankfurt: Produkt = {
    bild: "Wiese-1495.jpg",
}
    
//Artikel 7:
var bayreuth: Produkt = {
    bild: "Wiese-1279.jpg",
}
    
//Artikel 8:
var richard: Produkt = {
    bild: "Instabook-3687.jpg",
}
    
//Artikel 9:
var william: Produkt = {
    bild: "Instabook-2834.jpg",
}
    
//Artikel 10:
var harry: Produkt = {
     bild: "Instabook-6657.jpg",
}
    
//Artikel 11:
var kate: Produkt = {
    bild: "Instabook-2355.jpg",
}
    
//Artikel 12:
var eve: Produkt = {
    bild: "Instabook-2742.jpg",
}
    
//Artikel 13:
var donau: Produkt = {
    bild: "Instabook-2778.jpg",
} 

 //Artikel 14:
var fürth: Produkt = {
    bild: "Wiese-0250.jpg",
} 
    
//Artikel 15:
var augsburg: Produkt = {
     bild: "Instabook-2824.jpg",
} 

//Artikel 16:
var peter: Produkt = {
     bild: "Instabook-4670.jpg",
} 
    
 var shopProdukte :  Produkt[] = [porto, heidelberg, münchen, wetzlar, freiburg, frankfurt, bayreuth, richard, william, harry, kate, eve, donau, fürth, augsburg, peter] 
      
     // 11.3 Dynamische Inhaltserzeugung
    
     function writeHTML() : void {
        
        var node : any = document.getElementById("content");
        
        var childNodeHTML : string;
        
        var i: number = 0;
        
        while (i < shopProdukte.length){
            
            childNodeHTML = "<div class='Box'>";
            childNodeHTML += " <img class='Produktbilder' src=Pictures/";
            childNodeHTML += shopProdukte[i].bild;
            childNodeHTML += ">";
           node.innerHTML += childNodeHTML;
             
            i++;
           }
        }
    
 
 var bilder :  Produkt[] = [porto, heidelberg, münchen, wetzlar, freiburg, frankfurt, bayreuth, richard, william, harry, kate, eve, donau, fürth, augsburg, peter]   
 
    function lieblingsbild(animals:Produkt[]){
        
        // Durchlauf des Arrays
        for (var i: number = 0; i <animals.length; i++){ 
        
            // Konditionale Abfrage – falls erfüllt, wird der Codeblock ausgeführt
               
         if (animals[i].bild == "Instabook-4575.jpg" ){ 
                console.log(animals[i].bild + " ist mein Lieblingsbild.");               
            }
            
        
        }
   }
    
    lieblingsbild(bilder)
    
    

    document.addEventListener('DOMContentLoaded', writeHTML);{}

    }

    