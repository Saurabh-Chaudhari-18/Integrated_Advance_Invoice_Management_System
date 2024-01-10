package com.app.controller;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.entity.Admin;
import com.app.entity.AuthenticateObject;
import com.app.entity.Client;
import com.app.service.AdminService;
import com.app.service.ClientService;

@RestController
@RequestMapping("/api")
public class AdminController {

	@Autowired
	private AdminService adminService;
	@Autowired
	private ClientService clientService;

	@GetMapping("/admins/{id}")
	public ResponseEntity<Admin> getAdminById(@PathVariable int id) {
		Admin admin = adminService.getAdminById(id);
		if (admin != null) {
			return ResponseEntity.ok(admin);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/admins")
	public ResponseEntity<List<Admin>> getAllAdmins() {
		try {
			System.out.println("in admin req=" + "==========>");
			List<Admin> admins = adminService.getAllAdmins();
			return new ResponseEntity<List<Admin>>(admins, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.toString());
			return null;
		}

	}

	@PostMapping("/admins")
	public ResponseEntity<?> createAdmin(@RequestBody Admin admin) {
		try {
			System.out.println("data coing" + admin);
			Admin savedAdmin = adminService.saveAdmin(admin);
			return ResponseEntity.status(HttpStatus.CREATED).body(savedAdmin);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>("Bad req", HttpStatus.BAD_REQUEST);
		}

	}

	@PutMapping("/admins/{id}")
	public ResponseEntity<Admin> updateAdmin(@PathVariable int id, @RequestBody Admin admin) {
		Admin existingAdmin = adminService.getAdminById(id);
		if (existingAdmin != null) {
			admin.setAdmin_id(id);
			Admin updatedAdmin = adminService.saveAdmin(admin);
			return ResponseEntity.ok(updatedAdmin);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/admins/{id}")
	public ResponseEntity<Void> deleteAdmin(@PathVariable int id) {
		adminService.deleteAdmin(id);
		return ResponseEntity.noContent().build();
	}

	@PostMapping("/Authenticate")
	public ResponseEntity<?> authenticateUser(@RequestBody AuthenticateObject body) {
		try {
			EntityNotFoundException e = new EntityNotFoundException();
			Admin u = adminService.authenticateUser(body.getUsername(), body.getPassword());
			if (u != null) {
				return new ResponseEntity<Admin>(u, HttpStatus.OK);
			}
			throw e;
		} catch (EntityNotFoundException e) {

			try {
				Client c1 = clientService.authenticateClient(body.getUsername());
//				System.out.println(c1);
				if (c1 != null) {
					return new ResponseEntity<Client>(c1, HttpStatus.OK);
				}
				throw e;
			} catch (EntityNotFoundException e1) {
		
				return new ResponseEntity<>("Wrong username or password", HttpStatus.NOT_FOUND);
			}

		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>("Something wrong", HttpStatus.NOT_FOUND);
		}
	}
}
