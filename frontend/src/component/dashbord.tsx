import axios from "axios"
import { useEffect, useState } from "react"

export const DashBord = ()=>{

const [data,setData] = useState("");
	const fun = async()=>{
		const res = await axios.get("http://localhost:8000");
		console.log(res.data.message)
		setData(res.data.message)
	}

	useEffect(()=>{
		fun();
	},[])
	return (<div>
	hello world {data}
</div>)
}
