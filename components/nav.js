import Head from './head';
import {Link} from '../config/router';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link route="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
      <Link route="/joox">
        <a>Joox</a>
      </Link>
    </li>
    <li>
        <Link route="/voov">
          <a>Voov</a>
        </Link>
      </li>
      <li>
        <Link route="/login">
          <a>Login</a>
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

export default Nav
