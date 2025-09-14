const str = "Et existimans etiam aut luctuosam et victoriam luctuosam, etiam angustus factum tener insontium existimans solet. Luctuosam fecit suae victoriam levibus, quicquid factum insontium et aegrum fecit. Increpuisset quassari ita, ita corpus suae salutis fecit insontium solet, existimans caedibus solet. Aegrum ad dispendium levibus existimans ad solet luctuosam aut quicquid eius insontium, quassari ita ad quicquid victoriam aut insontium factum. Ita et etiam levibus, ita également dispendium salutis quassari increpuisset, et luctuosam dispendium ad eius cogitatum, ad offensis animus aegrum caedibus. Même increpuisset, increpuisset eius corpus victoriam et offensis suae cogitatum salutis eius insontium, quicquid suae offensis solet. Fecit solet increpuisset.";

// Remplace toutes les ponctuations par un espace pour faciliter le comptage
const strSansPonctuation = str.replace(/[^\w\s]|_/g, "");

// Compter le nombre de mots
const strWordCounter = strSansPonctuation.split(/\s+/).length;//\s+ est une expReg qui generalise tout les espaces, double espaces, tabulation et autres... 

console.log(strWordCounter);
