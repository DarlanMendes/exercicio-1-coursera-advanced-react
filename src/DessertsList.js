function filterListByCalories(list) {
  list = list.filter(item => (item.calories <= 500))
  return list
}
function sortList(list) {
  list.sort((a, b) => a.calories - b.calories)
  return list
}
function DessertsList(props) {
  console.log(props.data)
  // Implement the component 
  let filteredByCalories = filterListByCalories(props.data)
  let listSorted = sortList(filteredByCalories)

  return (
    <ul>
      {listSorted.map((item,index) => (
        <li key={index}>{item.name} - {item.calories} cal</li>
      ))
      }
      </ul>
  );

}

export default DessertsList;
