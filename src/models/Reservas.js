import {Schema,model} from "mongoose";

const reservaSchema= new Schema({
    codigoVuelo:String,
    fecha: String,
    cedula: Number,
    estadoReserva: String,
    clase: String,
});

export default model('Reserva',reservaSchema);