
export const customSort = ({sortBy}) => {
    const sortByNameYear = (a, b) => {
        switch (sortBy) {
          case "name_asc":
            return a.title.localeCompare(b.title);
          case "name_desc":
            return b.title.localeCompare(a.title);
          case "year_asc":
            return a.publishedYear - b.publishedYear;
          case "year_desc":
            return b.publishedYear - a.publishedYear;
          default:
            return 0;
        }
      };
      return sortByNameYear
}
 