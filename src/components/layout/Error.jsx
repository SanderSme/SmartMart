const Error = ({message}) => {
  return (
    <div className="bg-red-100 rounded border-2 border-red-800 text-red-900 px-4 py-3 shadow-md my-4" role="alert">
            <div className="flex">
                <div className="py-1">
                </div>
                <div>
                    <p className="font-bold">Error</p>
                    <p className="text-sm">{message}</p>
                </div>
            </div>
        </div>
  )
}

export default Error