import { useState } from 'react'
import Layout from '../components/Layout'
import { Search, ChevronLeft, ChevronRight, EllipsisVertical, XCircle } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const licenses = [
  {
    id: 'RUG1234567',
    type: '[license type]',
    expiry: '24/08/2026',
    status: 'Renewed',
  },
  {
    id: 'RUG1234567',
    type: '[license type]',
    expiry: '24/08/2026',
    status: 'Renewed',
  },
  {
    id: 'RUG1234567',
    type: '[license type]',
    expiry: '24/08/2026',
    status: 'Expired',
  },
  {
    id: 'RUG1234567',
    type: '[license type]',
    expiry: '24/08/2026',
    status: 'Renewed',
  },
  {
    id: 'RUG1234567',
    type: '[license type]',
    expiry: '24/08/2026',
    status: 'Pending',
  },
  {
    id: 'RUG1234567',
    type: '[license type]',
    expiry: '24/08/2026',
    status: 'Expired',
  },
  {
    id: 'RUG1234567',
    type: '[license type]',
    expiry: '24/08/2026',
    status: 'Renewed',
  },
]

export default function LicenseManagement() {
  const [selectedLicense, setSelectedLicense] = useState<string | null>(null)

  return (
    <Layout>
      <div className="rounded-xl bg-white shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-100 px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="relative w-full sm:w-auto">
              <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Filter
                <ChevronRight className="rotate-90" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50/50 text-gray-500 border-b border-[#D9D9D9]">
              <tr>
                <th className="px-6 py-6 font-light">Serial No.</th>
                <th className="px-6 py-6 font-light">License Type</th>
                <th className="px-6 py-6 font-light">Expiry Date</th>
                <th className="px-6 py-6 font-light">Status</th>
                <th className="px-6 py-6 font-light"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {licenses.map((license, index) => (
                <tr 
                  key={index} 
                  className="group cursor-pointer transition-colors hover:bg-gray-50 text-md"
                  onClick={() => setSelectedLicense(license.id)}
                >
                  <td className="px-6 py-6 font-medium text-gray-900">
                    {license.id} 
                    {index % 3 === 0 && <span className="ml-2 rounded-md bg-[#F7F7ED] px-4 py-2 text-xs font-bold text-[#AFA000]">NEW</span>}
                  </td>
                  <td className="px-6 py-6 text-gray-900">{license.type}</td>
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
                  <td className="px-6 py-6 text-right relative" onClick={(e) => e.stopPropagation()}>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#9D7000] outline-none">
                        <EllipsisVertical size={18} color='black' />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48 border-[0.5px] border-[#D9D9D9]">
                        <DropdownMenuItem onClick={() => setSelectedLicense(license.id)} className="border-b-[0.5px] border-[#D9D9D9]">
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

      {/* Weapon Details Modal */}
      {selectedLicense && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Weapon Details</h2>
              <button 
                onClick={() => setSelectedLicense(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs text-gray-500">Serial Number</label>
                <div className="font-medium text-gray-900">RUG1234567</div>
              </div>
              <div>
                <label className="text-xs text-gray-500">Owner Name</label>
                <div className="font-medium text-gray-900">Leslie Akwasi Frimpong</div>
              </div>
              <div>
                <label className="text-xs text-gray-500">Expiry Date</label>
                <div className="font-medium text-gray-900">24/08/2026</div>
              </div>
              <div>
                <label className="text-xs text-gray-500">Status</label>
                <div>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    Renewed
                  </span>
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500">License Type</label>
                <div className="font-medium text-gray-900">[License_Type]</div>
              </div>
              <div>
                <label className="text-xs text-gray-500">Last Renewed</label>
                <div className="font-medium text-gray-900">24/08/2025</div>
              </div>
              <div>
                <label className="text-xs text-gray-500">Ghana Card ID</label>
                <div className="font-medium text-gray-900">[Ghana Card ID]</div>
              </div>
              <div>
                <label className="text-xs text-gray-500">Region</label>
                <div className="font-medium text-gray-900">Greater Accra</div>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button 
                className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                onClick={() => setSelectedLicense(null)}
              >
                Reject
              </button>
              <button 
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                onClick={() => setSelectedLicense(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
