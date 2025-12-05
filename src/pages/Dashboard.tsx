
import { useState } from 'react'
import Layout from '../components/Layout'
import { Search, X, FileText, ChevronLeft, ChevronRight, ShieldCheck, ShoppingCart, TrendingUp, TrendingDownIcon, EllipsisVertical, ChevronDown, Calendar } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const stats = [
  {
    title: 'Total Licensed Guns',
    value: '53,000',
    icon: ShieldCheck,
    color: '#007B25',
    bgColor: 'bg-[#007B25]',
    textColor: 'text-white',
    trend: 'up',
  },
  {
    title: 'Expired Licenses',
    value: '2,300',
    icon: X,
    color: '#9D0303',
    bgColor: 'bg-[#9D0303]',
    textColor: 'text-white',
    trend: 'up',
  },
  {
    title: 'Pending Renewals',
    value: '2,300',
    icon: FileText,
    color: '#626262',
    bgColor: 'bg-[#626262]',
    textColor: 'text-white',
    trend: 'up',
  },
  {
    title: 'Illegal Guns',
    value: '2,300',
    icon: ShoppingCart,
    color: '#9D7000',
    bgColor: 'bg-[#9D7000]',
    textColor: 'text-white',
    trend: 'down',
  },
]

import WeaponDetailsModal from '../components/WeaponDetailsModal'

const licenses = [
  {
    id: 'RUG1234567',
    owner: 'Leslie Akwasi Frimpong',
    cardId: 'GHA-723456789-0',
    expiry: '24/08/2026',
    status: 'Renewed',
    region: 'Greater Accra',
    licenseType: 'Personal',
    lastRenewed: '24/08/2025',
  },
  {
    id: 'RUG1234568',
    owner: 'Kwame Mensah',
    cardId: 'GHA-123456789-1',
    expiry: '12/05/2025',
    status: 'Expired',
    region: 'Ashanti',
    licenseType: 'Commercial',
    lastRenewed: '12/05/2024',
  },
  {
    id: 'RUG1234569',
    owner: 'Sarah Ofori',
    cardId: 'GHA-987654321-2',
    expiry: '30/11/2025',
    status: 'Pending',
    region: 'Western',
    licenseType: 'Personal',
    lastRenewed: '30/11/2024',
  },
  {
    id: 'RUG1234570',
    owner: 'John Doe',
    cardId: 'GHA-456123789-3',
    expiry: '15/01/2027',
    status: 'Renewed',
    region: 'Greater Accra',
    licenseType: 'Security',
    lastRenewed: '15/01/2026',
  },
  {
    id: 'RUG1234571',
    owner: 'Jane Smith',
    cardId: 'GHA-789456123-4',
    expiry: '01/09/2026',
    status: 'Renewed',
    region: 'Central',
    licenseType: 'Personal',
    lastRenewed: '01/09/2025',
  },
]

