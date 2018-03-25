var portfolio;
(function (portfolio) {
    //Artikel 1 erstellt aus dem Interface:
    var porto = {
        bild: "Instabook-4416.jpg",
    };
    //Artikel 2 erstellt aus dem Interface:
    var heidelberg = {
        bild: "Instabook-3195.jpg",
    };
    //Artikel 3 erstellt aus dem Interface:
    var münchen = {
        bild: "Instabook-4575.jpg",
    };
    //Artikel 4:
    var wetzlar = {
        bild: "Wiese-1565.jpg",
    };
    //Artikel 5:
    var freiburg = {
        bild: "Wiese-1504.jpg",
    };
    //Artikel 6:
    var frankfurt = {
        bild: "Wiese-1495.jpg",
    };
    //Artikel 7:
    var bayreuth = {
        bild: "Wiese-1279.jpg",
    };
    //Artikel 8:
    var richard = {
        bild: "Instabook-3687.jpg",
    };
    //Artikel 9:
    var william = {
        bild: "Instabook-2834.jpg",
    };
    //Artikel 10:
    var harry = {
        bild: "Instabook-6657.jpg",
    };
    //Artikel 11:
    var kate = {
        bild: "Instabook-2355.jpg",
    };
    //Artikel 12:
    var eve = {
        bild: "Instabook-2742.jpg",
    };
    //Artikel 13:
    var donau = {
        bild: "Instabook-2778.jpg",
    };
    //Artikel 14:
    var fürth = {
        bild: "Wiese-0250.jpg",
    };
    //Artikel 15:
    var augsburg = {
        bild: "Instabook-2824.jpg",
    };
    //Artikel 16:
    var peter = {
        bild: "Instabook-4670.jpg",
    };
    var shopProdukte = [porto, heidelberg, münchen, wetzlar, freiburg, frankfurt, bayreuth, richard, william, harry, kate, eve, donau, fürth, augsburg, peter];
    // 11.3 Dynamische Inhaltserzeugung
    function writeHTML() {
        var node = document.getElementById("content");
        var childNodeHTML;
        var i = 0;
        while (i < shopProdukte.length) {
            childNodeHTML = "<div class='Box'>";
            childNodeHTML += " <img class='Produktbilder' src=Pictures/";
            childNodeHTML += shopProdukte[i].bild;
            childNodeHTML += ">";
            node.innerHTML += childNodeHTML;
            i++;
        }
    }
    var bilder = [porto, heidelberg, münchen, wetzlar, freiburg, frankfurt, bayreuth, richard, william, harry, kate, eve, donau, fürth, augsburg, peter];
    function lieblingsbild(animals) {
        // Durchlauf des Arrays
        for (var i = 0; i < animals.length; i++) {
            // Konditionale Abfrage – falls erfüllt, wird der Codeblock ausgeführt
            if (animals[i].bild == "Instabook-4575.jpg") {
                console.log(animals[i].bild + " ist mein Lieblingsbild.");
            }
        }
    }
    lieblingsbild(bilder);
    document.addEventListener('DOMContentLoaded', writeHTML);
    { }
})(portfolio || (portfolio = {}));
