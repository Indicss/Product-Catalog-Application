import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header
        style={{
          padding: '1rem 2rem',
          background: '#7a1ae8',
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div>
          <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
          <h1  style={{ margin: 0, fontSize: '1.8rem', cursor: 'pointer' }}>EBS</h1>
          </Link>

        
        </div>
        <nav>
          <Link
            to="/"
            style={{
              marginRight: '1.5rem',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'color 0.3s ease',
            }}
          >
            Magazin
          </Link>
          <Link
            to="/cart"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'color 0.3s ease',
            }}
          >
            Coș
          </Link>
        </nav>
      </header>

      <main style={{ padding: '1rem' }}>{children}</main>

      <footer
        style={{
          padding: '1rem',
          background: '#eee',
          marginTop: '2rem',
          textAlign: 'center',
        }}
      >
        <p>&copy; Created by Jalba Oleg</p>
      </footer>
    </div>
  );
};

export default Layout;
