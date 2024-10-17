import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers.js";

const typeDefs= `

type Query{ 
obtenerReservas: [Reserva],
obtenerReservasbyID(_id:ID): Reserva
obtenerReservasbyCV_F(codigoVuelo:String,fecha:String): [Reserva]
} 

type Mutation{
guardarReserva(input: guardarReserva): Reserva
modificarReserva( _id: ID, input: ImodificarReserva): Reserva
}

type Reserva{
_id: ID,
codigoVuelo: String,
fecha: String,
cedula: Int,
estadoReserva: String,
clase: String,
}


input guardarReserva {
_id: ID,
codigoVuelo: String,
fecha: String,
cedula: Int,
estadoReserva: String,
clase: String,
}

input ImodificarReserva {
fecha: String,
estadoReserva: String,
clase: String,
}




`;

export default makeExecutableSchema({
typeDefs: typeDefs,
resolvers: resolvers
})