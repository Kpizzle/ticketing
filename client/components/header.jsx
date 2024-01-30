import Link from 'next/link';

const header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkconfig) => linkconfig)
    .map(({ label, href }) => {
      return (
        <li className='nav-item' key={href}>
          <Link href={href} style={{ textDecoration: 'none' }}>
            <div className='nav-link'>{label}</div>
          </Link>
        </li>
      );
    });

  return (
    <nav className='px-5 navbar navbar-light bg-light'>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <div className='navbar-brand'>Get Tix</div>
      </Link>

      <div className='d-flex justify-content-end'>
        <ul className='nav d-flex align-items-center'>{links}</ul>
      </div>
    </nav>
  );
};

export default header;
