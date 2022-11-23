export function SearchActivity(props) {
    function handleFilter(e) {
      props.filteredFunction((prevState) => {
        return props.allActivities.filter((currentElement) => {
          return currentElement.activity
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        });
      });
      if (e.target.value === "") {
        props.filteredFunction(props.allActivities);
        return;
      }
    }
  
    return (
      <div>
        <input type="text" onChange={handleFilter} />
      </div>
    );
  }