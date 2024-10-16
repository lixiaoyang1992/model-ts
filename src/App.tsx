import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Basic from './Basic';
import Custom from './Custom';
import Jotai from './Jotai';
import Mobx from './Mobx';
import Valtio from './Valtio';
import Zustand from './Zustand';

export default function App() {
  return (
    <div>
      <h1>Example</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Basic />} />
          <Route path="custom" element={<Custom />} />
          <Route path="zustand" element={<Zustand />} />
          <Route path="mobx" element={<Mobx />} />
          <Route path="jotai" element={<Jotai />} />
          <Route path="valtio" element={<Valtio />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Basic</Link>
          </li>
          <li>
            <Link to="/custom">custom</Link>
          </li>
          <li>
            <Link to="/zustand">zustand</Link>
          </li>
          <li>
            <Link to="/mobx">mobx</Link>
          </li>
          <li>
            <Link to="/jotai">jotai</Link>
          </li>
          <li>
            <Link to="/valtio">valtio</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
