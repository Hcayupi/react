import React from 'react'
import { Filter, Menu, Search, Plus, Sun, Bell, Settings, ChevronDown } from 'lucide-react';

function Header( {onToggleSidebar}) {
    return (
        <div className='bg-white/-80 dark:bg-slate-900/80 backdrop-blue-xl border-b 
        border-slate-200/50 dark:border-slate-700/50 px-6 py-4'>
            <div className='flex items-center justify-between'>
                {/** Left Section */}

                <div className='flex items-center space-x-4'>
                    <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300 
                    hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
                    onClick={onToggleSidebar}>
                        <Menu className='w-5 h-5' />
                    </button>
                    <div className='hidden md:block'>
                        <h1 className='text-2xl font-black text-slate-800 dark:text-white'>
                            Dashboard
                        </h1>
                        <p className=' dark:text-white '>Welcome back, Polito! Here's what's happening today</p>
                    </div>
                </div>
                <div className='flex-1 max-w-md mx-8'>
                    <div className='relative'>
                        <Search className='w-4 h-4 dark:text-white absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' />
                        <input className=' dark:border-slate-700 rounded-xl dark:text-white
                         text-slate-800 w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-860 
                         border border-slate-200 placeholder-slate-500  
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all' type='text' placeholder='Search Anything' />

                        <button className='absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-shadow-slate-600 dark:hover:text-slate-300'>
                            <Filter />
                        </button>
                    </div>
                </div>

                {/** Right */}
                <div className='flex items-center space-x-3'>
                    {/** Quick action */}
                    <button className='hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r 
                        from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-a '>
                        <Plus className='w-4 h-4' />
                        <span className='text-sm font-medium'>New</span>
                    </button>
                    {/** Toggle */}
                    <button className='p-2.5 rounded-xl  text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                        <Sun className='w-5 h-5' />
                    </button>
                    {/** Notification */}
                    <button className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:ng-slate-100 dark:hover:bg-slate-800 transition-colors'>
                        <Bell className='w-5 h-5' />
                        <span className='absolute -top-1 w-5 h-5 bg-red-500 text-white text-ws rounded-full flex items-center justify-center'>3</span>
                    </button>

                    {/** Setting */}
                    <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:ng-slate-100 dark:hover:bg-slate-800 transition-colors'>
                        <Settings className='w-5 h-5' />
                    </button>

                    {/** user profile */}
                    <div className='flex items-center space-x-3 pl-3 border-l border-slate-200
                    dark:border-slate-700'>
                        <img src='https://st2.depositphotos.com/3895623/5589/v/950/depositphotos_55896913-stock-illustration-usershirt.jpg'
                            all='User'
                            className='w-8 h-8 rounded-full ring-2 ring-blue-500'
                        />
                        <div className='hidden md:block'>
                            <p className='text-sm font-medium text-slate-500 dark:text-slate-400'> 
                                Hipólito Cayupi
                            </p>
                             <p className='text-xs  text-slate-500 dark:text-slate-400'> 
                                Administrador
                            </p>
                        </div>
                        <ChevronDown className='w-4 h-4 text-slate-400'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
