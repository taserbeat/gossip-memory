import memoryReducer, { MemoryState, addWayOfTheHero, removeWayOfTheHero, addFoolishChoice, removeFoolishChoice, addLocationHint, removeLocationHint } from './memorySlice';
import { WayOfTheHero, FoolishChoice, LocationHint } from '../../types/memory';

describe("memory reducer", () => {
  const initialState: MemoryState = {
    wayOfTheHeros: [],
    foolishChoices: [],
    locationHints: [],
  };

  /* 初期ステート */
  it("should handle initial state", () => {
    const expected: MemoryState = {
      wayOfTheHeros: [],
      foolishChoices: [],
      locationHints: [],
    };

    const actual = memoryReducer(undefined, { type: undefined });

    expect(actual).toEqual(expected);
  });

  /* アクション */
  it("should add Way of the Hero", () => {
    const expected: WayOfTheHero[] = [{ hint: "Deku Tree" }];

    const actual = memoryReducer(initialState, addWayOfTheHero({ hint: "Deku Tree" }));

    expect(actual.wayOfTheHeros).toEqual(expected);
  });

  it("should remove Way of the Hero", () => {
    const startedState: MemoryState = {
      wayOfTheHeros: [{ hint: "Deku Tree" }, { hint: "Dodongo's Cavern" }],
      foolishChoices: [],
      locationHints: [],
    }

    const expected: WayOfTheHero[] = [{ hint: "Deku Tree" }];

    const actual = memoryReducer(startedState, removeWayOfTheHero({ hint: "Dodongo's Cavern" }));

    expect(actual.wayOfTheHeros).toEqual(expected);
  });

  it("should add Foolish choice", () => {
    const expected: FoolishChoice[] = [{ hint: "Deku Tree" }];

    const actual = memoryReducer(initialState, addFoolishChoice({ hint: "Deku Tree" }));

    expect(actual.foolishChoices).toEqual(expected);
  });

  it("should remove Foolish choice", () => {
    const startedState: MemoryState = {
      wayOfTheHeros: [],
      foolishChoices: [{ hint: "Deku Tree" }, { hint: "Dodongo's Cavern" }],
      locationHints: [],
    };

    const expected: FoolishChoice[] = [{ hint: "Deku Tree" }];

    const actual = memoryReducer(startedState, removeFoolishChoice({ hint: "Dodongo's Cavern" }));

    expect(actual.foolishChoices).toEqual(expected);
  });

  it("should add Location hint", () => {
    const expected: LocationHint[] = [{ location: "Anjus Chickens", hint: "Strength upgrade" }];

    const actual = memoryReducer(initialState, addLocationHint({ location: "Anjus Chickens", hint: "Strength upgrade" }));

    expect(actual.locationHints).toEqual(expected);
  });

  it("should remove Location hint", () => {
    const startedState: MemoryState = {
      wayOfTheHeros: [],
      foolishChoices: [],
      locationHints: [{ location: "Anjus Chickens", hint: "Strength upgrade" }, { location: "Biggoron", hint: "some reward" }],
    };

    const expected: LocationHint[] = [{ location: "Anjus Chickens", hint: "Strength upgrade" }];

    const actual = memoryReducer(startedState, removeLocationHint({ location: "Biggoron", hint: "some reward" }));

    expect(actual.locationHints).toEqual(expected);
  });

});
