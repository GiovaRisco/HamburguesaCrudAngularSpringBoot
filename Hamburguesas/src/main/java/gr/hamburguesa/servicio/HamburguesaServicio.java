/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package gr.hamburguesa.servicio;

import gr.hamburguesa.modelo.Hamburguesa;
import gr.hamburguesa.repositorio.HamburguesaRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HamburguesaServicio implements IHamburguesaServicio{
    
    @Autowired
    private HamburguesaRepositorio hamburguesaRepositorio;

    @Override
    public List<Hamburguesa> listarHamburguesas() {
        return hamburguesaRepositorio.findAll();
    }

    @Override
    public Hamburguesa buscarHamburguesaPorId(int idHamburguesa) {
        Hamburguesa hamburguesa = hamburguesaRepositorio.findById(idHamburguesa).orElse(null);
        return hamburguesa;
    }

    @Override
    public Hamburguesa agregarHamburguesa(Hamburguesa hamburguesa) {
       return  hamburguesaRepositorio.save(hamburguesa);
    }

    @Override
    public void eliminarHamburguesa(Hamburguesa hamburguesa) {
       hamburguesaRepositorio.delete(hamburguesa);
    }
    
}
