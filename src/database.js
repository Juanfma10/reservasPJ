import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/reservas2'
        )
        console.log('>> DB connected')
    } catch (e) {
        console.log('Something goes wrong!')
        console.log(e)
    }
}
