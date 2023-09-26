import {getData} from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import Cauldron from "./cauldron.mjs";


const execute = async () => {
    try
    {
        const data = await getData();    
        const ingredients = Ingredients.load(data);
        // showIngredients(ingredients);

        const cauldron = new Cauldron(ingredients);

        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        showPotion(potion1);
        console.log(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2);

        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3);

        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");
        showPotion(potion4);

    }

    catch(error)
    {
        console.log(error);    
    }
}

execute();

function showIngredients(data)
{
    console.log(data);
}

function showPotion(potion)
{
    console.log(`${potion.name}`); 
    console.log(`Value:         ${potion.value}`);
    console.log(`Weight:         ${potion.weight}`);
    console.log(`time:         ${potion.time}`);
    console.log(`----------------------------------------`);
}