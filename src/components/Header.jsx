import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdLogout, MdShoppingBasket } from 'react-icons/md';
import Logo from '../img/logo.jpg';
import Avatar from '../img/avatar.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { app } from '../firebase.config';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();
  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-4 md:px-16 drop-shadow-sm backdrop-blur-3xl">
      {/* desktop & tablet */}
      <div className="hidden md:flex h-full w-full items-center justify-between">
        <Link to={'/'} className="flex items-center gap-2">
          <img
            src={Logo}
            alt="logo"
            className="w-12 object-cover rounded-full"
          />
        </Link>
        <div className="flex items-center justify-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8">
            <Link to={'/'}>
              <li
                className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
                onClick={() => setIsMenu(false)}>
                Home
              </li>
            </Link>
            <Link to={'/menu'}>
              <li
                className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
                onClick={() => setIsMenu(false)}>
                Menu
              </li>
            </Link>
            <Link to={'/services'}>
              <li
                className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
                onClick={() => setIsMenu(false)}>
                Services
              </li>
            </Link>
            <Link to={'/about'}>
              <li
                className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
                onClick={() => setIsMenu(false)}>
                About Us
              </li>
            </Link>
          </motion.ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user && user ? user.photoURL : Avatar}
              alt="userprofile"
              className="w-10 min-w-[40px] h-10 min-h-[40px] rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-10 right-0 ">
                {user && user.email === 'dbitsolu@gmail.com' && (
                  <Link to={'/createItem'}>
                    <p
                      className="px-4 py-1 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-text"
                      onClick={() => setIsMenu(false)}>
                      New Item <FaPlus />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-1 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-text"
                  onClick={logout}>
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex items-center justify-between md:hidden h-full w-full">
        <Link to={'/'} className="flex items-center gap-2">
          <img
            src={Logo}
            alt="logo"
            className="w-12 object-cover rounded-full"
          />
        </Link>
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            alt="userprofile"
            className="w-10 min-w-[40px] h-10 min-h-[40px] rounded-full"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-10 -right-2 ">
              {user && user.email === 'dbitsolu@gmail.com' && (
                <Link to={'/createItem'}>
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-text"
                    onClick={() => setIsMenu(false)}>
                    New Item <FaPlus />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col gap-2">
                <Link to={'/'}>
                  <li
                    className="text-base px-4 py-2 text-textColor cursor-pointer hover:text-headingColor hover:bg-slate-100 duration-100 transition-all ease-in-out"
                    onClick={() => setIsMenu(!isMenu)}>
                    Home
                  </li>
                </Link>
                <Link to={'/menu'}>
                  <li
                    className="text-base px-4 py-2 text-textColor cursor-pointer hover:text-headingColor hover:bg-slate-100 duration-100 transition-all ease-in-out"
                    onClick={() => setIsMenu(!isMenu)}>
                    Menu
                  </li>
                </Link>
                <Link to={'/services'}>
                  <li
                    className="text-base px-4 py-2 text-textColor cursor-pointer hover:text-headingColor hover:bg-slate-100 duration-100 transition-all ease-in-out"
                    onClick={() => setIsMenu(!isMenu)}>
                    Services
                  </li>
                </Link>
                <Link to={'/about'}>
                  <li
                    className="text-base px-4 py-2 text-textColor cursor-pointer hover:text-headingColor hover:bg-slate-100 duration-100 transition-all ease-in-out"
                    onClick={() => setIsMenu(!isMenu)}>
                    About Us
                  </li>
                </Link>
              </ul>
              <p
                className="m-2 py-2 flex items-center justify-center gap-3 rounded-md shadow-md cursor-pointer bg-gray-200 hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-text"
                onClick={logout}>
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
