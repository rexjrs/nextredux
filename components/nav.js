import Head from './head';
import { connect } from 'react-redux'
import { Link } from '../config/router';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link route={'/'+props.lang.language.lang}>
            <a>{props.lang.language.home}</a>
          </Link>
        </li>
        <li>
          <Link route={'/'+props.lang.language.lang+'/joox'}>
            <a>{props.lang.language.joox}</a>
          </Link>
        </li>
        <li>
          <Link route={'/'+props.lang.language.lang+'/voov'}>
            <a>{props.lang.language.voov}</a>
          </Link>
        </li>
        <li>
          <Link route={'/'+props.lang.language.lang+'/login'}>
            <a>{props.lang.language.login}</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </nav>
  )
}




export default connect(state => state)(Nav)
