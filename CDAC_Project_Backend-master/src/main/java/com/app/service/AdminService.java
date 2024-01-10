package com.app.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AdminRepository;
import com.app.entity.Admin;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Admin getAdminById(int id) {
        return adminRepository.findById(id).orElse(null);
    }

    public List<Admin> getAllAdmins() {
    	try {
    		 return adminRepository.findAll();
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("in admin service=====>"+e.toString());
			return null;
		}
       
    }

    public Admin saveAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    public void deleteAdmin(int id) {
        adminRepository.deleteById(id);
    }
    public Admin authenticateUser(String userName,String password) throws EntityNotFoundException {
    	try {
    		System.out.println(userName+"==="+password);
    		Admin u=adminRepository.authenticateUser(userName,password);
    		if(u!=null) {
    			return u;
    		}
    		else {
    		return null;
    		}
		} catch (Exception e) {
			// TODO: handle exception
			
			System.out.println(e.toString());
			return null;
		}
    	
	}
}

