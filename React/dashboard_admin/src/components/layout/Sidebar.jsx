import {
    BarChart3,
    Calendar,
    ChevronDown,
    CreditCard,
    FileText,
    LayoutDashboard,
    MessageSquare,
    Package,
    Settings,
    ShoppingBag,
    Users,
    Zap
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
    {
        id: 'dashboard',
        icon: LayoutDashboard,
        label: 'Dashboard',
        active: true,
        badge: 'New',
    },
    {
        id: 'analytics',
        icon: BarChart3,
        label: 'Analytics',
        submenu: [
            { id: 'overview', label: 'Overview' },
            { id: 'reports', label: 'Reports' },
            { id: 'insights', label: 'Insights' },
        ]
    },
    {
        id: 'users',
        icon: Users,
        label: 'Users',
        count: '2.4k',
        submenu: [
            { id: 'all-users', label: 'All Users' },
            { id: 'roles', label: 'Roles & Permissions' },
            { id: 'activity', label: 'User Activity' }
        ]
    },
    {
        id: 'ecommerce',
        icon: ShoppingBag,
        label: 'E-commerce',
        submenu: [
            { id: 'products', label: 'Products' },
            { id: 'orders', label: 'Orders' },
            { id: 'customers', label: 'Customers' }
        ]
    },
    {
        id: 'inventory',
        icon: Package,
        label: 'Inventory',
        count: '647'
    },
    {
        id: 'transactions',
        icon: CreditCard,
        label: 'Transactions'
    },
    {
        id: 'message',
        icon: MessageSquare,
        label: 'Message',
        badge: '12'
    },
    {
        id: 'calendar',
        icon: Calendar,
        label: 'Calendar'
    },
    {
        id: 'reports',
        icon: FileText,
        label: 'Reports'
    },
    {
        id: 'settings',
        icon: Settings,
        label: 'Settings'
    }
]

function Sidebar({ collapsed,currentPage, onPageChange }) {
   const [expandedItems, setExpandedItems] = useState(new Set(['analytics']));
    
   const toggleExpanded = (itemid)=>{
      const newExpanded = new Set(expandedItems);

      if(newExpanded.has(itemid)){
        newExpanded.delete(itemid);
      }else{
        newExpanded.add(itemid);
      }

      setExpandedItems(newExpanded);
   }



    return (
        <div className={`${collapsed ? "w-20" : "w-72"
            } transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 
        backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col 
        relative z-10` }
        >

            {/** Logo */}
            <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
                <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl 
                    flex items-center justify-center shadow-lg'>
                        <Zap className='w-6 h-6 text-white' />
                    </div>

                    {/** Conditional Rendering */}
                    {!collapsed && (
                        <div>
                            <h1 className='text-xl front-bold text-slate-800 dark:text-white'>
                                Nexus
                            </h1>
                            <p className='text-xs text-slate-500 dark:text-slate-400 '>
                                Admin Panel
                            </p>
                        </div>
                    )}
                </div>
            </div>
            {/** Navigation  I will display Dynamic Nexus*/}
            <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
                {
                    menuItems.map((item) => {
                        return (
                            <div key={item.id}>
                                <button
                                    className={`w-full flex item-center justify-between p-3 rounded-xl 
                                    transition-all duration-200 ${currentPage === item.id || item.active ?
                                    "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"+
                                    "shadow-blue-500/25" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100"+
                                    " dark:hover:bg-slate-800/50"}`}
                                
                                    onClick={()=>{
                                        if(item.submenu){
                                            toggleExpanded(item.id);
                                        }else{
                                            onPageChange(item.id);   
                                        }
                                    }}      
                                >
                                    <div className='flex items-center space-x-3'>
                                        <item.icon className={'w-5 h-5 dark:text-white'} />
                                        {/** Conditional Rendering */}
                                            {!collapsed && (
                                                <>
                                                <span className='font-medium ml-2 dark:text-white'>{item.label}</span>
                                        
                                            {item.badge && (
                                                <span className='px-2 py-1 text-xs bg-red-500 text-white 
                                                                 rounded-full'>
                                                    {item.badge}
                                                </span>
                                            )}
                                            {item.count && (
                                                <span className='px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700
                                                    text-slate-600 dark:text-slate-300 rounded-full'>
                                                    {item.count}
                                                </span>
                                            )}
                                        </>
                                            )}
                                    </div>
                                    {!collapsed && item.submenu && (
                                        <ChevronDown className={'w-4 h-4 transition-transform dark:text-white'} />)}
                                </button>
                                {/** Sub menu */}
                                {!collapsed && item.submenu && expandedItems.has(item.id) &&(
                                    <div className='ml-8 mt-2 space-y-1 dark:text-white'>
                                        {item.submenu.map((subitem) => {
                                            return <button key={subitem.id}className='w-full text-left p-2 text-sm 
                                            text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200
                                            hover:bg-slate-100 dark:hover:bg-scale-800/50 rounded-lg transition-all'
                                            onClick={()=>onPageChange(subitem.id)}>
                                                {subitem.label}
                                            </button>
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
            </nav>

            {/** User Profile */}
            {!collapsed && (<div className='p-4 border-1 border-slate-200/50 dark:border-slate-700/50'>
                <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-500/50'>
                    <img src="https://st2.depositphotos.com/3895623/5589/v/950/depositphotos_55896913-stock-illustration-usershirt.jpg"
                        alt="user"
                        className='w-10 h-10 rounded-full ring-2 ring-blue-500' />

                    <div className='flex-l min-w-0'>
                        <div className='flex-l min-w-0'>
                            <p className='text-sm font-medium text-slate-800 dark:text-white truncate'> Polito</p>
                            <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>
                                Administrador</p>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Sidebar;
