import React from 'react';
import Logout from './Logout';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Sidebar = () => {
  return (
      <>
          <aside id="logo-sidebar"
                 className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                 aria-label="Sidebar">
              <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                  <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
                      <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3 sm:h-7" alt="Flowbite Logo"/>
                      <span className="self-center text-xl font-semibold font-noto whitespace-nowrap dark:text-white">JobHunter</span>
                  </a>
                  <ul className="space-y-2 font-medium mt-14">
                      <li>
                          <a href="/dashboard"
                             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                   aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                              </svg>
                              <span className="ms-3">Dashboard</span>
                          </a>
                      </li>
                      <li>
                          <a href="/joblist"
                             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                   viewBox="0 0 165 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0.158691 0.130371V61.7191H61.7474V0.130371H0.158691ZM82.277 0.130371V20.6599H164.395V0.130371H82.277ZM82.277 41.1895V61.7191H143.866V41.1895H82.277ZM0.158691 82.2487V143.837H61.7474V82.2487H0.158691ZM82.277 82.2487V102.778H164.395V82.2487H82.277ZM82.277 123.308V143.837H143.866V123.308H82.277Z"
                                        fill="currentColor"/>
                              </svg>
                              <span className="flex-1 ms-3 whitespace-nowrap">Job List</span>
                          </a>
                      </li>
                      <li>
                          <div
                             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                   viewBox="0 0 165 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0.158691 0.130371V61.7191H61.7474V0.130371H0.158691ZM82.277 0.130371V20.6599H164.395V0.130371H82.277ZM82.277 41.1895V61.7191H143.866V41.1895H82.277ZM0.158691 82.2487V143.837H61.7474V82.2487H0.158691ZM82.277 82.2487V102.778H164.395V82.2487H82.277ZM82.277 123.308V143.837H143.866V123.308H82.277Z"
                                        fill="currentColor"/></svg>
                              <span className="flex-1 ms-3 whitespace-nowrap"><Logout /></span>
                          </div>
                      </li>
                  </ul>
              </div>
          </aside>
      </>
  )
}

export default Sidebar;
