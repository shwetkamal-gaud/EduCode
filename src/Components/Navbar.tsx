
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navbarData = {
  routes: [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: 'Courses',
      path: '/courses'
    },
    {
      id: 3,
      name: 'Pricing',
      path: '/pricing'
    },

  ],
  accountVerify: [
    {
      id: 1,
      name: 'Login',
      path: '/access-account'
    },
    {
      id: 2,
      name: 'Sign up',
      path: '/get-started'
    }
  ],
  logoTitle: "Shwetkamal Gaud",
}

const Navbar = () => {
  const { routes, logoTitle, accountVerify } = navbarData
  const pathname = usePathname()
  return (
    < nav className={`navbar navbar-expand-lg fixed-top navbar-light p-2`} >
      <div className="container-fluid px-4">
        <a className="navbar-brand   d-flex flex-row align-items-center gap-1" href="#" >

          {logoTitle}

        </a>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="sidenav offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"

        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title d-flex justify-content-center align-items-center gap-1 " id="offcanvasNavbarLabel">
              {logoTitle}</h5>
            <button type="button" className="btn-close border-0 shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>

          </div>
          <div className="offcanvas-body d-flex flex-column justify-content-between justify-content-lg-end">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center justify-content-lg-end flex-wrap gap-4" >
              {routes.map((item, index) => (
                <Link
                  href={item.path}
                  key={index}
                  style={{
                    borderBottom: pathname === item.path ? '1px solid #000' : '',
                    fontFamily: 'FiraCode',
                    fontWeight: pathname === item.path ? 600 : 500,
                    padding: '0rem 1rem ',
                    textDecoration: 'none',
                  }}
                  className="drawer-link nav-item"
                >
                  {item.name}

                </Link>
              ))}
              <div className='vr align-self-center' style={{ height: '30px' }}></div>
              <div className='d-flex gap-3'>
                {accountVerify.map((item, index) => {
                  return (
                    <button key={index} className='btn btn-success rounded '  >
                      <a href={item.path} className='nav-item text-white'>{item.name}</a>
                    </button>
                  )
                })}
              </div>
            </ul>

          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar