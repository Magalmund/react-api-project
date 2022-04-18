import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
	const [data,setData] = useState()
	const apiKey = "20f7528e1d39474f80d26f9c83b3af09";

	useEffect(() => {
		axios.get(`
		https://newsapi.org/v2/everything?q=tesla&from=2022-03-18&sortBy=publishedAt&apiKey=${apiKey}`)
		.then(response => setData(response.data))
		.catch(error => console.log(error));
	},[])

	return(
		<NewsContext.Provider value={{ data }}>
			{props.children}
		</NewsContext.Provider>
	)
}