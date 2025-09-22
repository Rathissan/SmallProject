function decoupeur(str){
  return str.split(/:/).map(el => el.trim());//trim() retire les espaces inutiles
}

function getElement(str) {
  return str.split("\n").map(rows => {
    let parts = decoupeur(rows);;
    if (parts.length === 3) {
      return {
        name: parts[0],
        price: Number(parts[1]),
        qty: Number(parts[2])
      };
    }
    return null;
  });
}

function calculTotal(items) {
  return items.reduce((acc, item) => {
    if (!item) return acc; //ignore null ou undefined
    return acc + (item.price || 0) * (item.qty || 0);
  }, 0);
}

function correctionBudget(items, budget){
  let total = calculTotal(items);
  if(total <= budget){
    return {total, ajustements : []};
  }
  
  let ajustements = {};//tab qui va contenir les elements a retirer afin de rester dans le budget
  
  items.sort((a,b)=>b.price-a.price);//on trie le tab d'objet en fonction des prix
  for(let item of items){
    let compteur =0;
    while(item.qty > 0 && total > budget){
      item.qty--;
      total -= item.price;
      compteur++;
    }
    if (compteur > 0) {
      ajustements[item.name] = (ajustements[item.name] || 0) + compteur;
    }
    if (total <= budget) break;
  }
  return { total, ajustements };
}
function update(){
  let contenu = document.getElementById("items").value;
  let elements = getElement(contenu);
  let devis = calculTotal(elements);

  let Budget  = document.getElementById("budget").value;
  let Total = correctionBudget(elements, Budget);

  document.getElementById("Total").innerHTML="DEVIS ="+ devis +"€";
  document.getElementById("detail").innerHTML="TOTAL ="+ Total.total +"€";
   let affichage = Object.entries(Total.ajustements)
    .map(([nom, qty]) => `${nom}: ${qty}`)
    .join("<br>");

  document.getElementById("to-remove").innerHTML = affichage||"" ;
}

// Premier calcul au chargement
update();

// Calcul automatique à chaque saisie
document.getElementById("items").addEventListener("input", update);