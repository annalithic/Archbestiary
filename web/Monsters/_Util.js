const damagePerLevel = [4.99,5.56,6.16,6.81,7.5,8.23,9,9.82,10.7,11.62,12.6,13.64,14.74,15.91,17.14,18.45,19.83,21.29,22.84,24.47,26.19,28.01,29.94,31.96,34.11,36.36,38.75,41.26,43.91,46.7,49.65,52.75,56.01,59.45,63.08,66.89,70.91,75.13,79.58,84.26,89.18,94.35,99.8,105.52,111.53,117.86,124.5,131.49,138.83,146.53,154.63,163.14,172.07,181.45,191.3,201.63,212.48,223.87,235.83,248.37,261.53,275.33,289.82,305.01,320.94,337.65,355.18,373.55,392.81,413.01,434.18,456.37,479.62,504,529.54,556.3,584.35,613.73,644.5,676.75,710.52,745.89,782.94,821.73,862.36,904.9,949.44,996.07,1044.89,1096,1149.5,1205.5,1264.11,1325.45,1389.64,1456.82,1527.12,1600.68,1677.64,1758.17,];
const lifePerLevel = [22,26,31,36,42,48,55,62,70,78,87,97,107,119,131,144,158,173,190,207,226,246,267,290,315,341,370,400,432,467,504,543,585,630,678,730,785,843,905,972,1042,1118,1198,1284,1375,1472,1575,1685,1802,1927,2059,2200,2350,2509,2678,2858,3050,3253,3469,3698,3942,4201,4476,4768,5078,5407,5756,6127,6520,6937,7380,7850,8348,8876,9436,10030,10660,11328,12036,12787,13582,14425,15319,16265,17268,18331,19457,20649,21913,23250,24667,26168,27756,29438,31220,33105,35101,37214,39450,41817,];
const armourPerLevel = [16,23,30,39,48,59,71,84,99,115,133,152,174,198,225,254,286,321,360,402,449,500,556,616,683,756,835,922,1016,1120,1232,1354,1488,1633,1790,1962,2148,2351,2571,2811,3070,3352,3658,3990,4350,4740,5163,5621,6118,6656,7238,7869,8552,9290,10090,10955,11890,12902,13996,15178,16457,17838,19330,20943,22685,24566,26597,28790,31158,33714,36473,39449,42661,46127,49865,53896,58245,62934,67990,73441,79317,85651,92477,99834,107762,116303,125506,135420,146098,157600,169987,183326,197690,213156,229806,247731,267026,287795,310148,334204,];
const evasionPerLevel = [67,86,104,124,144,166,188,211,234,259,285,311,339,368,397,428,460,493,527,563,600,638,677,718,760,804,849,896,944,994,1046,1100,1155,1212,1271,1332,1395,1460,1528,1597,1669,1743,1819,1898,1979,2063,2150,2239,2331,2426,2524,2626,2730,2837,2948,3063,3180,3302,3427,3556,3689,3826,3967,4112,4262,4416,4575,4739,4907,5081,5260,5444,5633,5828,6029,6235,6448,6667,6892,7124,7362,7608,7860,8120,8388,8663,8946,9237,9536,9844,10160,10486,10821,11165,11519,11883,12258,12643,13038,13445,];
const evasiveEvasionPerLevel = [76,102,130,159,189,220,252,286,321,358,396,435,475,518,562,607,654,703,754,806,861,917,975,1036,1098,1163,1230,1299,1371,1445,1521,1601,1683,1767,1855,1945,2038,2135,2235,2338,2444,2554,2667,2784,2904,3029,3158,3290,3427,3568,3714,3864,4019,4179,4343,4513,4688,4868,5054,5246,5444,5647,5857,6073,6295,6525,6761,7004,7255,7513,7779,8052,8334,8624,8922,9230,9546,9872,10207,10552,10907,11272,11648,12035,12433,12842,13263,13696,14142,14600,15072,15557,16055,16568,17096,17638,18195,18769,19358,19964,];
const accuracyPerLevel = [14,15,15,16,17,18,19,20,21,23,24,25,26,28,29,31,32,34,35,37,39,41,43,45,47,49,52,54,57,59,62,65,68,71,74,77,81,84,88,92,96,100,105,109,114,119,124,129,135,140,146,152,159,165,172,179,187,195,203,211,220,229,238,247,257,268,279,290,301,314,326,339,352,366,381,396,412,428,444,462,480,499,518,538,559,580,603,626,650,675,701,728,755,784,814,845,877,910,945,980,];
const fireRes = [[0,0,0,0,0,0,0,0,0,10,0,0,0,0,7,0,0,5,20,0,0,0,15,10,0,25,0,0,0,19,19,0,0,12,15,15,10,10,15,40,40,40,70,40,40,40,40,0,0,], [0,20,0,0,0,15,0,0,10,20,0,0,0,0,15,0,0,10,45,0,0,0,34,23,0,55,0,0,0,41,41,0,0,27,30,30,20,20,30,40,40,40,70,40,40,40,40,20,25,], [0,40,0,0,0,30,0,0,20,40,0,0,0,0,30,0,0,20,75,0,0,0,52,37,0,85,0,0,0,64,64,0,0,42,40,50,30,30,40,40,40,40,70,40,40,40,40,35,40,]];
const coldRes = [[0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,7,7,5,0,20,0,0,15,10,15,0,25,0,0,19,0,19,19,12,15,15,10,10,15,40,40,40,40,70,40,40,40,0,0,], [0,0,20,0,0,0,15,15,10,0,20,0,0,0,0,15,15,10,0,45,0,0,34,23,34,0,55,0,0,41,0,41,41,27,30,30,20,20,30,40,40,40,40,70,40,40,40,20,25,], [0,0,40,0,0,0,30,30,20,0,40,0,0,0,0,30,30,20,0,75,0,0,52,37,52,0,85,0,0,64,0,64,64,42,40,50,30,30,40,40,40,40,40,70,40,40,40,35,40,]];
const lightningRes = [[0,0,0,0,0,0,0,0,0,0,0,10,7,0,0,7,0,5,0,0,20,0,0,10,0,0,0,25,0,0,0,19,0,12,15,15,10,10,15,40,40,40,40,40,70,40,40,0,0,], [0,0,0,20,0,0,15,0,10,0,0,20,15,0,0,15,0,10,0,0,45,0,0,23,0,0,0,55,0,0,0,41,0,27,30,30,20,20,30,40,40,40,40,40,70,40,40,20,25,], [0,0,0,40,0,0,30,0,20,0,0,40,30,0,0,30,0,20,0,0,75,0,0,37,0,0,0,85,0,0,0,64,0,42,40,50,30,30,40,40,40,40,40,40,70,40,40,35,40,]];
const chaosRes = [[0,0,0,0,0,0,0,0,0,0,0,0,7,10,7,0,7,0,0,0,0,20,0,0,15,0,0,0,25,0,19,0,19,0,7,7,5,5,7,20,20,20,20,20,20,20,60,0,0,], [0,0,0,0,20,15,0,15,0,0,0,0,15,20,15,0,15,0,0,0,0,45,0,0,34,0,0,0,55,0,41,0,41,0,20,20,12,12,20,20,20,20,20,20,20,20,60,12,15,], [0,0,0,0,40,30,0,30,0,0,0,0,30,40,30,0,30,0,0,0,0,75,0,0,52,0,0,0,85,0,64,0,64,0,25,30,20,20,25,20,20,20,20,20,20,20,60,20,25,]];
const globalBase = 3.885209;
const globalIncrement = 0.360246;
const damageTypes = [" Physical", " Fire", " Cold", " Lightning", " Chaos"];

