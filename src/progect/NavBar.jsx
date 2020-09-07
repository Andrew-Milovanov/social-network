import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return(
        <nav className={s.nav}>
        <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.activ}>Profile</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to='/dialog' activeClassName={s.activ} >Messages</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to='/users' activeClassName={s.activ} >Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' activeClassName={s.activ}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' activeClassName={s.activ} >Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' activeClassName={s.activ}>Settings</NavLink>
      </div>
    </nav>
    )
}
export default NavBar;