import React from 'react';
import { connect } from 'react-redux'
import { updateName } from '../store/actions/userAction';
import Page from '../components/page';

export class Index extends React.Component {
  render() {
    return (
      <div>
        <div className="hero">
        
        </div>
        <style jsx>{`
  
        `}</style>
      </div>
    )
  }
}

export default Page(connect(state=>state)(Index));