export function SetStats(level, lifeMult, ailmentMult, armourMult, evasionMult, esMult, accuracyMult, resistance) {
    document.getElementById("levelOut").value = level;
    document.getElementById("life").innerHTML = ~~(lifePerLevel[level - 1] * lifeMult/100);
    document.getElementById("ailment").innerHTML = ~~(lifePerLevel[level - 1] * ailmentMult/100);
    document.getElementById("arm").innerHTML = ~~(armourPerLevel[level - 1] * (armourMult/100 * 0.4)); //Armour tests inconclusive, but it's definitely smaller than the default
    document.getElementById("eva").innerHTML = ~~(evasionPerLevel[level - 1] * (1-evasionMult/100) + evasiveEvasionPerLevel[level - 1] * (evasionMult/100)); //Assuming "Evasive Monsters" means 100% evasion mult
	document.getElementById("es").innerHTML = ~~(lifePerLevel[level - 1] * esMult/100);
	document.getElementById("accuracy").innerHTML = ~~(accuracyPerLevel[level - 1] * accuracyMult/100);
    let difficulty = level >  45 ? level > 67 ? 2 : 1 : 0;
    document.getElementById("fire").innerHTML = fireRes[difficulty][resistance];
    document.getElementById("cold").innerHTML = coldRes[difficulty][resistance];
    document.getElementById("lightning").innerHTML = lightningRes[difficulty][resistance];
    document.getElementById("chaos").innerHTML = chaosRes[difficulty][resistance];
}


