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
                          <a href="#"
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
                          <a href="#"
                             className="mt-7 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                   viewBox="0 0 165 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.2648 0C4.51651 0 0 4.51651 0 10.2648C0 16.0131 4.51651 20.5296 10.2648 20.5296C16.0131 20.5296 20.5296 16.0131 20.5296 10.2648C20.5296 4.51651 16.0131 0 10.2648 0ZM41.0591 0V20.5296H164.237V0H41.0591ZM10.2648 41.0591C4.51651 41.0591 0 45.5756 0 51.3239C0 57.0722 4.51651 61.5887 10.2648 61.5887C16.0131 61.5887 20.5296 57.0722 20.5296 51.3239C20.5296 45.5756 16.0131 41.0591 10.2648 41.0591ZM41.0591 41.0591V61.5887H164.237V41.0591H41.0591ZM10.2648 82.1183C4.51651 82.1183 0 86.6348 0 92.3831C0 98.1314 4.51651 102.648 10.2648 102.648C16.0131 102.648 20.5296 98.1314 20.5296 92.3831C20.5296 86.6348 16.0131 82.1183 10.2648 82.1183ZM41.0591 82.1183V102.648H164.237V82.1183H41.0591ZM10.2648 123.177C4.51651 123.177 0 127.694 0 133.442C0 139.19 4.51651 143.707 10.2648 143.707C16.0131 143.707 20.5296 139.19 20.5296 133.442C20.5296 127.694 16.0131 123.177 10.2648 123.177ZM41.0591 123.177V143.707H164.237V123.177H41.0591Z"
                                        fill="currentColor"/>
                              </svg>
                              <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                          </a>
                      </li>
                      <li>
                          <a href="#"
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
                      <Link to="/createJob" >
                          <a
                             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                              </svg>
                              <span className="flex-1 ms-3 whitespace-nowrap">Create Job</span>
                          </a>
                      </Link>
                      </li>
                      <li>
                          <a href="#"
                             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                   viewBox="0 0 165 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0.158691 0.130371V61.7191H61.7474V0.130371H0.158691ZM82.277 0.130371V20.6599H164.395V0.130371H82.277ZM82.277 41.1895V61.7191H143.866V41.1895H82.277ZM0.158691 82.2487V143.837H61.7474V82.2487H0.158691ZM82.277 82.2487V102.778H164.395V82.2487H82.277ZM82.277 123.308V143.837H143.866V123.308H82.277Z"
                                        fill="currentColor"/></svg>
                              <span className="flex-1 ms-3 whitespace-nowrap"><Logout /></span>
                          </a>
                      </li>
                  </ul>
              </div>
          </aside>
      </>
  )
}

export default Sidebar