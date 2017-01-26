var React = require('react')
var ReactDOM = require('react-dom')

class AddItem extends React.Component{
  handleSubmit(e){
    if(e.keyCode === 13){
      const name = ReactDOM.findDOMNode(this.name)
      const dob = ReactDOM.findDOMNode(this.dob)
      this.props.add({ name: name.value, dob: dob.value })
      name.value = ''
      dob.value = ''
    }
  }
  render() {
    return (
      <div className="col-sm-6 text-center">
        <div className="col-sm-12 text-center">
          <input
            type="text"
            ref={(node) => this.name = node}
            className="form-control"
            placeholder="New Item"
            onKeyDown={this.handleSubmit.bind(this)}
          />
        </div>
        <div className="col-sm-12 text-center">
            <input
              type="text"
              ref={(node) => this.dob = node}
              className="form-control"
              placeholder="New Item"
              onKeyDown={this.handleSubmit.bind(this)}
            />
        </div>
      </div>
    )
  }
}

export default AddItem
