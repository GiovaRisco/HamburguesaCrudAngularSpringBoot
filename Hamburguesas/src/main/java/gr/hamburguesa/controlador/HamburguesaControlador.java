/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package gr.hamburguesa.controlador;

import gr.hamburguesa.excepcion.RecursoNoEncontrado;
import gr.hamburguesa.modelo.Hamburguesa;
import gr.hamburguesa.servicio.HamburguesaServicio;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/burguer-app")
@CrossOrigin(value = "http://localhost:4200")
public class HamburguesaControlador {
    
    private static final Logger logger = LoggerFactory.getLogger(HamburguesaControlador.class);
    
    
    @Autowired
    private HamburguesaServicio hamburguesaServicio;
    
    @GetMapping("/hamburguesas")
    public List<Hamburguesa> listarHamburguesas(){
        List<Hamburguesa> hamburguesas = hamburguesaServicio.listarHamburguesas();
        logger.info("Objetos obtenidos");
        hamburguesas.forEach((dato) -> logger.info(dato.toString()));
        return hamburguesas;
    }
    
    @PostMapping("/hamburguesas")
    public Hamburguesa agregarHamburguesa(@RequestBody Hamburguesa hamburguesa){
        logger.info("Objeto a guardar : " + hamburguesa);
        return hamburguesaServicio.agregarHamburguesa(hamburguesa);
    }
    
    @GetMapping("/hamburguesas/{id}")
    public ResponseEntity<Hamburguesa> obtenerHamburguesaPorId(@PathVariable int id){
        Hamburguesa hamburguesa = hamburguesaServicio.buscarHamburguesaPorId(id);
        if(hamburguesa == null){
            throw new RecursoNoEncontrado("No se encontro el objeto con el Id: " + id);
        }
        return ResponseEntity.ok(hamburguesa);
    }
    
    @PutMapping("/hamburguesas/{id}")
    public ResponseEntity<Hamburguesa> editarHamburguesa(@PathVariable int id,
            @RequestBody Hamburguesa hamburguesaRecibida){
         Hamburguesa hamburguesa = hamburguesaServicio.buscarHamburguesaPorId(id);
        if(hamburguesa == null){
            throw new RecursoNoEncontrado("No se encontro el objeto con el Id: " + id);
        }
        
        hamburguesa.setDescripcion(hamburguesaRecibida.getDescripcion());
        hamburguesa.setPrecio(hamburguesaRecibida.getPrecio());
        hamburguesa.setStock(hamburguesaRecibida.getStock());
        
        hamburguesaServicio.agregarHamburguesa(hamburguesa);
        return ResponseEntity.ok(hamburguesa);
    }
    
    
    @DeleteMapping("/hamburguesas/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarHambuguesa(@PathVariable int id){
        Hamburguesa hamburguesa = hamburguesaServicio.buscarHamburguesaPorId(id);
         if(hamburguesa == null){
            throw new RecursoNoEncontrado("No se encontro el objeto con el Id: " + id);
        }
        
         hamburguesaServicio.eliminarHamburguesa(hamburguesa);
         
         Map<String, Boolean>  respuesta = new HashMap<>();
         respuesta.put("eliminado", true);
         
         return ResponseEntity.ok(respuesta);
         
         
    }
    
    
    
    
    
}
