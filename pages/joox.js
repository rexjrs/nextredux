import React from 'react';
import { connect } from 'react-redux'
import Page from '../components/page';

export class Joox extends React.Component {
  render() {
    return (
      <div>
        <div className="hero">
          Count: {this.props.count.count}
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

export default Page(connect(state=>state)(Joox));