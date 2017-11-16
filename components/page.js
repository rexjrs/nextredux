import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Head from './head'
import Nav from './nav'

const childPage = (ChildPage) => {
    return (
        class Page extends React.Component {
            render() {
                return (
                    <Provider store={store}>
                        <div>
                            <Head />
                            <Nav />
                            <ChildPage />
                        </div>
                    </Provider>
                )
            }
        }
    )
}

export default childPage;