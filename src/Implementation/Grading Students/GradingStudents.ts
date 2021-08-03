export function gradingStudents(grades: number[]): number[] {
  // Write your code here
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }
    let countForMultipleOfFive = 0;
    let newGrade = grade;
    while (newGrade % 5 != 0) {
      newGrade++;
      countForMultipleOfFive++;
    }
    if (countForMultipleOfFive < 3) {
      return newGrade;
    } else {
      return grade;
    }
  });
}

/**
 * 다른 사람 풀이 참고
 * (while 문 안쓰고 % 연산 만으로 판정 및 계산 다 할 수 있어서 성능은 좋을 것 같음)
 * @param grades
 */
export function gradingStudents2(grades: number[]): number[] {
  // Write your code here
  return grades.map((grade) => {
    return grade >= 38 && grade % 5 > 2 ? grade + (5 - (grade % 5)) : grade;
  });
}
