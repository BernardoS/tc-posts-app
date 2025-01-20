import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text } from "react-native";

interface iPost {
    _id: string;
    title: string;
    description: string;
    content: string;
    author: string;
    modifyDate: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export default function Post() {

    const { id } = useLocalSearchParams();
    const [postData,setPostData] = useState<iPost>();
    
    /*useEffect(()=>{
        axios.get(`http://localhost:3000/posts/${id}`).then(response => {
            setPostData(response.data);
          }).catch(error => {
            console.error('Error fetching post:', error);
          });
    },[id])*/

    return (
        <Text>{id}</Text> 
    );
}