/** 子供のダンジョン名 */
type ChildDungeon = "Deku Tree" | "Dodongo's Cavern" | `Jabu Jabu` | "Bottom of the well";

/** 大人のダンジョン名 */
type AdultDungeon = "Forest Temple" | "Fire Temple" | "Water Temple" | "Spirit Temple" |
  "Shadow Temple" | "Ice Cavern" | "Gerudo Training Ground" | "Ganon's Castle";

/** ダンジョン名 */
export type Dungeon = ChildDungeon | AdultDungeon;

/** オーバーワールド名 */
export type Overworld = "Hyrule Field" | "Lost Wood" | "Sacred Forest Meadow" | "Death Mountain Trail" |
  "Death Mountain Crater" | "Zora's River" | "Zora's Fountain" | "Lake Hylia" |
  "Hyrule Castle" | "Gerudo Valley" | "Gerudo's Fortress" | "Haunted Wasteland" |
  "Desert Colossus" | "Graveyard";

/** 町名 */
export type Town = "Kokiri Forest" | "Kakariko Village" | "Zora's Domain" | "Goron City" | "Lon Lon Ranch";

/** オカリナの歌名 */
export type OcarinaSong = "Zelda's Lullaby" | "Epona's Song" | "Saria's Song" |
  "Sun's Song" | "Song of Time" | "Song of Storm" |
  "Minuet of Forest" | "Bolero of Fire" | "Serenade of Water" |
  "Nocturne of Shadow" | "Requiem of Spirit" | "Prelude of Light";
