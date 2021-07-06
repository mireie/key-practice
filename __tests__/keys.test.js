import Keys from '../src/js/keys.js'

describe('Keys', () => {

  test("should return the array position for the root note ", () => {
    let inputKey = new Keys();
    inputKey.indexKey('F#');
    expect(inputKey.key).toEqual(6);

  });

  test('should add all modes as property of object for a given key', () => {
    let fSharp = new Keys();
    fSharp.indexKey("F#");
    fSharp.getModes();
    expect(fSharp.ionian).toEqual(    [6, 8, 10, 11, 13, 15, 17, 18]);
    expect(fSharp.dorian).toEqual(    [6, 8, 9,  11, 13, 15, 16, 18]);
    expect(fSharp.phrygian).toEqual(  [6, 7, 9,  11, 13, 14, 16, 18]);
    expect(fSharp.lydian).toEqual(    [6, 8, 10, 12, 13, 15, 17, 18]);
    expect(fSharp.mixolydian).toEqual([6, 8, 10, 11, 13, 15, 16, 18]);
    expect(fSharp.aeolian).toEqual(   [6, 8, 9,  11, 13, 14, 16, 18]);
    expect(fSharp.locrian).toEqual(   [6, 7, 9,  11, 12, 14, 16, 18]);
  });

  test('should return matching keys based from respective array', () => {
    let fSharp = new Keys();
    fSharp.indexKey("F#");
    fSharp.getModes();
    fSharp.sharpLoop("ionian");
    expect(fSharp.modeTemp).toEqual(["F#","G#","A#","B","C#","D#","F","F#"])
  });
});

// fSharp.ChromaticScaleSharp(ionian array);
//"F#","G#","A#","B","C#","D#","F","F#"

/*
array = [6, 8, 10, 11, 13, 15, 17, 18]
const newIonian = array.map(function(element) {
return this.ChromaticScaleSharp[element]
});
newIonian

*/