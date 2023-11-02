const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function start_game() {
  rl.question('Wat is je naam ?? ', function(naam) {
    console.log(`Welkom ${naam}... de spel Regels !! Je krijgt elke ronden een input van (0,1) elke waarde doet een actie, maak de goede keuzes om de goede eindens te krijgen.`);
    console.log(`jan de man een zijn bestie geit verhuizen naar NEW YORK CITY!!!wanneer de twee besluiten een night on the town te doen kommen ze langs een verlaten pand. geit wil er niet in maar jan dringt door. wat gaat geit doen `);
    rl.question('Wat ga geit doen ??? [0] geit gaat er in  of  [1] geit gaat er niet in: ', function(keuze_1) {
      if (keuze_1 == 1) {
        console.log('jan en giet gaan door met stappen en maken er een leuke avond van ');
        askToPlayAgain(true);
      } else {
        console.log('toen ze het verlaten pand binnen liepen was het pikken donker, ');
        console.log('jan pakt zijn zaklamp uit zijn emercenybag en verlicht de kamer. ze zijn helemaal van het patje wanneer ze de groten machine voor hun zijn, maar ze schrikken hellemaal als er man met een lange baard uit de schaduw verschijnt. de man vraagt of jan en geit geïnteresseerd zijn in om te helpen met zijn experiment');
        rl.question('Wat ga je doen ? [0] help de man  of [1] help de man niet  ?: ', function(keuze_2){
          if (keuze_2 == 0) {
            console.log('de wetenschapper opent het kleinen deurtje van de machine en duwt giet en jan erin. de wetenschapper drukt paar knopen en er verschijnen twee jaartallen op het scherm "kies een jaar" zegt hij');
            rl.question('welke kiezen ze ? [0] prehistorie ? of [1] 1912 ?  ', function(keuze_3){
              if (keuze_3 == 0) {
                console.log('geit en jan kijken om hun heen en zien dat ze in de prehistorie zijn beland. door dat ze het nog allemaal aan het in nemen zijn hebben ze niet door dat de grond aan het trillen is, ze merken het pas als het al te laat is.');
                console.log('T-REX!! RENNEN!!');
                console.log('jan en geit rennen harden dan ze ooit gerend hebben');
                console.log('maar helaas de t-rex heeft ze te pakken');
                askToPlayAgain(false);
              } else {
                console.log('plotseling zijn jan en geit niet meer in de kleine kamer maar op een groten boot, "waar zijn we? “vraagt jan, giet kijkt om zich heen en ziet twee mensen aan de punt van de boot en weet meteen waar ze zijn. "de titanic, we zijn op de titanic" schreeuwt hij. "WAT!??" schreeuwt jan harder "we gaan er aan", "niet als we het ver komen of gewoon weer terug gaan" zegt geit en wijst naar een kleine versie van de tijdmachine. "terug, ik zeg we gaan terug" zegt jan. wat gaat giet doen?    ');
                rl.question('Wat ga giet doen ?  [0] ga terug ? of [1] Proberen de mensen te redden? ', function(keuze_4){
                  if (keuze_4 == 0) {
                    console.log('geit is het met jan eens en stappen weer in de tijdmachine, ze drukken op wat knopjes en ze zijn weer terug in het verlaten pand');
                    askToPlayAgain(false);
                  } else {
                    console.log('"we blijven" zegt giet "wat?"  "we moeten deze mensen redden" antwoord geit, "hoe" zegt jan ');
                    rl.question('hoe gaan ze de mensen redden ? [0] ze draaien het schip om ? of [1] ze smelten de ijs berg ?', function(keuze_5){
                      if (keuze_5 == 0){
                          console.log('ze rennen snel naar de brug en met strijd overtuigen ze de kapitein om het schip om te draaien')
                          console.log('ze hebben iedereen gered en gaan terug naar het verlaten pand om het te vieren : (')
                        } else {
                          console.log('"we smelten de ijsberg" zegt geit. jan vraagt hoe "heb je niet iets in je emercenybag" jan graaft in zijn tas en haalt er uiteindelijk en föhn uit "geweldig! dat kunnen we gebruiken “zegt  geit. ze pakken een van de reddingsboten en rooien naar de ijsberg en smelten het met de föhn .');
                          console.log('ze hebben iedereen gered en gaan terug naar het verlaten pand om het te vieren')
                          askToPlayAgain(true);
                        }
                    });
                
                  }
                });
              }
            });
          } else {
            console.log('jan en geit gaan door met stappen en maken er een leuke avond van. ');
            askToPlayAgain(true);
          }
        });
      }
    });
  });
}

function askToPlayAgain(success) {
  const message = success ? 'WOW !!!! ' : 'Game Over :( ';
  console.log(message);
  rl.question('Wil je opnieuw spelen ??? [0] Nee [1] Ja: ', function(opnieuw) {
    if (opnieuw == '1') {
      start_game();
    } else {
      console.log('Bedankt voor het spelen!');
      rl.close();
    }
  });
}

start_game();
