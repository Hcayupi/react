import { React, useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel
} from "@tanstack/react-table"
import defaultData from '../../utils/defaultData'
import classNames from 'classnames/bind';

const DataTable = () => {
    const [data] = useState(defaultData);

    const columns = [
        {
            accessorKey: 'name',
            header: () => <span>Nombre</span>,
            cell: info => <span className='font-bold text-green-500'>{info.getValue()}</span>
        },
        { accessorKey: 'lastName', header: () => <span>Apellido</span> },
        { accessorKey: 'age', header: () => <span>Edad</span> },
        {
            accessorKey: 'status', header: () => <span>Estado</span>,
            cell: info => {
                return (
                    <span className={classNames({
                        'text-white px-2 rounded-full font-semibold': true,
                        'bg-red-500': 'Inactive' == info.getValue(),
                        'bg-green-500': 'Active' === info.getValue()
                    })}>
                        {info.getValue()}
                    </span>
                )
            }
        },
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    });

    return (
        <div className='px-6 py-4'>
            <table className='table-auto w-full'>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className='border-b border-gray-300 text-gray-600 bg-gray-100'>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className='py-2 px-4 text-left uppercase'>
                                    {header.isPlaceholder
                                        ? null :
                                        flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className='text-white hover:bg-gray-300 hover:text-cyan-950'>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className='py-2 px-4'>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='mt-4 flex  justify-between'>
                <div className='flex items-center gap-2'>
                    <button className='text-white hg-gray-200 py-0.5 px-1 rounded border
                    border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-300'
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}>
                        {'<<'}
                    </button>
                    <button className='text-white hg-gray-200 py-0.5 px-1 rounded border 
                     border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-300'
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}>
                        {'<'}
                    </button>
                    {table.getPageOptions().map((value, key) => (
                        <button key={key} className={classNames({
                            "text-white hg-gray-200 py-0.5 px-3 font-bold rounded border border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-300": true,
                            "bg-blue-400 text-indigo-700 ": value === table.getState().pagination.pageIndex
                        })}
                            onClick={() => table.setPageIndex(value)}>
                            {value + 1}
                        </button>
                    ))}
                    <button className='text-white hg-gray-200 py-0.5 px-1 rounded border 
                     border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-300'
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}>
                        {'>'}
                    </button>
                    <button className='text-white hg-gray-200 py-0.5 px-1 rounded border 
                     border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-300'
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}>
                        {'>>'}
                    </button>
                </div>
                <div className='text-white font-semibold'>
                    Mostrando de {table.getRowModel().rows[0].id + " "}
                    a {Number(table.getRowModel().rows[table.getRowModel().rows.length - 1].id) + 1 + " "}
                    de {defaultData.length} registros
                </div>

                <div>
                    <select className='text-white border border-gray-300 rounded outline-indigo-700'
                        onChange={e => { Number(e.target.value) }}>
                        <option value="10">10 pág.</option>
                        <option value="20">20 pág.</option>
                        <option value="25">25 pág.</option>
                        <option value="50">50 pág.</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default DataTable
