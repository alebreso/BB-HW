// Write your JS here
const hero = {
  name:"pippo",
  heroic:true,
  inventory:[],
  health:10,
  weapon:{type:"bat", damage:2},
}

function rest(hero){
  if(hero.health<10){
    hero.health=10;
    displayStats();
  }else{
    hero.health=hero.health;
  }
  return hero;
}

function pickUpItem(hero,item){
  hero.inventory.push(item);
  alert(`you have picked up a ${item.type}`);
  var itemToRemove = document.getElementById(item.type);
  itemToRemove.style.display="none";

}

function equipWeapon(hero){
  if(hero.inventory.length){
    let index = hero.inventory.length;
    let weapon = hero.weapon;
    if(weapon.length!==0){
      let oldWeapon= document.getElementById(weapon.type);
      oldWeapon.style.display="inline";
    }

    weapon.type = hero.inventory[0].type;
    weapon.damage=hero.inventory[0].damage;
    hero.inventory.shift();
    displayStats();
  }else alert('inventory empty');
}

function displayStats(){
  document.getElementById('heroName').innerHTML="Name: " +hero.name.toUpperCase();
  document.getElementById('heroHealth').innerHTML="Health: " +hero.health;
  document.getElementById('heroWeapon').innerHTML="Weapon:<br> type: " + hero.weapon.type + "&emsp; damage: " + hero.weapon.damage ;

}

displayStats();
