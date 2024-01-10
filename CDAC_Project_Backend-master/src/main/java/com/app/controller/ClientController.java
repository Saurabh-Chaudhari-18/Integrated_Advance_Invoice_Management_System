package com.app.controller;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.entity.Client;
import com.app.service.ClientService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")

public class ClientController {

	@Autowired
	private ClientService clientService;

	@GetMapping("clients/{id}")
	public ResponseEntity<Client> getClientById(@PathVariable int id) {
		Client client = clientService.getClientById(id);
		if (client != null) {
			return ResponseEntity.ok(client);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/clients")
	public ResponseEntity<List<Client>> getAllClients() {
		List<Client> clients = clientService.getAllClients();
		return ResponseEntity.ok(clients);
	}

	@PostMapping("/clients")
	public ResponseEntity<Client> createClient(@RequestBody Client client) {
		Client savedClient = clientService.saveClient(client);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedClient);
	}

	@PutMapping("/clients/{id}")
	public ResponseEntity<Client> updateClient(@PathVariable int id, @RequestBody Client client) {
		Client existingClient = clientService.getClientById(id);
		if (existingClient != null) {
			client.setClient_id(id);
			Client updatedClient = clientService.saveClient(client);
			return ResponseEntity.ok(updatedClient);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/clients/{id}")
	public ResponseEntity<Void> deleteClient(@PathVariable int id) {
		clientService.deleteClient(id);
		return ResponseEntity.noContent().build();
	}

	@CrossOrigin("http://localhost:3000")
	@GetMapping("/getAdminClient/{id}")
	public ResponseEntity<?> getClientByAdminId(@PathVariable int id) {
		try {
			return new ResponseEntity<List<Client>>(clientService.getClientByAdminId(id), HttpStatus.OK);
		} catch (EntityNotFoundException e) {
			return new ResponseEntity<>("Not Found", HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>("Error occured", HttpStatus.BAD_REQUEST);
		}

	}
	@GetMapping("/searchClient/{id}/{str}")
	public ResponseEntity<?> searchClientByName(@PathVariable int id,@PathVariable String str) {
		try {
		
			return new ResponseEntity<List<Client>>(clientService.searchClientByName(id,str), HttpStatus.OK);
		} catch (EntityNotFoundException e) {
			return new ResponseEntity<>("Not Found", HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>("Error occured", HttpStatus.BAD_REQUEST);
		}

	}
	
}
