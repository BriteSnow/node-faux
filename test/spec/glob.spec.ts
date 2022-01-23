import { deepStrictEqual as equal } from 'assert';
import { globCompare } from '../../src/glob.js';
import { glob } from '../../src/index.js';

const sort_data_src = ['test/data/src/pcss/0_main.pcss',
  'test/data/src/views/HomeView.pcss',
  'test/data/src/pcss/pages/home.pcss',
  'test/data/src/views/Demo/DemoButtons.pcss',
  'test/data/src/views/Demo/DemoCards.pcss',
  'test/data/src/pcss/z/other/other.pcss',
  'test/data/src/pcss/vars-colors.pcss',
  'test/data/src/views/Demo/DemoTypo.pcss'];

const src_data_expected = [
  'test/data/src/pcss/0_main.pcss',
  'test/data/src/pcss/vars-colors.pcss',
  'test/data/src/pcss/pages/home.pcss',
  'test/data/src/pcss/z/other/other.pcss',
  'test/data/src/views/HomeView.pcss',
  'test/data/src/views/Demo/DemoButtons.pcss',
  'test/data/src/views/Demo/DemoCards.pcss',
  'test/data/src/views/Demo/DemoTypo.pcss',
];

describe("glob", function () {

  it("glob-single", async () => {
    const files = await glob('src/*.ts');
    equal(files[0], 'src/glob.ts');
    equal(files.length, 4);
  });


  it("glob-array", async () => {
    const files = await glob(['src/*.ts', 'test/spec/*.ts']);
    equal(files[0], 'src/glob.ts');
    equal(files[1], 'src/index.ts');
    equal(files.length, 7);
  });


  it("glob-sort", async () => {
    const files = sort_data_src;
    const sortedFiles = files.sort(globCompare);
    equal(sortedFiles, src_data_expected);
  });


  it("glob-cwd", async () => {
    const files = await glob(['**/*.spec.ts'], 'test/spec/');
    equal(files[0], 'test/spec/glob.spec.ts');
    equal(files.length, 3);
  });


});