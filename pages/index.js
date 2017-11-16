import React from 'react';
import { connect } from 'react-redux'
import { add, minus } from '../store/actions/countAction';
import Page from '../components/page';

export class Index extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="hero">
          Count: {this.props.count.count}
          <br/><br/>
          <button onClick={()=>this.props.dispatch(add(1))}>Add</button>
          <button onClick={()=>this.props.dispatch(minus(1))}>Minus</button>
        </div>
        <style jsx>{`
          .hero{
            margin-left: 50px;
          }
        `}</style>
      </div>
    )
  }
}

export default Page(connect(state=>state)(Index));