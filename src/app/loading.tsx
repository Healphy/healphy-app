export default function LoadingCard() {
  return (
    <div
      role="status"
      className="w-full p-4 space-y-4 rounded-xl animate-pulse md:p-8 bg-white"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-12"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-12"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-12"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-12"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-12"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