export function SetDamage(id, level, base, incremental, min, max, type) {
    let mult = (globalBase + globalIncrement * (level - 1)) * base * Math.pow(1 + incremental, level - 1);
    document.getElementById(id).innerHTML = "Deals " + Math.round(mult * min) + " to " + Math.round(mult * max) + damageTypes[type] + " Damage";
}

export function SetAttack(id, level, damageMult, damageSpread, effectMult) {
	let mult = damagePerLevel[level - 1] * damageMult * effectMult / 10000;
	document.getElementById(id).innerHTML = "Physical Damage: " + Math.round(mult * (100 - damageSpread) / 100) + "-" + Math.round(mult * (100 + damageSpread) / 100);
}

export function SetDot(id, level, base, incremental, val, type) {
    let mult = (globalBase + globalIncrement * (level - 1)) * base * Math.pow(1 + incremental, level - 1) / 0.06;
    document.getElementById(id).innerHTML = "Deals " + Math.round(mult * val / 6)/10 + damageTypes[type] + " Damage per Second";
}

export function SetCooldown(id, level, levelReqs, storedUses, cooldowns) {
	let tier = 0; for(let i = 1; i < levelReqs.length; i++) { if(levelReqs[i] <= level) tier = i; }
	if(storedUses[tier] > 1) document.getElementById(id).innerHTML = "Cooldown Time: " + cooldowns[tier] / 1000 + " Sec (" + storedUses[tier] + " Uses)";
	else                     document.getElementById(id).innerHTML = "Cooldown Time: " + cooldowns[tier] / 1000 + " Sec";
}

export function SetLevelText(id, level, levelReqs, levelText) {
	let tier = 0; for(let i = 1; i < levelReqs.length; i++) { if(levelReqs[i] <= level) tier = i; }
	document.getElementById(id).innerHTML = levelText[tier];
	document.getElementById(id).style.display = levelText[tier] == "" ? "none" : "table-cell";
}

export function SetIntStat(id, level, stat, levelReqs, values) {
	let tier = 0; for(let i = 1; i < levelReqs.length; i++) { if(levelReqs[i] <= level) tier = i; }
	document.getElementById(id).innerHTML = stat + " " + values[tier];
	document.getElementById(id).style.display = values[tier] == 887887 ? "none" : "table-cell";
}

export function SetFloatStat(id, level, stat,  levelReqs, values, base, incremental) {
	let mult = (globalBase + globalIncrement * (level - 1)) * base * Math.pow(1 + incremental, level - 1);
	let tier = 0; for(let i = 1; i < levelReqs.length; i++) { if(levelReqs[i] <= level) tier = i; }
	document.getElementById(id).innerHTML = stat + " " + Math.round(values[tier] * mult);
}