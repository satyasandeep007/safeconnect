import { IconCopy, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-green-200 rounded-lg shadow-md p-4">
      {/* Header */}
      <div className="flex justify-between items-center bg-green-50 p-4 rounded-t-lg">
        <div className="flex items-center">
          <div className="text-sm text-green-500 font-bold">AUG 16, 2024</div>
        </div>
        <div className="text-green-600 text-sm">Success</div>
      </div>

      {/* Content */}
      <div className="bg-gray-100 p-4 rounded-b-lg">
        {/* Top Info */}
        <div className="mb-4">
          <div className="text-lg font-semibold">Safe Account created</div>
          <div className="text-sm text-gray-500">Created by 0x5B4d...bE89</div>
        </div>

        {/* Creator Section */}
        <div className="mb-4">
          <div className="flex items-center space-x-4">
            <Image
              className="h-8 w-8 rounded-full"
              width={10}
              height={10}
              src="/path/to/creator-image.jpg"
              alt="Creator"
            />
            <div>
              <div className="text-sm font-semibold">Creator:</div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">sep:0x5B4d77...FEbE89</span>
                <button>
                  <IconCopy className="h-4 w-4 text-gray-500" />
                </button>
                <button>
                  <IconExternalLink className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Factory Section */}
        <div className="mb-4">
          <div className="flex items-center space-x-4">
            <Image
              className="h-8 w-8 rounded-full"
              width={10}
              height={10}
              src="/path/to/factory-image.jpg"
              alt="Factory"
            />
            <div>
              <div className="text-sm font-semibold">Factory:</div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">SafeProxyFactory 1.3.0</span>
                <span className="text-sm">sep:0xC22834...910BC</span>
                <button>
                  <IconCopy className="h-4 w-4 text-gray-500" />
                </button>
                <button>
                  <IconExternalLink className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mastercopy Section */}
        <div className="mb-4">
          <div className="flex items-center space-x-4">
            <Image
              className="h-8 w-8 rounded-full"
              width={10}
              height={10}
              src="/path/to/mastercopy-image.jpg"
              alt="Mastercopy"
            />
            <div>
              <div className="text-sm font-semibold">Mastercopy:</div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">SafeL2 1.3.0</span>
                <span className="text-sm">sep:0xfb1bff...191EA</span>
                <button>
                  <IconCopy className="h-4 w-4 text-gray-500" />
                </button>
                <button>
                  <IconExternalLink className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Hash */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Transaction hash:</div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">0x94da...4829</span>
              <button>
                <IconCopy className="h-4 w-4 text-gray-500" />
              </button>
              <button>
                <IconExternalLink className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">Created:</div>
            <div className="text-sm">16/08/2024, 15:57:36</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
