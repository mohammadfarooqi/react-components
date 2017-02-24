// var App = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryListItem groceries={['Meat', 'Lettuce', 'Chocolate']} />
//   </div>
// );

// var GroceryListItem = (props) => {
//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };

//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.groceries[0]}</li>
//       <li>{props.groceries[1]}</li>
//       <li>{props.groceries[2]}</li>
//     </ul>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('app'));

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['Meat', 'Lettuce', 'Chocolate']} />
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };
  }

  onGroceryListItemHover() {
    this.setState({
      hovered: !this.state.hovered
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    };

    return (
      <li style={style}
          onMouseEnter={this.onGroceryListItemHover.bind(this)}
          onMouseLeave={this.onGroceryListItemHover.bind(this)}>
          {this.props.grocery}
      </li>
    );
  }
}

var GroceryList = (props) => {
  //console.log(props);
  return (
    <ul>
      {props.groceries.map(item =>
        <GroceryListItem grocery={item} />
      )}
    </ul>
  );
};


ReactDOM.render(<App />, document.getElementById('app'));
