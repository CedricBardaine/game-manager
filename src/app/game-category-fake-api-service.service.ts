import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { games } from "./game-list/game-data"
import { Game , GameFromAPI } from './GameInterface';


@Injectable({
  providedIn: 'root'
})
export class GameCategoryFakeApiServiceService {
  
  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Game[]> {
    //  setTimeout( () => {return of(games)} , 2500  )   ; 
    // return of(games); 
    
    while ( games.length != 0 ) games.shift() ; 
    return of(this.fetchFromAPI()); 
  }
  
  fetchFromAPI():Game[] {
    fetch('http://localhost:3000/games')
    .then(r => r.json())
    .then(r => {
      let gamesFromAPI:GameFromAPI[] = r ; 
      
      var gameRet:Game[] ; 
      gamesFromAPI.forEach(e => {
        // console.log(e.title);
        let gameToAdd:Game = {
          nom: "",
          type: "",
          image: "",
          note: null,
          description: "",
          editor: "",
        } ;
        gameToAdd.nom = "";
        gameToAdd.type = "" ; 
        gameToAdd.image = "" ; 
        gameToAdd.description = "" ; 
        gameToAdd.editor = "" ;
        
        gameToAdd.nom = e.title ; 
        e.genres.forEach(idG => {
          if (idG == 1) gameToAdd.type += "Action ";
          if (idG == 2) gameToAdd.type += "Adventure ";
          if (idG == 3) gameToAdd.type += "Indie ";
          if (idG == 4) gameToAdd.type += "MMO ";
          if (idG == 5) gameToAdd.type += "RPG ";
          if (idG == 6) gameToAdd.type += "Strategy ";
          if (idG == 7) gameToAdd.type += "FPS ";
          if (idG == 8) gameToAdd.type += "Simulation ";
          if (idG == 9) gameToAdd.type += "Casual ";
          if (idG == 10) gameToAdd.type += "Free To Play ";
          // if (idG == 11) gameToAdd.type += "11 ";
          if (idG == 12) gameToAdd.type += "Platformer ";
          if (idG == 13) gameToAdd.type += "Puzzle ";
          if (idG == 14) gameToAdd.type += "Racing ";
          if (idG == 15) gameToAdd.type += "Sport ";
          if (idG == 16) gameToAdd.type += "Arcade ";
          if (idG == 17) gameToAdd.type += "Family ";
        });
        // gameToAdd.type = e.genres.toString() ; 
        
        gameToAdd.image = e.coverImage ; 
        gameToAdd.description = e.description ; 
        gameToAdd.editor = this.editors[e.developer] ;
        
        console.log(gameToAdd.nom);
        games.push(gameToAdd);
      });
    })
    return games ; 
  }
  
  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  editors = {
    1:"Studio Wildcard",
    2:"Sloclap",
    3:"Ape Law",
    4:"Ubisoft Montreal",
    5:"Asobo Studio",
    6:"Bohemia Interactive",
    7:"AtomTeam",
    8:"Rocksteady Studios",
    9:"SCS Software",
    10:"Palmsoft",
    11:"Exordium Games",
    12:"The Fun Pimps",
    13:"Tindalos Interactive",
    14:"Triumph Studios",
    15:"Valve",
    16:"Sandbox Interactive GmbH",
    17:"Stunlock Studios",
    18:"Osome Studio",
    19:"ATLUS",
    20:"League of Geeks",
    21:"System Era Softworks",
    22:"Spike Chunsoft Co., Ltd.",
    23:"Bloober Team",
    24:"BANDAI NAMCO Studios Inc.",
    25:"Second Order",
    26:"BeamNG",
    27:"Big Ant Studios",
    28:"Pendulo Studios",
    29:"Pearl Abyss",
    30:"Ubisoft",
    31:"Playsaurus",
    32:"Cyanide Studio",
    33:"Ubisoft Quebec, in collaboration with Ubisoft Annecy, Bucharest, Kiev, Montreal, Montpellier, Shanghai, Singapore, Sofia, Toronto studios",
    34:"GSQ Games",
    35:"Grapeshot Games",
    36:"Blue Mammoth Games",
    37:"Relic Entertainment",
    38:"Kunos Simulazioni",
    39:"Freejam",
    40:"Colossal Order Ltd.",
    41:"Matt Makes Games Inc.",
    42:"System 3",
    43:"Starbreeze Studios AB",
    44:"NS STUDIO",
    45:"Studio MDHR Entertainment Inc.",
    46:"Bigmoon Entertainment",
    47:"Marvelous Inc.",
    48:"Ubisoft Quebec",
    49:"Naddic Games",
    50:"Torn Banner Studios",
    51:"Yippee! Entertainment",
    52:"Weather Factory",
    53:"Gunfire Games",
    54:"Mastfire Studios Pty Ltd",
    55:"Reflections, a Ubisoft Studio",
    56:"Hello There Games",
    57:"Airship Syndicate",
    58:"Scavengers Studio",
    59:"Darkflow Software",
    60:"Targem Games",
    61:"Behaviour Digital Inc.",
    62:"The Farm 51",
    63:"Madruga Works",
    64:"Alt Shift",
    65:"KeokeN Interactive",
    66:"RageSquid",
    67:"SUPERSCARYSNAKES",
    68:"Chromatic Games",
    69:"Arc System Works",
    70:"Code Horizon",
    71:"TEAM HORAY",
    72:"Harebrained Schemes",
    73:"Bungie",
    74:"Paradox Development Studio",
    75:"Ghost Ship Games",
    76:"Shiro Games",
    77:"Ubisoft Montreal, Red Storm, Shanghai, Toronto, Kiev",
    78:"Passtech Games",
    79:"FromSoftware, Inc.",
    80:"Inwave Labs",
    81:"QLOC",
    82:"Think Arcade",
    83:"Big Cheese Studio",
    84:"Snowhound Games",
    85:"Piranha Bytes",
    86:"Drone Champions AG",
    87:"Zachtronics",
    88:"Scott Cawthon",
    89:"Motion Twin",
    90:"Midgar Studio",
    91:"Red Hook Studios",
    92:"Nearga",
    93:"Creaky Corpse Ltd",
    94:"Subset Games",
    95:"Splash Damage",
    96:"Sports Interactive",
    97:"HopFrog",
    98:"Black Forest Games",
    99:"Elder Games",
    100:"Driven Arts",
    101:"Techland",
    102:"Dodge Roll",
    103:"Moonlit S.A.",
    104:"Ben Esposito",
    105:"Define Human Studios",
    106:"David Szymanski",
    107:"CCCP",
    108:"IronOak Games",
    109:"Codemasters",
    110:"Owned by Gravity",
    111:"Funcom",
    112:"Digital Confectioners",
    113:"Eleon Game Studios",
    114:"Klei Entertainment",
    115:"Toadman Interactive",
    116:"Ironhide Game Studio",
    117:"AMPLITUDE Studios",
    118:"Facepunch Studios",
    119:"DrinkBox Studios",
    120:"Frontier Developments",
    121:"Spiders",
    122:"New World Interactive",
    123:"Vostok Games",
    124:"Milestone S.r.l.",
    125:"Larian Studios",
    126:"Caustic Reality",
    127:"10 Chambers Collective",
    128:"TT Games Ltd",
    129:"Caged Element Inc.",
    130:"Avalanche Publishing",
    131:"Creepy Jar",
    132:"Blacklight Interactive",
    133:"Spiderling Studios",
    134:"Petroglyph",
    135:"Team Fractal Alligator",
    136:"Flaming Fowl Studios",
    137:"ertainment Inc.",
    138:"Traveller's Tales",
    139:"TT Games",
    140:"Dambuster Studios",
    141:"Crate Entertainment",
    142:"Wube Software LTD.",
    143:"Zaxis",
    144:"TALESSHOP Co., Ltd.",
    145:"KOEI TECMO GAMES CO., LTD.",
    146:"IO Interactive A/S",
    147:"TaleWorlds Entertainment",
    148:"Squad",
    149:"Megagon Industries",
    150:"Housemarque",
    151:"Cyan Worlds",
    152:"Red Dot Games",
    153:"NetherRealm Studios",
    154:"Honor Code, Inc.",
    155:"Mono Studio",
    156:"SOFF Games",
    157:"I-Inferno",
    158:"Digital Sun",
    159:"Lo-Fi Games",
    160:"Cheerdealers",
    161:"Hello Games",
    162:"Krillbite Studio",
    163:"ZA/UM",
    164:"4A Games",
    165:"Snail Games USA",
    166:"Out of the Park Developments",
    167:"Monster Games",
    168:"Redbeet Interactive",
    169:"Cryptic Studios",
    170:"Evil Mojo Games",
    171:"D-Pad Studio",
    172:"Monolith Productions",
    173:"Cassel Games",
    174:"Divine Games",
    175:"Warhorse Studios",
    176:"Cobble Games",
    177:"Heroic Leap Games",
    178:"Texel Raptor",
    179:"Baseline",
    180:"Supergiant Games",
    181:"Noio",
    182:"Presto Studios",
    183:"BetaDwarf",
    184:"Owlcat Games",
    185:"Refract",
    186:"Obsidian Entertainment",
    187:"Juggler Games",
    188:"N-RACING",
    189:"SteelRaven7",
    190:"Double Fine Productions",
    191:"Just Add Water (Development) Ltd."
  };
}
