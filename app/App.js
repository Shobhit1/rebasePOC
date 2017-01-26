var React = require('react')
var ReactDOM = require('react-dom')
var Rebase = require('re-base')
var List = require('./List')
var AddItem = require('./AddItem')

var base = Rebase.createClass({
  apiKey: "AIzaSyCkjw7EOUP5qPNNBEj9w1wlkQp-qsJGt4c",
  authDomain: "learnfirebase-977b6.firebaseapp.com",
  databaseURL: "https://learnfirebase-977b6.firebaseio.com",
  storageBucket: "learnfirebase-977b6.appspot.com",
  messagingSenderId: "249144026512"
})
console.log('Please change to your own firebase address in app/App.js')

const protoTypeObject = {
  1: {
    dob: 'November 28, 1988',
    name: 'Shobhit Agarwal',
  },
  2: {
    dob: 'June 23, 1912',
    name: 'Alan Turing',
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list: [],
      loading: true
    }
  }
  componentDidMount() {
    this.ref = base.syncState('todoList', {
      context: this,
      state: 'list',
      asArray: true,
      then(){
        this.setState({ loading: false })
      }
    })
  }
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }
  handleAddItem(newItem) {
    this.setState({
      list: this.state.list.concat([newItem])
    })
  }
  handleRemoveItem(index) {
    var newList = this.state.list
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-offset-3">
            <div className="col-sm-12">
              <h3 className="text-center"> re-base Todo List </h3>
              <AddItem add={this.handleAddItem.bind(this)}/>
              {this.state.loading === true ? <h3> LOADING... </h3> : <List items={this.state.list} remove={this.handleRemoveItem.bind(this)}/>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
