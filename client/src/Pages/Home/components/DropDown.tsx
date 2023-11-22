import { useState } from 'react'

const CustomDropdown = ({ options }: { options: string[] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionClick = (option: any) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <div className="rounded-md shadow-sm w-[120px]   flex items-center justify-between">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-brand-white border border-transparent rounded-[20px] active:bg-gray-100 focus:outline-none focus:border-gray-200 focus:shadow-outline-indigo hover:bg-gray-400"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {selectedOption || 'Select '}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3z"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
          <div className="rounded-md bg-brand-white shadow-xs">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={` w-[100%] block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out ${
                    selectedOption === option ? 'bg-gray-200' : ''
                  }`}
                  role="menuitem"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomDropdown
