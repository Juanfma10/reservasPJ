
import Reservas from "./models/Reservas.js"

export const resolvers={
Query: {
    async obtenerReservas(){
        return await Reservas.find();
    },
    async obtenerReservasbyID(_,_id){
        return await Reservas.findById(_id);
    },
    async obtenerReservasbyCV_F(_,{codigoVuelo,fecha}){
        return await Reservas.find({codigoVuelo,fecha});
    },


    
},
Mutation:{
async guardarReserva(_,{input}){
    const newReserva = new Reservas(input);
    await newReserva.save();
    return newReserva;
},
async modificarReserva(_,{_id,input}){
    return await Reservas.findByIdAndUpdate(_id,input,{new:true})
}
},
};