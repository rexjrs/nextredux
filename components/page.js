import React from 'react';
import { Provider } from 'react-redux';
import { checkLang } from '../helpers/langSupport';
import { changeLang } from '../store/actions/langAction';
import store from '../store/store';
import { Router } from '../config/router';
import Head from './head';
import Nav from './nav';

const childPage = (ChildPage) => {
    return (
        class Page extends React.Component {
            componentDidMount(){
                this.checkLanguage()
            }

            checkLanguage() {
                checkLang(this.props.url, (status, result) => {
                    if(status){
                        store.dispatch(changeLang(result))
                    }else{
                        Router.pushRoute('/en'+this.props.url.asPath)
                    }
                })
            }

            render() {
                return (
                    <Provider store={store}>
                        <div>
                            <Head />
                            <Nav />
                            <ChildPage {...this.props} />
                        </div>
                    </Provider>
                )
            }
        }
    )
}

export default childPage;