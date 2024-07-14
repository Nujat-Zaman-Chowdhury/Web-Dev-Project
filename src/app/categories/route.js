import { connectDB } from "@/libs/connectDB";

export const POST = async (request)=>{
    const category = await request.json();
    try{
        const db = await connectDB();
        const categoryCollection = db.collection('categories')
        const res = categoryCollection.insertOne({category: category})
        return Response.json({message: "category added"},{status:200})
    }
    catch(error){
        return Response.json({message: "something went wrong",error},{status:500})
    }
}