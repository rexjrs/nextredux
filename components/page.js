import React from 'react';
import Head from './head'
import Nav from './nav'

const childPage = (ChildPage) => {
    return (
        class Page extends React.Component {
            render() {
                return (
                    <div>
                        <Head/>
                        <Nav/>
                        <ChildPage />
                    </div>
                )
            }
        }
    )
}

export default childPage;