export default function Dashboard() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [selectedLicense, setSelectedLicense] = useState<typeof licenses[0] | null>(null)

  return (
    <Layout>
      <WeaponDetailsModal 
        isOpen={!!selectedLicense} 
        onClose={() => setSelectedLicense(null)} 
        license={selectedLicense} 
      />
      {/* Stats Grid */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 py-5">
        {stats.map((stat, index) => (
          <div key={index} className="rounded-xl border-[0.5px] border-[#D9D9D9] bg-white py-4 px-6 transition-all hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-light text-gray-500">{stat.title}</p>
                <div className="mt-4 flex gap-2 items-center">
                  <h3 className={`text-xl font-medium text-gray-900 ${stat.title === 'Total Licensed Guns' ? 'font-semibold' : ''}`}>{stat.value}</h3>
                 {stat.title === 'Illegal Guns' ? <TrendingDownIcon size={32} className='text-[#9D0303]'/> : stat.title !== 'Total Licensed Guns' ? <TrendingUp size={32} className='text-[#007B25] '/> : null}
                </div>
              
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor} ${stat.textColor}`}>
                <stat.icon size={24} className=''/>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Card */}
      <div className="rounded-xl border-[0.5px] border-[#D9D9D9] bg-white shadow-sm px-10">
        {/* Header */}
        <div className=" py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between w-full">
            
            <div className="flex items-center w-full gap-3">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-lg border border-gray-300 py-3.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-[#9D7000] focus:ring-1 focus:ring-[#9D7000] placeholder-gray-500"
                />
              </div>
              <div className="relative w-2/5">
                <button 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex w-full items-center justify-between rounded-lg border border-gray-300 px-4 py-3.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    Filter
                  </span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>

                {isFilterOpen && (
                  <div className="absolute right-0 top-full mt-2 w-[30rem]  rounded-xl border border-gray-100 bg-white p-5 shadow-lg z-50">
                    <div className="space-y-4">
                      {/* Status */}
                      <div className="space-y-1.5 pb-4">
                        <label className="text-sm font-400 text-gray-700">Status</label>
                        <div className="relative">
                          <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-600 outline-none focus:border-[#9D7000] focus:ring-1 focus:ring-[#9D7000]">
                            <option>Select status</option>
                            <option>Renewed</option>
                            <option>Expired</option>
                            <option>Pending</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Date */}
                      <div className="space-y-1.5 pb-4">
                        <label className="text-sm font-400 text-gray-700">Date</label>
                        <div className="relative">
                          <input 
                            type="date" 
                            placeholder="Select date"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-600 outline-none focus:border-[#9D7000] focus:ring-1 focus:ring-[#9D7000]"
                          />
                          <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Region */}
                      <div className="space-y-1.5 pb-4">
                        <label className="text-sm font-400 text-gray-700">Region</label>
                        <div className="relative">
                          <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-600 outline-none focus:border-[#9D7000] focus:ring-1 focus:ring-[#9D7000]">
                            <option>Select region</option>
                            <option>Greater Accra</option>
                            <option>Ashanti</option>
                            <option>Western</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3 pt-2">
                        <button 
                          className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setIsFilterOpen(false)}
                        >
                          Reset all
                        </button>
                        <button 
                          className="flex-1 rounded-lg bg-[#9D7000] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#8A6200] transition-colors"
                          onClick={() => setIsFilterOpen(false)}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50/50 text-gray-500 border-b border-[#D9D9D9]">
              <tr>
                <th className="px-6 py-6 font-light">Serial No.</th>
                <th className="px-6 py-6 font-light">Owner Details</th>
                <th className="px-6 py-6 font-light">Expiry Date</th>
                <th className="px-6 py-6 font-light">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 ">
              {licenses.map((license, index) => (
                <tr 
                  key={index} 
                  className="group cursor-pointer transition-colors hover:bg-gray-50 text-md "
                onClick={() => setSelectedLicense(license)}
                >
                  <td className="px-6 py-6 font-medium text-gray-900">{license.id}</td>
                  <td className="px-6 py-6">
                    <div className="font-medium text-gray-900">{license.owner}</div>
                    <div className="text-xs text-gray-500">{license.cardId}</div>
                  </td>
                  <td className="px-6 py-6 text-gray-600 font-medium">{license.expiry}</td>
                  <td className="px-6 py-6">
                    <span
                      className={`inline-flex items-center rounded-md px-4 py-2 text-xs font-medium ${
                        license.status === 'Renewed'
                          ? 'bg-[#007B25]/10 text-[#007B25]'
                          : license.status === 'Expired'
                          ? 'bg-[#9D0303]/10 text-[#9D0303]'
                          : 'bg-[#626262]/10 text-[#344054]'
                      }`}
                    >
                      {license.status}
                    </span>
                  </td>


                  <td className="px-6 py-6 text-right relative">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#9D7000] outline-none">
                        <EllipsisVertical size={18} color='black' />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48 border-[0.5px] border-[#D9D9D9]">
                        <DropdownMenuItem onClick={() => setSelectedLicense(license)} className="border-b-[0.5px] border-[#D9D9D9]">
                          View 
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-b-[0.5px] border-[#D9D9D9]">
                          Reject
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-b-[0.5px] border-[#D9D9D9]">
                          Send applicant SMS
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            Flag
                          </DropdownMenuSubTrigger> 
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>Lost</DropdownMenuItem>
                            <DropdownMenuItem>Stolen</DropdownMenuItem>
                            <DropdownMenuItem>Under Investigation</DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-[#D9D9D9]  px-6 py-4">
          <p className="text-sm text-gray-500">Showing <span className="font-medium text-gray-900">1-5</span> of <span className="font-medium text-gray-900">100</span></p>
          <div className="flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-[#9D7000] hover:text-[#9D7000] disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-500">
              <ChevronLeft size={16} />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#9D7000] text-sm font-medium text-white shadow-sm">1</button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#9D7000] hover:text-[#9D7000]">2</button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#9D7000] hover:text-[#9D7000]">3</button>
            <span className="text-gray-400">...</span>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#9D7000] hover:text-[#9D7000]">10</button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-[#9D7000] hover:text-[#9D7000]">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
