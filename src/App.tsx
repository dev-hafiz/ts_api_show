/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

interface Person {
  id: string;
  age: number;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  friends: Friend[];
}

interface Friend {
  id: number;
  name: string;
}




function App() {
  const [data, setData] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/dev-hafiz/api_handle/main/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  
  


  return (
    <div>
      <h2 className="text-center my-5 border-b-2 border-[#e5e5e5] text-4xl pb-3">User Data Show on UI</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    
    {
     data.map((user)=>
       <div className="m-10 max-w-sm">
     <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
       
       <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">{user?.name}</h1>
       <h3 className="font-lg text-semibold text-center leading-6 text-gray-600"><span className="font-bold  text-[#5efa04]">Company</span> : {user?.company}</h3>
       <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">Email : {user?.email}</p>
       <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
         <li className="flex items-center py-3 text-sm">
           <span>Gender</span>
           <span className="ml-auto"><span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">{user?.gender}</span></span>
         </li>
         <li className="flex items-center py-3 text-sm">
           <span>Age</span>
           <span className="ml-auto"><span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">{user?.age}</span></span>
         </li>
         <li className="flex items-center py-3 text-sm">
           <span>Phone</span>
           <span className="ml-auto"><span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">{user?.phone}</span></span>
         </li>
         
       </ul>
       <ul>
         <p className="font-bold text-blue-500 my-2">Friend Name :</p>
       {
           user?.friends.map((friend)=><li className=" my-3" key={friend.id }>
             <span  className="rounded-full m-2 bg-green-200 py-1 px-2 text-xs font-medium text-green-700">{friend?.name}</span>
           </li>)
         }
       </ul>
     </div>
   </div>
     )
    }
    
   </div>
    </div>
  
  )
}

export default App
