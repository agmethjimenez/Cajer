/* eslint-disable prettier/prettier */

import db from '../config/db.mjs';
export default function getCajeros(req, res) {
    db.query('SELECT * FROM cajero', (error, results) => {
        if (error) {
            console.error('Error al obtener productos:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json({ cajeros: results });
        }
    });
}

export function RegistrarCjero(req,res){
    const { name }  = req.body;
    db.query('INSERT INTO cajero (nombre) VALUES (?)',[name],(error,results)=>{
        if (error) {
            console.error('Error al insertar cajero:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json({ mensaje: 'Cajero insertado: ', id: results.insertId });
        }
    });
}

export function RegistrarVenta(req, res){
    const { cliente, valor, fecha } = req.body;
    const factura = Math.floor(10000 + Math.random() * 90000);
    db.query('INSERT INTO ventas(cliente, valor, fecha, factura) VALUES (?,?,?,?)',[cliente, valor, fecha, factura],(error,results)=>{
        if (error){
            console.log(`Error al registrar venta: ${error}`);
            res.status(500).json({error:error});
        } else {
            res.json({mensaje: 'Venta registrada'});
        }
    });
}
