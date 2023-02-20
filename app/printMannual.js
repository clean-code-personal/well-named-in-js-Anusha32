import { MajorColorNames, MinorColorNames } from "./colorNames.js";
import {ColorPair} from "./colorPair.js";
import { getColorFromPairNumber } from "./getColor.js";

function printMannual(){

    console.log("Color code Mapping Mannual:");
    console.log('Pair number | Major Color | Minor Color')

    for (let i = 1; i <= 25; i++) {
        const pair = getColorFromPairNumber(i);
        console.log(' ${code} | ${pair.majorColor} | ${pair.minorColor}');
    }
}

export {printMannual}