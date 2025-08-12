import { apiKey } from "../constants/apiKey";
import axios from "axios"


const API_BASE_URL="https://api.themoviedb.org/3";

const trendingApi=`${API_BASE_URL}/trending/movie/day?api_key=${apiKey}`
const upcomingApi=`${API_BASE_URL}/movie/upcoming?api_key=${apiKey}`
const topRatedApi=`${API_BASE_URL}/movie/top_rated?api_key=${apiKey}`

const movieDetailsApi=(id)=>`${API_BASE_URL}/movie/${id}?api_key=${apiKey}`
const personDetailsApi=(id)=>`${API_BASE_URL}/movie/${id}/credits?api_key=${apiKey}`
const similarMoviesApi=(id)=>`${API_BASE_URL}/movie/${id}/similar?api_key=${apiKey}`
const castDataApi=(id)=>`${API_BASE_URL}/person/${id}?api_key=${apiKey}`
const searchApi=(query)=>`${API_BASE_URL}/search/movie?query=${query}&api_key=${apiKey}`

export const search=async (query)=>{
  return apiCall(searchApi(query))
}

export const castData=async (id)=>{
  return apiCall(castDataApi(id))
}

export const movieDetails=async (id)=>{
  return apiCall(movieDetailsApi(id))
}
export const personDetails=async (id)=>{
  return apiCall(personDetailsApi(id))
}

export const similarMovies=async (id)=>{
  return apiCall(similarMoviesApi(id))
}

const apiCall=async (endpoint, params)=>{
  const options ={
    method:"GET",
    url:endpoint,
    params:params ? params : {}
  }

  try{
    const res=await axios.request(options);
    return res.data;
  }
  catch(error){
    console.log("error")
  }
}

const fallBackImage="https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc="

export const image=(path)=>path ? `https://image.tmdb.org/t/p/original/${path}` : fallBackImage


export const trending=()=>{
  return apiCall(trendingApi)

}
export const upcoming=()=>{
  return apiCall(upcomingApi)
}
export const topRated=()=>{
  return apiCall(topRatedApi)
}
