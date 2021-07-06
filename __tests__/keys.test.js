import Keys from '../src/js/keys.js'

describe('Keys', () => {

  test("should return the array position for the root note", () => {
    let KeyMaster = new Keys();
    expect(KeyMaster.ionianKey('F#')).toEqual(6);

  })
  // test('should return scale for F# in ionian', () => {
  //   let fSharp = new Keys();
  //   fSharp.ionianKey('F#');
  //   expect(fSharp.ionian).toEqual(["F#","G#","A#","B","C#","D#","F","F#"]);
  // });
});