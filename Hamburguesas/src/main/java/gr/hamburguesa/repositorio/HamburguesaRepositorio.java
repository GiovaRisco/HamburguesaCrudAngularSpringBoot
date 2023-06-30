/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package gr.hamburguesa.repositorio;

import gr.hamburguesa.modelo.Hamburguesa;
import org.springframework.data.jpa.repository.JpaRepository;


public interface HamburguesaRepositorio extends JpaRepository<Hamburguesa, Integer>{
    
}
