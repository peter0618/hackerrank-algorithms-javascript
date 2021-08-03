import { gradingStudents, gradingStudents2 } from './GradingStudents';

// https://www.hackerrank.com/challenges/grading/problem
describe(`GradingStudents`, () => {
  describe('GradingStudents1', () => {
    it('test case 1', () => {
      const grades = [73, 67, 38, 33];
      expect(gradingStudents(grades)).toEqual([75, 67, 40, 33]);
    });

    it('test case 2', () => {
      const grades = [85, 90];
      expect(gradingStudents(grades)).toEqual([85, 90]);
    });

    it('test case 3', () => {
      const grades = [
        36, 6, 98, 25, 97, 24, 25, 70, 50, 71, 30, 14, 28, 100, 3, 26, 61, 98,
        50, 41, 5, 3, 28, 34, 0,
      ];
      expect(gradingStudents(grades)).toEqual([
        36, 6, 100, 25, 97, 24, 25, 70, 50, 71, 30, 14, 28, 100, 3, 26, 61, 100,
        50, 41, 5, 3, 28, 34, 0,
      ]);
    });
  });

  describe('GradingStudents2', () => {
    it('test case 1', () => {
      const grades = [73, 67, 38, 33];
      expect(gradingStudents2(grades)).toEqual([75, 67, 40, 33]);
    });

    it('test case 2', () => {
      const grades = [85, 90];
      expect(gradingStudents2(grades)).toEqual([85, 90]);
    });

    it('test case 3', () => {
      const grades = [
        36, 6, 98, 25, 97, 24, 25, 70, 50, 71, 30, 14, 28, 100, 3, 26, 61, 98,
        50, 41, 5, 3, 28, 34, 0,
      ];
      expect(gradingStudents2(grades)).toEqual([
        36, 6, 100, 25, 97, 24, 25, 70, 50, 71, 30, 14, 28, 100, 3, 26, 61, 100,
        50, 41, 5, 3, 28, 34, 0,
      ]);
    });
  });
});
