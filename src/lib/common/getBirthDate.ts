const getBirthDate = (type: "year" | "month" | "date") => {
  const now = new Date();
  switch (type) {
    case "year":
      const yearList: (string | number)[] = ["Year"];
      for (let year = now.getFullYear(); year >= 1900; year--) {
        yearList.push(year);
      }
      return yearList;
    case "month":
      return ["Month", 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    case "date":
      const dayList: (string | number)[] = ["Day"];
      const lastDay = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0,
      ).getDate();
      for (let day = 1; day <= lastDay; day++) {
        dayList.push(day);
      }
      return dayList;
  }
};

export default getBirthDate;
