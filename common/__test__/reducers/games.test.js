import reducer from '../reducers/leagues.reducer';
import actions from '../reducers/leagues.actions';

describe('The leagues reducer', () => {
  describe('getting all possible leagues', () => {
    it('return an array with at least one string', () => {
      expect.assertions(1);

      // return api.generateMidi(chord_midi_type, chord_name, chord_notes)
      //   .then(response => {
      //     let statusCode = response.data.statusCode;

      //     expect(statusCode).toBe('200');
      //   });

      expect(reducer(undefined, actions.getLeagues()).leagues.length)
        .toBeGreaterThan(1)
    })
  })
})