import { Dungeon, Overworld, Town } from "./game"


/** Way of the Hero */
/* https://wiki.ootrandomizer.com/index.php?title=Hints#Way_of_the_Hero */
export type WayOfTheHero = {
  hint: Dungeon | Overworld | Town,
}

/** Foolish choice */
/* https://wiki.ootrandomizer.com/index.php?title=Hints#Foolish_Choice */
export type FoolishChoice = {
  hint: Dungeon | Overworld | Town,
}

/** Location Hint */
/* https://wiki.ootrandomizer.com/index.php?title=List_of_all_location_hints */
export type LocationHint = {
  location: Location,
  hint: string,
}

/** Location */
type Location = AlwaysLocation | SongLocation | MinigameLocation | OverworldLocation | DungeonLocation | OtherLocation;

/** Alwaysカテゴリのロケーション */
type AlwaysLocation = "Deku Theater Mask of Truth" | "Frog Ocarina Game";

/** 歌カテゴリーのロケーション */
type SongLocation = "Song from Ocarina of Time" | "Song from Composer Grave" | "Sheik Forest Song" | "Sheik at Temple" |
  "Sheik in Crater" | "Sheik in Ice Cavern" | "Sheik in Kakariko" | "Sheik at Colossus";

/** ミニゲームカテゴリのロケーション */
type MinigameLocation = "Child Fishing" | "Adult Fishing" | "Child Shooting Gallery" |
  "Adult Shooting Gallery" | "Bombchu Bowling Bomb Bag" | "Bombchu Bowling Piece of Heart" |
  "Treasure Chest Game" | "Horseback Archery 1500 Points" | "Links House Cow";

/** オーバーワールドのロケーション */
type OverworldLocation = "10 Big Poes" | "Deku Theater Skull Mask" | "Ocarina of Time" | "Biggoron" |
  "50 Gold Skulltula Reward" | "40 Gold Skulltula Reward" | "30 Gold Skulltula Reward" | "20 Gold Skulltula Reward" |
  "Darunias Joy" | "Skull Kid" | "Lake Hylia Sun" | "Heart Piece Grave Chest" |
  "Goron City Leftmost Maze Chest" | "Gerudo Valley Hammer Rocks Chest" | "Haunted Wasteland Structure Chest" | "Composer Grave Chest" |
  "Zoras Fountain Bottom Freestanding PoH" | "Goron City Pot Freestanding PoH" | "King Zora Thawed" | "DMC Deku Scrub Bombs";

/** ダンジョンのロケーション */
type DungeonLocation = "Forest Temple Floormaster Chest" | "Fire Temple Scarecrow Chest" | "Fire Temple Megaton Hammer Chest" |
  "Water Temple River Chest" | "Water Temple Boss Key Chest" | "Gerudo Training Grounds Underwater Silver Rupee Chest" |
  "Gerudo Training Grounds Maze Path Final Chest" | "Bottom of the Well Defeat Boss" | "Silver Gauntlets Chest" |
  "Mirror Shield Chest" | "Shadow Temple Hidden Floormaster Chest";

/** MQダンジョンのロケーション */
type DungeonMQLocation = "Deku Tree MQ After Spinning Log Chest" | "Fire Temple MQ West Tower Top Chest" | "Water Temple MQ Boss Key Chest" |
  "Water Temple MQ Freestanding Key" | "Gerudo Training Grounds MQ Underwater Silver Rupee Chest" |
  "Gerudo Training Grounds MQ Ice Arrows Chest" | "Spirit Temple MQ Lower Adult Right Chest" | "Spirit Temple MQ Child Center Chest" |
  "Shadow Temple MQ Bomb Flower Chest" | "Bottom of the Well MQ Compass Chest";

/** その他のロケーション */
type OtherLocation = "Anjus Chickens" | "Boomerang Chest";

/** スタルチュラのロケーション */
type SkulltulaLocation = "GS Hyrule Castle Grotto" | "GS Hyrule Field Near Gerudo Valley" | "GS Zora's Fountain Hidden Cave" |
  "GS Wasteland Ruins" | "GS Deku Tree MQ Basement Ceiling" | "GS Jabu Jabu MQ Invisible Enemies Room" |
  "GS Fire Temple MQ Above Fire Wall Maze" | "GS Water Temple MQ North Basement" | "GS Spirit Temple MQ Lower Adult Right";
