import React from 'react'
import { Nav, Logo, NavLink, Bars, NavMenu } from './HeaderElements'
import { useHistory } from 'react-router-dom'

const Header = ({ toggle }) => {
  const { push } = useHistory()
  const goPage = () => push('/manager')
  return (
    <div className='Container'>
      <Nav>
        <Logo onClick={() => push('https://www.linkedin.com/in/luizbeserra/')}>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4D03AQGkRyTU3rf5vQ/profile-displayphoto-shrink_800_800/0/1629592606040?e=1637193600&v=beta&t=uBHYeKAa3tF-yz-t7lUwBNWpuJtrFonJjJVjhuML5xg'
            alt='logo'
            style={{ 'border-radius': '50%' }}
          />
        </Logo>
        <NavMenu>
          <NavLink className='menu-item' to='gallery' smooth>
            Galeria
          </NavLink>
          <NavLink className='menu-item' to='upload' smooth>
            Envie sua foto
          </NavLink>
          <NavLink className='menu-item' onClick={goPage}>
            Gerenciador
          </NavLink>
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  )
}

export default Header
