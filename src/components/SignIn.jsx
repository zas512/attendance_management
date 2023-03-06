import {useState} from 'react'

function SignIn() {
    const [keyField, setkeyField] = useState('hidden')
    const [passField, setpassField] = useState('inline')
    
    return (
        <form className="w-full" action="*">
            <div className='flex justify-around mb-5'>
                <div>
                <label htmlFor="student" className="text-md text-slate-900 cursor-pointer">Student </label>
                <input required type="radio" name='role' id="student" className='ml-2 cursor-pointer' defaultChecked onClick={()=>{
                    setkeyField('hidden')
                    setpassField('inline')
                }}/>
                </div>
                <div>
                <label htmlFor="admin" className="text-md text-slate-900 cursor-pointer">Admin </label>
                <input required type="radio" name='role' id="admin" className='ml-2 cursor-pointer' onClick={()=>{
                    setkeyField('inline')
                    setpassField('hidden')
                }} />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="text-md text-slate-900">Email :</label>
                <input required type="email" id="email" autoComplete='off' className="block w-full p-2 my-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
                <label htmlFor="password" className={`${passField} text-md text-slate-900`}>Password :</label>
                <input required type="password" id="password" autoComplete='off' className={`${passField} block w-full p-2 my-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500`} />
            </div>
            <div>
                <label htmlFor="key" className={`${keyField} text-md text-slate-900`}>Key :</label>
                <input required type="password" id="key" autoComplete='off' className={`${keyField} block w-full p-2 my-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500`} />
            </div>
            <div className="flex justify-center">
                <button type="button" className="mt-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 shadow-lg rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 font-bold">Login</button>
            </div>
        </form>
    )
}

export default SignIn