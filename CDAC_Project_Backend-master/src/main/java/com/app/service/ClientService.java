package com.app.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ClientRepository;
import com.app.entity.Client;

@Service
public class ClientService {

	@Autowired
	private ClientRepository clientRepository;

	public Client getClientById(int id) {
		return clientRepository.findById(id).orElse(null);
	}

	public List<Client> getAllClients() {
		return clientRepository.findAll();
	}

	public Client saveClient(Client client) {
		return clientRepository.save(client);
	}

	public void deleteClient(int id) {
		clientRepository.deleteById(id);
	}

	public List<Client> getClientByAdminId(int id) throws EntityNotFoundException{
		return clientRepository.getClientByAdminId(id);
	}
	public List<Client> searchClientByName(int id,String str) throws EntityNotFoundException{
		return clientRepository.searchClientByName(id,str);
	}
	public Client authenticateClient(String username) throws EntityNotFoundException{
		String pass="6566#AB#6768#CD";
		return clientRepository.authenticateClient(username,pass);
	}
}
