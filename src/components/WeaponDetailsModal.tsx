import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface WeaponDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  license: {
    id: string
    owner: string
    cardId: string
    expiry: string
    status: string
    region?: string
    licenseType?: string
    lastRenewed?: string
  } | null
}

export default function WeaponDetailsModal({ isOpen, onClose, license }: WeaponDetailsModalProps) {
  if (!license) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-8">
        <DialogHeader className="mb-8 border-b-[0.5px] border-[#D9D9D9] pb-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-semibold text-black">Weapon Details</DialogTitle>
            {/* Close button is automatically added by DialogContent, but we can keep custom if needed or rely on default */}
          </div>
        </DialogHeader>

        {/* Body */}
        <div className="grid grid-cols-1 gap-y-8 gap-x-4 md:grid-cols-3">
          {/* Row 1 */}
          <div>
            <p className="text-sm text-gray-500 font-light">Serial Number</p>
            <p className="mt-1 font-medium text-gray-900">{license.id}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-light">Owner Name</p>
            <p className="mt-1 font-medium text-gray-900">{license.owner}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-light">Ghana Card ID</p>
            <p className="mt-1 font-medium text-gray-900">{license.cardId}</p>
          </div>

          {/* Row 2 */}
          <div>
            <p className="text-sm text-gray-500 font-light">Expiry Date</p>
            <p className="mt-1 font-medium text-gray-900">{license.expiry}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-light">Status</p>
            <span
              className={`mt-1 inline-flex items-center rounded-md px-3 py-1 text-sm font-medium ${
                license.status === 'Renewed'
                  ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20'
                  : license.status === 'Expired'
                  ? 'bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/10'
                  : 'bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10'
              }`}
            >
              {license.status}
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-light">Region</p>
            <p className="mt-1 font-medium text-gray-900">{license.region || 'Greater Accra'}</p>
          </div>

          {/* Row 3 */}
          <div>
            <p className="text-sm text-gray-500  font-light">License Type</p>
            <p className="mt-1 font-medium text-gray-900">{license.licenseType || 'Personal'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-light">Last Renewed</p>
            <p className="mt-1 font-medium text-gray-900">{license.lastRenewed || '24/08/2025'}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-lg border border-red-800 px-10 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 text-red-800"
          >
            X Reject
          </button>
          <button className="rounded-lg bg-[#9D7000] px-10 py-3 text-sm font-semibold text-white hover:bg-[#9D7000]/80">
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
