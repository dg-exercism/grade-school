//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.studentBody = {}
  }

  roster() {
    return this.studentBody
  }

  add(name, grade) {
    if (!this.studentBody[grade]) {
      this.studentBody[grade] = []
    }
    this.studentBody[grade].push(name)
    this.studentBody[grade] = this.studentBody[grade].sort()
  }

  grade(number) {
    if (this.studentBody[number]) {
      return this.studentBody[number]
    } else {
      return []
    }
  }
}
