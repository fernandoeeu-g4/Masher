import React, { Component } from "react";

import { connect } from 'react-redux'

class UserProfile extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container">
        {this.props.user ? <h4>{this.props.user.nome}</h4> : null}
        <div className="row my-5">
          <div className="col-md-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Minhas Receitas</h5>
                <a href="" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Favoritas</h5>
                <a href="" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Etctera</h5>
                <a href="" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: JSON.parse(state.user.user)
})

export default connect(mapStateToProps)(UserProfile)