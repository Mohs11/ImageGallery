import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new SearchPipe();

  it('returns/finds "a" in "[ABC, XZY]" ', () => {
    expect(pipe.transform(
      [ // data
        {src: 'asd', title: "ABC"},
        {src: 'asd', title: "XYZ"}
      ],
      // search Text
       'a'
       )).toEqual([{ src: 'asd', title: 'ABC' }]);
  });

});