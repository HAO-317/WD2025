 let vorname = "HAO";
    let nachname = "LEE";
    let alter = 45;
    let geburtsort = "XI'AN";
    let groesse = 1.75; 
    let gewicht = 78; 
    let hobby = "Modellbau";
    let computerspiel = "GT, Call of Duty...";
    let lieblingsessen = "Sushi";
    let lieblingssport = "Padeln, Basketball";
    let lieblingsmodemarke = "G-Fashion";
    let lieblingsjahreszeit = "Sommer";
    let lieblingsurlaubsort = "Italy";

    let concatText = "Mein Name ist " + vorname + " " + nachname + ". Ich bin " + alter + " Jahre alt u. komme aus " + geburtsort + ". Ich bin " + groesse + "m groß u. wiege " + gewicht + "kg. Mein Hobby ist " + hobby + ". Mein Lieblingscomputerspiel ist " + computerspiel + ", und mein Lieblingsessen ist " + lieblingsessen + ". Wenn möglich, spiele ich gerne " + lieblingssport + " u. mein Lieblingsmodemarke ist " + lieblingsmodemarke + ". Meine Lieblingsjahreszeit ist der " + lieblingsjahreszeit + " und mein Lieblingsurlaubsort ist " + lieblingsurlaubsort + ".";

    let temLiText = `Mein Name ist ${vorname} ${nachname}. Ich bin ${alter} Jahre alt und komme aus ${geburtsort}. Ich bin ${groesse}m groß und wiege ${gewicht}kg. Mein Hobby ist ${hobby}. Wenn möglich, spiele ich gerne ${computerspiel}, und mein Lieblingsessen ist ${lieblingsessen}. Ich mache gerne ${lieblingssport} und mein Lieblingsmodemarke ist ${lieblingsmodemarke}. Meine Lieblingsjahreszeit ist der ${lieblingsjahreszeit} und mein Lieblingsurlaubsort ist ${lieblingsurlaubsort}.`;

    console.log(concatText);
    console.log(temLiText);
    
    let Text1 = document.getElementById('output');
    Text1.innerHTML = concatText;

    let Text2 = document.getElementById('outputTemplate');
    Text2.innerHTML = temLiText;


 