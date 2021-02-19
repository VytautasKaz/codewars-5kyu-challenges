function sortArray(courses) {
  for (let i = 0; i < courses.length; i++) {
    courses[i] = courses[i].split("-").reverse().join("-");
  }
  courses = courses.sort();
  for (let i = 0; i < courses.length; i++) {
    courses[i] = courses[i].split("-").reverse().join("-");
  }
  return courses;
}
