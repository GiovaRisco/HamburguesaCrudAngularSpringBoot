/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package gr.hamburguesa.servicio;

import gr.hamburguesa.modelo.Hamburguesa;
import java.util.List;

/**
 *
 * @author xtirp
 */
public interface IHamburguesaServicio {
    
    public  List<Hamburguesa> listarHamburguesas();
    
    public Hamburguesa buscarHamburguesaPorId(int idHamburguesa);
    
    public Hamburguesa agregarHamburguesa(Hamburguesa hamburguesa);
    
    public void eliminarHamburguesa(Hamburguesa hamburguesa);
    
    
    
}
